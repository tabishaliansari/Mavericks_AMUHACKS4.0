import React from 'react';
import { BrainIcon, ChevronRightIcon, InfoIcon } from 'lucide-react';
export const HeroSection = () => {
  return <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Background SVG Wave */}
      <div className="absolute inset-0 z-0 opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="50%" stopColor="#EC4899" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>
          <path d="M0,160 C150,200 350,0 500,100 C650,200 850,0 1000,100 L1000,1000 L0,1000 Z" fill="url(#waveGradient)" className="opacity-30" />
          <path d="M0,300 C150,400 350,200 500,300 C650,400 850,200 1000,300 L1000,1000 L0,1000 Z" fill="url(#waveGradient)" className="opacity-20" />
        </svg>
      </div>
      {/* Neural Network Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 h-2 w-2 bg-purple-500 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 left-1/2 h-2 w-2 bg-green-500 rounded-full animate-pulse delay-100"></div>
        <div className="absolute top-2/3 left-1/3 h-2 w-2 bg-blue-500 rounded-full animate-pulse delay-200"></div>
        <div className="absolute top-1/2 left-3/4 h-2 w-2 bg-pink-500 rounded-full animate-pulse delay-300"></div>
        {/* Connection lines would be created with SVG in a production environment */}
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="relative mb-6">
            <BrainIcon className="h-20 w-20 text-indigo-600" />
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-600 blur-2xl opacity-30 rounded-full -z-10 scale-150"></div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            NeuroMedGraph
          </h1>
          <h2 className="text-xl md:text-2xl text-slate-700 mb-8 max-w-2xl">
            An intelligent knowledge graph for navigating rare disease research.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-md shadow-lg hover:shadow-xl transition-all flex items-center justify-center group">
              Explore the Graph
              <ChevronRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-md shadow-md hover:shadow-lg transition-all flex items-center justify-center">
              <InfoIcon className="mr-2 h-5 w-5 text-indigo-600" />
              How It Works
            </button>
          </div>
          <div className="flex items-center justify-center gap-4 text-sm text-slate-500">
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-green-400 mr-2"></div>
              <span>24+ Rare Diseases Indexed</span>
            </div>
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-purple-400 mr-2"></div>
              <span>3K+ Triples Extracted</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};