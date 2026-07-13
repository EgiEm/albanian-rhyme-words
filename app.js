// Constants & Elements
const VOWELS = ['a', 'e', 'ë', 'i', 'o', 'u', 'y'];
const DIPHTHONGS = ['ua', 'ue', 'ye', 'ie', 'au', 'eu', 'ou'];

// Set of high-priority rap and street keywords used for "Top Picks"
const RAP_KEYWORDS = new Set([
    'kerr', 'kerri', 'kerre', 'kerret', 'kerrin', 'kerrash', 'kerrve', 
    'kurgjo', 'kurgjoja', 'sen', 'seni', 'sene', 'senet', 'senin', 'seneve', 
    'loc', 'loci', 'loca', 'shac', 'shaci', 'shaca', 'shacave', 'shacët', 
    'baba', 'babë', 'bir', 'biri', 'shoq', 'shoqi', 'dreq', 'dreqi', 'dreqët', 
    'budall', 'budalla', 'budallët', 'koti', 'lshoj', 'lshojm', 'lshojn', 'lshu', 
    'kallxoj', 'kallxojm', 'kallxojn', 'kallxu', 'ngoj', 'ngojm', 'ngojn', 'ngu', 
    'shkoj', 'shkojm', 'shkojn', 'shku', 'bojm', 'bojn', 'boju', 'bo', 'thom', 'thojn', 
    'tash', 'bash', 'spe', 'po', 'veq', 'shmek', 'shmeki', 'llaf', 'llafi', 'llafe', 'llafet', 
    'zhurme', 'zhurma', 'pare', 'paret', 'para', 'leke', 'leket', 'tona', 'tonat', 'ton', 
    'krejt', 'krejtve', 'shoki', 'shokit', 'shokt', 'vibe', 'vibe-i', 'vibe-at', 'hejt', 
    'hejter', 'hejtera', 'hejterat', 'beat', 'beati', 'beat-i', 'flow', 'flow-i', 'rim', 
    'rima', 'rimat', 'rap', 'rapi', 'rap-i', 'trap', 'trapi', 'trap-i', 'drill', 'drilli', 
    'drill-i', 'hustle', 'hustleri', 'hustlerat', 'keq', 'keqi', 'keqt', 'fort', 'forti', 
    'fortë', 'smut', 'smuti', 'xhelozi', 'xheloz', 'xhelozat', 'fam', 'fama', 'fami', 'kesh', 
    'keshi', 'kesh-i', 'para', 'lek', 'leki', 'plumba', 'plumbi', 'plumbat', 'naten', 'nata', 
    'nates', 'ditën', 'dita', 'dites', 'rruge', 'rruga', 'rruges', 'rrugt', 'rrugët', 'asfallt', 
    'asfallti', 'benz', 'benzi', 'audi', 'audi-i', 'bmw', 'bmw-ja', 'mercedes', 'mercedesi', 
    'porshe', 'porsheja', 'ferrari', 'ferrari-i', 'lamborghini', 'lambo', 'lambo-ja', 
    'shpejt', 'shpejti', 'gazin', 'gazi', 'frena', 'freni', 'ndalu', 'ndalo', 'vrap', 'vrapi', 
    'vrapu', 'ik', 'iki', 'iku', 'hajt', 'hajde', 'shuj', 'shujë', 'kqyr', 'kqyri', 'kqyrim', 'kqyru', 'kqyrt',
    'mua', 'mu', 'ty', 'tu', 'vet', 'vetja', 'veti', 'gjallë', 'vdekë', 'vdekje', 'gjak', 'gjakut', 'zjarr', 'zjarri', 'akull', 'ftohtë', 'nxehtë', 'lot', 'loti', 'botë', 'bota', 'jetë', 'jeta', 'mbret', 'mbreti', 'shtet', 'shteti', 'besim', 'tradhti', 'dashuri', 'urrejtje', 'shpresë', 'loja', 'lojë', 'fitore', 'humbje', 'sukses', 'ari', 'flori', 'armik', 'mik', 'miku', 'besnik', 'tradhtar', 'fajtor', 'shpirt', 'trup', 'trupi', 'turp', 'turpi', 'nder', 'nderi', 'zot', 'zoti', 'ferr', 'ferri', 'parajsë', 'sy', 'sytë', 'dorë', 'dora', 'krah', 'krahu', 'zemër', 'zemra', 'mendje', 'mendja', 'kokë', 'koka', 'fjalë', 'fjala', 'besë', 'besa', 'shokë', 'shokt', 'muri', 'shkru', 'punu', 'shku', 'lexu', 'kallxu', 'ndertu', 'ndalu', 'provu', 'mbaru', 'maru', 'bo', 'lidh', 'çmend', 'zjarr', 'mall', 'humb', 'fitu', 'shpresu', 'besu', 'shkatrru', 'ndryshu', 'kriju', 'fillu', 'mbaru', 'harru', 'kujtu', 'ndje', 'ndjejm', 'ndjejn', 'urrej', 'dashuroj', 'shkatërroj', 'harroj', 'kujtoj', 'rrejt', 'rren', 'rrena', 'rrenat', 'vashë', 'qikë', 'gocë', 'femër', 'djalë', 'çun', 'pishmon', 'vonë', 'herët', 'vetëm', 'bashkë', 'zonë', 'zona', 'kodra', 'kodër', 'mal', 'mali', 'det', 'deti', 'qiell', 'qielli', 'diell', 'dielli', 'hënë', 'hëna', 'yll', 'yjet', 'retë', 'shi', 'shiu', 'borë', 'bora', 'erë', 'era'
]);

