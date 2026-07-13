const fs = require('fs');
const path = require('path');

const inputPath = 'c:\\Users\\beKs\\Desktop\\Brigada\\Albanian Rhyme Words\\shqip.txt';
const outputPath = 'c:\\Users\\beKs\\Desktop\\Brigada\\Albanian Rhyme Words\\shqip.txt';

console.log('Loading wordlist from ' + inputPath);

if (!fs.existsSync(inputPath)) {
  console.error('File not found!');
  process.exit(1);
}

const data = fs.readFileSync(inputPath, 'utf8');
const lines = data.split(/\r?\n/).map(w => w.trim()).filter(w => w.length > 0);
console.log(`Original words: ${lines.length}`);

const VOWELS = ['a', 'e', 'ë', 'i', 'o', 'u', 'y'];
const isVowel = (char) => VOWELS.includes(char);

const cleanedWords = [];

for (const word of lines) {
  const w = word.toLowerCase();
  
  // 1. Length rule
  if (w.length < 2 || w.length > 14) continue;
  
  // 2. Reject words containing characters or combinations that don't exist in Albanian
  // 'w' is not in the alphabet.
  // 'ch', 'gh', 'ph', 'kh', 'sch', 'ck', 'tz' do not exist in Albanian orthography.
  if (w.includes('w') || 
      w.includes('ch') || 
      w.includes('gh') || 
      w.includes('ph') || 
      w.includes('kh') || 
      w.includes('sch') || 
      w.includes('ck') || 
      w.includes('tz')) {
    continue;
  }
  
  // 3. Reject words with 3+ identical letters in a row (e.g. "aaa")
  if (/(.)\1\1/.test(w)) continue;
  
  // 4. Reject words with double consonants other than 'll' and 'rr'
  if (/([bcçdfghjkmnpqstvxz])\1/.test(w)) continue;
  
  // 5. Reject words starting with double identical vowels
  if (/^([aeëiouy])\1/.test(w)) continue;
  
  // 6. Reject double vowels other than "ee" and "oo"
  if (/([aëiuy])\1/.test(w)) continue;
  
  // 7. Must contain at least one vowel
  let hasVowel = false;
  for (let char of w) {
    if (isVowel(char)) {
      hasVowel = true;
      break;
    }
  }
  if (!hasVowel) continue;
  
  // 8. Check consecutive consonants after replacing digraphs
  // Digraphs in Albanian: dh, gj, ll, nj, rr, sh, th, xh, zh
  let replaced = w.replace(/dh|gj|ll|nj|rr|sh|th|xh|zh/g, 'c');
  
  let maxConsonantsInARow = 0;
  let currentConsonants = 0;
  
  for (let char of replaced) {
    if (!isVowel(char)) {
      currentConsonants++;
      if (currentConsonants > maxConsonantsInARow) {
        maxConsonantsInARow = currentConsonants;
      }
    } else {
      currentConsonants = 0;
    }
  }
  
  if (maxConsonantsInARow > 3) continue;
  
  // 9. Check for nonsense vowel combinations (more than 3 vowels in a row)
  if (/[aeëiouy]{4,}/.test(w)) continue;
  
  // 10. Avoid words ending in weird clusters
  if (/[bcdfghjklmnpqrstvxz]x$/.test(w)) continue;
  
  // 11. Avoid keyboard mashing and common password substrings
  if (w.includes('asdf') || w.includes('qwer') || w.includes('zxcv') || w.includes('hjkl') ||
      w.includes('asda') || w.includes('asds') || w.includes('sdfg') || w.includes('dfgh') ||
      w.includes('fghj') || w.includes('ghjk') || w.includes('dsad') || w.includes('sdsd') ||
      w.includes('dfdf') || w.includes('fgfg') || w.includes('ghgh') || w.includes('hjhj') ||
      w.includes('jkjk') || w.includes('klkl')) {
    continue;
  }
  
  // 12. Reject English-only common suffixes
  if (w.endsWith('tion') || 
      w.endsWith('ness') || 
      w.endsWith('ship') || 
      w.endsWith('able') || 
      w.endsWith('ible') || 
      w.endsWith('ity')) {
    continue;
  }
  
  // 13. Filter out words consisting of repeating 2-letter syllables (like "abab", "cdcd")
  if (w.length >= 4 && w.length % 2 === 0) {
    const half = w.substring(0, w.length / 2);
    if (half + half === w) continue;
  }
  
  cleanedWords.push(word);
}

console.log(`Cleaned words: ${cleanedWords.length}`);

// Write back to file
fs.writeFileSync(outputPath, cleanedWords.join('\n'), 'utf8');
console.log('Cleaned wordlist saved successfully.');
