import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

const cities = [
  { name: 'Jacksonville', population: '949,611', region: 'Northeast Florida' },
  { name: 'Miami', population: '442,241', region: 'South Florida' },
  { name: 'Tampa', population: '384,959', region: 'Tampa Bay Area' },
  { name: 'Orlando', population: '307,573', region: 'Central Florida' },
  { name: 'St. Petersburg', population: '258,308', region: 'Tampa Bay Area' },
  { name: 'Hialeah', population: '223,109', region: 'South Florida' },
  { name: 'Port St. Lucie', population: '201,846', region: 'Treasure Coast' },
  { name: 'Tallahassee', population: '196,169', region: 'North Florida' },
  { name: 'Cape Coral', population: '194,016', region: 'Southwest Florida' },
  { name: 'Fort Lauderdale', population: '182,760', region: 'South Florida' },
  { name: 'Pembroke Pines', population: '171,178', region: 'South Florida' },
  { name: 'Hollywood', population: '153,067', region: 'South Florida' },
  { name: 'Gainesville', population: '141,085', region: 'North Central Florida' },
  { name: 'Coral Springs', population: '134,394', region: 'South Florida' },
  { name: 'Clearwater', population: '117,292', region: 'Tampa Bay Area' }
];

function CitiesIndex() {
  return (
    <>
      <SEOHead 
        title="Florida Cities We Serve - Commercial Cleaning Services Statewide"
        description="Professional commercial cleaning services available across Florida. Serving Jacksonville, Miami, Tampa, Orlando, and all major Florida cities with expert cleaning solutions."
        keywords="commercial cleaning Florida cities, Jacksonville cleaning, Miami cleaning, Tampa cleaning, Orlando cleaning, Florida janitorial services"
        canonicalUrl="/cities"
      />
      <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Commercial Cleaning Services Across Florida</h1>
          <p className="text-xl text-gray-600">Professional cleaning services available in major Florida cities</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {cities.map((city) => (
            <Link 
              key={city.name}
              to={`/cities/${city.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">{city.name}</h2>
                  <p className="text-gray-600 mb-1">Population: {city.population}</p>
                  <p className="text-gray-600">Region: {city.region}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default CitiesIndex;