let wordlist = [];
let currentResults = [];

// DOM Elements
const loadingOverlay = document.getElementById('loading-overlay');
const progressBar = document.getElementById('progress-bar');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const rhymeTypeChips = document.getElementById('rhyme-type-chips');
const syllableChips = document.getElementById('syllable-chips');
const resultsMeta = document.getElementById('results-meta');
const resultsTitle = document.getElementById('results-title');
const searchedWordDisplay = document.getElementById('searched-word-display');
const resultsCount = document.getElementById('results-count');
const resultsContainer = document.getElementById('results-container');
const toast = document.getElementById('toast');

// Lyrics Pad Elements
const lyricsTextarea = document.getElementById('lyrics-textarea');
const charCountDisplay = document.getElementById('char-count');
const wordCountDisplay = document.getElementById('word-count');
const copyLyricsBtn = document.getElementById('copy-lyrics-btn');
const clearLyricsBtn = document.getElementById('clear-lyrics-btn');
const saveStatus = document.getElementById('save-status');

// Filter States
let activeRhymeType = 'all'; // 'all', 'perfect', 'good', 'vowel'
let activeSyllableFilter = 'all'; // 'all', '1', '2', '3', '4'

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    loadLyricsPad();
    loadWordlist();
    setupEventListeners();
});

// Load Lyrics Pad from localStorage
function loadLyricsPad() {
    const savedLyrics = localStorage.getItem('albanian_rhymes_lyrics') || '';
    lyricsTextarea.value = savedLyrics;
    updateLyricsStats();
}

function updateLyricsStats() {
    const text = lyricsTextarea.value;
    charCountDisplay.textContent = `${text.length} shkronja`;
    
    // Count words (filter empty strings)
    const words = text.trim().split(/\s+/).filter(w => w.length > 0);
    wordCountDisplay.textContent = `${words.length} fjalë`;
}

// Save Lyrics Pad to localStorage
function saveLyrics() {
    localStorage.setItem('albanian_rhymes_lyrics', lyricsTextarea.value);
    
    // Show quick visual pulse of saved status
    saveStatus.style.opacity = '1';
    const statusDot = saveStatus.querySelector('.status-dot');
    statusDot.style.backgroundColor = 'var(--primary)';
    statusDot.style.boxShadow = '0 0 10px var(--primary)';
    
    setTimeout(() => {
        statusDot.style.backgroundColor = 'var(--accent-green)';
        statusDot.style.boxShadow = '0 0 8px var(--accent-green)';
    }, 500);
}

