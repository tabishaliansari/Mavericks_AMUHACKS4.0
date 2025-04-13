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
make sure the final json contains symptoms,cause,associated conditions and treatment as I want to create a Knowledge Graph for the rare Disease

Abstract:
\"\"\"{abstract}\"\"\"
"""

# Initialize Together API client
client = Together()  # Assumes TOGETHER_API_KEY is set in environment

# Function to extract triples from an abstract
def extract_triples_from_abstract(abstract, disease_name):
    prompt = gpt_prompt_template.format(abstract=abstract)
    
    response = client.chat.completions.create(
        model="meta-llama/Llama-4-Maverick-17B-128E-Instruct-FP8",
        messages=[
            {"role": "system", "content": "You are a helpful assistant that extracts knowledge triples from medical abstracts."},
            {"role": "user", "content": prompt}
        ]
    )

    output = response.choices[0].message.content.strip()

    try:
        # Try to parse the response as JSON
        triples = json.loads(output)
    except json.JSONDecodeError:
        print("⚠️ Could not parse JSON from the model output:\n", output)
        triples = []

    return triples

# Load the abstract file
disease='charge_syndrome'
with open(f"{disease}.json", "r", encoding="utf-8") as f:
    abstracts_data = json.load(f)

# Extract triples
all_triples = []

for paper in abstracts_data:
    triples = extract_triples_from_abstract(paper["abstract"], disease)
    all_triples.extend(triples)

# def try_extract_json(output):
#     try:
#         return json.loads(output)
#     except json.JSONDecodeError:
#         match = re.search(r'\[.*?\]', output, re.DOTALL)
#         if match:
#             try:
#                 return json.loads(match.group(0))
#             except json.JSONDecodeError:
#                 return []
#         return []
    

with open(f"{disease}-triples.json", "w", encoding="utf-8") as f:
    json.dump(all_triples, f, indent=2, ensure_ascii=False)
# final_triples=try_extract_json(all_triples)
# Save extracted triples