import React, { useEffect, useState } from 'react';
import { BrainIcon, MenuIcon, XIcon } from 'lucide-react';
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-2 relative">
            <BrainIcon className="h-8 w-8 text-indigo-600" />
            <div className="absolute inset-0 bg-pink-400 blur-xl opacity-30 rounded-full -z-10"></div>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            NeuroMedGraph
          </span>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-slate-700 hover:text-indigo-600 transition-colors">
            About
          </a>
          <a href="#features" className="text-slate-700 hover:text-indigo-600 transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-slate-700 hover:text-indigo-600 transition-colors">
            How It Works
          </a>
          <a href="#demo" className="text-slate-700 hover:text-indigo-600 transition-colors">
            Demo
          </a>
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-2 rounded-md transition-all shadow-md hover:shadow-lg">
            Explore the Graph
          </button>
        </div>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-slate-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full py-4 px-4 flex flex-col space-y-4">
          <a href="#about" className="text-slate-700 hover:text-indigo-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
            About
          </a>
          <a href="#features" className="text-slate-700 hover:text-indigo-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
            Features
          </a>
          <a href="#how-it-works" className="text-slate-700 hover:text-indigo-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
            How It Works
          </a>
          <a href="#demo" className="text-slate-700 hover:text-indigo-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
            Demo
          </a>
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-md w-full">
            Explore the Graph
          </button>
        </div>}
    </nav>;
};