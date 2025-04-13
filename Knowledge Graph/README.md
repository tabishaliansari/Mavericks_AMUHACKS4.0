# 🧠 NeuroMedGraph - Knowledge Graph Module

This module contains everything related to building, visualizing, and exporting the final biomedical knowledge graph using Neo4j and Python tools. It supports graph creation from structured triples, generates visual HTML graphs, and provides clean integration between your extracted data and Neo4j’s graph database.

---

## 📁 Directory Structure

```
Knowledge Graph/
├── Creating Graphs/                     # Python scripts that generate HTML-based graphs from Neo4j
│   ├── generate_graph_pyvis.py
│   ├── graph_exporter_streamlit.py
│   └── ...
│
├── Graphs/                              # Output directory for interactive HTML graphs
│   ├── wiskottaldrich_syndrome.html
│   ├── fabry_disease.html
│   └── merged_knowledge_graph.html
│
├── Neo4j Graphs/                        # Scripts to push JSON triple files to Neo4j
│   ├── insert_triples.py                # Loads cleaned JSON triples into Neo4j
│   ├── clean_and_insert_all.py          # Cleans & inserts merged file into Neo4j
│   └── neo4j_connection.py              # Shared DB connection code
```

---

## 📜 Module Walkthrough

### 1️⃣ Neo4j Graphs — Importing Data

These scripts load your JSON triple files into Neo4j.

🗂️ File: Neo4j Graphs/insert_triples.py
- Loads a JSON file with subject–relation–object triples
- Inserts each triple into Neo4j using the official Python driver
- Ensures no duplicate nodes or relationships via MERGE

🗂️ File: clean_and_insert_all.py
- Loads the cleaned master JSON file (all-rare-diseases-triples-cleaned.json)
- Validates entries (non-null, non-empty)
- Inserts full dataset into Neo4j to build a unified knowledge graph

🗂️ File: neo4j_connection.py
- Handles Neo4j connection parameters centrally
- Imported by all insertion and export scripts

➡️ Tip: Customize your credentials or use .env variables in this file.

---

### 2️⃣ Creating Graphs — Export & Visualization

These scripts export visual graphs (in .html format) using tools like PyVis or NetworkX.

🗂️ File: generate_graph_pyvis.py
- Connects to your Neo4j instance
- Runs a Cypher query (customizable)
- Fetches nodes and relationships
- Uses PyVis to generate an interactive HTML graph
- Saved under the Graphs/ directory

🗂️ File: graph_exporter_streamlit.py
- Optional Streamlit-based interface to run queries and preview graph outputs live

➡️ Tip: You can schedule auto-generation of these HTML files using a cron job or Streamlit triggers.

---

### 3️⃣ Graphs — Output Directory

This folder contains all the rendered graph visualizations.

- Individual disease-specific HTML files (e.g., fabry_disease.html)
- A full merged graph across all rare diseases (e.g., merged_knowledge_graph.html)

Each file is:
- Fully interactive (zoom, drag, hover tooltips)
- Can be embedded into a Streamlit app, website, or viewed standalone in a browser

---

## ✅ Best Practices

- Always run the triples-cleaning script before inserting into Neo4j
- Insert all triples into a unified graph to enable cross-disease insights
- Regenerate HTML graphs whenever new triples are added or updated
- Maintain clean separation of logic: importing, querying, visualizing

---

## 🚀 Coming Next
- Natural language to Cypher translator (UI-connected)
- Frontend integration with Streamlit or React
- Graph filtering by disease, symptom, treatment

---

For questions or contributions, open an issue or reach out via GitHub. 🧬

Happy graphing! 🧠📊
