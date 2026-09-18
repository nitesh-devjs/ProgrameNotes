const fs = require('fs');

const mappings = {
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

let content = fs.readFileSync('src/data/products.js', 'utf8');

for (const [id, imgPath] of Object.entries(mappings)) {
  const idStr = `"id": "${id}"`;
  const idIndex = content.indexOf(idStr);
  if (idIndex !== -1) {
    const nextBlockIndex = content.indexOf('"id":', idIndex + 10);
    const endIndex = nextBlockIndex !== -1 ? nextBlockIndex : content.length;
    let block = content.slice(idIndex, endIndex);
    
    block = block.replace(/"thumbnail":\s*"[^"]*"/, `"thumbnail": "${imgPath}"`);
    block = block.replace(/"previewImages":\s*\[[\s\S]*?\]/, `"previewImages": [\n    "${imgPath}"\n  ]`);
    
    content = content.slice(0, idIndex) + block + content.slice(endIndex);
  }
}

fs.writeFileSync('src/data/products.js', content, 'utf8');
console.log('Successfully restored original AI JPG preview images in src/data/products.js!');
