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
    tabTitle: '⚡ Java Output Console',
    cmd: '$ javac Main.java && java Main',
    title: '# JAVA CORE & OOP BASICS',
    theory1: '• Java is a class-based, object-oriented language.',
    theory2: '• Code compiles to bytecode for JVM execution.',
    codeHeader: '// 1. Welcome Program Snippet:',
    codeLines: [
      '<span class="kw">public class</span> Main {',
      '&nbsp;&nbsp;<span class="kw">public static void</span> main(String[] args) {',
      '&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">// Print output</span>',
      '&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span class="str">"Welcome to Programnotes"</span>);',
      '&nbsp;&nbsp;}',
      '}'
    ],
    takeawaysTitle: '★ Key Exam Points:',
    examPoints: [
      '1. Main class name must match file name (.java)',
      '2. System.out.println() prints with newline.',
      '3. Always declare main method as static.'
    ]
  },
  {
    filename: 'preview_python.jpg',
    tabTitle: '🐍 Python Output Console',
    cmd: '$ python3 main.py',
    title: '# PYTHON SYNTAX & CORE',
    theory1: '• Python is an interpreted, high-level language.',
    theory2: '• Clean syntax with strict indentation for blocks.',
    codeHeader: '# 1. Welcome Script:',
    codeLines: [
      '<span class="kw">def</span> <span class="fn">main</span>():',
      '&nbsp;&nbsp;&nbsp;&nbsp;message = <span class="str">"Welcome to Programnotes"</span>',
      '&nbsp;&nbsp;&nbsp;&nbsp;<span class="kw">print</span>(message)',
      '',
      '<span class="kw">if</span> __name__ == <span class="str">"__main__"</span>:',
      '&nbsp;&nbsp;&nbsp;&nbsp;main()'
    ],
    takeawaysTitle: '★ Key Exam Points:',
    examPoints: [
      '1. Python uses indentation (4 spaces) not braces.',
      '2. Variables are dynamically typed.',
      '3. __name__ == "__main__" checks main module.'
    ]
  },
  {
    filename: 'preview_cpp.jpg',
    tabTitle: '⚡ C++ Output Console',
    cmd: '$ g++ main.cpp -o main && ./main',
    title: '# C++ OOP & POINTERS',
    theory1: '• Fast compiled language with direct memory control.',
    theory2: '• Supports OOP (Classes, Inheritance, Polymorphism).',
    codeHeader: '// 1. C++ IO Stream Example:',
    codeLines: [
      '<span class="kw">#include</span> &lt;iostream&gt;',
      '<span class="kw">using namespace</span> std;',
      '<span class="kw">int</span> main() {',
      '&nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; <span class="str">"Welcome to Programnotes"</span> &lt;&lt; endl;',
      '&nbsp;&nbsp;&nbsp;&nbsp;<span class="kw">return</span> 0;',
      '}'
    ],
    takeawaysTitle: '★ Key Exam Points:',
    examPoints: [
      '1. cout << sends formatted output to stdout.',
      '2. endl flushes stream and inserts newline.',
      '3. Header <iostream> required for IO.'
    ]
  },
  {
    filename: 'preview_c.jpg',
    tabTitle: '💻 C Output Console',
    cmd: '$ gcc main.c -o program && ./program',
    title: '# C PROGRAMMING FUNDAMENTALS',
    theory1: '• Procedural language, foundation of modern OS.',
    theory2: '• Direct pointer arithmetic & raw memory access.',
    codeHeader: '/* 1. Basic C Program */',
    codeLines: [
      '<span class="kw">#include</span> &lt;stdio.h&gt;',
      '<span class="kw">int</span> main() {',
      '&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/* Output welcome banner */</span>',
      '&nbsp;&nbsp;&nbsp;&nbsp;printf(<span class="str">"Welcome to Programnotes\\n"</span>);',
      '&nbsp;&nbsp;&nbsp;&nbsp;<span class="kw">return</span> 0;',
      '}'
    ],
    takeawaysTitle: '★ Key Exam Points:',
    examPoints: [
      '1. printf() requires <stdio.h> header.',
      '2. \\n is escape sequence for new line.',
      '3. return 0 signals successful execution.'
    ]
  },
  {
    filename: 'preview_javascript.jpg',
    tabTitle: '🟨 JavaScript Node Console',
    cmd: '$ node index.js',
    title: '# JAVASCRIPT & ES6+ BASICS',
    theory1: '• Dynamic scripting language for Web & Node.js.',
    theory2: '• First-class functions, async promises & closures.',
    codeHeader: '// 1. Arrow Function Output:',
    codeLines: [
      '<span class="kw">const</span> showWelcome = () =&gt; {',
      '&nbsp;&nbsp;<span class="kw">const</span> msg = <span class="str">"Welcome to Programnotes"</span>;',
      '&nbsp;&nbsp;console.log(msg);',
      '};',
      'showWelcome();'
    ],
    takeawaysTitle: '★ Key Exam Points:',
    examPoints: [
      '1. const creates block-scoped read-only ref.',
      '2. Arrow functions syntax: () => { ... }',
      '3. console.log() writes output to stdout.'
    ]
  },
  {
    filename: 'preview_htmlcss.jpg',
    tabTitle: '🌐 Web Browser Preview',
    cmd: 'http://localhost:3000/index.html',
    title: '# HTML5 & CSS3 BASICS',
    theory1: '• HTML gives web content structural semantics.',
    theory2: '• CSS handles styling, flexbox/grid & animations.',
    codeHeader: '<!-- 1. HTML Markup -->',
    codeLines: [
      '&lt;<span class="kw">h1</span> <span class="fn">class</span>=<span class="str">"heading"</span>&gt;',
      '&nbsp;&nbsp;Welcome to Programnotes',
      '&lt;/<span class="kw">h1</span>&gt;',
      '&lt;<span class="kw">style</span>&gt;',
      '&nbsp;&nbsp;.heading { color: #0066cc; }',
      '&lt;/<span class="kw">style</span>&gt;'
    ],
    takeawaysTitle: '★ Key Exam Points:',
    examPoints: [
      '1. <h1> defines top-level main heading.',
      '2. Use external CSS for clean separation.',
      '3. Always include doctype html tag.'
    ]
  },
  {
    filename: 'preview_react.jpg',
    tabTitle: '⚛️ React Dev Server',
    cmd: 'Vite v6.1.0 ready in 140 ms',
    title: '# REACT 19 & HOOKS',
    theory1: '• Declarative UI library using component state.',
    theory2: '• JSX syntax combines HTML with JS logic.',
    codeHeader: '// 1. Functional Component:',
    codeLines: [
      '<span class="kw">import</span> React <span class="kw">from</span> <span class="str">"react"</span>;',
      '<span class="kw">export default function</span> App() {',
      '&nbsp;&nbsp;<span class="kw">return</span> (',
      '&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="kw">h1</span>&gt;Welcome to Programnotes&lt;/<span class="kw">h1</span>&gt;',
      '&nbsp;&nbsp;);',
      '}'
    ],
    takeawaysTitle: '★ Key Exam Points:',
    examPoints: [
      '1. Component names must start with uppercase.',
      '2. Hooks must be called at top level.',
      '3. JSX requires single parent element.'
    ]
  },
  {
    filename: 'preview_dsa.jpg',
    tabTitle: '🌳 DSA Visualizer Console',
    cmd: '$ ./dsa_tree_traversal',
    title: '# DATA STRUCTURES & ALGO',
    theory1: '• Organizes data efficiently for storage & search.',
    theory2: '• Analyzed using Big-O time/space complexity.',
    codeHeader: '// 1. Tree Node Visitor:',
    codeLines: [
      '<span class="kw">void</span> visitNode(Node* root) {',
      '&nbsp;&nbsp;&nbsp;&nbsp;<span class="kw">if</span> (!root) <span class="kw">return</span>;',
      '&nbsp;&nbsp;&nbsp;&nbsp;string msg = <span class="str">"Welcome to Programnotes"</span>;',
      '&nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; msg &lt;&lt; endl;',
      '&nbsp;&nbsp;&nbsp;&nbsp;visitNode(root-&gt;left);',
      '}'
    ],
    takeawaysTitle: '★ Key Exam Points:',
    examPoints: [
      '1. Trees are hierarchical non-linear structures.',
      '2. Inorder: Left -> Root -> Right traversal.',
      '3. Recursion uses implicit call stack.'
    ]
  },
  {
    filename: 'preview_sql.jpg',
    tabTitle: '🗄️ PostgreSQL Console',
    cmd: 'postgres=# SELECT * FROM banner;',
    title: '# SQL DATABASE QUERY',
    theory1: '• Relational database management query language.',
    theory2: '• Handles CRUD ops, joins, indexes & transactions.',
    codeHeader: '-- 1. Select Query:',
    codeLines: [
      '<span class="kw">SELECT</span> <span class="str">\'Welcome to Programnotes\'</span>',
      '&nbsp;&nbsp;<span class="kw">AS</span> WelcomeBanner,',
      '&nbsp;&nbsp;CURRENT_TIMESTAMP <span class="kw">AS</span> Time;',
      '',
      '<span class="cm">-- Result: 1 row returned</span>'
    ],
    takeawaysTitle: '★ Key Exam Points:',
    examPoints: [
      '1. SELECT retrieves rows from database.',
      '2. AS keyword renames result column alias.',
      '3. Terminate SQL queries with semicolon.'
    ]
  },
  {
    filename: 'preview_php.jpg',
    tabTitle: '🐘 PHP Web Server',
    cmd: '$ php -S localhost:8000',
    title: '# PHP BACKEND SCRIPTING',
    theory1: '• Server-side scripting language for dynamic web.',
    theory2: '• Embeds directly into HTML with <?php ?> tags.',
    codeHeader: '<!-- 1. PHP Script -->',
    codeLines: [
      '&lt;?php',
      '&nbsp;&nbsp;$txt = <span class="str">"Welcome to Programnotes"</span>;',
      '&nbsp;&nbsp;<span class="kw">echo</span> <span class="str">"&lt;h1&gt;"</span> . $txt . <span class="str">"&lt;/h1&gt;"</span>;',
      '?&gt;'
    ],
    takeawaysTitle: '★ Key Exam Points:',
    examPoints: [
      '1. All PHP variables start with $ sign.',
      '2. Dot (.) operator concatenates strings.',
      '3. Echo outputs strings to web browser.'
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
    @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Fira+Code:wght@500;700&family=Outfit:wght@600;700&display=swap');

    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    body {
      width: 768px;
      height: 1376px;
      position: relative;
      background: url('${bgDataUrl}') no-repeat center top;
      background-size: 768px 1376px;
      font-family: 'Caveat', cursive, sans-serif;
      overflow: hidden;
    }

    /* TABLET TERMINAL SCREEN */
    .tablet-screen {
      position: absolute;
      top: 164px;
      left: 224px;
      width: 320px;
      height: 464px;
      background: #0F172A;
      border-radius: 14px;
      box-shadow: 0 12px 30px rgba(0,0,0,0.5);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      border: 1px solid #1E293B;
    }

    .terminal-header {
      height: 38px;
      background: #1E293B;
      display: flex;
      align-items: center;
      padding: 0 14px;
      position: relative;
    }

    .dots {
      display: flex;
      gap: 6px;
    }
    .dot { width: 10px; height: 10px; border-radius: 50%; }
    .dot-red { background: #EF4444; }
    .dot-yellow { background: #F59E0B; }
    .dot-green { background: #10B981; }

    .terminal-title {
      position: absolute;
      width: 100%;
      text-align: center;
      left: 0;
      font-family: 'Outfit', sans-serif;
      font-size: 13px;
      font-weight: 700;
      color: #94A3B8;
    }

    .terminal-body {
      padding: 20px 18px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .cmd-text {
      font-family: 'Fira Code', monospace;
      font-size: 13.5px;
      color: #38BDF8;
      font-weight: 700;
    }

    .status-badge {
      background: #1E293B;
      border: 1px solid #334155;
      color: #94A3B8;
      font-family: 'Fira Code', monospace;
      font-size: 11.5px;
      padding: 4px 10px;
      border-radius: 6px;
      width: fit-content;
    }

    .output-label {
      font-family: 'Fira Code', monospace;
      font-size: 12.5px;
      color: #E2E8F0;
      font-weight: 700;
      margin-top: 4px;
    }

    .output-box {
      background: #022C22;
      border: 1.5px solid #059669;
      border-radius: 10px;
      padding: 16px;
      box-shadow: 0 0 15px rgba(5, 150, 105, 0.25);
    }

    .output-text {
      font-family: 'Fira Code', monospace;
      font-size: 17px;
      font-weight: 700;
      color: #4ADE80;
      margin-bottom: 6px;
    }

    .output-sub {
      font-family: 'Fira Code', monospace;
      font-size: 11.5px;
      color: #A7F3D0;
    }

    /* NOTEBOOK HANDWRITTEN SECTION */
    .notebook-container {
      position: absolute;
      top: 722px;
      left: 248px;
      width: 300px;
      color: #0B2447;
    }

    .note-title {
      font-size: 25px;
      font-weight: 700;
      line-height: 25.5px;
      color: #0B2447;
      margin-bottom: 0px;
    }

    .note-theory {
      font-size: 19.5px;
      font-weight: 600;
      line-height: 25.5px;
      color: #1E3E62;
    }

    .code-header {
      font-size: 20px;
      font-weight: 700;
      color: #990000;
      line-height: 25.5px;
      margin-top: 25.5px;
    }

    .code-block {
      font-family: 'Fira Code', monospace;
      font-size: 12.5px;
      line-height: 25.5px;
      color: #990000;
      font-weight: 500;
    }

    .kw { color: #0033CC; font-weight: 700; }
    .fn { color: #D97706; font-weight: 700; }
    .str { color: #059669; font-weight: 600; }
    .cm { color: #6B7280; font-style: italic; }

    .takeaways-header {
      font-size: 21.5px;
      font-weight: 700;
      line-height: 25.5px;
      margin-top: 25.5px;
      color: #0B2447;
    }
  </style>
</head>
<body>
  <!-- Tablet Terminal -->
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
      <div class="cmd-text">${item.cmd}</div>
      <div class="status-badge">Status: Exit Code 0 (Success)</div>
      <div class="output-label">&gt; Program Output:</div>
      <div class="output-box">
        <div class="output-text">Welcome to Programnotes</div>
        <div class="output-sub">✔ Program executed successfully</div>
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
  console.log('🚀 Launching Chrome Headless via Puppeteer...');
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
    // Brief delay to ensure font rendering
    await new Promise(r => setTimeout(r, 400));

    const outputPath = path.join(outputDir, item.filename);
    await page.screenshot({
      path: outputPath,
      type: 'jpeg',
      quality: 95
    });

    const size = fs.statSync(outputPath).size;
    console.log(`📸 Rendered JPG: ${item.filename} (${size} bytes)`);
  }

  await browser.close();
  console.log('🎉 All 10 high-resolution JPG images generated successfully!');
}

renderAll().catch(err => {
  console.error('Error rendering JPGs:', err);
});