// Fetch and load the dictionary with progress tracking
async function loadWordlist() {
    try {
        // If loaded via wordlist.js (local file support to bypass CORS on file:// protocol)
        if (window.wordlist && window.wordlist.length > 0) {
            wordlist = processAndInjectGeg(window.wordlist);
            console.log(`Wordlist loaded from JS & processed: ${wordlist.length} words.`);
            
            // Animate progress bar to 100% quickly
            progressBar.style.width = '100%';
            setTimeout(() => {
                loadingOverlay.style.opacity = '0';
                setTimeout(() => {
                    loadingOverlay.style.display = 'none';
                    searchInput.removeAttribute('disabled');
                    searchBtn.removeAttribute('disabled');
                    searchInput.focus();
                }, 500);
            }, 300);
            return;
        }

        // Fallback: Fetch text file if JS array is not loaded (e.g. if script load failed)
        const response = await fetch('shqip.txt');
        if (!response.ok) throw new Error('Dështoi ngarkimi i fjalorit.');
        
        const contentLength = response.headers.get('content-length');
        const totalBytes = contentLength ? parseInt(contentLength, 10) : 2100000;
        
        const reader = response.body.getReader();
        let receivedBytes = 0;
        let chunks = [];
        
        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            
            chunks.push(value);
            receivedBytes += value.length;
            
            const percent = Math.min(100, Math.round((receivedBytes / totalBytes) * 100));
            progressBar.style.width = `${percent}%`;
        }
        
        const allChunks = new Uint8Array(receivedBytes);
        let position = 0;
        for (let chunk of chunks) {
            allChunks.set(chunk, position);
            position += chunk.length;
        }
        
        const text = new TextDecoder('utf-8').decode(allChunks);
        const rawList = text.split(/\r?\n/).map(w => w.trim()).filter(w => w.length > 0);
        wordlist = processAndInjectGeg(rawList);
        console.log(`Wordlist loaded from fetch & processed: ${wordlist.length} words.`);
        
        setTimeout(() => {
            loadingOverlay.style.opacity = '0';
            setTimeout(() => {
                loadingOverlay.style.display = 'none';
                searchInput.removeAttribute('disabled');
                searchBtn.removeAttribute('disabled');
                searchInput.focus();
            }, 500);
        }, 300);
        
    } catch (err) {
        console.error(err);
        loadingOverlay.querySelector('h2').textContent = 'Ndodhi një gabim!';
        loadingOverlay.querySelector('p').textContent = 'Ju lutem rifreskoni faqen. Sigurohuni që wordlist.js ose shqip.txt ekziston.';
        loadingOverlay.querySelector('.loader').style.borderTopColor = '#ef4444';
    }
}

// Setup Event Listeners
function setupEventListeners() {
    let searchTimeout;

    // Live search with debouncing
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.trim();
        if (query === '') {
            clearTimeout(searchTimeout);
            resultsMeta.style.display = 'none';
            resetToEmptyState();
            return;
        }
        
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            triggerSearch();
        }, 200);
    });

    // Enter key support
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            clearTimeout(searchTimeout);
            triggerSearch();
        }
    });

    // Search button click
    searchBtn.addEventListener('click', () => {
        clearTimeout(searchTimeout);
        triggerSearch();
    });

    // Suggestion chip clicks (event delegation)
    resultsContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.suggestion-btn');
        if (!btn) return;
        
        searchInput.value = btn.textContent;
        triggerSearch();
        searchInput.focus();
    });

    // Rhyme Type Chips
    rhymeTypeChips.addEventListener('click', (e) => {
        const chip = e.target.closest('.chip');
        if (!chip) return;
        
        rhymeTypeChips.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        activeRhymeType = chip.dataset.type;
        
        filterAndRenderResults();
    });

    // Syllable Chips
    syllableChips.addEventListener('click', (e) => {
        const chip = e.target.closest('.chip');
        if (!chip) return;
        
        syllableChips.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        activeSyllableFilter = chip.dataset.syllable;
        
        filterAndRenderResults();
    });

    // Lyrics Notepad auto-save
    lyricsTextarea.addEventListener('input', () => {
        updateLyricsStats();
        saveLyrics();
    });

    // Copy Lyrics Button
    copyLyricsBtn.addEventListener('click', () => {
        if (!lyricsTextarea.value.trim()) {
            showToast('Notepadi është i zbrazët!');
            return;
        }
        navigator.clipboard.writeText(lyricsTextarea.value)
            .then(() => showToast('Teksti u kopjua në clipboard!'))
            .catch(() => showToast('Dështoi kopjimi i tekstit.'));
    });

    // Clear Lyrics Button
    clearLyricsBtn.addEventListener('click', () => {
        if (!lyricsTextarea.value.trim()) return;
        if (confirm('A je i sigurt që dëshiron ta pastrosh tërë tekstin?')) {
            lyricsTextarea.value = '';
            updateLyricsStats();
            saveLyrics();
            showToast('Teksti u fshi!');
        }
    });
}

