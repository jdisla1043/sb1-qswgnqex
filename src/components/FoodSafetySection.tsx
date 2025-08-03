import React from 'react';
import { ShieldCheck, Utensils, AlertTriangle, Clock, Sparkles, Bug } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const emergencyServices = [
  {
    icon: AlertTriangle,
    title: '24/7 Emergency Response',
    description: 'Immediate action for foodborne illness incidents'
  },
  {
    icon: Sparkles,
    title: 'Deep Sanitization',
    description: 'Hospital-grade disinfection of all surfaces'
  },
  {
    icon: Bug,
    title: 'Pathogen Elimination',
    description: 'Targeted treatment for harmful bacteria'
  },
  {
    icon: Clock,
    title: 'Quick Reopening',
    description: 'Minimize downtime with efficient service'
  }
];

const FoodSafetySection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <ShieldCheck className="w-10 h-10 text-blue-600" />
            <h2 className="text-3xl font-bold">Food Safety & Emergency Response</h2>
          </div>
          <p className="text-xl text-gray-600">
            Specialized sanitization and emergency response services for the food & beverage industry
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop
              className="w-full h-[400px] rounded-2xl overflow-hidden"
            >
              <SwiperSlide>
                <img 
                  src="https://images.unsplash.com/photo-1590579491624-f98f36d4c763?auto=format&fit=crop&q=80"
                  alt="Commercial Kitchen Cleaning"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img 
                  src="https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&q=80"
                  alt="Restaurant Sanitization"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img 
                  src="https://images.unsplash.com/photo-1587316745621-3757c7076f7b?auto=format&fit=crop&q=80"
                  alt="Food Safety"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            </Swiper>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent rounded-2xl" />
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-1 transition-transform">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Foodborne Illness Response</h3>
                  <p className="text-gray-600">
                    Immediate emergency response team available 24/7 for foodborne illness incidents. 
                    Our certified specialists follow strict protocols to eliminate pathogens and ensure 
                    your establishment's safety.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-1 transition-transform">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Professional Sanitization</h3>
                  <p className="text-gray-600">
                    Advanced disinfection services using hospital-grade sanitizers and EPA-registered 
                    products. Complete surface treatment with special attention to high-touch areas 
                    and food contact surfaces.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-1 transition-transform">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Utensils className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Industry Compliance</h3>
                  <p className="text-gray-600">
                    Our services meet and exceed health department standards and FDA guidelines. 
                    Detailed documentation provided for all sanitization and emergency response services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {emergencyServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md p-6 text-center transform hover:-translate-y-1 transition-transform"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="tel:8137384220"
            className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition font-semibold text-lg"
          >
            <AlertTriangle className="w-6 h-6" />
            24/7 Emergency Response: (813) 738-4220
          </a>
        </div>
      </div>
    </section>
  );
};

export default FoodSafetySection;