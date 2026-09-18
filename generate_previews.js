import fs from 'fs';
import path from 'path';

const PREVIEWS_DIR = 'public/images/previews';

const subjects = [
  {
    id: 'java',
    file: 'preview_java.svg',
    tabTitle: '⚡ Java Output Console',
    cmd: '$ javac Main.java && java Main',
    notebookTitle: '# JAVA CORE & OOP BASICS',
    theoryLine1: '• Java is a class-based, object-oriented language.',
    theoryLine2: '• Code compiles to bytecode for JVM execution.',
    codeHeader: '// 1. Welcome Program Snippet:',
    codeLines: [
      '<tspan class="desk-keyword">public class</tspan> Main {',
      '  <tspan class="desk-keyword">public static void</tspan> main(String[] args) {',
      '    <tspan class="desk-comment">// Print output</tspan>',
      '    System.out.println(<tspan class="desk-string">"Welcome to Programnotes"</tspan>);',
      '  }',
      '}'
    ],
    examPoints: [
      '1. Main class name must match file name (.java)',
      '2. System.out.println() prints with newline.',
      '3. Always declare main method as static.'
    ]
  },
  {
    id: 'python',
    file: 'preview_python.svg',
    tabTitle: '🐍 Python Output Console',
    cmd: '$ python3 main.py',
    notebookTitle: '# PYTHON SYNTAX & CORE',
    theoryLine1: '• Python is an interpreted, high-level language.',
    theoryLine2: '• Clean syntax with strict indentation for blocks.',
    codeHeader: '# 1. Welcome Script:',
    codeLines: [
      '<tspan class="desk-keyword">def</tspan> <tspan class="desk-fn">main</tspan>():',
      '    message = <tspan class="desk-string">"Welcome to Programnotes"</tspan>',
      '    <tspan class="desk-keyword">print</tspan>(message)',
      '',
      '<tspan class="desk-keyword">if</tspan> __name__ == <tspan class="desk-string">"__main__"</tspan>:',
      '    main()'
    ],
    examPoints: [
      '1. Python uses indentation (4 spaces) not braces.',
      '2. Variables are dynamically typed.',
      '3. __name__ == "__main__" checks main module.'
    ]
  },
  {
    id: 'cpp',
    file: 'preview_c++.svg',
    tabTitle: '⚡ C++ Output Console',
    cmd: '$ g++ main.cpp -o main && ./main',
    notebookTitle: '# C++ OOP & POINTERS',
    theoryLine1: '• Fast compiled language with direct memory control.',
    theoryLine2: '• Supports OOP (Classes, Inheritance, Polymorphism).',
    codeHeader: '// 1. C++ IO Stream Example:',
    codeLines: [
      '<tspan class="desk-keyword">#include</tspan> <tspan class="desk-string">&lt;iostream&gt;</tspan>',
      '<tspan class="desk-keyword">using namespace</tspan> std;',
      '<tspan class="desk-keyword">int</tspan> main() {',
      '    cout &lt;&lt; <tspan class="desk-string">"Welcome to Programnotes"</tspan> &lt;&lt; endl;',
      '    <tspan class="desk-keyword">return</tspan> 0;',
      '}'
    ],
    examPoints: [
      '1. cout << sends formatted output to stdout.',
      '2. endl flushes stream and inserts newline.',
      '3. Header <iostream> required for IO.'
    ]
  },
  {
    id: 'c',
    file: 'preview_c.svg',
    tabTitle: '💻 C Output Console',
    cmd: '$ gcc main.c -o program && ./program',
    notebookTitle: '# C PROGRAMMING FUNDAMENTALS',
    theoryLine1: '• Procedural language, foundation of modern OS.',
    theoryLine2: '• Direct pointer arithmetic & raw memory access.',
    codeHeader: '/* 1. Basic C Program */',
    codeLines: [
      '<tspan class="desk-keyword">#include</tspan> <tspan class="desk-string">&lt;stdio.h&gt;</tspan>',
      '<tspan class="desk-keyword">int</tspan> main() {',
      '    <tspan class="desk-comment">/* Output welcome banner */</tspan>',
      '    printf(<tspan class="desk-string">"Welcome to Programnotes\\n"</tspan>);',
      '    <tspan class="desk-keyword">return</tspan> 0;',
      '}'
    ],
    examPoints: [
      '1. printf() requires <stdio.h> header.',
      '2. \\n is escape sequence for new line.',
      '3. return 0 signals successful execution.'
    ]
  },
  {
    id: 'javascript',
    file: 'preview_javascript.svg',
    tabTitle: '🟨 JavaScript Node Console',
    cmd: '$ node index.js',
    notebookTitle: '# JAVASCRIPT & ES6+ BASICS',
    theoryLine1: '• Dynamic scripting language for Web & Node.js.',
    theoryLine2: '• First-class functions, async promises & closures.',
    codeHeader: '// 1. Arrow Function Output:',
    codeLines: [
      '<tspan class="desk-keyword">const</tspan> showWelcome = () =&gt; {',
      '  <tspan class="desk-keyword">const</tspan> msg = <tspan class="desk-string">"Welcome to Programnotes"</tspan>;',
      '  console.log(msg);',
      '};',
      'showWelcome();',
      ''
    ],
    examPoints: [
      '1. const creates block-scoped read-only ref.',
      '2. Arrow functions syntax: () => { ... }',
      '3. console.log() writes output to stdout.'
    ]
  },
  {
    id: 'htmlcss',
    file: 'preview_htmlcss.svg',
    tabTitle: '🌐 Web Browser Preview',
    cmd: 'http://localhost:3000/index.html',
    notebookTitle: '# HTML5 & CSS3 BASICS',
    theoryLine1: '• HTML gives web content structural semantics.',
    theoryLine2: '• CSS handles styling, flexbox/grid & animations.',
    codeHeader: '<!-- 1. HTML Markup -->',
    codeLines: [
      '&lt;<tspan class="desk-keyword">h1</tspan> <tspan class="desk-fn">class</tspan>=<tspan class="desk-string">"heading"</tspan>&gt;',
      '  Welcome to Programnotes',
      '&lt;/<tspan class="desk-keyword">h1</tspan>&gt;',
      '&lt;<tspan class="desk-keyword">style</tspan>&gt;',
      '  .heading { color: #0066cc; }',
      '&lt;/<tspan class="desk-keyword">style</tspan>&gt;'
    ],
    examPoints: [
      '1. <h1> defines top-level main heading.',
      '2. Use external CSS for clean separation.',
      '3. Always include doctype html tag.'
    ]
  },
  {
    id: 'react',
    file: 'preview_react.svg',
    tabTitle: '⚛️ React Dev Server',
    cmd: 'Vite v6.1.0 ready in 140 ms',
    notebookTitle: '# REACT 19 & HOOKS',
    theoryLine1: '• Declarative UI library using component state.',
    theoryLine2: '• JSX syntax combines HTML with JS logic.',
    codeHeader: '// 1. Functional Component:',
    codeLines: [
      '<tspan class="desk-keyword">import</tspan> React <tspan class="desk-keyword">from</tspan> <tspan class="desk-string">"react"</tspan>;',
      '<tspan class="desk-keyword">export default function</tspan> App() {',
      '  <tspan class="desk-keyword">return</tspan> (',
      '    &lt;<tspan class="desk-keyword">h1</tspan>&gt;Welcome to Programnotes&lt;/<tspan class="desk-keyword">h1</tspan>&gt;',
      '  );',
      '}'
    ],
    examPoints: [
      '1. Component names must start with uppercase.',
      '2. Hooks must be called at top level.',
      '3. JSX requires single parent element.'
    ]
  },
  {
    id: 'dsa',
    file: 'preview_dsa.svg',
    tabTitle: '🌳 DSA Visualizer Console',
    cmd: '$ ./dsa_tree_traversal',
    notebookTitle: '# DATA STRUCTURES & ALGO',
    theoryLine1: '• Organizes data efficiently for storage & search.',
    theoryLine2: '• Analyzed using Big-O time/space complexity.',
    codeHeader: '// 1. Tree Node Visitor:',
    codeLines: [
      '<tspan class="desk-keyword">void</tspan> visitNode(Node* root) {',
      '    <tspan class="desk-keyword">if</tspan> (!root) <tspan class="desk-keyword">return</tspan>;',
      '    string msg = <tspan class="desk-string">"Welcome to Programnotes"</tspan>;',
      '    cout &lt;&lt; msg &lt;&lt; endl;',
      '    visitNode(root-&gt;left);',
      '}'
    ],
    examPoints: [
      '1. Trees are hierarchical non-linear structures.',
      '2. Inorder: Left -> Root -> Right traversal.',
      '3. Recursion uses implicit call stack.'
    ]
  },
  {
    id: 'sql',
    file: 'preview_sql.svg',
    tabTitle: '🗄️ PostgreSQL Console',
    cmd: 'postgres=# SELECT * FROM banner;',
    notebookTitle: '# SQL DATABASE QUERY',
    theoryLine1: '• Relational database management query language.',
    theoryLine2: '• Handles CRUD ops, joins, indexes & transactions.',
    codeHeader: '-- 1. Select Query:',
    codeLines: [
      '<tspan class="desk-keyword">SELECT</tspan> <tspan class="desk-string">\'Welcome to Programnotes\'</tspan>',
      '  <tspan class="desk-keyword">AS</tspan> WelcomeBanner,',
      '  CURRENT_TIMESTAMP <tspan class="desk-keyword">AS</tspan> Time;',
      '',
      '<tspan class="desk-comment">-- Result: 1 row returned</tspan>',
      ''
    ],
    examPoints: [
      '1. SELECT retrieves rows from database.',
      '2. AS keyword renames result column alias.',
      '3. Terminate SQL queries with semicolon.'
    ]
  },
  {
    id: 'php',
    file: 'preview_php.svg',
    tabTitle: '🐘 PHP Web Server',
    cmd: '$ php -S localhost:8000',
    notebookTitle: '# PHP BACKEND SCRIPTING',
    theoryLine1: '• Server-side scripting language for dynamic web.',
    theoryLine2: '• Embeds directly into HTML with <?php ?> tags.',
    codeHeader: '<!-- 1. PHP Script -->',
    codeLines: [
      '&lt;?php',
      '  $txt = <tspan class="desk-string">"Welcome to Programnotes"</tspan>;',
      '  <tspan class="desk-keyword">echo</tspan> <tspan class="desk-string">"&lt;h1&gt;"</tspan> . $txt . <tspan class="desk-string">"&lt;/h1&gt;"</tspan>;',
      '?&gt;',
      '',
      ''
    ],
    examPoints: [
      '1. All PHP variables start with $ sign.',
      '2. Dot (.) operator concatenates strings.',
      '3. Echo outputs strings to web browser.'
    ]
  }
];

