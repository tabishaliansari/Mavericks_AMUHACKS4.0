from pyvis.network import Network
from neo4j import GraphDatabase

# Edge color map
relation_colors = {
    "treated_by": "#00cc66",
    "has_symptom": "#ff6600",
    "caused_by_deficiency_of": "#cc0000",
    "increases_activity_of": "#6600cc",
    "has_cause": "#006699",
    "default": "#999999"
}

net = Network(
    notebook=False,
    height="800px",
    width="100%",
    bgcolor="#ffffff",
    font_color="black",
    directed=True
)
net.heading = "Aicardi Syndrome Knowledge Graph"
net.barnes_hut(
    gravity=-20000,
    central_gravity=0.3,
    spring_length=150,
    spring_strength=0.05,
    damping=0.95,
    overlap=0.8
)
net.show_buttons(filter_=["physics"])

driver = GraphDatabase.driver("bolt://localhost:7687", auth=("neo4j", "aicardi_syndrome-triples"))

with driver.session() as session:
    query = """
    MATCH (s:Entity)-[r]->(o:Entity)
    WHERE s.name CONTAINS 'Aicardi' OR o.name CONTAINS 'Aicardi'
    RETURN s.name, type(r), o.name
    """
    result = session.run(query)
    added_nodes = set()

    for record in result:
        source = record["s.name"]
        relation = record["type(r)"]
        target = record["o.name"]

        if source not in added_nodes:
            net.add_node(source, label=source, color="#82caff", shape="dot", size=15)
            added_nodes.add(source)
        if target not in added_nodes:
            net.add_node(target, label=target, color="#f0a1a8", shape="dot", size=15)
            added_nodes.add(target)

        color = relation_colors.get(relation.lower(), relation_colors["default"])
        net.add_edge(source, target, label=relation, color=color, width=2, arrows="to", smooth=True)

net.save_graph("aicardi_graph.html")
print("Aicardi Syndrome graph saved as graph.html!")
