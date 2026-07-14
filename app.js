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
    'mua', 'mu', 'ty', 'tu', 'vet', 'vetja', 'veti', 'gjallë', 'vdekë', 'vdekje', 'gjak', 'gjakut', 'zjarr', 'zjarri', 'akull', 'ftohtë', 'nxehtë', 'lot', 'loti', 'botë', 'bota', 'jetë', 'jeta', 'mbret', 'mbreti', 'shtet', 'shteti', 'besim', 'tradhti', 'dashuri', 'urrejtje', 'shpresë', 'loja', 'lojë', 'fitore', 'humbje', 'sukses', 'ari', 'flori', 'armik', 'mik', 'miku', 'besnik', 'tradhtar', 'fajtor', 'shpirt', 'trup', 'trupi', 'turp', 'turpi', 'nder', 'nderi', 'zot', 'zoti', 'ferr', 'ferri', 'parajsë', 'sy', 'sytë', 'dorë', 'dora', 'krah', 'krahu', 'zemër', 'zemra', 'mendje', 'mendja', 'kokë', 'koka', 'fjalë', 'fjala', 'besë', 'besa', 'shokë', 'shokt', 'muri', 'shkru', 'punu', 'shku', 'lexu', 'kallxu', 'ndertu', 'ndalu', 'provu', 'mbaru', 'maru', 'bo', 'lidh', 'çmend', 'zjarr', 'mall', 'humb', 'fitu', 'shpresu', 'besu', 'shkatrru', 'ndryshu', 'kriju', 'fillu', 'mbaru', 'harru', 'kujtu', 'ndje', 'ndjejm', 'ndjejn', 'urrej', 'dashuroj', 'shkatërroj', 'harroj', 'kujtoj', 'rrejt', 'rren', 'rrena', 'rrenat', 'vashë', 'qikë', 'gocë', 'femër', 'djalë', 'çun', 'pishmon', 'vonë', 'herët', 'vetëm', 'bashkë', 'zonë', 'zona', 'kodra', 'kodër', 'mal', 'mali', 'det', 'deti', 'qiell', 'qielli', 'diell', 'dielli', 'hënë', 'hëna', 'yll', 'yjet', 'retë', 'shi', 'shiu', 'borë', 'bora', 'erë', 'era', 'di', 'gadi'
]);

let wordlist = [];
let currentResults = [];
let selectedBRhymeIndex = 0;
let selectedARhymeIndex = 0;

// Preset B-Rhymes pairs for the 4-Takt (4-Bar) Template Generator
const RAP_B_RHYMES = [
    ['kerr', 'ferr'],
    ['shpejt', 'drejt'],
    ['nate', 'date'],
    ['hejt', 'beat'],
    ['sen', 'men'],
    ['gjak', 'pak'],
    ['loc', 'shac'],
    ['fame', 'nene'],
    ['shkru', 'punu'],
    ['kallxu', 'ndalu'],
    ['lot', 'zot'],
    ['keq', 'dreq'],
    ['fort', 'sport'],
    ['rap', 'trap'],
    ['vibe', 'jete'],
    ['bashke', 'jashte'],
    ['pare', 'llafe'],
    ['nxehte', 'lehte']
];

// Blacklist of obscure/rare/obsolete dictionary words in Albanian to exclude from the songwriting generator
const WEIRD_WORDS_BLACKLIST = new Set([
    'cenjt', 'enjt', 'fyejt', 'nyejt', 'diejt', 'buajt', 'duajt', 'druajt',
    'prajt', 'shuajt', 'vrenjt', 'zbrujt', 'ndruajt', 'zhguajt', 'cejtn',
    'bruit', 'nyje', 'nyjet'
]);




// DOM Elements
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
const barCountDisplay = document.getElementById('bar-count');
const copyLyricsBtn = document.getElementById('copy-lyrics-btn');
const clearLyricsBtn = document.getElementById('clear-lyrics-btn');
// Lyrics Pad Elements
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
    if (charCountDisplay) charCountDisplay.textContent = `${text.length} shkronja`;

    // Count words (filter empty strings)
    const words = text.trim().split(/\s+/).filter(w => w.length > 0);
    if (wordCountDisplay) wordCountDisplay.textContent = `${words.length} fjale`;

    // Count non-empty lines as "takte" (bars)
    const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    const barCount = lines.length;
    const blocksCount = Math.floor(barCount / 4);
    const remaining = barCount % 4;

    let barText = `${barCount} takte (${blocksCount} blloqe)`;
    if (remaining > 0) {
        barText = `${barCount} takte (${blocksCount} blloqe, +${remaining} rr.)`;
    }
    if (barCountDisplay) {
        barCountDisplay.textContent = barText;
    }
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

