const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'app', 'globals.css');
let css = fs.readFileSync(cssPath, 'utf8');

// Replace vibrant greens with professional, sleek, mature blues/indigos

// Base variables
css = css.replace(/--cta-green: #10b981;/g, '--cta-green: #2563eb;');
css = css.replace(/--cta-green-hover: #34d399;/g, '--cta-green-hover: #3b82f6;');

// Hardcoded greens in gradients and glows
css = css.replace(/#00cc44/gi, '#2563eb');  // Royal blue main
css = css.replace(/#0ab770/gi, '#1d4ed8');  // Darker royal blue
css = css.replace(/#00aa33/gi, '#1e40af');  // Even darker blue for hover ends
css = css.replace(/#00ffaa/gi, '#60a5fa');  // Light sky blue for accents/text gradients
css = css.replace(/#00ff55/gi, '#38bdf8');  // Bright cyan/sky for badges/text
css = css.replace(/#34d399/gi, '#3b82f6');
css = css.replace(/#10b981/gi, '#2563eb');

// Also update rgba greens used in shadows/glows/borders
// rgba(0, 204, 68, X) was essentially rgba(0,cc,44) -> #00cc44 
// rgba(16, 185, 129, X) is #10b981
// rgba(0, 255, 85, X) is #00ff55
css = css.replace(/rgba\(0,\s*204,\s*68/g, 'rgba(37, 99, 235');
css = css.replace(/rgba\(16,\s*185,\s*129/g, 'rgba(37, 99, 235');
css = css.replace(/rgba\(0,\s*255,\s*85/g, 'rgba(56, 189, 248');

// Let's also adjust the "gradient" text on the landing page so it gradients beautifully
// from sky blue to cyan instead of green to cyan
// from: "linear-gradient(135deg, #00ff55, #00ccff)"
css = css.replace(/linear-gradient\(135deg,\s*#38bdf8,\s*#00ccff\)/gi, 'linear-gradient(135deg, #3b82f6, #06b6d4)');

// The name is still --cta-green, but the color is now blue. As long as the visuals are fixed, that's fine.
fs.writeFileSync(cssPath, css);
console.log('Successfully replaced all unprofessional greens with premium blues.');
