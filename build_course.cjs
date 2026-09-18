const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// 1. Read Data
const data1 = JSON.parse(fs.readFileSync(path.join(__dirname, 'data1.json'), 'utf8'));
const data2 = JSON.parse(fs.readFileSync(path.join(__dirname, 'data2.json'), 'utf8'));
const data3 = JSON.parse(fs.readFileSync(path.join(__dirname, 'data3.json'), 'utf8'));

const fullCourse = [...data1, ...data2, ...data3];

// 2. Generate HTML
let htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JavaScript Full Course Masterclass</title>
    <link href="https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&display=swap" rel="stylesheet">
    <style>
        @page {
            margin: 0;
            size: A4 portrait;
        }
        body {
            margin: 0;
            padding: 0;
            background-color: #d4a373; 
            background-image: repeating-linear-gradient(
                45deg,
                rgba(0,0,0,0.05) 0px, rgba(0,0,0,0.05) 2px,
                transparent 2px, transparent 4px
            );
            font-family: 'Kalam', cursive;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
        }
        .scene {
            width: 210mm;
            height: 297mm;
            position: relative;
            box-sizing: border-box;
            padding: 10mm;
            overflow: hidden;
            page-break-after: always;
            box-shadow: inset 0 0 50px rgba(0,0,0,0.2);
        }

        /* TABLET STYLES - 25% AREA */
        .tablet-wrapper {
            width: 170mm;
            height: 65mm;
            background: #111;
            border-radius: 8mm;
            margin: 0 auto 10mm auto;
            padding: 5mm;
            box-shadow: 0 10px 20px rgba(0,0,0,0.4), inset 0 2px 5px rgba(255,255,255,0.2);
            box-sizing: border-box;
            position: relative;
            transform: perspective(1000px) rotateX(1deg);
        }
        .tablet-screen {
            width: 100%;
            height: 100%;
            background: #f4f7f6;
            border-radius: 2mm;
            overflow: hidden;
            box-sizing: border-box;
            padding: 5mm;
            box-shadow: inset 0 0 10px rgba(0,0,0,0.1);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .tablet-camera {
            position: absolute;
            left: -3mm;
            top: 50%;
            transform: translateY(-50%);
            width: 2mm;
            height: 2mm;
            background: #222;
            border-radius: 50%;
            box-shadow: inset 0 0 1px #fff;
        }
        .output-box {
            font-family: 'Consolas', 'Courier New', monospace;
            font-size: 4.5mm;
            color: #0f0;
            background: #222;
            padding: 5mm;
            border-radius: 2mm;
            width: 90%;
            text-align: left;
            white-space: pre-wrap;
            line-height: 1.3;
        }
        .tablet-title {
            font-family: 'Segoe UI', sans-serif;
            font-size: 5mm;
            color: #333;
            margin-bottom: 3mm;
            font-weight: bold;
        }

        /* NOTEBOOK STYLES - 75% AREA */
        .notebook-wrapper {
            width: 180mm;
            height: 200mm;
            background: #fdfdfd;
            margin: 0 auto;
            border-radius: 2mm 5mm 5mm 2mm;
            box-shadow: 5px 15px 25px rgba(0,0,0,0.3);
            position: relative;
            padding: 10mm 10mm 10mm 25mm;
            box-sizing: border-box;
            
            /* Lined paper */
            background-image: 
                linear-gradient(90deg, transparent 20mm, #ff8da1 20mm, #ff8da1 20.5mm, transparent 20.5mm),
                linear-gradient(#d9d9d9 1px, transparent 1px);
            background-size: 100% 7.5mm;
            line-height: 7.5mm;
        }
        /* Spiral Binding */
        .notebook-wrapper::before {
            content: '';
            position: absolute;
            top: 0;
            left: 2mm;
            bottom: 0;
            width: 10mm;
            background-image: radial-gradient(circle at 5mm 3.75mm, #d4a373 2mm, #444 2.5mm, #222 3mm, transparent 3.5mm);
            background-size: 10mm 7.5mm;
            z-index: 10;
        }
        
        .notebook-title {
            font-size: 7mm;
            color: #d81b60;
            margin: 0 0 7.5mm 0;
            padding: 0;
            line-height: 7.5mm;
            font-weight: 700;
            text-decoration: underline;
        }
        .theory {
            font-size: 5.5mm;
            color: #333;
            margin-bottom: 7.5mm;
        }
        pre {
            font-family: 'Kalam', cursive;
            font-size: 5.5mm;
            margin: 0;
            padding: 0;
            color: #1565c0;
            white-space: pre-wrap;
            line-height: 7.5mm;
            font-weight: bold;
        }
        .pen {
            position: absolute;
            right: 5mm;
            bottom: 20mm;
            width: 5mm;
            height: 90mm;
            background: linear-gradient(to right, #333, #666, #333);
            border-radius: 5mm 5mm 1mm 1mm;
            transform: rotate(-15deg);
            box-shadow: -3px 5px 10px rgba(0,0,0,0.4);
        }
    </style>
</head>
<body>
`;

fullCourse.forEach((chapter) => {
    htmlContent += `
    <div class="scene">
        <div class="tablet-wrapper">
            <div class="tablet-camera"></div>
            <div class="tablet-screen">
                <div class="tablet-title">Live Output:</div>
                <div class="output-box">${chapter.output}</div>
            </div>
        </div>

        <div class="notebook-wrapper">
            <div class="notebook-title">${chapter.title}</div>
            <div class="theory">${chapter.theory.replace(/\\n/g, '<br>')}</div>
            <pre>${chapter.code.replace(/\\n/g, '<br>')}</pre>
            <div class="pen"></div>
        </div>
    </div>
    `;
});

htmlContent += `</body></html>`;

const htmlPath = path.join(__dirname, 'js_masterclass_course.html');
fs.writeFileSync(htmlPath, htmlContent, 'utf8');
console.log('HTML generated with 75 pages.');

// 3. Generate PDF
(async () => {
    try {
        console.log("Launching Puppeteer...");
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        
        const pdfPath = path.resolve(__dirname, 'JavaScript_Full_Course_Masterclass.pdf');
        
        console.log("Loading HTML...");
        await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0', timeout: 0 });
        
        console.log("Generating 75-page PDF...");
        await page.pdf({
            path: pdfPath,
            format: 'A4',
            printBackground: true,
            timeout: 0,
            margin: { top: 0, right: 0, bottom: 0, left: 0 }
        });
        
        await browser.close();
        console.log(`Successfully created PDF at: ${pdfPath}`);
    } catch (error) {
        console.error("Error generating PDF:", error);
        process.exit(1);
    }
})();
