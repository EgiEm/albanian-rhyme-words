import os
import json

input_path = r"c:\Users\beKs\Desktop\Brigada\Albanian Rhyme Words\shqip.txt"
js_output_path = r"c:\Users\beKs\Desktop\Brigada\Albanian Rhyme Words\wordlist.js"

if not os.path.exists(input_path):
    print("shqip.txt not found!")
    exit(1)

with open(input_path, "r", encoding="utf-8") as f:
    words = [line.strip() for line in f if line.strip()]

print(f"Loaded {len(words)} words.")

# Suffixes to reject (mostly oblique case inflections and rare grammatical moods)
REJECT_SUFFIXES = [
    # Admirative mood (mënyra habitore)
    "uaka", "uakam", "uakan", "uake", "uakemi", "uakeni",
    # Optative mood (mënyra dëshirore)
    "ofsha", "ofshi", "ofshim", "ofshin", "oftë", "jsha", "jshe", "jshim", "jshin",
    # Imperfect passive/subjunctive
    "ohesha", "oheshe", "oheshim", "oheshin", "oheshit", 
    "ohej", "ohem", "ohemi", "ohen", "oheni", "ohesh", "ohet",
    # Plural oblique noun/adjective inflections (dative/ablative/genitive case)
    "ëve", "ave", "ive", "eve", "ash", "ish", "ësh",
    # Rare/redundant participle endings
    "uarash", "uarat", "uarave",
    # Obscure action noun inflections (e.g. abdikimeve, abdikimesh, abdikimin, abdikimit)
    "imeve", "imesh", "imin", "imit",
    # Obscure participle agent inflections (e.g. abuzuesish, abuzuesve, abuzuesit, abuzuesin)
    "uesish", "uesve", "uesit", "uesin", "ueset", "uesja",
    # Redundant case inflections (accusative and genitive/dative of singular nouns)
    "ës", "ën"
]

cleaned_words = []
seen = set()

for word in words:
    w = word.strip().lower()
    if not w:
        continue
    
    # Basic length filters
    if len(w) < 3 or len(w) > 13:
        continue
        
    # Skip duplicates
    if w in seen:
        continue
        
    # Check if the word ends with any reject suffix
    should_reject = False
    for suffix in REJECT_SUFFIXES:
        if w.endswith(suffix):
            # Check length constraint to avoid deleting short root words (e.g. "besë" (4), "pjesë" (5), "dreq" (5))
            if suffix in ["ës", "ën", "ave", "eve", "ish", "ash", "ësh"] and len(w) < 5:
                continue
            if suffix in ["oftë", "ofsha", "ofshi", "ofshim", "ofshin"] and len(w) < 6:
                continue
            if suffix in ["imin", "imit", "uesin", "uesit"] and len(w) < 6:
                continue
            should_reject = True
            break
            
    # Generic ending rules for case inflections (accusative "-in" / genitive "-it" singulars for long words)
    if not should_reject:
        if w.endswith("in") and len(w) >= 5:
            # Skip common rap/slang root nouns that naturally end in "in"
            if w not in ["latin", "robin", "satin", "helim", "drill", "beat", "vibe"]:
                should_reject = True
        elif w.endswith("it") and len(w) >= 5:
            if w not in ["limit", "spirit", "merit", "tranzit"]:
                should_reject = True
            
    if should_reject:
        continue
        
    seen.add(w)
    cleaned_words.append(word)

# Sort words alphabetically
cleaned_words.sort()

print(f"Cleaned down to {len(cleaned_words)} words.")

# Save back to shqip.txt
with open(input_path, "w", encoding="utf-8") as f:
    f.write("\n".join(cleaned_words))

# Save to wordlist.js
with open(js_output_path, "w", encoding="utf-8") as f:
    f.write(f"// Cleaned and filtered wordlist ({len(cleaned_words)} words)\n")
    f.write("window.wordlist = ")
    json.dump(cleaned_words, f, ensure_ascii=False)
    f.write(";\n")

print("Files saved successfully!")
