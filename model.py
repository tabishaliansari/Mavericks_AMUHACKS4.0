import json
from together import Together
import os
import re

# Optionally set your Together API key if not using env variable
os.environ["TOGETHER_API_KEY"] = "4cb33f8c8c6bbf3e328756ef7fc30cef4c9470c4d9c160826a61aa4c3683f5f4"

# Prompt template
gpt_prompt_template = """
From the following medical abstract, extract relationships in the format:
[Disease] – has_symptom – [Symptom]
[Disease] – treated_by – [Treatment]
[Disease] – has_cause – [Cause]
[Disease] – associated_with – [Associated Condition]
Output as a list of JSON triples: {{subject, relation, object}},
make sure the final json contains symptoms, cause, associated conditions and treatment as I want to create a Knowledge Graph for the rare disease.

Abstract:
\"\"\"{abstract}\"\"\"
"""

# Initialize Together API client
client = Together()  # Assumes TOGETHER_API_KEY is set in environment

# Function to extract triples from an abstract
def extract_triples_from_abstract(abstract, disease_name):
    prompt = gpt_prompt_template.format(abstract=abstract)

    try:
        response = client.chat.completions.create(
            model="meta-llama/Llama-4-Maverick-17B-128E-Instruct-FP8",
            messages=[
                {"role": "system", "content": "You are a helpful assistant that extracts knowledge triples from medical abstracts."},
                {"role": "user", "content": prompt}
            ]
        )
    except Exception as e:
        print(f"🔥 API call failed: {e}")
        return []

    output = response.choices[0].message.content.strip()

    # Extract JSON list using regex
    match = re.search(r'\[\s*{.*?}\s*\]', output, re.DOTALL)
    if match:
        try:
            triples = json.loads(match.group())
        except json.JSONDecodeError:
            print("⚠️ JSON parsing failed on matched content:\n", match.group())
            triples = []
    else:
        print("⚠️ No JSON array found in output:\n", output)
        triples = []

    return triples

# Load the abstract file
disease = 'charge_syndrome'
with open(f"/disease_abstract/{disease}.json", "r", encoding="utf-8") as f:
    abstracts_data = json.load(f)

print(f"✅ Loaded {len(abstracts_data)} abstracts.")

# Extract triples
all_triples = []

for paper in abstracts_data:
    abstract = paper.get("abstract")
    if not abstract:
        print("⚠️ Skipping paper with no abstract.")
        continue

    print("\n🔍 Processing abstract:\n", abstract[:200], "...")
    triples = extract_triples_from_abstract(abstract, disease)
    print("✅ Extracted triples:", triples)
    all_triples.extend(triples)

# Save to output file
with open(f"/diseases-triple/{disease}-triples.json", "w", encoding="utf-8") as f:
    json.dump(all_triples, f, indent=2, ensure_ascii=False)

print(f"\n✅ Done! Extracted {len(all_triples)} triples saved to {disease}-triples.json.")
