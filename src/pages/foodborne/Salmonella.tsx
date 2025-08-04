import React from 'react';
import { Shield, CheckCircle2, AlertTriangle, Microscope } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import EmergencyResponseCTA from '../../components/EmergencyResponseCTA';
import ContactForm from '../../components/ContactForm';

const Salmonella = () => {
  return (
    <>
      <SEOHead 
        title="Salmonella Emergency Response & Remediation - Rapid Florida Service"
        description="Rapid Salmonella contamination response and complete remediation services across Florida. Professional emergency response team with specialized equipment and proven protocols."
        keywords="Salmonella remediation, food poisoning response, emergency cleaning, restaurant decontamination, food safety, contamination cleanup, Florida"
        canonicalUrl="/foodborne/salmonella"
      />
      <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-red-900 to-red-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Salmonella Emergency Response & Remediation</h1>
            <p className="text-xl opacity-90 mb-8">
              Rapid response and complete remediation services for Salmonella contamination
            </p>
            <EmergencyResponseCTA />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Information Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">About Salmonella Contamination</h2>
            <p className="text-gray-700 mb-6">
              Salmonella contamination requires immediate professional intervention due to its severe health 
              implications and ability to spread rapidly through food preparation areas. Our emergency response 
              team is equipped to handle all types of Salmonella contamination scenarios.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Contamination Sources</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    Raw poultry and eggs
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    Cross-contaminated surfaces
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    Contaminated equipment
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Health Impacts</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    Severe food poisoning
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    Widespread illness outbreaks
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    Business reputation damage
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Our Process */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Our Salmonella Response Process</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Rapid Response</h3>
                      <p className="text-gray-600">
                        Emergency team deployment with specialized testing and remediation equipment.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Microscope className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Thorough Sanitization</h3>
                      <p className="text-gray-600">
                        Complete disinfection using EPA-registered sanitizers effective against Salmonella.
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
                      <h3 className="text-lg font-semibold mb-2">Contamination Testing</h3>
                      <p className="text-gray-600">
                        Comprehensive testing to verify complete elimination of Salmonella.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Prevention Protocol</h3>
                      <p className="text-gray-600">
                        Implementation of enhanced safety measures to prevent future contamination.
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
              24/7 emergency response for Salmonella contamination across Florida
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Salmonella;