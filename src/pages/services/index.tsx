import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, UtensilsCrossed, Guitar as Hospital, Warehouse, Clock, Sparkles, Building, School, Factory, ShoppingCart, Briefcase, Hammer, Trees, HardHat, Trash2 } from 'lucide-react';

const services = [
  {
    name: 'Restaurant Cleaning',
    icon: UtensilsCrossed,
    description: 'Professional cleaning for restaurants, bars, and food service establishments',
    slug: 'restaurant-cleaning',
    image: 'https://static.wixstatic.com/media/08c0d3_69636e9f439747049d46ce3ae38f246f~mv2.jpeg'
  },
  {
    name: 'Office Cleaning',
    icon: Building2,
    description: 'Comprehensive cleaning solutions for office spaces and corporate environments',
    slug: 'office-cleaning',
    image: 'https://static.wixstatic.com/media/08c0d3_270e92f0ec2e4e9e9e32f83a089f4045~mv2.jpg'
  },
  {
    name: 'Medical Facility Cleaning',
    icon: Hospital,
    description: 'Specialized cleaning services for healthcare facilities and medical offices',
    slug: 'medical-facility-cleaning',
    image: 'https://static.wixstatic.com/media/08c0d3_e50d5e8c68f04579935c00a2517628b0~mv2.png'
  },
  {
    name: 'Warehouse Cleaning',
    icon: Warehouse,
    description: 'Industrial cleaning services for warehouses and distribution centers',
    slug: 'warehouse-cleaning',
    image: 'https://static.wixstatic.com/media/08c0d3_ebba0159dbd74acf9661f02ad431ea50~mv2.jpg'
  },
  {
    name: 'Day Porter Services',
    icon: Clock,
    description: 'On-site cleaning and maintenance services during business hours',
    slug: 'day-porter-services',
    image: 'https://static.wixstatic.com/media/08c0d3_69636e9f439747049d46ce3ae38f246f~mv2.jpeg'
  },
  {
    name: 'Deep Cleaning Services',
    icon: Sparkles,
    description: 'Thorough deep cleaning and sanitization services',
    slug: 'deep-cleaning',
    image: 'https://static.wixstatic.com/media/08c0d3_270e92f0ec2e4e9e9e32f83a089f4045~mv2.jpg'
  },
  {
    name: 'Commercial Building Cleaning',
    icon: Building,
    description: 'Complete cleaning solutions for commercial buildings and properties',
    slug: 'commercial-building-cleaning',
    image: 'https://static.wixstatic.com/media/08c0d3_e50d5e8c68f04579935c00a2517628b0~mv2.png'
  },
  {
    name: 'School & University Cleaning',
    icon: School,
    description: 'Specialized cleaning for educational institutions',
    slug: 'educational-facility-cleaning',
    image: 'https://static.wixstatic.com/media/08c0d3_ebba0159dbd74acf9661f02ad431ea50~mv2.jpg'
  },
  {
    name: 'Industrial Cleaning',
    icon: Factory,
    description: 'Heavy-duty cleaning services for industrial facilities',
    slug: 'industrial-cleaning',
    image: 'https://static.wixstatic.com/media/08c0d3_69636e9f439747049d46ce3ae38f246f~mv2.jpeg'
  },
  {
    name: 'Retail Cleaning',
    icon: ShoppingCart,
    description: 'Professional cleaning for retail stores and shopping centers',
    slug: 'retail-cleaning',
    image: 'https://static.wixstatic.com/media/08c0d3_270e92f0ec2e4e9e9e32f83a089f4045~mv2.jpg'
  },
  {
    name: 'Corporate Campus Cleaning',
    icon: Briefcase,
    description: 'Comprehensive cleaning for corporate campuses and office parks',
    slug: 'corporate-campus-cleaning',
    image: 'https://static.wixstatic.com/media/08c0d3_e50d5e8c68f04579935c00a2517628b0~mv2.png'
  },
  {
    name: 'Construction Cleanup',
    icon: Hammer,
    description: 'Post-construction and renovation cleanup services',
    slug: 'construction-cleanup',
    image: 'https://static.wixstatic.com/media/08c0d3_ebba0159dbd74acf9661f02ad431ea50~mv2.jpg'
  },
  {
    name: 'Green Cleaning Services',
    icon: Trees,
    description: 'Eco-friendly cleaning solutions using sustainable products',
    slug: 'green-cleaning',
    image: 'https://static.wixstatic.com/media/08c0d3_69636e9f439747049d46ce3ae38f246f~mv2.jpeg'
  },
  {
    name: 'Manufacturing Facility Cleaning',
    icon: HardHat,
    description: 'Specialized cleaning for manufacturing plants and facilities',
    slug: 'manufacturing-cleaning',
    image: 'https://static.wixstatic.com/media/08c0d3_270e92f0ec2e4e9e9e32f83a089f4045~mv2.jpg'
  },
  {
    name: 'Waste Management',
    icon: Trash2,
    description: 'Commercial waste management and disposal services',
    slug: 'waste-management',
    image: 'https://static.wixstatic.com/media/08c0d3_e50d5e8c68f04579935c00a2517628b0~mv2.png'
  }
];

function ServicesIndex() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Professional Cleaning Services</h1>
          <p className="text-xl text-gray-600">Comprehensive commercial cleaning solutions for every industry</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link 
                key={service.slug}
                to={`/services/${service.slug}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition group"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900">{service.name}</h2>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ServicesIndex;