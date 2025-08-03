import React from 'react';
import { AlertTriangle, Shield, Microscope, Sparkles, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: AlertTriangle,
    title: 'Expert Detection',
    description: 'Professional mold inspection and assessment'
  },
  {
    icon: Shield,
    title: 'Safe Removal',
    description: 'Complete mold elimination using industry-approved methods'
  },
  {
    icon: Microscope,
    title: 'Testing & Prevention',
    description: 'Post-remediation testing and preventive measures'
  },
  {
    icon: Sparkles,
    title: 'Air Quality',
    description: 'Improved indoor air quality and environment'
  }
];

const MoldRemediationSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Professional Mold Remediation Services</h2>
          <p className="text-xl text-gray-600">Comprehensive mold removal and prevention for commercial properties</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img 
              src="https://static.wixstatic.com/media/08c0d3_46f6f0bf85a249a38eddf9083743846d~mv2.png" 
              alt="Mold Remediation"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Why Choose Our Mold Remediation?</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600 mt-1" />
                <span className="text-gray-700">Licensed and certified mold remediation experts</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600 mt-1" />
                <span className="text-gray-700">Advanced equipment and proven techniques</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600 mt-1" />
                <span className="text-gray-700">Comprehensive assessment and treatment plan</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600 mt-1" />
                <span className="text-gray-700">Prevention strategies to avoid future issues</span>
              </li>
            </ul>
            <div className="mt-8">
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
              >
                Schedule Mold Inspection
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

export default MoldRemediationSection;