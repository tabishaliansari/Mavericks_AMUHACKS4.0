import json
from neo4j import GraphDatabase

# Neo4j connection settings
uri = "bolt://localhost:7687"
user = "neo4j"
password = "alexander_disease"  # 🔒 Replace with your actual Neo4j password

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

# Load triples from the JSON file
with open(r"../Information Extraction/diseases_triples/alexander_disease-triples.json", "r", encoding="utf-8") as f:
    triples = json.load(f)

# Write to Neo4j
with driver.session() as session:
    for triple in triples:
        subject = triple.get("subject")
        relation = triple.get("relation")
        object_ = triple.get("object")
        if subject and relation and object_:
            session.execute_write(create_triple, subject, relation, object_)

driver.close()
