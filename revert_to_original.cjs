const fs = require('fs');
const path = require('path');

const PREVIEWS_DIR = 'public/images/previews';

const fileMap = [
  { id: 'prog-java-1', src: 'preview_java_1789462832232.jpg', dest: 'preview_java.jpg' },
  { id: 'prog-react-1', src: 'preview_react_1789463132428.jpg', dest: 'preview_react.jpg' },
  { id: 'programming-python-1', src: 'preview_python_1789462955774.jpg', dest: 'preview_python.jpg' },
  { id: 'programming-c-2', src: 'preview_cpp_1789462972574.jpg', dest: 'preview_cpp.jpg' },
  { id: 'programming-c-3', src: 'preview_c_1789463000208.jpg', dest: 'preview_c.jpg' },
  { id: 'programming-javascript-4', src: 'preview_js_1789463015002.jpg', dest: 'preview_javascript.jpg' },
  { id: 'programming-htmlcss-5', src: 'preview_htmlcss_1789463029427.jpg', dest: 'preview_htmlcss.jpg' },
  { id: 'programming-dsa-6', src: 'preview_dsa_1789463147476.jpg', dest: 'preview_dsa.jpg' },
  { id: 'programming-sql-7', src: 'preview_sql_1789463162882.jpg', dest: 'preview_sql.jpg' },
  { id: 'programming-php-8', src: 'preview_php_1789463191445.jpg', dest: 'preview_php.jpg' }
];

console.log('--- Overwriting with Original 2:28 PM AI Images ---');
fileMap.forEach(item => {
  const srcPath = path.join(PREVIEWS_DIR, item.src);
  const destPath = path.join(PREVIEWS_DIR, item.dest);

  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`✅ Restored: ${item.src} -> ${item.dest} (${fs.statSync(destPath).size} bytes)`);
  } else {
    console.error(`❌ Missing: ${srcPath}`);
  }
});

console.log('\n--- Updating src/data/products.js ---');
const productsPath = 'src/data/products.js';
let content = fs.readFileSync(productsPath, 'utf8');

fileMap.forEach(item => {
  const imgPath = `/images/previews/${item.dest}`;
  const idStr = `"id": "${item.id}"`;
  const idIndex = content.indexOf(idStr);
  if (idIndex !== -1) {
    const nextBlockIndex = content.indexOf('"id":', idIndex + 10);
    const endIndex = nextBlockIndex !== -1 ? nextBlockIndex : content.length;
    let block = content.slice(idIndex, endIndex);

    block = block.replace(/"thumbnail":\s*"[^"]*"/, `"thumbnail": "${imgPath}"`);
    block = block.replace(/"previewImages":\s*\[[\s\S]*?\]/, `"previewImages": [\n    "${imgPath}"\n  ]`);

    content = content.slice(0, idIndex) + block + content.slice(endIndex);
    console.log(`✅ Linked ID [${item.id}] -> ${imgPath}`);
  }
});

fs.writeFileSync(productsPath, content, 'utf8');
console.log('\n🎉 Successfully restored original AI images across the entire website!');
