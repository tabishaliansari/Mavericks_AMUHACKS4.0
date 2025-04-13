# 🧬 Rare Disease Abstract Fetcher

This Python script fetches scientific research abstracts related to **25 rare diseases** using the [Europe PMC API](https://europepmc.org/RestfulWebService). The results are stored as JSON files, one per disease.

---

## 📁 Features

- Fetches abstracts with available summaries (`HAS_ABSTRACT:Y`)
- Searches scientific literature for 25 rare diseases
- Saves results in structured JSON format
- Outputs organized files under the `disease_abstracts/` directory

---

## 🧾 JSON Output Structure

Each file contains a list of articles with:
```json
[
  {
    "id": "PMC1234567",
    "pmid": "12345678",
    "doi": "10.1001/example.doi",
    "title": "Research Title",
    "abstract": "Summary of the study...",
    "journal": "Journal Name",
    "year": "2024"
  }
]
```

---

## 🧠 List of Rare Diseases Queried

- Rett Syndrome
- Batten Disease
- Krabbe Disease
- Alexander Disease
- Aicardi Syndrome
- Pelizaeus-Merzbacher Disease
- Fabry Disease
- Gaucher Disease
- Niemann-Pick Disease
- Pompe Disease
- Tay-Sachs Disease
- Menkes Disease
- Maple Syrup Urine Disease (MSUD)
- Wiskott-Aldrich Syndrome
- Hemophagocytic Lymphohistiocytosis (HLH)
- Shwachman-Diamond Syndrome
- Severe Combined Immunodeficiency (SCID)
- Ehlers-Danlos Syndrome
- Alkaptonuria
- CHARGE Syndrome
- Noonan Syndrome
- Prader-Willi Syndrome
- Williams Syndrome
- Chediak-Higashi Syndrome
- Lesch-Nyhan Syndrome

---

## 🔧 Usage

### 1. Requirements

Install the required package:

```bash
pip install requests
```

### 2. Run the Script

```bash
python fetch_rare_disease_abstracts.py
```

### 3. Output

The script creates a folder named `disease_abstracts/` with one `.json` file per disease. Example filenames:

```
rett_syndrome.json
bat_disease_batten_disease.json
...
```

---

## 🧪 API Source

This script uses:
- **Europe PMC REST API**:  
  [https://www.ebi.ac.uk/europepmc/webservices/rest/search](https://www.ebi.ac.uk/europepmc/webservices/rest/search)

Each query is structured like:
```
"{disease name}" AND HAS_ABSTRACT:Y
```

- Base URL - 

---

## 📌 Notes

- Abstracts are limited to 100 per disease (`pageSize=100`).
- Output directory is created automatically.
- You can modify the `rare_diseases` list or the search query for your needs.

---
