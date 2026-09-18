const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const chromeExecutable = 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe';
const outputDir = path.join(process.cwd(), 'public', 'images', 'previews');

const templateBg = fs.readFileSync(path.join(outputDir, 'blank_template.jpg')).toString('base64');
const bgDataUrl = `data:image/jpeg;base64,${templateBg}`;

const subjects = [
  {
    filename: 'preview_java.jpg',
    tabTitle: 'Main.java — Output Console',
    cmd: '$ javac Main.java && java Main',
    outputMsg: 'Welcome to Programnotes',
    title: 'JAVA PROGRAMMING BASICS',
    theory1: '• Class-based, Object-Oriented language.',
    theory2: '• Code runs inside JVM environment.',
    codeHeader: '// 1. Print Welcome Message:',
    codeLines: [
      '<span class="kw">class</span> Main {',
      '&nbsp;&nbsp;<span class="kw">public static void</span> main(String[] args) {',
      '&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span class="str">"Welcome to Programnotes"</span>);',
      '&nbsp;&nbsp;}',
      '}'
    ],
    takeawaysTitle: '★ Key Exam Highlights:',
    examPoints: [
      '1. Main class name must match file name.',
      '2. System.out.println() prints newline.',
      '3. Always declare main method static.'
    ]
  },
  {
    filename: 'preview_python.jpg',
    tabTitle: 'main.py — Output Console',
    cmd: '$ python3 main.py',
    outputMsg: 'Welcome to Programnotes',
    title: 'PYTHON SYNTAX & CORE',
    theory1: '• Simple, beginner-friendly syntax.',
    theory2: '• Widely used in Web, AI & Data Science.',
    codeHeader: '// 1. Print Welcome Message:',
    codeLines: [
      '<span class="cm"># Output welcome banner</span>',
      '<span class="kw">print</span>(<span class="str">"Welcome to Programnotes"</span>)'
    ],
    takeawaysTitle: '★ Key Exam Highlights:',
    examPoints: [
      '1. Clean syntax without semicolons.',
      '2. Dynamic typing & automatic memory.',
      '3. Rich built-in standard library.'
    ]
  },
  {
    filename: 'preview_cpp.jpg',
    tabTitle: 'main.cpp — Output Console',
    cmd: '$ g++ main.cpp -o main && ./main',
    outputMsg: 'Welcome to Programnotes',
    title: 'C++ OOP & POINTERS',
    theory1: '• High-performance language with OOP support.',
    theory2: '• Direct memory access using pointers.',
    codeHeader: '// 1. C++ IO Stream Snippet:',
    codeLines: [
      '<span class="kw">#include</span> &lt;iostream&gt;',
      '<span class="kw">using namespace</span> std;',
      '<span class="kw">int</span> main() {',
      '&nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; <span class="str">"Welcome to Programnotes"</span>;',
      '&nbsp;&nbsp;&nbsp;&nbsp;<span class="kw">return</span> 0;',
      '}'
    ],
    takeawaysTitle: '★ Key Exam Highlights:',
    examPoints: [
      '1. cout sends output stream to console.',
      '2. Include <iostream> header for IO ops.',
      '3. return 0 indicates success exit.'
    ]
  },
  {
    filename: 'preview_c.jpg',
    tabTitle: 'main.c — Output Console',
    cmd: '$ gcc main.c -o program && ./program',
    outputMsg: 'Welcome to Programnotes',
    title: 'C PROGRAMMING FUNDAMENTALS',
    theory1: '• Procedural language, basis of modern OS.',
    theory2: '• Raw memory management with pointers.',
    codeHeader: '/* 1. Basic C Output */',
    codeLines: [
      '<span class="kw">#include</span> &lt;stdio.h&gt;',
      '<span class="kw">int</span> main() {',
      '&nbsp;&nbsp;&nbsp;&nbsp;printf(<span class="str">"Welcome to Programnotes\\n"</span>);',
      '&nbsp;&nbsp;&nbsp;&nbsp;<span class="kw">return</span> 0;',
      '}'
    ],
    takeawaysTitle: '★ Key Exam Highlights:',
    examPoints: [
      '1. printf() requires <stdio.h> header.',
      '2. \\n is escape sequence for new line.',
      '3. Pointers store direct memory address.'
    ]
  },
  {
    filename: 'preview_javascript.jpg',
    tabTitle: 'index.js — Node Output',
    cmd: '$ node index.js',
    outputMsg: 'Welcome to Programnotes',
    title: 'JAVASCRIPT & ES6+ BASICS',
    theory1: '• Dynamic language powering Web & Node.js.',
    theory2: '• Supports first-class functions & async ops.',
    codeHeader: '// 1. Print Welcome Banner:',
    codeLines: [
      '<span class="cm">// Console output function</span>',
      '<span class="kw">const</span> msg = <span class="str">"Welcome to Programnotes"</span>;',
      'console.log(msg);'
    ],
    takeawaysTitle: '★ Key Exam Highlights:',
    examPoints: [
      '1. const defines block-scoped constants.',
      '2. console.log outputs string to console.',
      '3. Non-blocking asynchronous execution.'
    ]
  },
  {
    filename: 'preview_htmlcss.jpg',
    tabTitle: 'index.html — Web View',
    cmd: 'http://localhost:3000/index.html',
    outputMsg: 'Welcome to Programnotes',
    title: 'HTML5 & CSS3 BASICS',
    theory1: '• HTML provides structural elements for web.',
    theory2: '• CSS styles layouts, colors & responsive design.',
    codeHeader: '<!-- 1. HTML Markup -->',
    codeLines: [
      '&lt;<span class="kw">h1</span> <span class="fn">class</span>=<span class="str">"banner"</span>&gt;',
      '&nbsp;&nbsp;Welcome to Programnotes',
      '&lt;/<span class="kw">h1</span>&gt;'
    ],
    takeawaysTitle: '★ Key Exam Highlights:',
    examPoints: [
      '1. <h1> tag defines primary page header.',
      '2. Semantic tags improve SEO & structure.',
      '3. CSS links via <link rel="stylesheet">.'
    ]
  },
  {
    filename: 'preview_react.jpg',
    tabTitle: 'App.jsx — React Preview',
    cmd: 'Vite v6.1.0 dev server running',
    outputMsg: 'Welcome to Programnotes',
    title: 'REACT 19 & COMPONENTS',
    theory1: '• Component-based library for reactive UI.',
    theory2: '• JSX blends HTML structure with JS logic.',
    codeHeader: '// 1. React Component:',
    codeLines: [
      '<span class="kw">export default function</span> App() {',
      '&nbsp;&nbsp;<span class="kw">return</span> &lt;<span class="kw">h1</span>&gt;Welcome to Programnotes&lt;/<span class="kw">h1</span>&gt;;',
      '}'
    ],
    takeawaysTitle: '★ Key Exam Highlights:',
    examPoints: [
      '1. Components return JSX elements.',
      '2. Hooks manage reactive local state.',
      '3. Props pass data to child components.'
    ]
  },
  {
    filename: 'preview_dsa.jpg',
    tabTitle: 'dsa_tree.cpp — Visualizer',
    cmd: '$ ./dsa_traversal',
    outputMsg: 'Welcome to Programnotes',
    title: 'DATA STRUCTURES & ALGO',
    theory1: '• Efficient memory organization & algorithms.',
    theory2: '• Analyzed with Big-O time & space complexity.',
    codeHeader: '// 1. Node Traversal:',
    codeLines: [
      '<span class="kw">void</span> printNode(Node* root) {',
      '&nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; <span class="str">"Welcome to Programnotes"</span>;',
      '}'
    ],
    takeawaysTitle: '★ Key Exam Highlights:',
    examPoints: [
      '1. Arrays offer O(1) random index access.',
      '2. Trees are non-linear recursive structures.',
      '3. Binary Search achieves O(log N) time.'
    ]
  },
  {
    filename: 'preview_sql.jpg',
    tabTitle: 'query.sql — Database Console',
    cmd: 'postgres=# SELECT banner FROM site;',
    outputMsg: 'Welcome to Programnotes',
    title: 'SQL DATABASE QUERY',
    theory1: '• Relational query language for databases.',
    theory2: '• Handles queries, table joins & transactions.',
    codeHeader: '-- 1. Select Query:',
    codeLines: [
      '<span class="kw">SELECT</span> <span class="str">\'Welcome to Programnotes\'</span>',
      '&nbsp;&nbsp;<span class="kw">AS</span> BannerMessage;'
    ],
    takeawaysTitle: '★ Key Exam Highlights:',
    examPoints: [
      '1. SELECT fetches data rows from table.',
      '2. WHERE filters rows based on condition.',
      '3. Primary Key uniquely identifies row.'
    ]
  },
  {
    filename: 'preview_php.jpg',
    tabTitle: 'index.php — Localhost',
    cmd: '$ php -S localhost:8000',
    outputMsg: 'Welcome to Programnotes',
    title: 'PHP BACKEND DEVELOPMENT',
    theory1: '• Server-side scripting language for web.',
    theory2: '• Embeds directly into HTML using <?php ?>.',
    codeHeader: '<!-- 1. PHP Script -->',
    codeLines: [
      '&lt;?php',
      '&nbsp;&nbsp;<span class="kw">echo</span> <span class="str">"Welcome to Programnotes"</span>;',
      '?&gt;'
    ],
    takeawaysTitle: '★ Key Exam Highlights:',
    examPoints: [
      '1. PHP variables start with $ symbol.',
      '2. echo outputs strings to HTML stream.',
      '3. Superglobals like $_POST handle forms.'
    ]
  }
];

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
      margin-top: 24px;
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
      font-size: 22.5px;
      font-weight: 700;
      line-height: 25.5px;
      color: #0A192F;
      letter-spacing: -0.2px;
    }

    .note-theory {
      font-size: 18.5px;
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
      font-size: 19.5px;
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
        <span>Process completed with exit code 0</span>
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

async function renderAll() {
  console.log('🚀 Launching Chrome Headless for Improved JPGs...');
  const browser = await puppeteer.launch({
    executablePath: chromeExecutable,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 768, height: 1376 });

  for (const item of subjects) {
    const html = buildHTML(item);
    await page.setContent(html, { waitUntil: 'domcontentloaded' });
    await new Promise(r => setTimeout(r, 300));

    const outputPath = path.join(outputDir, item.filename);
    await page.screenshot({ path: outputPath, type: 'jpeg', quality: 95 });
    const size = fs.statSync(outputPath).size;
    console.log(`📸 Rendered: ${item.filename} (${size} bytes)`);
  }

  await browser.close();
  console.log('🎉 All 10 improved photorealistic JPGs generated!');
}

renderAll().catch(err => {
  console.error('Error rendering JPGs:', err);
});
