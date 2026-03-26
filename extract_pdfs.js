const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const PDFTOPPM = path.join(__dirname, 'node_modules', 'pdf-poppler', 'lib', 'win', 'poppler-0.51', 'bin', 'pdftoppm.exe');
const PDF_DIR = path.join(__dirname, 'public', 'pdf-img');
const OUTPUT_DIR = path.join(__dirname, 'public', 'extracted-imgs');

if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

const files = fs.readdirSync(PDF_DIR).filter(f => f.endsWith('.pdf'));
console.log(`Converting ${files.length} PDFs...`);

let done = 0;
let failed = 0;

for (const file of files) {
  const pdfPath = path.join(PDF_DIR, file);
  const baseName = file.replace('.pdf', '').replace(/\s+/g, '_');
  const outPrefix = path.join(OUTPUT_DIR, baseName);
  
  try {
    // -png = png format, -f 1 -l 1 = first page only, -r 100 = 100dpi (fast)
    execSync(`"${PDFTOPPM}" -png -f 1 -l 1 -r 100 "${pdfPath}" "${outPrefix}"`, { timeout: 60000 });
    done++;
    console.log(`✓ [${done}/${files.length}] ${file}`);
  } catch (err) {
    failed++;
    console.log(`✗ [FAIL] ${file}`);
  }
}

console.log(`\nDone! Success: ${done}, Failed: ${failed}`);

// Now rename files: pdftoppm appends -1 to the filename
const extracted = fs.readdirSync(OUTPUT_DIR);
for (const f of extracted) {
  if (f.endsWith('-1.png') || f.endsWith('-01.png')) {
    const newName = f.replace(/-0?1\.png$/, '.png');
    fs.renameSync(path.join(OUTPUT_DIR, f), path.join(OUTPUT_DIR, newName));
  }
}
console.log('Renamed all output files.');
