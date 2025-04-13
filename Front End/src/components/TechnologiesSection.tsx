import React from 'react';
import { GithubIcon } from 'lucide-react';
export const TechnologiesSection = () => {
  const technologies = [{
    name: 'Hugging Face Transformers',
    icon: 'https://huggingface.co/front/assets/huggingface_logo.svg',
    description: 'State-of-the-art NLP models'
  }, {
    name: 'Neo4j',
    icon: 'https://dist.neo4j.com/wp-content/uploads/neo4j_logo_globe.png',
    description: 'Graph database platform'
  }, {
    name: 'FastAPI',
    icon: 'https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png',
    description: 'Modern API framework'
  }, {
    name: 'D3.js',
    icon: 'https://d3js.org/logo.svg',
    description: 'Data visualization library'
  }, {
    name: 'Python',
    icon: 'https://www.python.org/static/community_logos/python-logo-generic.svg',
    description: 'Core programming language'
  }];
  return <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Technologies Used
          </h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            NeuroMedGraph leverages cutting-edge open-source technologies to
            deliver powerful insights.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {technologies.map((tech, index) => <div key={index} className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-slate-50 transition-colors">
              <div className="h-16 w-16 mb-4 flex items-center justify-center">
                <img src={tech.icon} alt={tech.name} className="max-h-full max-w-full object-contain" />
              </div>
              <h3 className="font-medium text-slate-900 mb-1">{tech.name}</h3>
              <p className="text-sm text-slate-500">{tech.description}</p>
            </div>)}
        </div>
        <div className="flex justify-center">
          <a href="#" className="flex items-center px-6 py-3 bg-slate-800 text-white rounded-md hover:bg-slate-700 transition-colors shadow-md">
            <GithubIcon className="mr-2 h-5 w-5" />
            Fork on GitHub
          </a>
        </div>
      </div>
    </section>;
};