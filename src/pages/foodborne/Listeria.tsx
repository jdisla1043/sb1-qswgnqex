import React from 'react';
import { Shield, CheckCircle2, AlertTriangle, Microscope } from 'lucide-react';
import EmergencyResponseCTA from '../../components/EmergencyResponseCTA';
import ContactForm from '../../components/ContactForm';

const Listeria = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-red-900 to-red-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Listeria Emergency Response & Remediation</h1>
            <p className="text-xl opacity-90 mb-8">
              Swift response and thorough remediation services for Listeria contamination
            </p>
            <EmergencyResponseCTA />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Information Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">About Listeria Contamination</h2>
            <p className="text-gray-700 mb-6">
              Listeria monocytogenes is a particularly dangerous foodborne pathogen that can survive and grow 
              at refrigeration temperatures. Professional intervention is crucial due to its high mortality 
              rate and ability to spread rapidly in food processing environments.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">High-Risk Areas</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    Refrigerated food storage
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    Food processing equipment
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    Drains and wet areas
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Severe Risks</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    High mortality rate
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    Risk to pregnant women
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    Compromised immune systems
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Our Process */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Our Listeria Response Process</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Environmental Assessment</h3>
                      <p className="text-gray-600">
                        Comprehensive testing of surfaces, equipment, and environmental conditions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Microscope className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Deep Sanitization</h3>
                      <p className="text-gray-600">
                        Specialized cleaning protocols targeting Listeria's unique survival characteristics.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Validation Testing</h3>
                      <p className="text-gray-600">
                        Multiple rounds of testing to ensure complete elimination of Listeria.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Preventive Controls</h3>
                      <p className="text-gray-600">
                        Implementation of enhanced monitoring and control measures.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Request Emergency Service</h2>
            <p className="text-xl text-gray-600">
              24/7 emergency response for Listeria contamination across Florida
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Listeria;