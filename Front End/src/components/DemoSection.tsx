import React from 'react';
import { SearchIcon, ZapIcon } from 'lucide-react';
export const DemoSection = () => {
  return <section id="demo" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            See NeuroMedGraph in Action
          </h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            Explore how our knowledge graph connects the dots between rare
            diseases, symptoms, and treatments.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 max-w-5xl mx-auto">
          <div className="bg-slate-800 p-4 flex items-center">
            <div className="flex space-x-2 mr-4">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>
            <div className="bg-slate-700 rounded-md px-4 py-1.5 flex-1 text-slate-300 text-sm flex items-center">
              <SearchIcon className="h-4 w-4 mr-2 text-slate-400" />
              neo4j://localhost:7687/browser/
            </div>
          </div>
          <div className="p-6 bg-slate-50">
            <div className="bg-white rounded-lg p-4 shadow-inner border border-slate-200 mb-6">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 rounded-full p-2 mr-3">
                  <SearchIcon className="h-5 w-5 text-indigo-600" />
                </div>
                <div className="text-slate-700 font-medium">
                  What symptoms overlap between Marfan Syndrome and
                  Ehlers-Danlos Syndrome?
                </div>
              </div>
              <div className="text-sm text-slate-500 bg-slate-50 p-3 rounded-md font-mono">
                MATCH (d1:Disease {`{name: "Marfan Syndrome"}`}
                )-[:HAS_SYMPTOM]-&gt;(s:Symptom)&lt;-[:HAS_SYMPTOM]-(d2:Disease{' '}
                {`{name: "Ehlers-Danlos Syndrome"}`})
                <br />
                RETURN s.name, collect(distinct d1.name + ", " + d2.name) as
                diseases
              </div>
            </div>
            <div className="relative h-64 md:h-80 bg-slate-900 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <div className="w-24 h-24 mx-auto mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse"></div>
                    <ZapIcon className="h-12 w-12 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Graph Visualization
                  </h3>
                  <p className="text-slate-300">
                    Interactive Neo4j graph would appear here showing the
                    connections between diseases and their overlapping symptoms.
                  </p>
                </div>
              </div>
              <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
                <circle cx="400" cy="300" r="50" fill="#8B5CF6" />
                <circle cx="250" cy="200" r="30" fill="#EC4899" />
                <circle cx="550" cy="200" r="30" fill="#EC4899" />
                <circle cx="200" cy="400" r="20" fill="#10B981" />
                <circle cx="350" cy="450" r="20" fill="#10B981" />
                <circle cx="450" cy="450" r="20" fill="#10B981" />
                <circle cx="600" cy="400" r="20" fill="#10B981" />
                <line x1="400" y1="300" x2="250" y2="200" stroke="#8B5CF6" strokeWidth="2" />
                <line x1="400" y1="300" x2="550" y2="200" stroke="#8B5CF6" strokeWidth="2" />
                <line x1="250" y1="200" x2="200" y2="400" stroke="#EC4899" strokeWidth="2" />
                <line x1="250" y1="200" x2="350" y2="450" stroke="#EC4899" strokeWidth="2" />
                <line x1="550" y1="200" x2="450" y2="450" stroke="#EC4899" strokeWidth="2" />
                <line x1="550" y1="200" x2="600" y2="400" stroke="#EC4899" strokeWidth="2" />
              </svg>
            </div>
            <div className="mt-6 bg-green-50 border border-green-100 rounded-lg p-4">
              <h4 className="font-medium text-green-800 mb-2">Results:</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Joint hypermobility</li>
                <li>• Aortic dilation</li>
                <li>• Skin hyperextensibility</li>
                <li>• Mitral valve prolapse</li>
              </ul>
            </div>
          </div>
          <div className="p-4 bg-slate-100 border-t border-slate-200 flex justify-end">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors shadow-sm">
              Try It Live
            </button>
          </div>
        </div>
      </div>
    </section>;
};