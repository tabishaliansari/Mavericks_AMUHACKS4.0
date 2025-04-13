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

## 📬 Contact

📧 Email: **contact@neuromedgraph.ai**  
🔗 Website: [neuromedgraph.ai](https://neuromedgraph.ai)  
🐦 Twitter: [@NeuroMedGraph](https://twitter.com/neuromedgraph)  
👥 LinkedIn: [NeuroMedGraph Project](https://linkedin.com/company/neuromedgraph)

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

Let me know if you'd like me to also generate:

- `CONTRIBUTING.md`
- `extract_knowledge.py` template
- Neo4j graph builder script
- Deployment docs for Vercel/Streamlit Cloud/Docker

I can generate and scaffold them all!

#AMUHACKS4.0 #CSSAMU #AMU