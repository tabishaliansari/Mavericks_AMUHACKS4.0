from pyvis.network import Network
from neo4j import GraphDatabase

# Edge color map
relation_colors = {
    "treated_by": "#00cc66",                  # Green
    "has_symptom": "#ff6600",                 # Orange
    "caused_by_deficiency_of": "#cc0000",     # Red
    "increases_activity_of": "#6600cc",       # Purple
    "has_cause": "#006699",                   # Blue
    "default": "#999999"                      # Gray
}

# Initialize PyVis graph
net = Network(
    notebook=False,
    height="800px",
    width="100%",
    bgcolor="#ffffff",
    font_color="black",
    directed=True
)

# Layout physics
net.barnes_hut(
    gravity=-20000,
    central_gravity=0.3,
    spring_length=150,
    spring_strength=0.05,
    damping=0.95,
    overlap=0.8
)

# Optional: enable toolbar
net.show_buttons(filter_=["physics"])

# Connect to Neo4j
driver = GraphDatabase.driver("bolt://localhost:7687", auth=("neo4j", "12345678"))

with driver.session() as session:
    result = session.run("MATCH (s)-[r]->(o) RETURN s.name, type(r), o.name LIMIT 500")

    added_nodes = set()

    for record in result:
        source = record["s.name"]
        relation = record["type(r)"]
        target = record["o.name"]

        # Add nodes
        if source not in added_nodes:
            net.add_node(source, label=source, color="#82caff", shape="dot", size=15)
            added_nodes.add(source)
        if target not in added_nodes:
            net.add_node(target, label=target, color="#f0a1a8", shape="dot", size=15)
            added_nodes.add(target)

        # Get edge color from map
        color = relation_colors.get(relation.lower(), relation_colors["default"])

        # Add edge
        net.add_edge(source, target, label=relation, color=color, width=2, arrows="to", smooth=True)

# Save to HTML
net.save_graph("wiskott.html")
print("✅ Graph saved with colored edges! Open graph.html to view.")
