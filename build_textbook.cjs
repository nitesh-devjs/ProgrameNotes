const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// 1. Read Data
const chunks = [1, 2, 3, 4, 5];
let courseData = [];
for (let i of chunks) {
    const chunkPath = path.join(__dirname, `chunk${i}.json`);
    const data = JSON.parse(fs.readFileSync(chunkPath, 'utf8'));
    courseData = courseData.concat(data);
}

// 2. Generate HTML
let htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JavaScript Mastery Textbook</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=Fira+Code:wght@400;600&display=swap" rel="stylesheet">
    <style>
        @page {
            margin: 0;
            size: A4 portrait;
        }
        body {
            margin: 0;
            padding: 0;
            background-color: #fafafa; 
            font-family: 'Inter', sans-serif;
            color: #222;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
        }
        .page {
            width: 210mm;
            height: 297mm;
            position: relative;
            box-sizing: border-box;
            padding: 25mm 20mm;
            page-break-after: always;
            background: #fff;
            box-shadow: 0 0 10px rgba(0,0,0,0.1); /* For preview */
            margin: 0 auto;
        }
        
        /* TITLE PAGE */
        .title-page {
            background: linear-gradient(135deg, #f0db4f 0%, #d4b830 100%);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            color: #323330;
        }
        .title-page h1 {
            font-size: 14mm;
            font-weight: 800;
            margin: 0 0 10mm 0;
            line-height: 1.1;
        }
        .title-page h2 {
            font-size: 6mm;
            font-weight: 600;
            opacity: 0.8;
            margin-bottom: 30mm;
        }
        .badge {
            background: #323330;
            color: #f0db4f;
            padding: 3mm 8mm;
            border-radius: 10mm;
            font-weight: 800;
            font-size: 5mm;
            letter-spacing: 2px;
            text-transform: uppercase;
        }

        /* SYLLABUS PAGE */
        .syllabus-page h1 {
            font-size: 9mm;
            color: #111;
            border-bottom: 2px solid #eaeaea;
            padding-bottom: 5mm;
            margin-bottom: 10mm;
        }
        .syllabus-list {
            list-style: none;
            padding: 0;
            margin: 0;
            column-count: 2;
            column-gap: 10mm;
        }
        .syllabus-list li {
            font-size: 4mm;
            margin-bottom: 4mm;
            line-height: 1.4;
            break-inside: avoid;
        }
        
        /* THEORY PAGE */
        .theory-page h2 {
            font-size: 8mm;
            color: #1a1a1a;
            margin: 0 0 10mm 0;
            font-weight: 800;
            border-bottom: 3px solid #f0db4f;
            padding-bottom: 5mm;
        }
        .theory-content {
            font-size: 4.8mm;
            line-height: 1.7;
            color: #333;
        }
        .theory-content p {
            margin-bottom: 6mm;
        }
        .theory-content h3 {
            font-size: 5.5mm;
            color: #222;
            margin: 8mm 0 4mm 0;
        }
        .theory-content ul, .theory-content ol {
            margin-bottom: 6mm;
            padding-left: 6mm;
        }
        .theory-content li {
            margin-bottom: 2mm;
        }
        .theory-content code {
            background: #f4f4f4;
            padding: 1mm 2mm;
            border-radius: 1mm;
            font-family: 'Fira Code', monospace;
            font-size: 4mm;
            color: #d11a2a;
        }

        /* PRACTICAL PAGE */
        .practical-page {
            background: #fdfdfd;
        }
        .console-window {
            background: #1e1e1e;
            border-radius: 3mm;
            margin-bottom: 15mm;
            box-shadow: 0 10px 25px rgba(0,0,0,0.15);
            overflow: hidden;
            border: 1px solid #333;
        }
        .console-header {
            background: #2d2d2d;
            padding: 3mm 4mm;
            display: flex;
            align-items: center;
        }
        .console-dots {
            display: flex;
            gap: 2mm;
        }
        .dot {
            width: 3mm;
            height: 3mm;
            border-radius: 50%;
        }
        .dot.red { background: #ff5f56; }
        .dot.yellow { background: #ffbd2e; }
        .dot.green { background: #27c93f; }
        .console-title {
            color: #888;
            font-size: 3.5mm;
            margin-left: 5mm;
            font-family: 'Inter', sans-serif;
        }
        .console-body {
            padding: 5mm;
            font-family: 'Fira Code', monospace;
            font-size: 4.2mm;
            color: #a6accd;
            white-space: pre-wrap;
            line-height: 1.5;
        }
        
        .code-window {
            background: #fcfcfc;
            border: 1px solid #e0e0e0;
            border-left: 5px solid #f0db4f;
            border-radius: 2mm;
            padding: 8mm;
            box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }
        .code-window pre {
            margin: 0;
            font-family: 'Fira Code', monospace;
            font-size: 4.2mm;
            line-height: 1.6;
            color: #24292e;
            white-space: pre-wrap;
        }
        /* Basic syntax highlight simulation for code block */
        .code-window pre .comment { color: #6a737d; font-style: italic; }
        .code-window pre .keyword { color: #d73a49; font-weight: 600; }
        .code-window pre .string { color: #032f62; }
        .code-window pre .function { color: #6f42c1; }
        
        .page-footer {
            position: absolute;
            bottom: 10mm;
            right: 20mm;
            font-size: 3.5mm;
            color: #aaa;
        }

        /* AD PAGE */
        .ad-page {
            background: #12151c;
            color: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 20mm;
        }
        .ad-title {
            color: #f0db4f;
            font-size: 11mm;
            font-weight: 800;
            margin-bottom: 5mm;
            line-height: 1.2;
        }
        .ad-subtitle {
            font-size: 5mm;
            color: #a6accd;
            margin-bottom: 15mm;
            max-width: 150mm;
        }
        .ad-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 6mm 10mm;
            width: 100%;
            max-width: 160mm;
            text-align: left;
        }
        .ad-card {
            background: #1e222d;
            border-left: 4px solid #f0db4f;
            padding: 4mm 6mm;
            border-radius: 2mm;
            font-size: 4.5mm;
            font-weight: 600;
            color: #e2e8f0;
            box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        }
        .ad-footer {
            margin-top: 25mm;
            font-size: 6mm;
            font-weight: 800;
            background: #f0db4f;
            color: #12151c;
            padding: 4mm 15mm;
            border-radius: 10mm;
        }
    </style>
</head>
<body>

    <!-- TITLE PAGE -->
    <div class="page title-page">
        <h1>JavaScript Mastery<br>Masterclass</h1>
        <h2>From Zero to Advanced Concepts</h2>
        <div class="badge">Comprehensive Textbook Edition</div>
        <div style="margin-top: 20mm; font-size: 7mm; font-weight: 800; color: #111; letter-spacing: 1px; padding: 5mm 15mm; border: 3px solid #111; border-radius: 3mm; background: rgba(255,255,255,0.2);">
            Powered by programenote.dev
        </div>
    </div>

    <!-- SYLLABUS PAGE 1 -->
    <div class="page syllabus-page">
        <h1>Syllabus & Table of Contents</h1>
        <ul class="syllabus-list">
`;

// Build syllabus list
let syllabusCounter = 1;
courseData.forEach((chapter) => {
    let cleanTitle = chapter.title.replace(/^\d+\.\s*/, '');
    htmlContent += `<li><strong>${syllabusCounter++}. ${cleanTitle}</strong></li>`;
});

htmlContent += `
        </ul>
        <div class="page-footer"><strong>programenote.dev</strong> | Table of Contents</div>
    </div>
`;

// Remove syntax highlight logic to prevent HTML breakage and keep it clean
function escapeHTML(code) {
    return code.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Generate Content Pages
let pageNum = 1;
let chapterCounter = 1;
courseData.forEach((chapter) => {
    // Strip any existing hardcoded numbers from the title
    let cleanTitle = chapter.title.replace(/^\d+\.\s*/, '');
    let displayTitle = `${chapterCounter++}. ${cleanTitle}`;
    
    // THEORY PAGE (Page 1)
    htmlContent += `
    <div class="page theory-page">
        <h2>${displayTitle}</h2>
        <div class="theory-content">
            ${chapter.theory}
        </div>
        <div class="page-footer"><strong>programenote.dev</strong> | Page ${pageNum++} | Theory</div>
    </div>
    `;

    // PRACTICAL PAGE (Page 2)
    htmlContent += `
    <div class="page practical-page">
        <h3 style="margin-top:0; color:#555; font-size:4.5mm; margin-bottom:4mm; font-weight:600;">Live Output:</h3>
        <div class="console-window">
            <div class="console-header">
                <div class="console-dots">
                    <div class="dot red"></div>
                    <div class="dot yellow"></div>
                    <div class="dot green"></div>
                </div>
                <div class="console-title">Terminal / Console</div>
            </div>
            <div class="console-body">${chapter.output}</div>
        </div>

        <h3 style="color:#555; font-size:4.5mm; margin-bottom:4mm; margin-top:10mm; font-weight:600;">Code Implementation:</h3>
        <div class="code-window">
            <pre>${escapeHTML(chapter.code + '\n')}</pre>
        </div>
        <div class="page-footer"><strong>programenote.dev</strong> | Page ${pageNum++} | Practical Implementation</div>
    </div>
    `;
});

// ADVERTISEMENT PAGE (Final Page)
htmlContent += `
    <div class="page ad-page">
        <div class="ad-title">Want More Premium Notes?</div>
        <div class="ad-subtitle">Browse our premium collection of notes and project files tailored for students of all fields. Available exclusively at <strong>programenote.dev</strong>!</div>
        
        <div class="ad-grid">
            <div class="ad-card">Programming Notes (Btech/Bsc)</div>
            <div class="ad-card">B-Tech Notes</div>
            <div class="ad-card">Bsc Notes</div>
            <div class="ad-card">BBA Notes</div>
            <div class="ad-card">MBA Notes</div>
            <div class="ad-card">D Pharma Notes</div>
            <div class="ad-card">B Pharma Notes</div>
            <div class="ad-card">LLB Notes</div>
            <div class="ad-card">Science Notes (10th to 12th)</div>
            <div class="ad-card">Commerce Notes</div>
            <div class="ad-card">Arts Notes (12th to Graduation)</div>
        </div>

        <div class="ad-footer">Visit: www.programenote.dev</div>
    </div>
`;

htmlContent += `</body></html>`;

const htmlPath = path.join(__dirname, 'js_textbook.html');
fs.writeFileSync(htmlPath, htmlContent, 'utf8');
console.log('HTML generated successfully.');

// 3. Generate PDF
(async () => {
    try {
        console.log("Launching Puppeteer...");
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        
        const pdfPath = path.resolve(__dirname, 'JavaScript_ZeroToHero_Textbook.pdf');
        
        console.log("Loading HTML...");
        await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0', timeout: 0 });
        
        console.log("Generating 100+ page PDF...");
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
