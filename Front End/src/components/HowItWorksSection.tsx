import React from 'react';
import { FileTextIcon, BrainCircuitIcon, DatabaseIcon } from 'lucide-react';
export const HowItWorksSection = () => {
  const steps = [{
    icon: <FileTextIcon className="h-6 w-6 text-white" />,
    title: 'Ingest medical abstracts from PubMed',
    description: 'Automatically collect and process research papers on rare diseases from trusted medical databases.',
    color: 'bg-indigo-600'
  }, {
    icon: <BrainCircuitIcon className="h-6 w-6 text-white" />,
    title: 'Extract knowledge triples using local LLMs',
    description: 'Utilize FLAN-T5 or Mistral models to identify relationships between medical entities.',
    color: 'bg-pink-600'
  }, {
    icon: <DatabaseIcon className="h-6 w-6 text-white" />,
    title: 'Store & visualize triples in Neo4j',
    description: 'Create a comprehensive knowledge graph database with intuitive visual representation.',
    color: 'bg-green-600'
  }, {
    icon: <div className="h-6 w-6 text-white" />,
    title: 'Ask questions → get graph answers',
    description: 'Query the system in natural language and receive visually mapped answers.',
    color: 'bg-purple-600'
  }];
  return <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            NeuroMedGraph follows a streamlined process to transform medical
            literature into actionable insights.
          </p>
        </div>
        <div className="relative">
          {/* Timeline connector */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-600 via-pink-500 to-purple-600 hidden md:block"></div>
          <div className="space-y-12 relative">
            {steps.map((step, index) => <div key={index} className="flex flex-col md:flex-row items-center">
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 order-first md:order-last'}`}>
                  <div className={`bg-white p-6 rounded-xl shadow-md border border-slate-100 ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} max-w-lg`}>
                    <h3 className="text-xl font-semibold mb-3 text-slate-900">
                      {step.title}
                    </h3>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                </div>
                <div className="mx-auto my-4 md:my-0 z-10 flex-shrink-0">
                  <div className={`${step.color} h-14 w-14 rounded-full flex items-center justify-center shadow-lg`}>
                    {step.icon}
                    <div className="absolute h-20 w-20 rounded-full border-2 border-dashed border-slate-200 animate-spin-slow"></div>
                  </div>
                </div>
                <div className="md:w-1/2"></div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};