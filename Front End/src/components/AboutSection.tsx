import React from 'react';
import { BookOpenIcon, MicroscopeIcon, NetworkIcon, DatabaseIcon } from 'lucide-react';
export const AboutSection = () => {
  return <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              What is NeuroMedGraph?
            </h2>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              NeuroMedGraph extracts biomedical knowledge from research
              literature on rare diseases using local open-source LLMs and
              builds a symbolic knowledge graph using Neo4j. It allows
              clinicians and researchers to explore disease mechanisms,
              symptoms, and treatment pathways with natural language queries.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center text-sm text-indigo-700">
                <div className="h-2 w-2 rounded-full bg-indigo-600 mr-2"></div>
                <span>Open Source</span>
              </div>
              <div className="flex items-center text-sm text-pink-700">
                <div className="h-2 w-2 rounded-full bg-pink-500 mr-2"></div>
                <span>AI-Powered</span>
              </div>
              <div className="flex items-center text-sm text-green-700">
                <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                <span>Privacy-Focused</span>
              </div>
              <div className="flex items-center text-sm text-purple-700">
                <div className="h-2 w-2 rounded-full bg-purple-500 mr-2"></div>
                <span>Research-Grade</span>
              </div>
            </div>
          </div>
          <div className="relative bg-slate-50 rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center">
                <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpenIcon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="font-medium text-slate-900">
                  Research Literature
                </h3>
                <p className="text-sm text-slate-500 mt-2">
                  Extracts knowledge from PubMed articles
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center">
                <div className="h-12 w-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <MicroscopeIcon className="h-6 w-6 text-pink-600" />
                </div>
                <h3 className="font-medium text-slate-900">
                  Rare Disease Focus
                </h3>
                <p className="text-sm text-slate-500 mt-2">
                  Specialized in uncommon conditions
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center">
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <NetworkIcon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-medium text-slate-900">Knowledge Graph</h3>
                <p className="text-sm text-slate-500 mt-2">
                  Visual connections between entities
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center">
                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <DatabaseIcon className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-medium text-slate-900">Local LLMs</h3>
                <p className="text-sm text-slate-500 mt-2">
                  Secure offline processing
                </p>
              </div>
            </div>
            {/* Animated background elements */}
            <div className="absolute -z-10 top-0 right-0 h-64 w-64 bg-gradient-to-r from-indigo-300/20 to-purple-300/20 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 bottom-0 left-0 h-64 w-64 bg-gradient-to-r from-green-300/20 to-blue-300/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>;
};