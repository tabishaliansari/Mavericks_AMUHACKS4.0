# 🧠 NeuroMedGraph

> **A Knowledge-Driven Intelligence Platform for Rare Neurological Diseases**

NeuroMedGraph is an open-source, AI-powered platform that automatically extracts, structures, and visualizes knowledge from rare disease literature. It bridges **large language models** with **symbolic reasoning systems** to power advanced insights in biomedical research.

This repository contains the full-stack implementation of **NeuroMedGraph**, including:
- A modular landing page (`/src`)
- Information extraction pipeline
- Knowledge graph construction
- Local open-source LLM integration
- Interactive Neo4j-based graph interface

---

## ❔ Problem Statement

Rare diseases are notoriously underdiagnosed and underrepresented in existing biomedical knowledge graphs. There exists a vast amount of unstructured clinical and research data in the form of scientific abstracts, articles, and case studies—but extracting structured knowledge from these sources remains a challenge. Additionally, existing solutions either lack interpretability, rely on expensive APIs, or fail to provide disease-specific graph-based representations for targeted exploration.

NeuroMedGraph aims to bridge this gap by:

- Extracting structured knowledge (as subject–relation–object triples) from biomedical abstracts using open-source LLMs.
- Storing these triples in a symbolic graph database (Neo4j).
- Enabling natural language querying and interactive graph visualizations for rare neurological and genetic disorders.

---

## 🧭 Project Goal

To democratize access to structured biomedical knowledge by transforming unstructured research abstracts on rare neurological diseases into **searchable**, **navigable**, and **interpretable** knowledge graphs.

---

## 🏗️ Architecture Overview

```
PubMed Abstracts → Open-source LLM (local) → Knowledge Triples
                         ↓
                    Drift Detection (EvidentlyAI)
                         ↓
       Knowledge Graph Construction (Neo4j, Cypher)
                         ↓
  TypeScript UI + React Landing Page (NeuroMedGraph)
```

---

## 🧩 Key Modules

### 1. `src/` – React Landing Page
- Built with **React + TypeScript + TailwindCSS + Vite**
- Contains:
  - Hero, About, Features, Tech Stack, Demo, and Footer
  - Modular components in `/components`

### 2. `pipeline/` – Information Extraction
- Uses **open-source LLMs** (e.g., via HuggingFace/Ollama) for extracting knowledge triples
- Processes abstracts into subject-predicate-object form

### 3. `graph/` – Knowledge Graph Builder
- Transforms extracted triples into **Neo4j** nodes and relationships
- Supports custom schemas and biomedical ontologies

### 4. `ui/` – Streamlit Interface (MVP)
- Search diseases, symptoms, treatments
- Visualize subgraphs and reasoning chains
- Live queries to Neo4j

---

## 🔧 Tech Stack

| Layer              | Tools / Frameworks                            |
|--------------------|-----------------------------------------------|
| Frontend           | React, TypeScript, TailwindCSS, Vite          |
| LLMs               | Ollama, Hugging Face Transformers             |
| Pipeline           | Python, spaCy, LangChain (optional), GPT-J    |
| Knowledge Graph    | Neo4j, Cypher                                 |
| Visualization UI   | Streamlit, PyVis / Neo4j Browser              |
| Monitoring         | EvidentlyAI (for concept drift detection)     |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (18+)
- Python (3.10+)
- Neo4j (Desktop or Docker)
- Ollama (or any local LLM)
- pipenv or conda (optional)

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/neuromedgraph.git
cd neuromedgraph
```

### 2. Run the Landing Page

```bash
cd src
npm install
npm run dev
```

### 3. Set Up the Pipeline

```bash
cd pipeline
pip install -r requirements.txt
python extract_knowledge.py --input data/abstracts.txt
```

### 4. Launch Neo4j & Import Triples

```bash
# Ensure Neo4j is running
python graph/build_graph.py --input triples.json
```

### 5. Launch the Streamlit App

```bash
cd ui
streamlit run app.py
```

---

## 🧪 Example Output

> _"Glioblastoma is a highly aggressive brain tumor."_  
→ **(Glioblastoma)** — `is_a` → **(Brain Tumor)**

> _"Levetiracetam is used to treat epilepsy."_  
→ **(Levetiracetam)** — `treats` → **(Epilepsy)**

---

## 📚 Use Cases

- Research discovery for rare neurological diseases
- Biomedical question answering
- Knowledge curation and hypothesis generation
- Drug-disease interaction exploration

---

## 🚀 Future Scope

- 🧬 Expand beyond neurological disorders to include other rare disease categories such as immunological, metabolic, or oncological diseases.
- 🧠 Integrate advanced domain-specific LLMs like BioGPT, PubMedBERT, or ClinicalT5 to improve entity recognition and relation extraction accuracy.
- 🌐 Support multi-language biomedical abstracts and multilingual information extraction.
- 📡 Real-time PubMed integration to automatically ingest and update the knowledge graph with new research publications.
- 🤖 Connect with clinical decision support systems (CDSS) to assist doctors in identifying disease patterns and possible treatments.
- 🔍 Incorporate entity disambiguation and linking to standard biomedical ontologies (e.g., SNOMED CT, UMLS, MeSH).
- 🧩 Enable export of knowledge graphs into interoperable RDF/OWL formats for use in semantic web applications.
- 📈 Add analytics dashboard for graph statistics (e.g., central entities, most common treatments, disease clusters).

---

## ⚙️ Scalability

- 🗃️ Modular pipeline design with distinct phases: data ingestion, information extraction, knowledge graph creation, and frontend visualization.
- 🧩 Easily pluggable open-source components such as LangChain, spaCy, Neo4j, and Streamlit for extensibility.
- 📦 JSON-based intermediate storage ensures that new disease datasets can be ingested with minimal configuration changes.
- 🔄 Neo4j's native support for graph sharding and indexing makes it feasible to scale to thousands of diseases and millions of triples.
- 🌐 Frontend is designed to dynamically load disease-specific graphs, reducing the need to render all graphs at once.

---

## 💡 Motivation

- Rare diseases affect 300 million people globally—yet 95% of them lack FDA-approved treatment.
- Biomedical knowledge is growing at an exponential rate; a human expert can’t keep up.
- Graphs offer explainable AI and intuitive exploration—essential for researchers, data scientists, and clinicians.

---

## 🧗‍♂️ Challenges Faced

- Ensuring accurate triple extraction with minimal hallucination using open-source LLMs.
- Handling null values and malformed objects in JSON knowledge files.
- Building a natural language to Cypher translator to query graphs intuitively.
- Hosting a responsive frontend for visualizing multiple large graphs.
- Optimizing Neo4j performance for hundreds of nodes and relationships.

---

## 📬 Contact

📧 Email: **contact@neuromedgraph.ai**  
🔗 Website: [neuromedgraph.ai](https://neuromedgraph.ai)  
🐦 YouTube: [@teammavericks-00](https://youtube.com/@teammavericks-00?si=vcboOWJO_z8W_WLf)  
👥 LinkedIn: [NeuroMedGraph Project](https://www.linkedin.com/in/tabishaliansari/)

---

## 🤝 Contributing

We welcome contributions from researchers, developers, and students! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) and open issues or PRs to get involved.

---

## 📄 License

This project is licensed under the **MIT License**. See [LICENSE](LICENSE) for more details.

---

> _Empowering researchers and clinicians with intelligent access to rare disease knowledge._

```

---

#AMUHACKS4.0 #CSSAMU #AMU #knowledge-graph #neo4j #biomedical-nlp #rare-diseases #open-source #machine-learning #natural-language-processing # ai-for-healthcare