// Reset results container to empty state with suggestions
function resetToEmptyState() {
    resultsContainer.innerHTML = `
        <div class="empty-state">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="empty-icon"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg>
            <p>Shkruaj një fjalë më lart ose provo këto shembuj:</p>
            <div class="search-suggestions">
                <button class="suggestion-btn">audi</button>
                <button class="suggestion-btn">rruga</button>
                <button class="suggestion-btn">besimi</button>
                <button class="suggestion-btn">koha</button>
                <button class="suggestion-btn">vibe</button>
            </div>
            <small>Kliko mbi cilëndo fjalë në rezultate për ta kopjuar menjëherë.</small>
        </div>
    `;
}

// Helpers for vowels & syllables
function isVowel(char) {
    return VOWELS.includes(char.toLowerCase());
}

function countSyllables(word) {
    word = word.toLowerCase();
    let vowelsCount = 0;
    let i = 0;
    
    while (i < word.length) {
        if (isVowel(word[i])) {
            // Check if it forms a diphthong with the next character
            if (i + 1 < word.length && isVowel(word[i+1])) {
                const pair = word[i] + word[i+1];
                if (DIPHTHONGS.includes(pair)) {
                    vowelsCount++;
                    i += 2;
                    continue;
                }
            }
            vowelsCount++;
        }
        i++;
    }
    return Math.max(1, vowelsCount);
}

// Get the last N vowels from a word
function getLastVowels(word, count = 2) {
    const vowels = [];
    for (let i = word.length - 1; i >= 0; i--) {
        if (isVowel(word[i])) {
            vowels.unshift(word[i].toLowerCase());
            if (vowels.length === count) break;
        }
    }
    return vowels.join('');
}

// Determine if and how a word rhymes with the target
function calculateRhyme(word, target) {
    if (word === target) return null;
    
    const wordLen = word.length;
    const targetLen = target.length;
    
    // Check Perfect Rhymes (share last 3+ characters, or last 2 for short words)
    const perfectLen = targetLen >= 4 ? 3 : 2;
    if (wordLen >= perfectLen && targetLen >= perfectLen) {
        const targetEnd = target.substring(targetLen - perfectLen);
        const wordEnd = word.substring(wordLen - perfectLen);
        if (targetEnd === wordEnd) {
            return {
                word: word,
                strength: 'perfect',
                syllables: countSyllables(word)
            };
        }
    }
    
    // Check Good Rhymes (share last 2 characters)
    if (wordLen >= 2 && targetLen >= 2) {
        const targetEnd = target.substring(targetLen - 2);
        const wordEnd = word.substring(wordLen - 2);
        if (targetEnd === wordEnd) {
            return {
                word: word,
                strength: 'good',
                syllables: countSyllables(word)
            };
        }
    }
    
    // Check Vowel Rhymes / Asonancë (share last 2 vowels)
    const targetVowels = getLastVowels(target, 2);
    if (targetVowels.length === 2) {
        const wordVowels = getLastVowels(word, 2);
        if (targetVowels === wordVowels) {
            return {
                word: word,
                strength: 'vowel',
                syllables: countSyllables(word)
            };
        }
    }
    
    return null;
}

// Show toast notifications
function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

// Copy single word when clicked
function copyWord(word) {
    navigator.clipboard.writeText(word)
        .then(() => showToast(`Fjala "${word}" u kopjua!`))
        .catch(() => showToast('Dështoi kopjimi.'));
}

// Trigger Rhyme Search
function triggerSearch() {
    const rawQuery = searchInput.value.trim();
    if (!rawQuery) return;
    
    const query = rawQuery.toLowerCase();
    searchedWordDisplay.textContent = rawQuery;
    resultsMeta.style.display = 'flex';
    resultsContainer.innerHTML = '<div class="empty-state"><div class="loader" style="width:30px;height:30px;border-width:3px;margin-bottom:12px;"></div><p>Duke kërkuar rima...</p></div>';
    
    // Run search on next frame to keep UI responsive
    setTimeout(() => {
        const results = [];
        for (let word of wordlist) {
            const match = calculateRhyme(word, query);
            if (match) {
                results.push(match);
            }
        }
        
        currentResults = results;
        filterAndRenderResults();
    }, 50);
}