// Fetch and load the dictionary instantly
async function loadWordlist() {
    try {
        // If loaded via wordlist.js (local file support to bypass CORS on file:// protocol)
        if (window.wordlist && window.wordlist.length > 0) {
            wordlist = processAndInjectGeg(window.wordlist);
            console.log(`Wordlist loaded from JS & processed: ${wordlist.length} words.`);
            searchInput.focus();
            return;
        }

        // Fallback: Fetch text file if JS array is not loaded
        const response = await fetch('shqip.txt');
        if (!response.ok) throw new Error('Deshtoi ngarkimi i fjalorit.');

        const text = await response.text();
        const rawList = text.split(/\r?\n/).map(w => w.trim()).filter(w => w.length > 0);
        wordlist = processAndInjectGeg(rawList);
        console.log(`Wordlist loaded from fetch & processed: ${wordlist.length} words.`);
        searchInput.focus();

    } catch (err) {
        console.error('Gabim gjate ngarkimit te fjalorit:', err);
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
            showToast('Notepadi eshte i zbrazet!');
            return;
        }
        navigator.clipboard.writeText(lyricsTextarea.value)
            .then(() => showToast('Teksti u kopjua ne clipboard!'))
            .catch(() => showToast('Deshtoi kopjimi i tekstit.'));
    });

    // Clear Lyrics Button
    clearLyricsBtn.addEventListener('click', () => {
        if (!lyricsTextarea.value.trim()) return;
        if (confirm('A je i sigurt qe deshiron ta pastrosh tere tekstin?')) {
            lyricsTextarea.value = '';
            updateLyricsStats();
            saveLyrics();
            showToast('Teksti u fshi!');
        }
    });

    // structure-lyrics-btn removed
}

