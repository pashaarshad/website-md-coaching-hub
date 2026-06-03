/**
 * Certificate Data Extractor v2
 * 
 * Reads all PDF certificates from public/certificate/,
 * extracts text, identifies certificate numbers (MDCH/YYYY/...) pattern,
 * student names from the PDF content, course names, issue dates, etc.
 * Generates certificate-data.json for the website verification feature.
 * 
 * Run: node scripts/extract-certificates.js
 */

const fs = require('fs');
const path = require('path');
const pdfParse = require('pdf-parse');

const CERT_DIR = path.join(__dirname, '..', 'public', 'certificate');
const OUTPUT_FILE = path.join(__dirname, '..', 'public', 'certificate-data.json');

// Pattern to match certificate codes: MDCH/2025/INT-258
const CERT_CODE_REGEX = /MDCH\s*\/\s*\d{4}\s*\/\s*[A-Z0-9\-]+/gi;

async function extractCertificateData() {
  console.log('🔍 Starting certificate data extraction...');
  
  if (!fs.existsSync(CERT_DIR)) {
    console.error('❌ Certificate directory not found:', CERT_DIR);
    process.exit(1);
  }

  const pdfFiles = fs.readdirSync(CERT_DIR).filter(f => f.toLowerCase().endsWith('.pdf'));
  console.log(`📄 Found ${pdfFiles.length} PDF files\n`);

  const certificates = [];

  for (const fileName of pdfFiles) {
    const filePath = path.join(CERT_DIR, fileName);
    console.log(`Processing: ${fileName}`);
    
    try {
      const dataBuffer = fs.readFileSync(filePath);
      const pdfData = await pdfParse(dataBuffer);
      const text = pdfData.text;

      // --- Extract Certificate Code ---
      let certCode = null;
      const codeMatches = text.match(CERT_CODE_REGEX);
      if (codeMatches && codeMatches.length > 0) {
        certCode = codeMatches[0].replace(/\s+/g, '').trim();
      }

      // --- Extract Student Name from PDF text ---
      // The text typically starts with the student name on line 3
      // Pattern 1: "STUDENT NAME\nhas successfully completed..."
      // Pattern 2: For internship cert: "CERTIFICATE\nHas successfully... Chandraprakash worked..."
      let studentName = '';
      
      // Try to find name before "has successfully completed"
      const nameMatch1 = text.match(/\n\n([A-Za-z\s]+)\nhas successfully completed/i);
      if (nameMatch1 && nameMatch1[1]) {
        studentName = nameMatch1[1].trim();
      }
      
      // For the internship format, extract the name differently
      if (!studentName) {
        const nameMatch2 = text.match(/certify that[:\s]*\n?\s*([A-Za-z\s]+?)(?:\n|worked|has)/i);
        if (nameMatch2 && nameMatch2[1]) {
          studentName = nameMatch2[1].trim();
        }
      }

      // Fallback: Extract from filename
      if (!studentName) {
        studentName = fileName
          .replace(/\.pdf$/i, '')
          .replace(/\s*certificate\s*/gi, '')
          .replace(/\s*crtificate\s*/gi, '')
          .replace(/\s*\(\d+\)\s*/g, '')
          .replace(/Blue and Gold Modern.*$/i, 'Chandraprakash')
          .trim();
      }

      // Title-case the student name
      studentName = studentName
        .split(' ')
        .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
        .join(' ');

      // --- Extract Course Name ---
      let courseName = 'Web Development';
      const courseMatch = text.match(/completed\s+(?:the\s+)?(.+?)\s*(?:Course|Program|Internship)\s*\[/i);
      if (courseMatch && courseMatch[1]) {
        courseName = courseMatch[1].replace(/\s+/g, ' ').trim();
      }
      // Check for internship
      const internMatch = text.match(/internship\s+program\s+at\s+(.+?)[\.\s]/i);
      if (internMatch) {
        courseName = 'Internship Program';
      }

      // --- Extract Issue Date ---
      let issueDate = '';
      const dateMatch = text.match(/Issued\s+on\s*:\s*(.+?)(?:\n|$)/i);
      if (dateMatch && dateMatch[1]) {
        issueDate = dateMatch[1].trim();
      }
      
      // Try alternate date format
      if (!issueDate) {
        const dateMatch2 = text.match(/(\d{1,2}\s+(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{4})/i);
        if (dateMatch2) {
          issueDate = dateMatch2[1].trim();
        }
      }

      // --- Extract Duration ---
      let duration = '';
      const durationMatch = text.match(/\[([^\]]+)\]/);
      if (durationMatch) {
        duration = durationMatch[1].trim();
      }

      if (certCode) {
        certificates.push({
          code: certCode,
          studentName: studentName,
          course: courseName,
          duration: duration,
          issueDate: issueDate || 'N/A',
          grade: 'Completed',
          status: 'Verified & Active',
          pdfFile: `/certificate/${fileName}`,
        });
        console.log(`  ✅ ${studentName} | ${certCode} | ${courseName} | ${issueDate}`);
      } else {
        console.log(`  ⚠️  No certificate code found in ${fileName}`);
      }
    } catch (err) {
      console.error(`  ❌ Error processing ${fileName}:`, err.message);
    }
  }

  // Write output JSON
  const output = {
    generatedAt: new Date().toISOString(),
    totalCertificates: certificates.length,
    certificates: certificates,
  };

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2), 'utf8');
  console.log(`\n✅ Certificate data written to: ${OUTPUT_FILE}`);
  console.log(`📊 Total certificates extracted: ${certificates.length}`);
  
  // Print summary
  console.log('\n--- Certificate Summary ---');
  certificates.forEach((c, i) => {
    console.log(`${i + 1}. ${c.studentName} | Code: ${c.code} | Course: ${c.course} | Issued: ${c.issueDate}`);
  });
}

extractCertificateData().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
