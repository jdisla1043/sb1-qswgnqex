import React from 'react';
import { Hammer, Sparkles, CheckCircle2, ClipboardCheck, Truck, Shield } from 'lucide-react';

const features = [
  {
    icon: ClipboardCheck,
    title: 'Detailed Inspection',
    description: 'Thorough assessment of cleaning requirements'
  },
  {
    icon: Sparkles,
    title: 'Deep Cleaning',
    description: 'Removal of all construction debris and dust'
  },
  {
    icon: Truck,
    title: 'Debris Removal',
    description: 'Professional construction waste disposal'
  },
  {
    icon: Shield,
    title: 'Surface Protection',
    description: 'Safeguarding new surfaces and finishes'
  }
];

const PostConstructionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Post Construction Cleaning Services</h2>
          <p className="text-xl text-gray-600">Professional cleanup solutions for construction and renovation projects</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img 
              src="https://static.wixstatic.com/media/08c0d3_ebba0159dbd74acf9661f02ad431ea50~mv2.jpg" 
              alt="Post Construction Cleaning"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Comprehensive Post-Construction Cleanup</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600 mt-1" />
                <span className="text-gray-700">Fine particle dust removal and air filtration</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600 mt-1" />
                <span className="text-gray-700">Window, frame, and track detailed cleaning</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600 mt-1" />
                <span className="text-gray-700">Floor and surface finishing and polishing</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600 mt-1" />
                <span className="text-gray-700">Paint overspray and adhesive removal</span>
              </li>
            </ul>
            <div className="mt-8">
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
              >
                Request Cleanup Quote
              </a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PostConstructionSection;