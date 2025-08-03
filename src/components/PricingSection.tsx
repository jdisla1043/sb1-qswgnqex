import React from 'react';
import { Check, Clock, Shield, Sparkles, AlertTriangle, Calendar } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: 'On-Demand Cleaning',
      price: '100',
      period: 'Every month',
      description: 'Stay flexible and ready for anything with our On-Demand Cleaning Plan',
      subtitle: 'Valid until canceled',
      features: [
        'No Long-Term Commitment',
        'Budget-Friendly',
        'Flexibility',
        'Priority Scheduling',
        'Emergency Response'
      ],
      highlight: 'Best Value',
      buttonText: 'Select',
      color: 'purple'
    },
    {
      name: '1. Essential Care Plan',
      subtitle: '(Quarterly)',
      price: '175',
      period: 'Every month',
      description: 'Every 3 Months we visit your location. Ideal for businesses with low foot traffic, small offices, or those seeking basic maintenance.',
      features: [
        'Comprehensive deep cleaning of all areas',
        'Floor-to-ceiling cleaning, including restrooms, breakrooms',
        'Disinfection of high-touch surfaces to reduce the spread of illness',
        "Customized cleaning checklist based on your facility's needs"
      ],
      highlight: 'Save Time & Money With Us!',
      buttonText: 'Select',
      color: 'teal'
    },
    {
      name: '2. Standard Clean Plan',
      subtitle: '(Monthly)',
      price: '300',
      period: 'Every month',
      description: 'Ideal For: Medium-sized offices, retail stores, restaurants, and clinics with moderate customer interaction.',
      features: [
        'Detailed cleaning of the entire facility',
        'Regular sanitization of high-traffic areas, kitchens, etc',
        'Deep cleaning of flooring and upholstery every quarter',
        'Use of eco-friendly cleaning products upon request'
      ],
      highlight: 'Save Time & Money With Us!',
      buttonText: 'Select',
      color: 'teal'
    },
    {
      name: '3. Enhanced Hygiene Plan',
      subtitle: '(Weekly)',
      price: '1,250',
      period: 'Every month',
      description: 'Ideal For: Busy offices, healthcare centers, restaurants, or businesses requiring consistent cleanliness',
      features: [
        'Comprehensive weekly cleanings, including all workspaces',
        'Special focus on high-contact surfaces (e.g., door handles)',
        'Monthly deep cleaning of equipment and appliances',
        'Emergency response cleaning services available upon request'
      ],
      highlight: 'Save Time & Money With Us!',
      buttonText: 'Select',
      color: 'teal'
    },
    {
      name: '4. Ultimate Protection Plan',
      subtitle: '(Nightly)',
      price: '7,500',
      period: 'Every month',
      description: 'Ideal For: Restaurants, food processors, healthcare facilities, and high-traffic businesses',
      features: [
        'Nightly cleaning and sanitization of all areas',
        'Comprehensive deep cleaning of kitchens, dining areas etc',
        'Disinfection protocols targeting bacteria and viruses',
        'Customized cleaning schedule tailored to your operation'
      ],
      highlight: 'Save Time & Money With Us!',
      buttonText: 'Select',
      color: 'teal'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Commercial Cleaning Pricing Plans</h2>
          <p className="text-xl text-gray-600">Find the perfect plan for your facility</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300 ${
                index >= 3 ? 'lg:col-span-2 xl:col-span-1' : ''
              }`}
            >
              {/* Highlight Banner */}
              <div className={`px-4 py-1 text-white text-center text-sm ${
                plan.color === 'purple' ? 'bg-purple-600' : 'bg-teal-600'
              }`}>
                {plan.highlight}
              </div>

              <div className="p-8">
                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  {plan.subtitle && (
                    <p className="text-gray-600 text-sm mb-4">{plan.subtitle}</p>
                  )}
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-3xl font-bold">$</span>
                    <span className="text-5xl font-bold">{plan.price}</span>
                  </div>
                  <p className="text-gray-600">{plan.period}</p>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-8 text-center">{plan.description}</p>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-1" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button 
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    plan.color === 'purple'
                      ? 'bg-purple-600 hover:bg-purple-700 text-white'
                      : 'bg-teal-600 hover:bg-teal-700 text-white'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-gray-600 mb-8">
            All plans include professional cleaning staff, supplies, and equipment. 
            Customization available for specific needs.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700">Flexible Scheduling</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700">Satisfaction Guaranteed</span>
            </div>
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700">24/7 Emergency Response</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700">12-Month Price Lock</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;