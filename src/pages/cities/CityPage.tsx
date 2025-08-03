import React from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Building2, UtensilsCrossed, Guitar as Hospital, Shield, Phone } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const cityData = {
  'jacksonville': {
    name: 'Jacksonville',
    region: 'Northeast Florida',
    population: '949,611',
    commercialAreas: ['Downtown Jacksonville', 'Southside', 'Arlington', 'Mandarin'],
    image: 'https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?ixlib=rb-4.0.3'
  },
  'miami': {
    name: 'Miami',
    region: 'South Florida',
    population: '442,241',
    commercialAreas: ['Downtown Miami', 'Brickell', 'Wynwood', 'Little Havana'],
    image: 'https://images.unsplash.com/photo-1589083130544-0d6a2926e519?ixlib=rb-4.0.3'
  },
  'tampa': {
    name: 'Tampa',
    region: 'Tampa Bay Area',
    population: '384,959',
    commercialAreas: ['Downtown Tampa', 'Westshore', 'Ybor City', 'Hyde Park'],
    image: 'https://images.unsplash.com/photo-1565538420870-da08ff96a207?ixlib=rb-4.0.3'
  },
  // Add more cities as needed...
};

function CityPage() {
  const { cityName } = useParams();
  const city = cityData[cityName as keyof typeof cityData];

  if (!city) {
    return <div>City not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div 
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${city.image}")`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent">
          <div className="container mx-auto px-6 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-6 h-6" />
                <span className="text-lg">{city.region}</span>
              </div>
              <h1 className="text-5xl font-bold mb-4">Commercial Cleaning Services in {city.name}</h1>
              <p className="text-xl">Professional cleaning solutions for businesses in {city.name} and surrounding areas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Building2 className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Office Cleaning</h3>
            <p className="text-gray-600">Comprehensive cleaning services for offices and commercial spaces in {city.name}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <UtensilsCrossed className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Restaurant Cleaning</h3>
            <p className="text-gray-600">Specialized cleaning for restaurants and food service businesses</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Hospital className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Medical Facility Cleaning</h3>
            <p className="text-gray-600">Healthcare-grade cleaning and sanitization services</p>
          </div>
        </div>

        {/* Areas Served */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Areas Served in {city.name}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {city.commercialAreas.map((area) => (
              <div key={area} className="bg-white p-4 rounded-lg shadow-md">
                <MapPin className="w-5 h-5 text-blue-600 mb-2" />
                <span className="text-gray-800">{area}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Get a Free Quote</h2>
              <p className="text-xl text-gray-600">Serving businesses in {city.name} with professional cleaning services</p>
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

export default CityPage;