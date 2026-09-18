const fs = require("fs");
const path = require("path");

const publicImagesDir = "public/images/previews";

const languages = [
  { sub: "Java", theory: "Java is a high-level, class-based, object-oriented\nprogramming language that is designed to have as few\nimplementation dependencies as possible.", code: "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Welcome to Programnotes\");\n  }\n}" },
  { sub: "Python", theory: "Python is an interpreted, high-level and general-purpose\nprogramming language. Its design philosophy emphasizes\ncode readability with significant indentation.", code: "def greet():\n    print(\"Welcome to Programnotes\")\n\ngreet()" },
  { sub: "C++", theory: "C++ is a general-purpose programming language created\nas an extension of the C programming language, or\n\"C with Classes\".", code: "#include <iostream>\n\nint main() {\n    std::cout << \"Welcome to Programnotes\" << std::endl;\n    return 0;\n}" },
  { sub: "C", theory: "C is a general-purpose, procedural computer programming\nlanguage supporting structured programming, lexical\nvariable scope, and recursion.", code: "#include <stdio.h>\n\nint main() {\n    printf(\"Welcome to Programnotes\\n\");\n    return 0;\n}" },
  { sub: "JavaScript", theory: "JavaScript is a programming language that is one of the\ncore technologies of the World Wide Web, alongside\nHTML and CSS.", code: "function greet() {\n  console.log(\"Welcome to Programnotes\");\n}\n\ngreet();" },
  { sub: "HTML/CSS", theory: "HTML is the standard markup language for documents\ndesigned to be displayed in a web browser. CSS is used\nfor styling.", code: "<body>\n  <h1 class=\"welcome\">\n    Welcome to Programnotes\n  </h1>\n</body>" },
  { sub: "React", theory: "React is a free and open-source front-end JavaScript\nlibrary for building user interfaces based on UI\ncomponents.", code: "export default function App() {\n  return (\n    <h1>Welcome to Programnotes</h1>\n  );\n}" },
  { sub: "DSA", theory: "Data Structures and Algorithms are fundamental concepts\nin computer science used to solve problems and store\ndata efficiently.", code: "function bfs(node) {\n  // Algorithm visualization output\n  print(\"Welcome to Programnotes\")\n}" },
  { sub: "SQL", theory: "SQL is a domain-specific language used in programming\nand designed for managing data held in a relational\ndatabase management system.", code: "SELECT message \nFROM greetings \nWHERE platform = \"Welcome to Programnotes\";" },
  { sub: "PHP", theory: "PHP is a general-purpose scripting language geared\ntowards web development. It was originally created by\nDanish-Canadian programmer Rasmus Lerdorf.", code: "<?php\n  echo \"Welcome to Programnotes\";\n?>" }
];

const width = 800;
const height = 1422;

const createSVG = (lang) => {
  const theoryLines = lang.theory.split("\n").map((line, idx) => `<tspan x="140" dy="35">${line}</tspan>`).join("");
  const codeLines = lang.code.split("\n").map((line, idx) => `<tspan x="140" dy="30">${line.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</tspan>`).join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
  <!-- Background Image -->
  <image href="/images/previews/blank_template.jpg" width="${width}" height="${height}" />
  
  <!-- Tablet Output Text -->
  <g transform="translate(180, 240)">
    <rect x="-30" y="-30" width="460" height="220" fill="rgba(255,255,255,1)" rx="10" />
    <text x="0" y="0" font-family="monospace, Consolas" font-size="22" font-weight="bold" fill="#333">
      <tspan x="0" dy="0">&gt; Output:</tspan>
      <tspan x="0" dy="40" fill="#0066cc">Welcome to Programnotes</tspan>
    </text>
  </g>

  <!-- Notebook Theory -->
  <g transform="translate(0, 680)">
    <text x="140" y="0" font-family="'Comic Sans MS', cursive, sans-serif" font-size="32" font-weight="bold" fill="#1a1a1a">
      ${lang.sub} Basics
    </text>
    <text x="140" y="50" font-family="'Comic Sans MS', cursive, sans-serif" font-size="22" fill="#222">
      ${theoryLines}
    </text>
  </g>

  <!-- Notebook Code -->
  <g transform="translate(0, 940)">
    <text x="140" y="0" font-family="monospace, Consolas" font-size="22" font-weight="bold" fill="#B71C1C">
      ${codeLines}
    </text>
  </g>
</svg>`;
};

languages.forEach(lang => {
  const fileName = `preview_${lang.sub.toLowerCase().replace(/\//g, "")}.svg`;
  const filePath = path.join(publicImagesDir, fileName);
  fs.writeFileSync(filePath, createSVG(lang));
});

// Update products.js
let prodContent = fs.readFileSync("src/data/products.js", "utf8");
const prodStart = prodContent.indexOf("export const PRODUCTS = [");
const prodEnd = prodContent.indexOf("];", prodStart) + 1;
const productsStr = prodContent.substring(prodStart + 24, prodEnd);

let existingProducts = [];
try {
  existingProducts = eval(productsStr);
} catch (e) {
  console.log("Error evaluating products: " + e.message);
  process.exit(1);
}

existingProducts.forEach(p => {
  if (p.category === "programming") {
    const map = languages.find(m => m.sub === p.subcategory);
    if (map) {
      const fileName = `preview_${map.sub.toLowerCase().replace(/\//g, "")}.svg`;
      p.previewImages = [`/images/previews/${fileName}`];
      p.thumbnail = `/images/previews/${fileName}`;
    }
  }
});

const newProductsStr = "[\n  " + existingProducts.map(p => JSON.stringify(p, null, 2)).join(",\n  ") + "\n]";
const updatedContent = prodContent.substring(0, prodStart + 24) + newProductsStr + prodContent.substring(prodEnd);
fs.writeFileSync("src/data/products.js", updatedContent);
console.log("SVGs generated and products.js updated!");
