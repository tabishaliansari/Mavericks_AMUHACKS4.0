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

# Initialize PyVis Network
net = Network(
    notebook=False,
    height="800px",
    width="100%",
    bgcolor="#ffffff",
    font_color="black",
    directed=True
)
net.heading = "Alexander Disease Knowledge Graph"

# Improved physics settings to reduce vibration and congestion
net.set_options("""
var options = {
  "nodes": {
    "shape": "dot",
    "size": 15,
    "font": {
      "size": 16,
      "face": "Tahoma"
    },
    "color": {
      "highlight": {
        "background": "#D2E5FF",
        "border": "#2B7CE9"
      }
    }
  },
  "edges": {
    "arrows": {
      "to": {
        "enabled": true,
        "scaleFactor": 0.7
      }
    },
    "smooth": {
      "enabled": true,
      "type": "dynamic"
    },
    "color": {
      "color": "#848484",
      "highlight": "#848484"
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
driver = GraphDatabase.driver("bolt://localhost:7687", auth=("neo4j", "your_password"))

with driver.session() as session:
    query = """
    MATCH (s:Entity)-[r]->(o:Entity)
    WHERE s.name CONTAINS 'Alexander' OR o.name CONTAINS 'Alexander'
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


# Save to HTML
net.save_graph(r"../Graphs/alexander_diseases_graph.html")
print("Alexander Disease graph saved as alexander_diseases_graph.html")
