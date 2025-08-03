import React from 'react';
import { Shield, Clock, CheckCircle2, Sparkles, Users, BadgeCheck } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const benefits = [
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Fully licensed and insured for your complete peace of mind'
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Round-the-clock service to meet your business needs'
  },
  {
    icon: CheckCircle2,
    title: 'Quality Guaranteed',
    description: 'Satisfaction guaranteed with every cleaning service'
  },
  {
    icon: Sparkles,
    title: 'Eco-Friendly',
    description: 'Using environmentally safe cleaning products'
  },
  {
    icon: Users,
    title: 'Experienced Team',
    description: 'Professional staff with extensive training'
  },
  {
    icon: BadgeCheck,
    title: 'Certified Methods',
    description: 'Industry-approved cleaning techniques and protocols'
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600">Experience the difference with our professional cleaning services</p>
        </div>
        
        <Swiper
          modules={[Autoplay, Navigation]}
          navigation
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="py-8"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl shadow-md p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default BenefitsSection;