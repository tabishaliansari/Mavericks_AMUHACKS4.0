from pyvis.network import Network
from neo4j import GraphDatabase

# Color map for edge types
relation_colors = {
    "treated_by": "#00cc66",
    "has_symptom": "#ff6600",
    "has_cause": "#cc0000",
    "associated_with": "#006699",
    "has_complication": "#9933ff",
    "has_mechanism": "#b37700",
    "has_pathway": "#990000",
    "diagnosed_by": "#0099cc",
    "improved_by": "#669900",
    "has_treatment_method": "#993300",
    "has_treatment_regimen": "#660066",
    "assessed_by": "#666699",
    "default": "#999999"
}

# PyVis network setup
net = Network(
    notebook=False,
    height="850px",
    width="100%",
    bgcolor="#ffffff",
    font_color="black",
    directed=True
)
net.heading = "Rett Syndrome Knowledge Graph"

# Improved physics to reduce vibration and clustering
net.set_options("""
var options = {
  "nodes": {
    "shape": "dot",
    "size": 12,
    "font": {
      "size": 14,
      "face": "Tahoma"
    }
  },
  "edges": {
    "arrows": {
      "to": {
        "enabled": true,
        "scaleFactor": 0.6
      }
    },
    "smooth": {
      "enabled": true,
      "type": "dynamic"
    },
    "font": {
      "size": 12
    }
  },
  "physics": {
    "enabled": true,
    "forceAtlas2Based": {
      "gravitationalConstant": -100,
      "centralGravity": 0.01,
      "springLength": 150,
      "springConstant": 0.08,
      "damping": 0.4,
      "avoidOverlap": 1
    },
    "minVelocity": 0.75,
    "solver": "forceAtlas2Based",
    "timestep": 0.5
  }
}
""")

# Connect to Neo4j
driver = GraphDatabase.driver("bolt://localhost:7687", auth=("neo4j", "rett_syndrome"))

with driver.session() as session:
    query = """
    MATCH (s:Entity)-[r]->(o:Entity)
    WHERE s.name CONTAINS 'Rett' OR o.name CONTAINS 'Rett'
    RETURN s.name AS source, type(r) AS relation, o.name AS target
    """
    result = session.run(query)
    added_nodes = set()

    for record in result:
        source = record["source"]
        relation = record["relation"]
        target = record["target"]

        if source not in added_nodes:
            net.add_node(source, label=source, color="#82caff", shape="dot", size=15)
            added_nodes.add(source)
        if target not in added_nodes:
            net.add_node(target, label=target, color="#f0a1a8", shape="dot", size=15)
            added_nodes.add(target)

        color = relation_colors.get(relation.lower(), relation_colors["default"])
        net.add_edge(source, target, label=relation, color=color, width=2, arrows="to", smooth=True)

# Save and display the HTML
net.save_graph(r"../Graphs/rett_syndrome_graph.html")
print("Rett Syndrome graph saved as rett_syndrome_graph.html")
