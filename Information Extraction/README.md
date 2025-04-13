# 🧠 NeuroMedGraph - Information Extraction Module

This module handles the extraction of knowledge triples (subject–predicate–object) from rare disease abstracts using a local open-source LLM. It consists of scripts and files used during Phase 3 of the NeuroMedGraph project.

---

## 📁 Directory Structure

```
Information Extraction/
├── archive/                               # Old/unused scripts
├── diseases_triples/                      # Individual triples files per rare disease
│   ├── fabry_disease-triples.json
│   ├── wiskottaldrich_syndrome-triples.json
│   └── ...
├── all-rare-diseases-triples.json         # Merged triples from all diseases (raw)
├── all-rare-diseases-triples-cleaned.json # Cleaned version without nulls
├── information-extraction-script.py       # Main pipeline: extract triples from abstracts
├── merging-script.py                      # Merges individual disease triple files
└── triples-cleaning-script.py             # Removes invalid/null triples
```

---

## 📜 Scripts Overview

### 🔹 information-extraction-script.py
Extracts biomedical knowledge triples from research abstracts using flan-t5-base.

- 🔄 Loads abstracts from a .json file
- 🧠 Uses Hugging Face pipeline (Flan-T5) to extract structured triples
- 🧹 Skips malformed or empty abstracts
- 💾 Saves results to diseases_triples/{disease}-triples.json

Dependencies:
```bash
pip install transformers torch
```

---

### 🔹 merging-script.py
Merges all individual JSON triple files into one unified knowledge base.

- ✅ Scans diseases_triples/ directory
- 🧩 Appends all triples from each file
- 💾 Outputs to all-rare-diseases-triples.json

---

### 🔹 triples-cleaning-script.py
Cleans the merged JSON file to remove triples with missing subject, relation, or object.

- 🧼 Ensures data integrity before Neo4j insertion
- Filters out null, empty, or whitespace-only entries
- 💾 Outputs to all-rare-diseases-triples-cleaned.json

---

## 🧪 Sample Triple Format

```json
{
  "subject": "Fabry Disease",
  "relation": "treated_by",
  "object": "arimoclomol"
}
```

---

## ✅ Best Practices
- Use the cleaned merged file (all-rare-diseases-triples-cleaned.json) for graph insertion
- Keep archive/ for reference, but exclude it from production workflows
- Run triple extraction per disease for modularity, then merge

---

## 📌 Next Phase
Feed the cleaned triple file into Neo4j using py2neo or neo4j-driver to construct the final knowledge graph.

Happy building! 🧠🔗