// Theme-aware dynamic rap line generator
// All lines in a 4-takt share the same theme for coherent storytelling
// Slangs from: Buta, MC Kresha, Lyrical Son, Lumi B, Shaolin Gang, Ledri, Unikkatil
function generateRapBar(word, templateIdx, theme) {
    const w = word.toLowerCase();
    const t = theme || 'rrugë';

    // Theme-indexed template banks per word category
    // Each theme has templates for: verbs (-u/-o), feminine (-a/-ë/-e), masculine (-i/consonant), fallback

    const THEMED_TEMPLATES = {
        'rrugë': {
            verb: [
                "N'rrugë t'lagjes jom rrit tu", "Asfaltin e njoh mir, jom msu me",
                "Nëpër rrugë t'qytetit tu", "Prej vogël n'rrugë jom msu me",
                "N'rrugë s'kom nejt palidhje, tu", "Rrugën e njoh si shpullën, tu",
                "Çdo kthesë n'lagje e kom kalu tu", "N'asfallt t'nxehtë jom rrit tu"
            ],
            fem: [
                "Asfalti i nxehtë n'mahallë, kjo osht", "N'rrugë t'lagjes m'ndjek kjo",
                "Çdo kthesë n'qytet m'ka msu kjo", "Nëpër rrugë t'errta e njoh këtë",
                "Kjo lagje m'ka rrit, e njoh mir këtë", "N'çdo cep t'mahallës e ndjej këtë",
                "Rruga m'ka tregu çka osht kjo", "Prej lagjes deri n'kry e njoh këtë"
            ],
            masc: [
                "N'rrugë t'lagjes krejt e njohin ky", "Asfalti i nxehtë, po t'kallxoj ky",
                "Çdo cep t'mahallës e di mir ky", "N'rrugë t'errta m'ka shpëtu ky",
                "Kjo lagje m'ka rrit me ky", "Nëpër rrugë t'qytetit, jam ky",
                "N'asfallt t'nxehtë e njoh çdo", "Rruga m'ka msu me njoft çdo"
            ],
            fall: [
                "N'rrugë t'lagjes ecim gjithmonë", "Asfalti i nxehtë na bën ma",
                "Çdo kthesë n'qytet na bon ma", "Nëpër rrugë t'errta shkoj",
                "Kjo lagje na ka rrit shum", "N'çdo cep t'mahallës jam"
            ]
        },
        'studio': {
            verb: [
                "Krejt ditën n'studio tu", "Beat-i po rrah fort e unë tu",
                "Mic-i ndezë e unë filloj me", "N'karrige tu rri e tu",
                "Prej mëngjesit deri n'natë tu", "N'studio pa pushim, bre, tu",
                "Krejt shoqnia n'studio tu", "Çdo natë tu djersit e tu"
            ],
            fem: [
                "N'studio tu djersit, po vjen kjo", "Mic-i n'dorë e po e ndjej këtë",
                "Beat-i po rrah fort, po e ndjej këtë", "Çdo natë n'studio e krijoj këtë",
                "Muzika po flet, e ndjej këtë", "N'studio e gjej inspirimin n'këtë",
                "Kur ndizet mic-i e ndjej këtë", "Çdo hit qe e bëj vjen nga kjo"
            ],
            masc: [
                "N'studio kur ndizet mic-i, jam ky", "Beat-i po rrah fort, po kall ky",
                "Çdo natë n'studio e ndërtoj ky", "Kur regjistoj e ndjej ky",
                "Mic-i n'dorë, s'ka kush si ky", "N'studio s'ka pushim, jam ky",
                "Çdo bar qe e hedh osht si ky", "Kur ndizet beat-i flet ky"
            ],
            fall: [
                "N'studio tu djersit e jap gjithmonë", "Beat-i po rrah fort e ndjej shum",
                "Mic-i ndezë e po e jap shum", "Çdo natë n'studio punoj",
                "Kur regjistoj e jap gjithmonë", "N'studio e bëj gjithmonë"
            ]
        },
        'hustle': {
            verb: [
                "Kur tjerët flejnë unë jom tu", "S'kom kohë me humb, po vazhdoj me",
                "Prej zero deri lartë kom me", "Çdo ditë ma e fortë po msoj me",
                "Leku po vjen se po vazhdoj me", "Pa i dhanë llogari askujt tu",
                "Çdo sekondë e shfrytëzoj me", "Pa kqyr prapa gjithmonë tu"
            ],
            fem: [
                "Prej zero deri lartë, kjo osht", "Leku po shtohet, e di mir këtë",
                "S'kom pushim deri sa e marr këtë", "Çdo ditë ma afër e ndjej këtë",
                "Suksesi vjen kur e du këtë", "Pa pushim tu djersit për këtë",
                "Prej asgjëje deri dikush, kjo osht", "Hustle-i n'gjak, e ndjej këtë"
            ],
            masc: [
                "Prej zero deri lartë, jam ky", "Leku po vjen, e di çdo",
                "S'kom pushim, s'kom frik, jam ky", "Çdo ditë ma i fort, jam ky",
                "Hustle-in e kom n'gjak, jam ky", "Pa pushim tu djersit, jam ky",
                "Krejt e dinë se s'kom frik, jam ky", "Prej asgjëje deri dikush, jam ky"
            ],
            fall: [
                "Prej zero deri lartë, ecim", "Leku po vjen e po shtohet shum",
                "S'kom pushim, e jap gjithmonë", "Çdo ditë ma e fortë, ecim",
                "Hustle-in e bëj gjithmonë", "Pa pushim e pa frik, ecim"
            ]
        },
        'besa': {
            verb: [
                "Shokëve t'mi s'u kom harru, tu", "Me bes e me nder kom me",
                "Krejt çka kom premtu kom me", "S'e braktis kurrë besen, kom me",
                "Kur m'thirrin shokët unë kom me", "Edhe n'hekra kom me ta",
                "Besën e mbaj gjithmonë, tu", "Pa i tradhtū shokët, tu"
            ],
            fem: [
                "Besa jonë osht ma e fortë se çdo", "S'e tradhtoj kurrë këtë",
                "Me shokët e mi e ndaj çdo", "Gjithmonë besnik, s'e hup këtë",
                "Kur rrihem bashkë s'na ndal asnjë", "N'lagje tonë krejt e njohin këtë",
                "Mos m'trego mu përralla, s'po ha", "Besnikëria osht ma e fortë se kjo"
            ],
            masc: [
                "Besa osht ligji jem, jam ky", "S'e tradhtoj kurrë shokun, jam ky",
                "Me shoqni e ndaj çdo", "Gjithmonë besnik, s'lëshoj ky",
                "Kur thirren shokët, jam ky", "N'lagje tonë krejt e njohin ky",
                "Besen e mbaj deri n'fund, jam ky", "S'ka forcë qe e thyen, jam ky"
            ],
            fall: [
                "Besa osht ligji jem, ecim", "S'e tradhtoj kurrë, jam gjithmonë",
                "Me shoqni e ndaj gjithmonë", "Besnikëria na bon ma",
                "Kur thirren shokët shkojmë", "Besen e mbaj gjithmonë"
            ]
        },
        'dhimbje': {
            verb: [
                "S'kom pas lehtë por kom dit me", "Prej gabimeve jom msu me",
                "Edhe kur bie prap ngrihem e filloj me", "N'errësirë e kom gjet rrugën tu",
                "Kur krejt m'lanë vet jom msu me", "Lotët m'kanë msu me",
                "Çdo plagë m'ka tregu se duhet me", "Pa i dëgju tjerët, bre, tu"
            ],
            fem: [
                "Zemra s'njeh tjetër përveç", "S'po m'len me flej mendja n'këtë",
                "Natën e gjatë po e kaloj n'këtë", "Çdo plagë e vjetër m'ka tregu mir",
                "Nëpër lot e gëzim, kjo osht", "Hija m'ndjek nëpër çdo",
                "S'kom pas kurrë lehtë n'këtë", "Çdo rreckë m'kujton se çka osht"
            ],
            masc: [
                "Prej errësirës kom dalë, m'ka forcu ky", "Çdo natë pa gjumë m'kujtohet ky",
                "S'e harroj kurrë se çka m'ka msu ky", "Lotët e mi s'i sheh askush veç ky",
                "Nëpër stuhi kom kalu, m'ka shpëtu", "Çdo shtëpi ka sekrete, e di mir ky",
                "Kur bie nata flet vetëm ky", "N'pasqyrë e shoh vetëm ky"
            ],
            fall: [
                "Prej errësirës kom dalë, ecim", "Çdo natë pa gjumë ecim",
                "S'e harroj kurrë, ecim gjithmonë", "Lotët m'kanë msu shum",
                "Nëpër stuhi ecim gjithmonë", "Kur bie e ngrihem, gjithmonë ma"
            ]
        },
        'flex': {
            verb: [
                "Flokët kurrë s'i kom kreh, tu", "Lodra gjithë o e re, tu",
                "Xhamat t'zi e muzikë, tu", "Gazin e shkelim n'autostradë tu",
                "Tu lu tesha tu ble, tu", "Fly s'shkeli n'tokë, tu",
                "N'darkë tu vozit shpejt tu", "Kqyrum ti mu ksi, tu"
            ],
            fem: [
                "Gazin e shkelim n'autostradë, kjo osht", "N'darkë tu vozit, e ndjej këtë",
                "Xhamat t'zi e muzikë, e ndjej këtë", "Tu lu tesha tu ble, e di kjo",
                "Lodra gjithë o e re, po e shoh këtë", "Fly s'shkeli n'tokë, kjo osht",
                "Flokët kurrë s'i kom kreh, kjo osht", "Kqyrum ti mu ksi, nuk e prek këtë"
            ],
            masc: [
                "Kqyrum ti mu, s'ki pa si ky", "Kqyre dhipin tem, ksi ti s'e nxen ky",
                "Na dy s'jena t'njejt, e di ky", "Jom ma fresh se krejt, e di çdo",
                "Tu i njek frangat nëpër çdo", "Alltin e ki pa plumb, e di ky",
                "Fmi i lagjes jom rrit me ky", "N'lagje tonë krejt e njohin ky"
            ],
            fall: [
                "Kqyrum ti mu ksi, jam", "Na dy s'jena t'njejt, jam",
                "Jom ma fresh se krejt, jam", "Tu i njek frangat, ecim",
                "Alltin e ki pa plumb, ecim", "Fly s'shkeli n'tokë, jam"
            ]
        },
        'agresion': {
            verb: [
                "Askush s'mundet me m'ndal kur filloj me", "S'po frikësohem e s'po du me",
                "Bëj çka du pa m'pyt kush, tu", "Krejt e kuptojnë kur filloj me",
                "E mbaj fjalën gjithmonë, kom me", "Ata s'kanë guxim me",
                "S'jom si ata qe flasin pa", "Krejt e dinë se s'kom frik me"
            ],
            fem: [
                "Qe shok po t'kallxoj, kjo osht", "N'rrugë t'lagjes s'ka kush ndal këtë",
                "Hala e njejt kurgjo tre, kjo osht", "Po t'tregoj diçka qe s'e din, kjo osht",
                "A pe sheh qe s'jena t'njejt, kjo osht", "Krejt jena si nana, na bashkon kjo",
                "S'ka kush guxon me prek këtë", "Bon dritë n'errsirë, e di kjo"
            ],
            masc: [
                "Po t'kallxoj bre, s'ka ma si ky", "Bon dritë n'errsirë, po t'kallxoj ky",
                "Askush s'guxon me m'ndal, jam ky", "S'e tradhtoj besen as n'ferr, jam ky",
                "Krejt e dinë se s'luej, jam ky", "Pa m'pyt e pa m'njoft, jam ky",
                "N'çdo sfidë dal fitimtar, jam ky", "T'u fol si kampiona, po e pret ky"
            ],
            fall: [
                "Po t'kallxoj bre, e bëj gjithmonë", "Askush s'guxon me m'ndal, ecim",
                "Bon dritë n'errsirë, ecim", "S'e tradhtoj besen, jam gjithmonë",
                "Krejt e dinë se s'luej, jam", "Pa m'pyt e pa frik, shkoj"
            ]
        },
        'reflektim': {
            verb: [
                "Jeta m'ka tregu se duhet me", "S'e ndërroj rrugën, kom me vazhdoj me",
                "Prej gabimeve jom msu me", "Edhe kur bie prap ngrihem e filloj me",
                "Kur krejt m'lanë vet jom msu me", "Çdo problëm e zgjidhi tu",
                "Çka kom nis kom me", "N'errësirë e kom gjet rrugën tu"
            ],
            fem: [
                "M'ka tregu jeta çka d.m.th. kjo", "Dielli del edhe pas stuhi, kjo osht",
                "Krejt çka kom jetu m'ka msu kjo", "Prej thellësisë deri n'sipërfaqe, kjo osht",
                "Çdo mëngjes zgjohem me mendje n'këtë", "Nuk e ndërroj rrugën, e njoh mir këtë",
                "Krejt po e dëgjojnë, s'ka kush ndal këtë", "Kur mbyll sytë e shoh vetëm këtë"
            ],
            masc: [
                "Kur rritesh n'rrugë e mson çdo", "S'e harroj kurrë se çka m'ka msu ky",
                "Çdo sekondë t'jetës m'ka forcu ky", "Kur m'thirrin e di se çka osht ky",
                "S'kom m'u nal deri n'fund, jom ky", "Çdo natë pa gjumë m'kujtohet ky",
                "Prej asgjëje deri dikush, kjo osht", "N'rrugë e n'studio, gjithmonë jam ky"
            ],
            fall: [
                "Jeta m'ka msu me ec gjithmonë", "Prej gabimeve msoj e bëhem ma",
                "Kur bie e ngrihem, gjithmonë ma", "N'errësirë e gjej dritën gjithmonë",
                "Mendja ime punon gjithmonë", "Kur tjerët dyshojnë unë shkoj"
            ]
        },
        'nate': {
            verb: [
                "Kur ndizet nata unë jom tu", "N'darkë t'ftohtë jom msu me",
                "Nëpër natë tu vozit tu", "Çdo natë tu djersit e tu",
                "Kur bie nata unë filloj me", "Pa flejt deri n'mëngjes tu",
                "Dritat fiken e unë filloj me", "N'errësirë e kom gjet rrugën tu"
            ],
            fem: [
                "Kur ndizet nata po e ndjej këtë", "N'darkë tu vozit, na shoqëron kjo",
                "Natën e gjatë po e kaloj n'këtë", "Kur bie nata e ndjej këtë",
                "Dritat fiken e ndizet kjo", "N'errësirë e gjej dritën n'këtë",
                "Çdo natë n'rrugë e ndjej këtë", "Kur mbyll sytë e shoh vetëm këtë"
            ],
            masc: [
                "Kur bie nata flet vetëm ky", "N'darkë t'ftohtë e shoh qartë çdo",
                "Dritat fiken e ndizet ky", "Çdo natë pa gjumë m'kujtohet ky",
                "Kur ndizet nata e di ky", "N'errësirë e njoh vetëm ky",
                "Nëpër natë tu vozit, e ndjej ky", "Kur bie nata jam gjithmonë ky"
            ],
            fall: [
                "Kur bie nata ecim gjithmonë", "N'darkë t'ftohtë e ndjej shum",
                "Dritat fiken e ndizem ma", "Nëpër natë tu vozit e ndjej",
                "Kur ndizet nata e ndjej shum", "N'errësirë ecim gjithmonë"
            ]
        },
        'lagje': {
            verb: [
                "Fmi i lagjes jom rrit tu", "N'mes t'rrugës jom rrit tu",
                "Kjo lagje m'ka msu me", "N'mahallë t'keqe jom msu me",
                "Nëpër lagje t'qytetit tu", "Prej vogël n'lagje jom msu me",
                "N'lagje tonë krejt jemi tu", "Pa kqyr prapa n'lagje tu"
            ],
            fem: [
                "N'lagje tonë krejt e njohin këtë", "N'rrugë s'kom nejt palidhje, kjo osht",
                "Kjo lagje m'ka rrit, e njoh mir këtë", "N'qytet e n'mahallë, krejt e dinë këtë",
                "Çdo cep t'lagjes e njoh këtë", "Prej lagjes deri n'majë, e njoh këtë",
                "N'mahallë tonë s'ka kush ndal këtë", "Kjo lagje osht e jona, kjo osht"
            ],
            masc: [
                "N'lagje tonë krejt e njohin ky", "Fmi i lagjes jom rrit me ky",
                "N'mahallë tonë s'ka kush si ky", "Çdo cep t'lagjes e njoh ky",
                "Kjo lagje m'ka rrit me ky", "Prej lagjes deri n'kry, jam ky",
                "N'mahallë e n'qytet, jam ky", "Kur flet mahalla flet edhe ky"
            ],
            fall: [
                "N'lagje tonë ecim ndryshe", "Fmi i lagjes jom rrit gjithmonë",
                "N'mahallë ecim gjithmonë", "Kjo lagje na ka bo ma",
                "Prej lagjes deri n'botë ecim", "N'mahallë e n'qytet jam"
            ]
        }
    };

    const themeData = THEMED_TEMPLATES[t] || THEMED_TEMPLATES['rrugë'];

    // Select appropriate template array based on word ending
    let templates;
    if ((w.endsWith('u') || w.endsWith('o') || w === 'bo') && w.length >= 2) {
        templates = themeData.verb;
    } else if ((w.endsWith('a') || w.endsWith('ë') || w.endsWith('e')) && w.length >= 2) {
        templates = themeData.fem;
    } else if ((w.endsWith('i') || w.endsWith('y') || w.endsWith('t') || w.endsWith('k') || w.endsWith('r') || w.endsWith('n') || w.endsWith('m') || w.endsWith('d') || w.endsWith('s') || w.endsWith('p') || w.endsWith('g')) && w.length >= 2) {
        templates = themeData.masc;
    } else {
        templates = themeData.fall;
    }

    const setup = templates[templateIdx % templates.length];

    // Clean up template text from trailing placeholders that were meant for "tag" styling
    let cleanSetup = setup.trim();
    cleanSetup = cleanSetup.replace(/\s+(me ky|si ky|jam ky|ky|kjo|këtë|kët|kjo osht|jam|veq)$/i, "");
    cleanSetup = cleanSetup.trim().replace(/,$/, "");

    return { setup: cleanSetup, word: word };
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
            if (i + 1 < word.length && isVowel(word[i + 1])) {
                const pair = word[i] + word[i + 1];
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
    // Normalize both words to handle diacritics (ë -> e, ç -> c) during rhyme checks
    const normWord = word.toLowerCase().replace(/ë/g, 'e').replace(/ç/g, 'c');
    const normTarget = target.toLowerCase().replace(/ë/g, 'e').replace(/ç/g, 'c');

    if (normWord === normTarget) return null;

    const wordLen = normWord.length;
    const targetLen = normTarget.length;

    // Check Perfect Rhymes (share last 3+ characters, or last 2 for short words)
    const perfectLen = targetLen >= 4 ? 3 : 2;
    if (wordLen >= perfectLen && targetLen >= perfectLen) {
        const targetEnd = normTarget.substring(targetLen - perfectLen);
        const wordEnd = normWord.substring(wordLen - perfectLen);
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
        const targetEnd = normTarget.substring(targetLen - 2);
        const wordEnd = normWord.substring(wordLen - 2);
        if (targetEnd === wordEnd) {
            return {
                word: word,
                strength: 'good',
                syllables: countSyllables(word)
            };
        }
    }

    // Check Vowel Rhymes / Asonancë (share last 2 vowels)
    const targetVowels = getLastVowels(normTarget, 2);
    if (targetVowels.length === 2) {
        const wordVowels = getLastVowels(normWord, 2);
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
        selectedBRhymeIndex = Math.floor(Math.random() * RAP_B_RHYMES.length);
        selectedARhymeIndex = 0;
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
    // Sort by strength first to prioritize stronger matches, then by length
    const strengthOrder = { 'perfect': 1, 'good': 2, 'vowel': 3 };
    filtered.sort((a, b) => {
        if (strengthOrder[a.strength] !== strengthOrder[b.strength]) {
            return strengthOrder[a.strength] - strengthOrder[b.strength];
        }
        return a.word.length - b.word.length;
    });

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
            Top Picks (Pershtatjet me te mira per Rap)
        `;
        topGroupEl.appendChild(titleEl);

        const gridEl = document.createElement('div');
        gridEl.className = 'rhyme-grid';

        for (let item of topPicksToShow) {
            const pill = document.createElement('div');
            pill.className = 'word-pill top-pick-pill';
            pill.dataset.strength = item.strength;

            let titleText = 'Asonance (Zanore)';
            if (item.strength === 'perfect') titleText = 'Rime e Plote';
            if (item.strength === 'good') titleText = 'Rime e Mesme';
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

    // 5. Render 4-Takt (AABB) Songwriting Template
    const activeQuery = searchInput.value.trim();
    if (activeQuery && filtered.length >= 1) {
        const cleanQuery = activeQuery.toLowerCase().replace(/ë/g, 'e').replace(/ç/g, 'c');
        
        // Gather ALL rhyming candidates, excluding the query itself & blacklisted words
        const allCandidates = filtered.filter(item => {
            const w = item.word.toLowerCase();
            return w !== cleanQuery && !WEIRD_WORDS_BLACKLIST.has(w);
        });
        
        // Group candidates by syllable count
        const bySyllable = {};
        for (const item of allCandidates) {
            const k = item.syllables >= 4 ? 4 : item.syllables;
            if (!bySyllable[k]) bySyllable[k] = [];
            bySyllable[k].push(item);
        }
        
        // Build pairs inside each syllable group
        // Cap the number of pairs to prioritize punchy 1-2 syllable words
        const rhymeAPairs = [];
        const maxPairsPerGroup = { 1: 99, 2: 8, 3: 3, 4: 1 };
        
        for (const sKey of Object.keys(bySyllable).sort((a, b) => parseInt(a) - parseInt(b))) {
            const group = bySyllable[sKey];
            const rapItems = [];
            const otherItems = [];
            const stems = new Set();
            
            // Prioritize RAP_KEYWORDS and deduplicate stems
            for (const item of group) {
                const w = item.word.toLowerCase();
                const norm = w.replace(/ë/g, 'e').replace(/ç/g, 'c');
                const stem = getWordStem(w);
                if (stems.has(stem)) continue;
                stems.add(stem);
                
                const isRap = RAP_KEYWORDS.has(w) || RAP_KEYWORDS.has(norm);
                if (isRap) {
                    rapItems.push(item);
                } else {
                    otherItems.push(item);
                }
            }
            
            // Sort rap and other items by rhyme strength (perfect, good, vowel), then alphabetically
            const customSort = (a, b) => {
                if (strengthOrder[a.strength] !== strengthOrder[b.strength]) {
                    return strengthOrder[a.strength] - strengthOrder[b.strength];
                }
                return a.word.localeCompare(b.word);
            };
            rapItems.sort(customSort);
            otherItems.sort(customSort);
            
            // Merge prioritized rap items at the beginning
            const mergedWords = [...rapItems.map(item => item.word), ...otherItems.map(item => item.word)];
            
            // Generate pairs
            const cap = maxPairsPerGroup[sKey] || 1;
            let added = 0;
            for (let i = 0; i < mergedWords.length - 1 && added < cap; i += 2) {
                rhymeAPairs.push([mergedWords[i], mergedWords[i + 1]]);
                added++;
            }
        }
        
        // Pick the current selected A-rhyme pair
        let rhymeA1 = '';
        let rhymeA2 = '';
        if (rhymeAPairs.length > 0) {
            const pair = rhymeAPairs[selectedARhymeIndex % rhymeAPairs.length];
            rhymeA1 = pair[0];
            rhymeA2 = pair[1];
        } else if (allCandidates.length >= 2) {
            rhymeA1 = allCandidates[0].word;
            rhymeA2 = allCandidates[1].word;
        } else if (allCandidates.length === 1) {
            rhymeA1 = allCandidates[0].word;
            rhymeA2 = allCandidates[0].word;
        } else {
            rhymeA1 = '...';
            rhymeA2 = '...';
        }
        
        // Pick current B-rhyme pair
        const bPair = RAP_B_RHYMES[selectedBRhymeIndex % RAP_B_RHYMES.length];
        const rhymeB1 = bPair[0];
        const rhymeB2 = bPair[1];
        
        // Render AABB Template Box
        const templateGroupEl = document.createElement('div');
        templateGroupEl.className = 'rhyme-group';
        templateGroupEl.style.background = 'rgba(0, 85, 255, 0.03)';
        templateGroupEl.style.border = '1px solid rgba(0, 85, 255, 0.15)';
        templateGroupEl.style.borderRadius = '12px';
        templateGroupEl.style.padding = '18px 20px';
        templateGroupEl.style.marginBottom = '24px';
        templateGroupEl.style.boxShadow = '0 4px 20px rgba(0, 85, 255, 0.05)';
        
        const templateHeaderEl = document.createElement('div');
        templateHeaderEl.style.display = 'flex';
        templateHeaderEl.style.justifyContent = 'space-between';
        templateHeaderEl.style.alignItems = 'center';
        templateHeaderEl.style.marginBottom = '12px';
        templateHeaderEl.style.flexWrap = 'wrap';
        templateHeaderEl.style.gap = '8px';
        
        const templateTitleEl = document.createElement('h3');
        templateTitleEl.className = 'rhyme-group-title';
        templateTitleEl.style.color = 'var(--primary)';
        templateTitleEl.style.fontSize = '1.05rem';
        templateTitleEl.style.margin = '0';
        templateTitleEl.style.textTransform = 'uppercase';
        templateTitleEl.style.letterSpacing = '0.5px';
        templateTitleEl.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right:6px;"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            Ndihmësi 4 Takte (Skema AABB)
        `;
        templateHeaderEl.appendChild(templateTitleEl);
        
        const templateActionsEl = document.createElement('div');
        templateActionsEl.style.display = 'flex';
        templateActionsEl.style.gap = '6px';
        
        // Shuffle A
        const shuffleABtn = document.createElement('button');
        shuffleABtn.className = 'btn btn-secondary btn-sm';
        shuffleABtn.style.fontSize = '0.75rem';
        shuffleABtn.style.padding = '4px 8px';
        shuffleABtn.style.height = '28px';
        shuffleABtn.innerHTML = 'Ndrysho Rimën A 🔄';
        if (rhymeAPairs.length <= 1) {
            shuffleABtn.setAttribute('disabled', 'true');
            shuffleABtn.style.opacity = '0.5';
            shuffleABtn.style.cursor = 'not-allowed';
        }
        shuffleABtn.addEventListener('click', () => {
            if (rhymeAPairs.length > 1) {
                let newIndex = selectedARhymeIndex;
                // Randomize to a different index
                do {
                    newIndex = Math.floor(Math.random() * rhymeAPairs.length);
                } while (newIndex === selectedARhymeIndex && rhymeAPairs.length > 1);
                selectedARhymeIndex = newIndex;
                filterAndRenderResults();
                showToast('Rimë A e re u përzgjodh randomly! 🎲');
            }
        });
        templateActionsEl.appendChild(shuffleABtn);
        
        // Shuffle B
        const shuffleBBtn = document.createElement('button');
        shuffleBBtn.className = 'btn btn-secondary btn-sm';
        shuffleBBtn.style.fontSize = '0.75rem';
        shuffleBBtn.style.padding = '4px 8px';
        shuffleBBtn.style.height = '28px';
        shuffleBBtn.innerHTML = 'Ndrysho Rimën B 🔄';
        shuffleBBtn.addEventListener('click', () => {
            selectedBRhymeIndex = (selectedBRhymeIndex + 1) % RAP_B_RHYMES.length;
            filterAndRenderResults();
            showToast('Rimë B e re u përzgjodh! 🔄');
        });
        templateActionsEl.appendChild(shuffleBBtn);
        
        // Send to Notepad
        const sendBtn = document.createElement('button');
        sendBtn.className = 'btn btn-secondary btn-sm';
        sendBtn.style.fontSize = '0.75rem';
        sendBtn.style.padding = '4px 8px';
        sendBtn.style.height = '28px';
        sendBtn.style.borderColor = 'rgba(0, 210, 255, 0.3)';
        sendBtn.style.color = 'var(--primary)';
        sendBtn.innerHTML = 'Dërgo në Notepad ✍️';
        sendBtn.addEventListener('click', () => {
            let currentText = lyricsTextarea.value;
            if (currentText.trim()) {
                currentText += '\n\n';
            }
            currentText += `____________________ ${rhymeA1}\n`;
            currentText += `____________________ ${rhymeA2}\n`;
            currentText += `____________________ ${rhymeB1}\n`;
            currentText += `____________________ ${rhymeB2}`;
            
            lyricsTextarea.value = currentText;
            updateLyricsStats();
            saveLyrics();
            lyricsTextarea.focus();
            lyricsTextarea.scrollTop = lyricsTextarea.scrollHeight;
            showToast('Struktura u dërgua te Notepad!');
        });
        templateActionsEl.appendChild(sendBtn);
        
        templateHeaderEl.appendChild(templateActionsEl);
        templateGroupEl.appendChild(templateHeaderEl);
        
        // Render rows
        const linesContainer = document.createElement('div');
        linesContainer.style.display = 'flex';
        linesContainer.style.flexDirection = 'column';
        linesContainer.style.gap = '8px';
        linesContainer.style.background = 'rgba(15, 23, 42, 0.4)';
        linesContainer.style.padding = '12px';
        linesContainer.style.borderRadius = '8px';
        linesContainer.style.border = '1px solid rgba(255, 255, 255, 0.04)';
        
        const makeLineRow = (label, word, letter) => {
            const row = document.createElement('div');
            row.style.display = 'flex';
            row.style.justifyContent = 'space-between';
            row.style.alignItems = 'center';
            row.style.fontSize = '0.9rem';
            row.style.color = 'var(--text-muted)';
            row.style.borderBottom = '1px dashed rgba(255, 255, 255, 0.04)';
            row.style.paddingBottom = '6px';
            
            row.innerHTML = `
                <span>
                    <strong style="color: var(--text-dark); margin-right: 6px;">${label} (${letter}):</strong>
                    <span style="letter-spacing: 2px; color: var(--text-dark); opacity: 0.6;">__________________</span>
                </span>
                <span class="word-text" style="color: var(--primary); font-weight: 700; font-family: 'Outfit', sans-serif; cursor: pointer; text-shadow: 0 0 5px rgba(0, 210, 255, 0.2);" title="Kliko për ta kopjuar">${word}</span>
            `;
            
            if (word && word !== '...') {
                row.querySelector('.word-text').addEventListener('click', () => copyWord(word));
            }
            return row;
        };
        
        linesContainer.appendChild(makeLineRow('Takt 1', rhymeA1, 'A'));
        linesContainer.appendChild(makeLineRow('Takt 2', rhymeA2, 'A'));
        linesContainer.appendChild(makeLineRow('Takt 3', rhymeB1, 'B'));
        linesContainer.appendChild(makeLineRow('Takt 4', rhymeB2, 'B'));
        
        templateGroupEl.appendChild(linesContainer);
        resultsContainer.appendChild(templateGroupEl);
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
            let titleText = 'Asonance (Rregull Zanoresh)';
            if (item.strength === 'perfect') titleText = 'Rime e Plote (3 shkronjat e fundit)';
            if (item.strength === 'good') titleText = 'Rime e Mesme (2 shkronjat e fundit)';
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
// Generate Gegërisht equivalents from standard words and inject Kosovar slang words
function processAndInjectGeg(rawList) {
    const GEG_WORDS = [
        'kerr', 'kerri', 'kerre', 'kerret', 'kerrin', 'kerrash', 'kerrve',
        'kurgjo', 'kurgjoja', 'sen', 'seni', 'sene', 'senet', 'senin', 'seneve',
        'loc', 'loci', 'loca', 'shac', 'shaci', 'shaca', 'shacave', 'shacet',
        'baba', 'babe', 'bir', 'biri', 'shoq', 'shoqi', 'dreq', 'dreqi', 'dreqet',
        'budall', 'budalla', 'budallet', 'koti', 'lshoj', 'lshojm', 'lshojn', 'lshu',
        'kallxoj', 'kallxojm', 'kallxojn', 'kallxu', 'ngoj', 'ngojm', 'ngojn', 'ngu',
        'shkoj', 'shkojm', 'shkojn', 'shku', 'bojm', 'bojn', 'boju', 'bo', 'thom', 'thojn',
        'tash', 'bash', 'spe', 'po', 'veq', 'shmek', 'shmeki', 'llaf', 'llafi', 'llafe', 'llafet',
        'zhurme', 'zhurma', 'pare', 'paret', 'para', 'leke', 'leket', 'tona', 'tonat', 'ton',
        'krejt', 'krejtve', 'shoki', 'shokit', 'shokt', 'vibe', 'vibe-i', 'vibe-at', 'hejt',
        'hejter', 'hejtera', 'hejterat', 'beat', 'beati', 'beat-i', 'flow', 'flow-i', 'rim',
        'rima', 'rimat', 'rap', 'rapi', 'rap-i', 'trap', 'trapi', 'trap-i', 'drill', 'drilli',
        'drill-i', 'hustle', 'hustleri', 'hustlerat', 'keq', 'keqi', 'keqt', 'fort', 'forti',
        'forte', 'smut', 'smuti', 'xhelozi', 'xheloz', 'xhelozat', 'fam', 'fama', 'fami', 'kesh',
        'keshi', 'kesh-i', 'para', 'lek', 'leki', 'plumba', 'plumbi', 'plumbat', 'naten', 'nata',
        'nates', 'diten', 'dita', 'dites', 'rruge', 'rruga', 'rruges', 'rrugt', 'rruget', 'asfallt',
        'asfallti', 'benz', 'benzi', 'audi', 'audi-i', 'bmw', 'bmw-ja', 'mercedes', 'mercedesi',
        'porshe', 'porsheja', 'ferrari', 'ferrari-i', 'lamborghini', 'lambo', 'lambo-ja',
        'shpejt', 'shpejti', 'gazin', 'gazi', 'frena', 'freni', 'ndalu', 'ndalo', 'vrap', 'vrapi',
        'vrapu', 'ik', 'iki', 'iku', 'hajt', 'hajde', 'shuje', 'kqyr', 'kqyri', 'kqyrim', 'kqyru', 'kqyrt'
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
        // standard verbs ending in "-uare" (previously "-uarë") -> Gegërisht "-u"
        if (w.endsWith('uare') && w.length > 4) {
            resultSet.add(w.substring(0, w.length - 4) + 'u');
        }
        // standard verbs ending in "-uarit" -> Gegërisht "-ut"
        if (w.endsWith('uarit') && w.length > 5) {
            resultSet.add(w.substring(0, w.length - 5) + 'ut');
        }
        // standard 1st person plural "-ojme" (previously "-ojmë") -> Gegërisht "-ojm"
        if (w.endsWith('ojme') && w.length > 4) {
            resultSet.add(w.substring(0, w.length - 4) + 'ojm');
        }
        // standard 1st person plural "-ejme" (previously "-ejmë") -> Gegërisht "-ejm"
        if (w.endsWith('ejme') && w.length > 4) {
            resultSet.add(w.substring(0, w.length - 4) + 'ejm');
        }
        // standard 3rd person plural "-ojne" (previously "-ojnë") -> Gegërisht "-ojn"
        if (w.endsWith('ojne') && w.length > 4) {
            resultSet.add(w.substring(0, w.length - 4) + 'ojn');
        }
        // standard 3rd person plural "-ejne" (previously "-ejnë") -> Gegërisht "-ejn"
        if (w.endsWith('ejne') && w.length > 4) {
            resultSet.add(w.substring(0, w.length - 4) + 'ejn');
        }
    }

    // Add slang words
    for (let word of GEG_WORDS) {
        resultSet.add(word.toLowerCase());
    }

    return Array.from(resultSet).sort();
}

