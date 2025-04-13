
import json
from neo4j import GraphDatabase
# Neo4j connection
uri = "bolt://localhost:7687"
user = "neo4j"
password = "12345678"  # 🔒 Replace with your actual password

driver = GraphDatabase.driver(uri, auth=(user, password))

# Function to insert a triple
def create_triple(tx, subject, relation, object_):
    tx.run(
        """
        MERGE (s:Entity {name: $subject})
        MERGE (o:Entity {name: $object})
        MERGE (s)-[r:%s]->(o)
        """ % relation.replace(" ", "_"),  # Ensures valid relationship type
        subject=subject,
        object=object_
    )

# Load triples from your file
with open(r"wiskottaldrich_syndrome-triples.json", "r", encoding="utf-8") as f:
    triples = json.load(f)

# Insert all triples into Neo4j
with driver.session() as session:
    for triple in triples:
        session.execute_write(
            create_triple,
            triple["subject"],
            triple["relation"],
            triple["object"]
        )

print("All triples inserted into Neo4j successfully!")