function generateSVG(item) {
  const codeLinesXml = item.codeLines.map((line, idx) => {
    const y = 871 + idx * 25.5;
    return `    <text x="10" y="${y}" class="desk-code">${line}</text>`;
  }).join('\n');

  const examPointsXml = item.examPoints.map((pt, idx) => {
    const y = 1075 + idx * 25.5;
    return `    <text x="0" y="${y}" class="desk-text">${pt}</text>`;
  }).join('\n');

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 768 1376" width="768" height="1376">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&amp;family=Fira+Code:wght@500;700&amp;family=Outfit:wght@600;700&amp;display=swap');

      .desk-title { font-family: 'Caveat', cursive, sans-serif; font-size: 25px; font-weight: 700; fill: #0B2447; letter-spacing: -0.3px; }
      .desk-text  { font-family: 'Caveat', cursive, sans-serif; font-size: 19.5px; font-weight: 600; fill: #1E3E62; }
      .desk-code  { font-family: 'Fira Code', monospace; font-size: 13px; font-weight: 500; fill: #990000; }
      .desk-keyword { fill: #0033CC; font-weight: 700; }
      .desk-fn      { fill: #D97706; font-weight: 700; }
      .desk-string  { fill: #059669; font-weight: 600; }
      .desk-comment { fill: #6B7280; font-style: italic; }
      
      .term-title { font-family: 'Outfit', sans-serif; font-size: 13px; font-weight: 700; fill: #94A3B8; }
      .term-text  { font-family: 'Fira Code', monospace; font-size: 14px; font-weight: 700; fill: #38BDF8; }
      .term-out   { font-family: 'Fira Code', monospace; font-size: 17px; font-weight: 700; fill: #4ADE80; }
    </style>

    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#000" flood-opacity="0.3"/>
    </filter>
  </defs>

  <!-- Photorealistic Desk Background Image -->
  <image href="/images/previews/blank_template.jpg" width="768" height="1376"/>

  <!-- TABLET SCREEN TERMINAL INTERFACE -->
  <g transform="translate(224, 164)" filter="url(#shadow)">
    <!-- Terminal Dark Frame -->
    <rect width="320" height="464" rx="14" fill="#0F172A"/>
    
    <!-- Titlebar -->
    <rect width="320" height="38" rx="14" fill="#1E293B"/>
    <rect y="24" width="320" height="14" fill="#1E293B"/>
    
    <!-- Window Control Dots -->
    <circle cx="20" cy="19" r="5" fill="#EF4444"/>
    <circle cx="36" cy="19" r="5" fill="#F59E0B"/>
    <circle cx="52" cy="19" r="5" fill="#10B981"/>
    
    <!-- Tab Title -->
    <text x="160" y="23" text-anchor="middle" class="term-title">${item.tabTitle}</text>
    
    <!-- Console Content Area -->
    <g transform="translate(18, 68)">
      <!-- Command Prompt -->
      <text x="0" y="0" class="term-text">${item.cmd}</text>
      
      <!-- Execution status badge -->
      <rect x="0" y="22" width="220" height="24" rx="5" fill="#1E293B" stroke="#334155" stroke-width="1"/>
      <text x="10" y="38" font-family="'Fira Code', monospace" font-size="11.5" fill="#94A3B8">Status: Exit Code 0 (Success)</text>
      
      <!-- Output Label -->
      <text x="0" y="82" font-family="'Fira Code', monospace" font-size="12.5" font-weight="700" fill="#E2E8F0">&gt; Program Output:</text>
      
      <!-- Glowing Output Box -->
      <rect x="0" y="96" width="284" height="88" rx="10" fill="#022C22" stroke="#059669" stroke-width="1.5"/>
      
      <!-- Output Text -->
      <text x="16" y="134" class="term-out">Welcome to Programnotes</text>
      <text x="16" y="164" font-family="'Fira Code', monospace" font-size="11.5" fill="#A7F3D0">✔ Program executed successfully</text>
      
      <!-- Stats Footer -->
      <line x1="0" y1="215" x2="284" y2="215" stroke="#334155" stroke-width="1"/>
      <text x="0" y="240" font-family="'Fira Code', monospace" font-size="11" fill="#64748B">Topic: ${item.id.toUpperCase()} Core Syntax</text>
      <text x="0" y="260" font-family="'Fira Code', monospace" font-size="11" fill="#64748B">Source: Programnotes Library</text>
    </g>
  </g>

  <!-- NOTEBOOK HANDWRITTEN CONTENT -->
  <g transform="translate(248, 0)">
    <!-- Title -->
    <text x="0" y="743" class="desk-title">${item.notebookTitle}</text>
    
    <!-- Intro Theory -->
    <text x="0" y="768" class="desk-text">${item.theoryLine1}</text>
    <text x="0" y="794" class="desk-text">${item.theoryLine2}</text>
    
    <!-- Code Section Header -->
    <text x="0" y="845" font-family="'Caveat', cursive, sans-serif" font-size="21" font-weight="700" fill="#990000">${item.codeHeader}</text>
    
    <!-- Code Lines -->
${codeLinesXml}

    <!-- Key Takeaways Section -->
    <text x="0" y="1050" class="desk-title" font-size="21.5">★ Key Exam Points:</text>
${examPointsXml}
  </g>
</svg>`;
}

subjects.forEach(item => {
  const content = generateSVG(item);
  const targetPath = path.join(PREVIEWS_DIR, item.file);
  fs.writeFileSync(targetPath, content, 'utf-8');
  console.log('Generated:', targetPath);
});
