import React from 'react';
import { useParams } from 'react-router-dom';
import { Building2, UtensilsCrossed, Guitar as Hospital, Warehouse, Clock, Sparkles, Building, School, Factory, ShoppingCart, Briefcase, Hammer, Trees, HardHat, Trash2, CheckCircle2, Phone } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const servicesData = {
  'restaurant-cleaning': {
    name: 'Restaurant Cleaning',
    icon: UtensilsCrossed,
    image: 'https://static.wixstatic.com/media/08c0d3_69636e9f439747049d46ce3ae38f246f~mv2.jpeg',
    description: 'Professional cleaning services for restaurants, bars, and food service establishments',
    features: [
      'Kitchen deep cleaning and sanitization',
      'Dining area maintenance',
      'Hood and vent cleaning',
      'Floor care and maintenance',
      'Restroom sanitization',
      'Waste management'
    ],
    benefits: [
      'Maintain health code compliance',
      'Improve customer experience',
      'Prevent pest infestations',
      'Extend equipment lifespan',
      'Ensure food safety'
    ]
  },
  'office-cleaning': {
    name: 'Office Cleaning',
    icon: Building2,
    image: 'https://static.wixstatic.com/media/08c0d3_270e92f0ec2e4e9e9e32f83a089f4045~mv2.jpg',
    description: 'Comprehensive cleaning solutions for office spaces and corporate environments',
    features: [
      'Daily janitorial services',
      'Carpet cleaning',
      'Window cleaning',
      'Restroom maintenance',
      'Break room cleaning',
      'Trash removal'
    ],
    benefits: [
      'Boost employee productivity',
      'Create a healthy work environment',
      'Maintain professional appearance',
      'Reduce sick days',
      'Improve air quality'
    ]
  },
  'medical-facility-cleaning': {
    name: 'Medical Facility Cleaning',
    icon: Hospital,
    image: 'https://static.wixstatic.com/media/08c0d3_e50d5e8c68f04579935c00a2517628b0~mv2.png',
    description: 'Specialized cleaning services for healthcare facilities and medical offices',
    features: [
      'Operating room sanitization',
      'Patient room turnover',
      'Medical waste handling',
      'HEPA filtration',
      'Terminal cleaning',
      'Infection control protocols'
    ],
    benefits: [
      'Maintain medical compliance',
      'Prevent healthcare infections',
      'Ensure patient safety',
      'Support medical staff',
      'Meet regulatory standards'
    ]
  },
  // Add more services as needed...
};

function ServicePage() {
  const { serviceSlug } = useParams();
  const service = servicesData[serviceSlug as keyof typeof servicesData];
  const Icon = service?.icon || Building2;

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div 
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${service.image}")`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent">
          <div className="container mx-auto px-6 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-5xl font-bold">{service.name}</h1>
              </div>
              <p className="text-xl">{service.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Service Features</h2>
              <div className="space-y-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    </div>
                    <p className="text-lg text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Benefits</h2>
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    </div>
                    <p className="text-lg text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Get a Free Quote</h2>
              <p className="text-xl text-gray-600">Professional {service.name.toLowerCase()} services tailored to your needs</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center justify-center gap-4 mb-8">
                <a 
                  href="tel:8137384220"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  <Phone className="w-5 h-5" />
                  (813) 738-4220
                </a>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicePage;