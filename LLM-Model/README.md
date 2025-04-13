# 🔍 NeuroMedGraph: Natural Language to Neo4j Graph Visualizer

> Turn natural language biomedical questions into **Cypher queries** and visualize the results as an interactive **knowledge graph** using Neo4j and PyVis.

This script uses a local LLM served via **Together API** to convert user queries into **Cypher**, queries the **Neo4j** graph database, and then generates a beautiful interactive graph using **PyVis**.

---

## 📦 Features

- 🔁 Natural Language ➝ Cypher Conversion via `Llama-4-Maverick-17B` (Together API)
- 🔗 Query Neo4j for knowledge triples (subject → relation → object)
- 🎨 Visualize query results in PyVis with custom edge colors for different relations
- ⚡ Smooth, responsive, and zoomable graph export as `graph.html`

---

## 🚀 Tech Stack

| Component      | Technology                             |
|----------------|----------------------------------------|
| LLM            | Llama-4-Maverick-17B via TogetherAI    |
| Graph Database | Neo4j (Bolt connection)                |
| Visualization  | PyVis (Network rendering in browser)   |
| Language       | Python                                 |

---

## 📁 Directory Structure

```
project/
│
├── graph_query_visualizer.py       # This script
├── graph.html                      # Output graph (auto-generated)
├── requirements.txt                # Dependencies
└── README.md                       # You're here!
```

---

## ⚙️ Prerequisites

- Python 3.10+
- Neo4j running locally (`bolt://localhost:7687`)
- Python packages:
  - `neo4j`
  - `together`
  - `pyvis`
  - `openai` *(if needed in future)*

---

## 📦 Installation

```bash
git clone https://github.com/yourusername/neuromedgraph.git
cd neuromedgraph

# Create a virtual environment (recommended)
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows

# Install requirements
pip install -r requirements.txt
```

---

## 🧠 Configuration

Edit the following variables at the top of the script:

```python
TOGETHER_API_KEY = "your-together-api-key"
NEO4J_URI = "bolt://localhost:7687"
NEO4J_USER = "neo4j"
NEO4J_PASSWORD = "your-password"
```

Ensure your Neo4j instance has data in this format:
```
(:Entity {name: "Disease"})-[:has_symptom]->(:Entity {name: "Symptom"})
```

---

## 💬 Example Prompt

```bash
Enter a natural language query: What symptoms does Aicardi syndrome have?
```

### Generated Cypher:

```cypher
MATCH (s:Entity)-[r:has_symptom]->(o:Entity)
WHERE s.name = 'Aicardi syndrome'
RETURN s.name, type(r), o.name
```

---

## 📊 Visual Output

- Output is saved as: `graph.html`
- Opens in your default browser with zoom, drag, and hover interaction

Example output graph:
- Blue nodes: Source entities (e.g., diseases)
- Pink nodes: Target entities (e.g., symptoms, causes)
- Colored edges:
  - Green → `treated_by`
  - Orange → `has_symptom`
  - Red → `caused_by_deficiency_of`
  - Purple → `increases_activity_of`
  - Teal → `has_cause`
  - Gray → fallback/default

---

## 🧪 Running the Script

```bash
python graph_query_visualizer.py
```

---

## 🧩 Customization

You can easily modify:
- `relation_colors` for styling
- `system_prompt` to handle different graph schemas
- Add support for more metadata in visualization (e.g., confidence scores)

---

## 📝 License

MIT License. Feel free to use, extend, and adapt this for your projects or research.

---

## 👨‍💻 Author

Tabish ([@Mavericks_AMUHACKS4.0](https://github.com/yourusername))  
✉️ Reach out for collaborations or questions!

---

> _"Where language meets knowledge — one query at a time."_ 🧠⚡

```
