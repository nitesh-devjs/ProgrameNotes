const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const chromeExecutable = 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe';
const outputDir = path.join(process.cwd(), 'public', 'images', 'previews');

const templateBg = fs.readFileSync(path.join(outputDir, 'blank_template.jpg')).toString('base64');
const bgDataUrl = `data:image/jpeg;base64,${templateBg}`;

const testItem = {
  filename: 'preview_python.jpg',
  tabTitle: 'main.py — Terminal Output',
  cmd: '$ python3 main.py',
  outputMsg: 'Welcome to Programnotes',
  title: 'PYTHON PROGRAMMING',
  theory1: '• Simple, beginner-friendly syntax.',
  theory2: '• Widely used in Web, AI & Data Science.',
  codeHeader: '// 1. Print Welcome Message:',
  codeLines: [
    '<span class="cm"># Print welcome output to screen</span>',
    '<span class="kw">print</span>(<span class="str">"Welcome to Programnotes"</span>)'
  ],
  takeawaysTitle: '★ Key Exam Highlights:',
  examPoints: [
    '1. Clean syntax without semicolons.',
    '2. Dynamic typing & automatic memory.',
    '3. Rich built-in standard library.'
  ]
};

function buildHTML(item) {
  const codeBlockHtml = item.codeLines.map(line => `<div>${line || '&nbsp;'}</div>`).join('');
  const examPointsHtml = item.examPoints.map(pt => `<div class="note-theory">${pt}</div>`).join('');

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&family=Fira+Code:wght@500;700&family=Inter:wght@600;700&display=swap');

    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    body {
      width: 768px;
      height: 1376px;
      position: relative;
      background: url('${bgDataUrl}') no-repeat center top;
      background-size: 768px 1376px;
      font-family: 'Kalam', cursive, sans-serif;
      overflow: hidden;
    }

    /* SLEEK MINIMAL TABLET TERMINAL SCREEN */
    .tablet-screen {
      position: absolute;
      top: 164px;
      left: 224px;
      width: 320px;
      height: 464px;
      background: #0D1117;
      border-radius: 12px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.4);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      border: 1px solid #30363D;
    }

    .terminal-header {
      height: 36px;
      background: #161B22;
      display: flex;
      align-items: center;
      padding: 0 14px;
      border-bottom: 1px solid #30363D;
      position: relative;
    }

    .dots {
      display: flex;
      gap: 6px;
      z-index: 2;
    }
    .dot { width: 9px; height: 9px; border-radius: 50%; }
    .dot-red { background: #FF5F56; }
    .dot-yellow { background: #FFBD2E; }
    .dot-green { background: #27C93F; }

    .terminal-title {
      position: absolute;
      width: 100%;
      text-anchor: middle;
      text-align: center;
      left: 0;
      font-family: 'Inter', sans-serif;
      font-size: 12px;
      font-weight: 600;
      color: #8B949E;
    }

    .terminal-body {
      padding: 22px 20px;
      display: flex;
      flex-direction: column;
      gap: 16px;
      font-family: 'Fira Code', monospace;
    }

    .cmd-line {
      font-size: 13.5px;
      color: #58A6FF;
      font-weight: 700;
    }

    .output-section {
      margin-top: 8px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .output-tag {
      font-size: 11.5px;
      color: #8B949E;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      font-weight: 700;
    }

    .output-card {
      background: #161B22;
      border: 1px solid #238636;
      border-left: 4px solid #2EA043;
      border-radius: 6px;
      padding: 14px 16px;
    }

    .output-val {
      font-size: 16.5px;
      font-weight: 700;
      color: #3FB950;
      letter-spacing: -0.2px;
    }

    .status-footer {
      margin-top: auto;
      font-size: 11px;
      color: #8B949E;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .status-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #3FB950;
    }

    /* ELEGANT HANDWRITTEN NOTEBOOK SECTION */
    .notebook-container {
      position: absolute;
      top: 720px;
      left: 242px;
      width: 304px;
      color: #0F2C59;
    }

    .note-title {
      font-size: 23px;
      font-weight: 700;
      line-height: 25.5px;
      color: #0A192F;
      letter-spacing: -0.2px;
    }

    .note-theory {
      font-size: 19px;
      font-weight: 700;
      line-height: 25.5px;
      color: #1E3A8A;
    }

    .code-header {
      font-size: 19px;
      font-weight: 700;
      color: #B91C1C;
      line-height: 25.5px;
      margin-top: 25.5px;
    }

    .code-block {
      font-family: 'Fira Code', monospace;
      font-size: 12.5px;
      line-height: 25.5px;
      color: #990000;
      font-weight: 600;
    }

    .kw { color: #0284C7; font-weight: 700; }
    .fn { color: #D97706; font-weight: 700; }
    .str { color: #15803D; font-weight: 700; }
    .cm { color: #64748B; font-style: italic; }

    .takeaways-header {
      font-size: 20px;
      font-weight: 700;
      line-height: 25.5px;
      margin-top: 25.5px;
      color: #0A192F;
    }
  </style>
</head>
<body>
  <!-- Tablet Terminal Screen -->
  <div class="tablet-screen">
    <div class="terminal-header">
      <div class="dots">
        <div class="dot dot-red"></div>
        <div class="dot dot-yellow"></div>
        <div class="dot dot-green"></div>
      </div>
      <div class="terminal-title">${item.tabTitle}</div>
    </div>
    <div class="terminal-body">
      <div class="cmd-line">${item.cmd}</div>
      <div class="output-section">
        <div class="output-tag">Output:</div>
        <div class="output-card">
          <div class="output-val">${item.outputMsg}</div>
        </div>
      </div>
      <div class="status-footer">
        <div class="status-dot"></div>
        <span>Process finished with exit code 0</span>
      </div>
    </div>
  </div>

  <!-- Notebook Content -->
  <div class="notebook-container">
    <div class="note-title">${item.title}</div>
    <div class="note-theory">${item.theory1}</div>
    <div class="note-theory">${item.theory2}</div>
    <div class="code-header">${item.codeHeader}</div>
    <div class="code-block">
      ${codeBlockHtml}
    </div>
    <div class="takeaways-header">${item.takeawaysTitle}</div>
    ${examPointsHtml}
  </div>
</body>
</html>`;
}

async function runTest() {
  const browser = await puppeteer.launch({
    executablePath: chromeExecutable,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 768, height: 1376 });

  const html = buildHTML(testItem);
  await page.setContent(html, { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 500));

  const outputPath = path.join(outputDir, 'preview_python.jpg');
  await page.screenshot({ path: outputPath, type: 'jpeg', quality: 95 });
  console.log('✅ Rendered test Python JPG:', outputPath);

  await browser.close();
}

runTest();
