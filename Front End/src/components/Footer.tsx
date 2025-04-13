import React from 'react';
import { BrainIcon, GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
export const Footer = () => {
  return <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <div className="relative mr-2">
                <BrainIcon className="h-6 w-6 text-indigo-400" />
                <div className="absolute inset-0 bg-indigo-500 blur-xl opacity-30 rounded-full -z-10"></div>
              </div>
              <span className="text-xl font-bold text-white">
                NeuroMedGraph
              </span>
            </div>
            <p className="text-slate-400 mb-6">
              Connecting Rare Disease Insights with NeuroSymbolic AI
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <GithubIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-medium mb-4">Project</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Roadmap
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Contributors
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Research
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-medium mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  GitHub Issues
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Discord Community
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Email Support
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* DNA Strand SVG Background */}
        <div className="relative py-6 border-t border-slate-800">
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <svg width="100%" height="100%" viewBox="0 0 1000 50" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,25 Q250,0 500,25 T1000,25" stroke="url(#dnaGradient)" strokeWidth="2" fill="none" />
              <path d="M0,25 Q250,50 500,25 T1000,25" stroke="url(#dnaGradient)" strokeWidth="2" fill="none" />
              <defs>
                <linearGradient id="dnaGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="25%" stopColor="#EC4899" />
                  <stop offset="50%" stopColor="#10B981" />
                  <stop offset="75%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} NeuroMedGraph. Open source under MIT
              License.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-500 hover:text-slate-400 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-500 hover:text-slate-400 text-sm">
                Terms of Use
              </a>
              <a href="#" className="text-slate-500 hover:text-slate-400 text-sm">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};