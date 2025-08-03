import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Phone, MapPin, Shield, Building2, Guitar as Hospital, UtensilsCrossed, Clock, CheckCircle2, Mail, AlertTriangle, Hammer } from 'lucide-react';
import Navbar from './components/Navbar';
import ServiceCard from './components/ServiceCard';
import ContactForm from './components/ContactForm';
import HeroSlider from './components/HeroSlider';
import BenefitsSection from './components/BenefitsSection';
import ReviewsSection from './components/ReviewsSection';
import MoldRemediationSection from './components/MoldRemediationSection';
import PostConstructionSection from './components/PostConstructionSection';
import FloridaCoverageSection from './components/FloridaCoverageSection';
import FoodSafetySection from './components/FoodSafetySection';
import PricingSection from './components/PricingSection';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import CitiesIndex from './pages/cities';
import CityPage from './pages/cities/CityPage';
import ServicesIndex from './pages/services';
import ServicePage from './pages/services/ServicePage';
import EColi from './pages/foodborne/EColi';
import Listeria from './pages/foodborne/Listeria';
import Salmonella from './pages/foodborne/Salmonella';

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSlider />

      {/* Services Section */}
      <section className="py-20 bg-gray-50" id="services">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Specialized Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={AlertTriangle}
              title="Mold Remediation"
              description="Professional mold detection, removal, and prevention services for commercial properties."
            />
            <ServiceCard 
              icon={Hammer}
              title="Post Construction Cleaning"
              description="Comprehensive cleanup services for construction and renovation projects."
            />
            <ServiceCard 
              icon={Building2}
              title="Office Cleaning"
              description="Complete office cleaning solutions including daily maintenance and deep cleaning services."
            />
            <ServiceCard 
              icon={UtensilsCrossed}
              title="Restaurant Cleaning"
              description="Professional kitchen and dining area cleaning following strict health codes and regulations."
            />
            <ServiceCard 
              icon={Hospital}
              title="Medical Facility Cleaning"
              description="Specialized cleaning and sanitization for healthcare facilities following medical standards."
            />
            <ServiceCard 
              icon={Shield}
              title="Disinfection Services"
              description="Advanced disinfection and sanitization services to eliminate harmful pathogens."
            />
          </div>
        </div>
      </section>

      {/* Food Safety Section */}
      <FoodSafetySection />

      {/* Mold Remediation Section */}
      <MoldRemediationSection />

      {/* Post Construction Section */}
      <PostConstructionSection />

      {/* Florida Coverage Section */}
      <FloridaCoverageSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Contact Section */}
      <section className="py-20 bg-white" id="contact">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Get a Free Quote</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/cities" element={<CitiesIndex />} />
          <Route path="/cities/:cityName" element={<CityPage />} />
          <Route path="/services" element={<ServicesIndex />} />
          <Route path="/services/:serviceSlug" element={<ServicePage />} />
          <Route path="/foodborne/ecoli" element={<EColi />} />
          <Route path="/foodborne/listeria" element={<Listeria />} />
          <Route path="/foodborne/salmonella" element={<Salmonella />} />
        </Routes>
        
        {/* Footer */}
        <footer className="bg-blue-900 text-white py-12">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Florida Commercial Cleaning</h3>
                <p className="mb-4">Professional cleaning services for businesses across Florida</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Phone size={20} />
                    <a href="tel:8137384220">(813) 738-4220</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={20} />
                    <a href="mailto:floridajanitorialservices@gmail.com">floridajanitorialservices@gmail.com</a>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Services</h3>
                <ul className="space-y-2">
                  <li>Mold Remediation</li>
                  <li>Post Construction Cleaning</li>
                  <li>Office Cleaning</li>
                  <li>Medical Facility Cleaning</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Service Areas</h3>
                <ul className="space-y-2">
                  <li>Tampa Bay Area</li>
                  <li>Central Florida</li>
                  <li>South Florida</li>
                  <li>Northeast Florida</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-blue-800 mt-8 pt-8 text-center">
              <p>&copy; {new Date().getFullYear()} Florida Commercial Cleaning. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;