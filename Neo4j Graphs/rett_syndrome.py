import json
from neo4j import GraphDatabase

# Neo4j connection settings
uri = "bolt://localhost:7687"
user = "neo4j"
password = "rett_syndrome"  # 🔒 Replace with your actual password

driver = GraphDatabase.driver(uri, auth=(user, password))

# Function to insert a triple into Neo4j
def create_triple(tx, subject, relation, object_):
    rel_type = relation.strip().replace(" ", "_").replace("-", "_")
    if not rel_type.isidentifier():
        rel_type = "RELATED_TO"  # fallback if relation name is invalid for Cypher

    query = f"""
    MERGE (s:Entity {{name: $subject}})
    MERGE (o:Entity {{name: $object}})
    MERGE (s)-[r:`{rel_type}`]->(o)
    """
    tx.run(query, subject=subject, object=object_)

# Load triples from JSON file
with open(r"../Information Extraction/diseases_triples/rett_syndrome-triples.json", "r", encoding="utf-8") as f:
    triples = json.load(f)

# Insert triples into Neo4j
with driver.session() as session:
    inserted, skipped = 0, 0
    for triple in triples:
        subject = (triple.get("subject") or "").strip()
        relation = (triple.get("relation") or "").strip()
        object_ = (triple.get("object") or "").strip()

        if not subject or not relation or not object_:
            skipped += 1
            continue

        session.execute_write(create_triple, subject, relation, object_)
        inserted += 1

print(f"✅ Inserted {inserted} triples into Neo4j.")
print(f"⚠️ Skipped {skipped} invalid triples (due to missing fields).")

# Close connection
driver.close()
