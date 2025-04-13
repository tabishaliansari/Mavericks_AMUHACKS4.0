import React from 'react';
import { MessageSquareIcon, PuzzleIcon, ShieldIcon } from 'lucide-react';
export const FeaturesSection = () => {
  const features = [{
    icon: <MessageSquareIcon className="h-6 w-6 text-indigo-600" />,
    title: 'Natural Language to Cypher Queries',
    description: 'Ask questions in plain English and get precise graph queries and results.',
    color: 'bg-indigo-100',
    gradient: 'from-indigo-500 to-blue-500'
  }, {
    icon: <PuzzleIcon className="h-6 w-6 text-pink-600" />,
    title: 'Disease-Symptom-Treatment Mapping',
    description: 'Visualize the connections between diseases, symptoms, and potential treatments.',
    color: 'bg-pink-100',
    gradient: 'from-pink-500 to-purple-500'
  }, {
    icon: <div className="h-6 w-6 text-green-600" />,
    title: 'Powered by Local LLMs',
    description: 'Utilizes open-source language models that run entirely on your infrastructure.',
    color: 'bg-green-100',
    gradient: 'from-green-500 to-teal-500'
  }, {
    icon: <ShieldIcon className="h-6 w-6 text-purple-600" />,
    title: 'Free, Secure & Offline',
    description: 'No data leaves your system, ensuring privacy and compliance with regulations.',
    color: 'bg-purple-100',
    gradient: 'from-purple-500 to-indigo-500'
  }];
  return <section id="features" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Key Features
          </h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            NeuroMedGraph combines cutting-edge AI with graph database
            technology to unlock insights in rare disease research.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-slate-100 group relative overflow-hidden">
              <div className={`${feature.color} rounded-lg h-14 w-14 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">
                {feature.title}
              </h3>
              <p className="text-slate-600">{feature.description}</p>
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity -z-10"></div>
            </div>)}
        </div>
      </div>
    </section>;
};