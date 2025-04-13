import requests
import json
import os

# List of 25 rare diseases
rare_diseases = [
    "Rett Syndrome",
    "Bat disease (Batten Disease)",
    "Krabbe Disease",
    "Alexander Disease",
    "Aicardi Syndrome",
    "Pelizaeus-Merzbacher Disease",
    "Fabry Disease",
    "Gaucher Disease",
    "Niemann-Pick Disease",
    "Pompe Disease",
    "Tay-Sachs Disease",
    "Menkes Disease",
    "Maple Syrup Urine Disease (MSUD)",
    "Wiskott-Aldrich Syndrome",
    "Hemophagocytic Lymphohistiocytosis (HLH)",
    "Shwachman-Diamond Syndrome",
    "Severe Combined Immunodeficiency (SCID)",
    "Ehlers-Danlos Syndrome",
    "Alkaptonuria",
    "CHARGE Syndrome",
    "Noonan Syndrome",
    "Prader-Willi Syndrome",
    "Williams Syndrome",
    "Chediak-Higashi Syndrome",
    "Lesch-Nyhan Syndrome"
]

# Function to get abstracts
def get_abstracts(query, size=100):
    url = "https://www.ebi.ac.uk/europepmc/webservices/rest/search"
    params = {
        "query": query,
        "resultType": "core",
        "pageSize": size,
        "format": "json",
    }

    r = requests.get(url, params=params)
    data = r.json()

    abstracts = []
    for result in data.get("resultList", {}).get("result", []):
        if "abstractText" in result and result["abstractText"].strip():
            abstracts.append({
                "id": result.get("id", ""),
                "pmid": result.get("pmid", ""),
                "doi": result.get("doi", ""),
                "title": result.get("title", ""),
                "abstract": result.get("abstractText").strip(),
                "journal": result.get("journalTitle", ""),
                "year": result.get("pubYear", "")
            })

    return abstracts

# Create folder to store results
os.makedirs("disease_abstracts", exist_ok=True)

# Loop through all diseases and save abstracts
for disease in rare_diseases:
    print(f"Fetching abstracts for: {disease}")
    query = f'"{disease}" AND HAS_ABSTRACT:Y'
    abstracts = get_abstracts(query)

    filename = disease.lower().replace(" ", "_").replace("(", "").replace(")", "").replace("-", "").replace(",", "") + ".json"
    filepath = os.path.join("disease_abstracts", filename)

    with open(filepath, "w", encoding="utf-8") as f:
        json.dump(abstracts, f, indent=2, ensure_ascii=False)

    print(f"Saved {len(abstracts)} abstracts to {filepath}")

print("All abstracts fetched and saved.")
