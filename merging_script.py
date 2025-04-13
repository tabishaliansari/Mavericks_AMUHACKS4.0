import json
from glob import glob

all_triples = []

for filepath in glob("*.json"):
    with open(filepath, "r", encoding="utf-8") as f:
        triples = json.load(f)
        all_triples.extend(triples)

# Save to one file
with open("all_rare_diseases_triples.json", "w", encoding="utf-8") as f:
    json.dump(all_triples, f, indent=2, ensure_ascii=False)