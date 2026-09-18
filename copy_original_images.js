import fs from 'fs';
import path from 'path';

const PREVIEWS_DIR = 'public/images/previews';

const fileMap = [
  { subcategory: 'Java', src: 'preview_java_1789462832232.jpg', dest: 'preview_java.jpg' },
  { subcategory: 'Python', src: 'preview_python_1789462955774.jpg', dest: 'preview_python.jpg' },
  { subcategory: 'C++', src: 'preview_cpp_1789462972574.jpg', dest: 'preview_cpp.jpg' },
  { subcategory: 'C', src: 'preview_c_1789463000208.jpg', dest: 'preview_c.jpg' },
  { subcategory: 'JavaScript', src: 'preview_js_1789463015002.jpg', dest: 'preview_javascript.jpg' },
  { subcategory: 'HTML/CSS', src: 'preview_htmlcss_1789463029427.jpg', dest: 'preview_htmlcss.jpg' },
  { subcategory: 'React', src: 'preview_react_1789463132428.jpg', dest: 'preview_react.jpg' },
  { subcategory: 'DSA', src: 'preview_dsa_1789463147476.jpg', dest: 'preview_dsa.jpg' },
  { subcategory: 'SQL', src: 'preview_sql_1789463162882.jpg', dest: 'preview_sql.jpg' },
  { subcategory: 'PHP', src: 'preview_php_1789463191445.jpg', dest: 'preview_php.jpg' }
];

console.log('--- Copying Image Files ---');
fileMap.forEach(item => {
  const srcPath = path.join(PREVIEWS_DIR, item.src);
  const destPath = path.join(PREVIEWS_DIR, item.dest);

  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`✅ Copied: ${item.src} -> ${item.dest} (${fs.statSync(destPath).size} bytes)`);
  } else {
    console.error(`❌ Source file missing: ${srcPath}`);
  }
});

console.log('\n--- Updating src/data/products.js ---');
const productsPath = 'src/data/products.js';
let content = fs.readFileSync(productsPath, 'utf8');

const idMap = {
  'prog-java-1': '/images/previews/preview_java.jpg',
  'prog-react-1': '/images/previews/preview_react.jpg',
  'programming-python-1': '/images/previews/preview_python.jpg',
  'programming-c-2': '/images/previews/preview_cpp.jpg',
  'programming-c-3': '/images/previews/preview_c.jpg',
  'programming-javascript-4': '/images/previews/preview_javascript.jpg',
  'programming-htmlcss-5': '/images/previews/preview_htmlcss.jpg',
  'programming-dsa-6': '/images/previews/preview_dsa.jpg',
  'programming-sql-7': '/images/previews/preview_sql.jpg',
  'programming-php-8': '/images/previews/preview_php.jpg'
};

for (const [id, imgPath] of Object.entries(idMap)) {
  const idStr = `"id": "${id}"`;
  const idIndex = content.indexOf(idStr);
  if (idIndex !== -1) {
    const nextBlockIndex = content.indexOf('"id":', idIndex + 10);
    const endIndex = nextBlockIndex !== -1 ? nextBlockIndex : content.length;
    let block = content.slice(idIndex, endIndex);

    block = block.replace(/"thumbnail":\s*"[^"]*"/, `"thumbnail": "${imgPath}"`);
    block = block.replace(/"previewImages":\s*\[[\s\S]*?\]/, `"previewImages": [\n    "${imgPath}"\n  ]`);

    content = content.slice(0, idIndex) + block + content.slice(endIndex);
    console.log(`✅ Updated product ID [${id}] to image [${imgPath}]`);
  } else {
    console.error(`❌ Product ID not found in products.js: ${id}`);
  }
}

fs.writeFileSync(productsPath, content, 'utf8');
console.log('\n🎉 Successfully updated src/data/products.js!');
