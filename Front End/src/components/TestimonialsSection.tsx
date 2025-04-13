import React from 'react';
import { QuoteIcon, StarIcon } from 'lucide-react';
export const TestimonialsSection = () => {
  const testimonials = [{
    quote: 'This is like having a research assistant for rare diseases.',
    author: 'Dr. Sarah Chen',
    role: 'Clinical Researcher',
    stars: 5
  }, {
    quote: 'Navigating rare disease literature has never been easier.',
    author: 'Alex Rivera, PhD',
    role: 'Bioinformatician',
    stars: 5
  }, {
    quote: 'NeuroMedGraph has transformed how we approach uncommon condition research.',
    author: 'Dr. Michael Okonjo',
    role: 'Neurologist',
    stars: 4
  }];
  return <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            What Researchers Are Saying
          </h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            NeuroMedGraph is helping medical professionals around the world
            discover new insights.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-slate-100 relative">
              <div className="absolute -top-4 -left-4 h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center">
                <QuoteIcon className="h-5 w-5 text-indigo-600" />
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />)}
                {[...Array(5 - testimonial.stars)].map((_, i) => <StarIcon key={i + testimonial.stars} className="h-5 w-5 text-slate-200" />)}
              </div>
              <p className="text-slate-700 mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <h4 className="font-medium text-slate-900">
                  {testimonial.author}
                </h4>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};