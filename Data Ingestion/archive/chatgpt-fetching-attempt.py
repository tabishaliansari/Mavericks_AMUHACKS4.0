import os
import json
from bs4 import BeautifulSoup
import spacy
import scispacy
from scispacy.abbreviation import AbbreviationDetector

# Load SciSpaCy model
print("Loading NLP model...")
nlp = spacy.load("en_ner_bionlp13cg_md")
nlp.add_pipe("abbreviation_detector")

def clean_html(abstract):
    soup = BeautifulSoup(abstract, "html.parser")
    return soup.get_text()

def extract_knowledge_triples(text):
    doc = nlp(text)
    triples = []

    # Extract relevant biomedical entities
    diseases = [ent for ent in doc.ents if ent.label_ in ["DISEASE", "DISEASE_OR_PHENOTYPIC_FEATURE"]]
    genes = [ent for ent in doc.ents if "GENE" in ent.label_ or "GENE_OR_GENOME" in ent.label_]
    treatments = [ent for ent in doc.ents if ent.label_ in ["CHEMICAL", "TREATMENT"]]
    symptoms = [ent for ent in doc.ents if ent.label_ in ["SYMPTOM", "PHENOTYPIC_FEATURE"]]

    for dis in diseases:
        for treat in treatments:
            if abs(treat.start - dis.start) < 20:
                triples.append({"subject": dis.text, "relation": "treated_by", "object": treat.text})

        for gene in genes:
            if abs(gene.start - dis.start) < 20:
                triples.append({"subject": dis.text, "relation": "caused_by", "object": gene.text})

        for symp in symptoms:
            if abs(symp.start - dis.start) < 20:
                triples.append({"subject": dis.text, "relation": "has_symptom", "object": symp.text})

    return triples

def process_all_jsons(folder_path):
    all_triples = []
    file_list = [f for f in os.listdir(folder_path) if f.endswith(".json")]

    for filename in file_list:
        file_path = os.path.join(folder_path, filename)
        with open(file_path, "r", encoding="utf-8") as file:
            data = json.load(file)

            # Ensure it's either a single object or a list of objects
            abstracts = data if isinstance(data, list) else [data]

            for entry in abstracts:
                abstract_html = entry.get("abstract", "")
                if not abstract_html:
                    continue

                clean_text = clean_html(abstract_html)
                triples = extract_knowledge_triples(clean_text)

                all_triples.extend(triples)

    return all_triples

if __name__ == "__main__":
    folder = "C:\\AISSMS-IOIT-Practicals\\Mavericks_AMUHACKS4.0\\Data Ingestion\\disease_abstracts"  # Change this to your actual folder
    print(f"Processing files in: {folder}")

    results = process_all_jsons(folder)

    print(f"Extracted {len(results)} knowledge triples.")
    with open("C:\\AISSMS-IOIT-Practicals\\Mavericks_AMUHACKS4.0\\Data Ingestion\\extracted_triples.json", "w", encoding="utf-8") as outfile:
        json.dump(results, outfile, indent=2, ensure_ascii=False)

    print("✅ Triples saved to extracted_triples.json")
