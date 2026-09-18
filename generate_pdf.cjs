const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    try {
        console.log("Launching browser...");
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        
        const htmlPath = path.resolve(__dirname, 'js_course_scene.html');
        const pdfPath = path.resolve(__dirname, 'JavaScript_Realistic_Format_Notes.pdf');
        
        console.log(`Loading HTML from: ${htmlPath}`);
        await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });
        
        console.log("Generating PDF...");
        await page.pdf({
            path: pdfPath,
            format: 'A4',
            printBackground: true,
            margin: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        });
        
        await browser.close();
        console.log(`Successfully created PDF at: ${pdfPath}`);
    } catch (error) {
        console.error("Error generating PDF:", error);
        process.exit(1);
    }
})();
