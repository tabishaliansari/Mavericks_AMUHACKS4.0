from neo4j import GraphDatabase
import json

# Neo4j credentials
NEO4J_URI = "bolt://localhost:7687"  # or your remote URI
NEO4J_USER = "neo4j"
NEO4J_PASSWORD = "alexander_disease"

# Initialize Neo4j driver
driver = GraphDatabase.driver(NEO4J_URI, auth=(NEO4J_USER, NEO4J_PASSWORD))

# Function to create nodes and relationships
def create_knowledge_graph(session, triples):
    for triple in triples:
        subject = triple['subject']
        relation = triple['relation']
        obj = triple['object']
        session.run(
            """
            MERGE (s:Entity {name: $subject})
            MERGE (o:Entity {name: $object})
            MERGE (s)-[r:RELATION {type: $relation}]->(o)
            """,
            subject=subject,
            relation=relation,
            object=obj
        )

# Load triples from the JSON file
with open("alexander_disease-triples.json", "r", encoding="utf-8") as file:
    triples = json.load(file)

# Create the graph
with driver.session() as session:
    create_knowledge_graph(session, triples)

print("Knowledge graph created successfully!")

# Close the driver connection
driver.close()
