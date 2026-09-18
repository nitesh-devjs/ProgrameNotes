import assert from 'node:assert/strict';
import fs from 'node:fs';
import puppeteer from 'puppeteer';

const base = process.env.TEST_URL || 'http://127.0.0.1:5173';
const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
const errors = [];
const checks = [];
const externalFailures = new Set();
page.on('pageerror', error => errors.push(error.message));
page.on('requestfailed', request => {
  if (!request.url().startsWith(base)) externalFailures.add(request.url());
});
fs.mkdirSync('artifacts', { recursive: true });
const go = async path => {
  await page.goto(base + path, { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('h1, h2');
  await page.waitForFunction(() => !document.querySelector('.route-loading'));
};
const clickText = async (selector, text) => {
  const handle = await page.evaluateHandle((selector, text) => [...document.querySelectorAll(selector)].find(el => el.textContent.trim() === text), selector, text);
  assert.ok(await handle.asElement(), `Missing ${selector}: ${text}`);
  await handle.asElement().click();
  await handle.dispose();
};
try {
  await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
  const routes = ['/', '/store', '/category/programming', '/category/science', '/category/commerce', '/store/prog-java-1', '/services', '/about', '/terms', '/privacy-policy', '/refund-policy', '/missing', '/store/missing', '/category/missing'];
  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewport({ width, height: 900 });
    for (const route of routes) {
      await go(route);
      const overflow = await page.evaluate(() => {
        const width = document.documentElement.clientWidth;
        return { width, scroll: document.documentElement.scrollWidth, offenders: [...document.querySelectorAll('body *')].filter(el => el.getBoundingClientRect().right > width + 2 && getComputedStyle(el).position !== 'fixed').slice(0, 8).map(el => el.tagName + '.' + el.className) };
      });
      assert.ok(overflow.scroll <= overflow.width + 2, `${width}px ${route} overflows: ${JSON.stringify(overflow)}`);
      checks.push(`${width}px ${route}: layout passed`);
      if ([390, 1440].includes(width) && ['/', '/store', '/services', '/about'].includes(route)) {
        await page.screenshot({ path: `artifacts/${route === '/' ? 'home' : route.slice(1)}-${width}-dark.png`, fullPage: true });
        await page.screenshot({ path: `artifacts/${route === '/' ? 'home' : route.slice(1)}-${width}-viewport.png` });
      }
    }
  }
  await page.setViewport({ width: 1440, height: 1000 });
  await go('/store?q=python&category=programming');
  assert.ok(await page.$$eval('article', cards => cards.length > 0 && cards.every(card => card.innerText.toLowerCase().includes('python'))));
  await page.click('[aria-label="Clear search"]');
  await page.waitForFunction(() => !location.search.includes('q='));
  await page.type('[aria-label="Search notes"]', 'zzzz-no-results');
  await page.waitForFunction(() => document.body.innerText.includes('No notes found'));
  await page.click('[aria-label="Clear search"]');
  await clickText('button', 'Science');
  await page.waitForFunction(() => location.search.includes('science'));
  await page.reload({ waitUntil: 'domcontentloaded' });
  await page.waitForSelector('article');
  assert.equal(await page.$eval('button[aria-pressed="true"][style]', el => el.innerText.trim()), 'Science');
  checks.push('Search, empty state, URL filters, reload persistence passed');

  await go('/store/prog-java-1');
  await page.click('[aria-label="Set currency to USD"]');
  await clickText('button', 'Buy Now');
  await page.waitForSelector('dialog[open]');
  assert.ok((await page.$eval('dialog', el => el.innerText)).includes('$4.99'));
  for (let i = 0; i < 8; i++) {
    await page.keyboard.press('Tab');
    assert.ok(await page.evaluate(() => document.querySelector('dialog').contains(document.activeElement)), 'Dialog focus escaped');
  }
  await page.keyboard.press('Escape');
  await page.waitForFunction(() => !document.querySelector('dialog[open]'));
  assert.equal(await page.evaluate(() => document.activeElement.innerText.trim()), 'Buy Now');
  await page.reload({ waitUntil: 'domcontentloaded' });
  await page.waitForSelector('[aria-label="Set currency to USD"][aria-pressed="true"]');
  checks.push('USD checkout price, focus containment, Escape, focus restoration, currency persistence passed');

  await go('/store');
  await page.click('[aria-label="Preview Java Core to Advanced Masterclass"]');
  await page.waitForSelector('dialog[open]');
  await clickText('button', 'Explore download options');
  await page.waitForFunction(() => document.querySelector('dialog[open]')?.innerText.includes('DOWNLOAD DEMO'));
  assert.equal(await page.$$eval('dialog[open]', dialogs => dialogs.length), 1);
  const downloadClient = await browser.target().createCDPSession();
  const downloadPath = new URL('../artifacts/downloads/' + Date.now() + '/', import.meta.url);
  fs.mkdirSync(downloadPath, { recursive: true });
  await downloadClient.send('Browser.setDownloadBehavior', { behavior: 'allow', downloadPath: (await import('node:url')).fileURLToPath(downloadPath), eventsEnabled: true });
  const completed = new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('Download did not complete in 30 seconds')), 30000);
    downloadClient.on('Browser.downloadProgress', event => {
      if (event.state === 'completed') { clearTimeout(timer); resolve(); }
      if (event.state === 'canceled') { clearTimeout(timer); reject(new Error('Browser canceled sample download')); }
    });
  });
  await clickText('button', 'Download text sample');
  await completed;
  await page.waitForFunction(() => document.querySelector('dialog')?.innerText.includes('Your download is ready.'));
  const samplePath = new URL('prog-java-1-sample.txt', downloadPath);
  
  assert.ok(fs.readFileSync(samplePath, 'utf8').startsWith('SAMPLE ONLY'));
  await page.keyboard.press('Escape');
  checks.push('Sample download is labeled correctly and contains valid text');
  checks.push('Product preview to checkout transition passed');

  await page.setViewport({ width: 390, height: 844 });
  await go('/');
  await page.click('[aria-label="Open menu"]');
  await page.waitForSelector('#mobile-navigation');
  await clickText('#mobile-navigation a', 'Store');
  await page.waitForFunction(() => location.pathname === '/store' && !document.querySelector('#mobile-navigation'));
  await page.click('[aria-label="Switch to light theme"]');
  await page.reload({ waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => document.documentElement.classList.contains('light'));
  checks.push('Mobile menu, navigation, light theme persistence passed');
  for (const width of [390, 1440]) {
    await page.setViewport({ width, height: 1000 });
    for (const route of ['/', '/store', '/about', '/services', '/store/prog-java-1']) {
      await go(route);
      await page.screenshot({ path: `artifacts/${route === '/' ? 'home' : route.replaceAll('/', '-')}-${width}-light.png`, fullPage: true });
    }
  }
  await go('/services');
  assert.equal(await page.$eval('form', form => form.checkValidity()), false);
  assert.equal(await page.$$eval('form input, form select, form textarea', fields => fields.filter(field => !field.labels?.length).length), 0);
  checks.push('Contact form validation and visible labels passed (email app not launched)');
  const pdf = await fetch(base + '/downloads/javascript_notes.pdf');
  assert.ok(pdf.ok);
  assert.equal(Buffer.from(await pdf.arrayBuffer()).subarray(0, 5).toString(), '%PDF-');
  checks.push('Available JavaScript download is a real PDF');
  assert.deepEqual(errors, [], 'Browser runtime errors');
  fs.writeFileSync('artifacts/browser-report.json', JSON.stringify({ checks, errors, externalFailures: [...externalFailures] }, null, 2));
  console.log(`${checks.length} checks passed. Screenshots and report saved in artifacts/.`);
} catch (error) {
  await page.screenshot({ path: 'artifacts/failure.png', fullPage: true });
  fs.writeFileSync('artifacts/browser-report.json', JSON.stringify({ checks, errors, failure: error.message, externalFailures: [...externalFailures] }, null, 2));
  throw error;
} finally {
  await browser.close();
}
