import React from 'react';
import { Shield, CheckCircle2, AlertTriangle, Microscope } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import EmergencyResponseCTA from '../../components/EmergencyResponseCTA';
import ContactForm from '../../components/ContactForm';

const EColi = () => {
  return (
    <>
      <SEOHead 
        title="E. coli Emergency Response & Remediation - 24/7 Florida Service"
        description="Immediate E. coli contamination response and professional remediation services across Florida. 24/7 emergency response team with specialized equipment and EPA-registered sanitizers."
        keywords="E. coli remediation, foodborne illness response, emergency cleaning, restaurant sanitization, food safety, contamination cleanup, Florida"
        canonicalUrl="/foodborne/ecoli"
      />
      <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-red-900 to-red-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">E. coli Emergency Response & Remediation</h1>
            <p className="text-xl opacity-90 mb-8">
              Immediate response and professional remediation services for E. coli contamination
            </p>
            <EmergencyResponseCTA />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Information Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">About E. coli Contamination</h2>
            <p className="text-gray-700 mb-6">
              E. coli (Escherichia coli) contamination requires immediate professional intervention. 
              This bacteria can cause severe illness and its presence indicates serious sanitation issues 
              that must be addressed promptly and thoroughly.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Common Sources</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    Contaminated food preparation surfaces
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    Cross-contamination from raw meats
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    Improper food handling procedures
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Health Risks</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    Severe gastrointestinal illness
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    Potential kidney complications
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    Risk of widespread contamination
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Our Process */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Our E. coli Response Process</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Immediate Assessment</h3>
                      <p className="text-gray-600">
                        Rapid response team conducts thorough contamination assessment using advanced testing methods.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Microscope className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Professional Remediation</h3>
                      <p className="text-gray-600">
                        Complete surface disinfection using EPA-registered sanitizers specifically effective against E. coli.
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
                      <h3 className="text-lg font-semibold mb-2">Verification Testing</h3>
                      <p className="text-gray-600">
                        Post-remediation testing to ensure complete elimination of E. coli contamination.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Prevention Planning</h3>
                      <p className="text-gray-600">
                        Detailed recommendations and protocols to prevent future contamination incidents.
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
              24/7 response team available for immediate E. coli contamination remediation
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default EColi;