// Filter and Render currentResults
function filterAndRenderResults() {
    if (currentResults.length === 0) {
        resultsCount.textContent = '0 rezultate';
        resultsContainer.innerHTML = `
            <div class="empty-state">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="empty-icon"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                <p>Nuk u gjet asnjë rimë.</p>
                <small>Provo me një fjalë tjetër ose ndrysho filtrat.</small>
            </div>
        `;
        return;
    }
    
    // Apply filters
    let filtered = currentResults;
    
    // 1. Filter by Rhyme Type
    if (activeRhymeType !== 'all') {
        filtered = filtered.filter(item => item.strength === activeRhymeType);
    }
    
    // 2. Filter by Syllables
    if (activeSyllableFilter !== 'all') {
        const targetSyllables = parseInt(activeSyllableFilter, 10);
        if (targetSyllables === 4) {
            filtered = filtered.filter(item => item.syllables >= 4);
        } else {
            filtered = filtered.filter(item => item.syllables === targetSyllables);
        }
    }
    
    // 3. Deduplicate words sharing the same grammatical stem
    // Sort by length ascending first so base/shorter words are processed first and kept
    filtered.sort((a, b) => a.word.length - b.word.length);
    
    const uniqueFiltered = [];
    const seenStems = new Set();
    
    for (let item of filtered) {
        const stem = getWordStem(item.word);
        if (!seenStems.has(stem)) {
            seenStems.add(stem);
            uniqueFiltered.push(item);
        }
    }
    
    filtered = uniqueFiltered;
    resultsCount.textContent = `${filtered.length} rezultate`;
    
    if (filtered.length === 0) {
        resultsContainer.innerHTML = `
            <div class="empty-state">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="empty-icon"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                <p>Nuk ka rezultate për këtë kombinim filtrash.</p>
            </div>
        `;
        return;
    }
    
    // Group filtered results by syllable count
    const groups = {};
    for (let item of filtered) {
        const s = item.syllables;
        const key = s >= 4 ? '4+ Rrokje' : `${s} Rrokje`;
        if (!groups[key]) {
            groups[key] = [];
        }
        groups[key].push(item);
    }
    
    // Sort words inside groups: perfect first, then good, then vowel, and alphabetically
    const strengthOrder = { 'perfect': 1, 'good': 2, 'vowel': 3 };
    for (let key in groups) {
        groups[key].sort((a, b) => {
            if (strengthOrder[a.strength] !== strengthOrder[b.strength]) {
                return strengthOrder[a.strength] - strengthOrder[b.strength];
            }
            return a.word.localeCompare(b.word);
        });
    }
    
    // Clear display
    resultsContainer.innerHTML = '';
    
    // 4. Render Top Picks for Rap first
    const topPickItems = filtered.filter(item => RAP_KEYWORDS.has(item.word));
    // Sort by strength (perfect, good, vowel) and then alphabetically
    topPickItems.sort((a, b) => {
        if (strengthOrder[a.strength] !== strengthOrder[b.strength]) {
            return strengthOrder[a.strength] - strengthOrder[b.strength];
        }
        return a.word.localeCompare(b.word);
    });
    
    const maxTopPicks = 10;
    const topPicksToShow = topPickItems.slice(0, maxTopPicks);
    
    if (topPicksToShow.length > 0) {
        const topGroupEl = document.createElement('div');
        topGroupEl.className = 'rhyme-group top-picks-group';
        
        const titleEl = document.createElement('h3');
        titleEl.className = 'rhyme-group-title top-picks-title';
        titleEl.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="margin-right:6px;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            Top Picks (Përshtatjet më të mira për Rap)
        `;
        topGroupEl.appendChild(titleEl);
        
        const gridEl = document.createElement('div');
        gridEl.className = 'rhyme-grid';
        
        for (let item of topPicksToShow) {
            const pill = document.createElement('div');
            pill.className = 'word-pill top-pick-pill';
            pill.dataset.strength = item.strength;
            
            let titleText = 'Asonancë (Zanore)';
            if (item.strength === 'perfect') titleText = 'Rimë e Plotë';
            if (item.strength === 'good') titleText = 'Rimë e Mesme';
            pill.title = `${titleText} - Top Pick`;
            
            pill.innerHTML = `
                <span class="word-text">⭐ ${item.word}</span>
                <span class="word-syllables">${item.syllables}</span>
            `;
            
            pill.addEventListener('click', () => copyWord(item.word));
            gridEl.appendChild(pill);
        }
        topGroupEl.appendChild(gridEl);
        resultsContainer.appendChild(topGroupEl);
    }
    
    // Get sorted keys of groups (e.g. "1 Rrokje", "2 Rrokje", etc.)
    const sortedGroupKeys = Object.keys(groups).sort((a, b) => {
        const aNum = parseInt(a, 10);
        const bNum = parseInt(b, 10);
        return aNum - bNum;
    });
    
    // Max words to render per group to keep page lightning fast
    const MAX_WORDS_PER_GROUP = 150;
    
    // Render each group
    for (let key of sortedGroupKeys) {
        const items = groups[key];
        const groupEl = document.createElement('div');
        groupEl.className = 'rhyme-group';
        
        const titleEl = document.createElement('h3');
        titleEl.className = 'rhyme-group-title';
        
        let countText = items.length > MAX_WORDS_PER_GROUP ? `(Treguar ${MAX_WORDS_PER_GROUP} nga ${items.length})` : `(${items.length})`;
        titleEl.innerHTML = `${key} <span class="count">${countText}</span>`;
        groupEl.appendChild(titleEl);
        
        const gridEl = document.createElement('div');
        gridEl.className = 'rhyme-grid';
        
        // Render slice of items
        const renderedItems = items.slice(0, MAX_WORDS_PER_GROUP);
        for (let item of renderedItems) {
            const pill = document.createElement('div');
            pill.className = 'word-pill';
            pill.dataset.strength = item.strength;
            
            // Tooltip or helper representation of strength
            let titleText = 'Asonancë (Rregull Zanoresh)';
            if (item.strength === 'perfect') titleText = 'Rimë e Plotë (3 shkronjat e fundit)';
            if (item.strength === 'good') titleText = 'Rimë e Mesme (2 shkronjat e fundit)';
            pill.title = titleText;
            
            pill.innerHTML = `
                <span class="word-text">${item.word}</span>
                <span class="word-syllables">${item.syllables}</span>
            `;
            
            pill.addEventListener('click', () => copyWord(item.word));
            gridEl.appendChild(pill);
        }
        
        groupEl.appendChild(gridEl);
        resultsContainer.appendChild(groupEl);
    }
}

// Get the grammatical stem of a word by recursively removing common Albanian suffixes
function getWordStem(word) {
    let stem = word.toLowerCase();
    
    // Albanian inflectional suffixes ordered by length descending
    const suffixes = [
        'imeve', 'ëve', 'ave', 'nte', 'ime', 'imit', 'imin', 'imi', 
        'ët', 'at', 'ës', 'it', 'in', 'ën', 'ish', 'im',
        'va', 've', 'ra', 're', 'ta', 'te', 'os', 'on', 'es',
        'a', 'e', 'ë', 'i', 'o', 'u', 'y', 'j', 'm', 't', 'n', 'r', 's'
    ];
    
    let stripped = true;
    while (stripped) {
        stripped = false;
        for (let suffix of suffixes) {
            // Keep at least 3 letters in the stem (otherwise it's too short)
            if (stem.endsWith(suffix) && (stem.length - suffix.length) >= 3) {
                stem = stem.substring(0, stem.length - suffix.length);
                stripped = true;
                break; // start checking suffixes again on the new shorter stem
            }
        }
    }
    return stem;
}

// Generate Gegërisht equivalents from standard words and inject Kosovar slang words
function processAndInjectGeg(rawList) {
    const GEG_WORDS = [
        'kerr', 'kerri', 'kerre', 'kerret', 'kerrin', 'kerrash', 'kerrve', 
        'kurgjo', 'kurgjoja', 'sen', 'seni', 'sene', 'senet', 'senin', 'seneve', 
        'loc', 'loci', 'loca', 'shac', 'shaci', 'shaca', 'shacave', 'shacët', 
        'baba', 'babë', 'bir', 'biri', 'shoq', 'shoqi', 'dreq', 'dreqi', 'dreqët', 
        'budall', 'budalla', 'budallët', 'koti', 'lshoj', 'lshojm', 'lshojn', 'lshu', 
        'kallxoj', 'kallxojm', 'kallxojn', 'kallxu', 'ngoj', 'ngojm', 'ngojn', 'ngu', 
        'shkoj', 'shkojm', 'shkojn', 'shku', 'bojm', 'bojn', 'boju', 'bo', 'thom', 'thojn', 
        'tash', 'bash', 'spe', 'po', 'veq', 'shmek', 'shmeki', 'llaf', 'llafi', 'llafe', 'llafet', 
        'zhurme', 'zhurma', 'pare', 'paret', 'para', 'leke', 'leket', 'tona', 'tonat', 'ton', 
        'krejt', 'krejtve', 'shoki', 'shokit', 'shokt', 'vibe', 'vibe-i', 'vibe-at', 'hejt', 
        'hejter', 'hejtera', 'hejterat', 'beat', 'beati', 'beat-i', 'flow', 'flow-i', 'rim', 
        'rima', 'rimat', 'rap', 'rapi', 'rap-i', 'trap', 'trapi', 'trap-i', 'drill', 'drilli', 
        'drill-i', 'hustle', 'hustleri', 'hustlerat', 'keq', 'keqi', 'keqt', 'fort', 'forti', 
        'fortë', 'smut', 'smuti', 'xhelozi', 'xheloz', 'xhelozat', 'fam', 'fama', 'fami', 'kesh', 
        'keshi', 'kesh-i', 'para', 'lek', 'leki', 'plumba', 'plumbi', 'plumbat', 'naten', 'nata', 
        'nates', 'ditën', 'dita', 'dites', 'rruge', 'rruga', 'rruges', 'rrugt', 'rrugët', 'asfallt', 
        'asfallti', 'benz', 'benzi', 'audi', 'audi-i', 'bmw', 'bmw-ja', 'mercedes', 'mercedesi', 
        'porshe', 'porsheja', 'ferrari', 'ferrari-i', 'lamborghini', 'lambo', 'lambo-ja', 
        'shpejt', 'shpejti', 'gazin', 'gazi', 'frena', 'freni', 'ndalu', 'ndalo', 'vrap', 'vrapi', 
        'vrapu', 'ik', 'iki', 'iku', 'hajt', 'hajde', 'shuj', 'shujë', 'kqyr', 'kqyri', 'kqyrim', 'kqyru', 'kqyrt'
    ];

    const resultSet = new Set();
    
    // Process raw list
    for (let word of rawList) {
        const w = word.toLowerCase();
        resultSet.add(w);
        
        // standard verbs ending in "-uar" -> Gegërisht "-u"
        if (w.endsWith('uar') && w.length > 3) {
            resultSet.add(w.substring(0, w.length - 3) + 'u');
        }
        // standard verbs ending in "-uarë" -> Gegërisht "-u"
        if (w.endsWith('uarë') && w.length > 4) {
            resultSet.add(w.substring(0, w.length - 4) + 'u');
        }
        // standard verbs ending in "-uarit" -> Gegërisht "-ut"
        if (w.endsWith('uarit') && w.length > 5) {
            resultSet.add(w.substring(0, w.length - 5) + 'ut');
        }
        // standard 1st person plural "-ojmë" -> Gegërisht "-ojm"
        if (w.endsWith('ojmë') && w.length > 4) {
            resultSet.add(w.substring(0, w.length - 4) + 'ojm');
        }
        // standard 1st person plural "-ejmë" -> Gegërisht "-ejm"
        if (w.endsWith('ejmë') && w.length > 4) {
            resultSet.add(w.substring(0, w.length - 4) + 'ejm');
        }
        // standard 3rd person plural "-ojnë" -> Gegërisht "-ojn"
        if (w.endsWith('ojnë') && w.length > 4) {
            resultSet.add(w.substring(0, w.length - 4) + 'ojn');
        }
        // standard 3rd person plural "-ejnë" -> Gegërisht "-ejn"
        if (w.endsWith('ejnë') && w.length > 4) {
            resultSet.add(w.substring(0, w.length - 4) + 'ejn');
        }
    }

    // Add slang words
    for (let word of GEG_WORDS) {
        resultSet.add(word.toLowerCase());
    }
    
    return Array.from(resultSet).sort();
}
