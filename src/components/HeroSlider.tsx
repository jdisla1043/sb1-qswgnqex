import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { MapPin, Phone, Mail } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

const slides = [
  {
    image: 'https://static.wixstatic.com/media/08c0d3_46f6f0bf85a249a38eddf9083743846d~mv2.png',
    title: 'Tampa\'s Premier Commercial Cleaning Service',
    description: 'Professional cleaning solutions for businesses across Tampa Bay',
    highlight: 'Based in Tampa, FL'
  },
  {
    image: 'https://static.wixstatic.com/media/08c0d3_69636e9f439747049d46ce3ae38f246f~mv2.jpeg',
    title: 'Expert Office & Commercial Cleaning',
    description: 'Comprehensive cleaning services for offices, medical facilities, and retail spaces',
    highlight: 'Serving Tampa Bay Area'
  },
  {
    image: 'https://static.wixstatic.com/media/08c0d3_270e92f0ec2e4e9e9e32f83a089f4045~mv2.jpg',
    title: 'Medical Facility Specialists',
    description: 'Healthcare-grade cleaning and sanitization services',
    highlight: 'Licensed & Insured'
  },
  {
    image: 'https://static.wixstatic.com/media/08c0d3_e50d5e8c68f04579935c00a2517628b0~mv2.png',
    title: '24/7 Commercial Cleaning',
    description: 'Round-the-clock services to meet your business needs',
    highlight: 'Available 24/7'
  }
];

const HeroSlider = () => {
  return (
    <div className="relative h-[600px]">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        navigation
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div 
              className="relative h-full bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${slide.image}")`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent">
                <div className="container mx-auto px-6 h-full flex items-center">
                  <div className="max-w-2xl text-white">
                    <div className="flex items-center gap-2 mb-4">
                      <MapPin className="w-5 h-5" />
                      <span className="text-lg font-medium">{slide.highlight}</span>
                    </div>
                    <h2 className="text-5xl font-bold mb-6">{slide.title}</h2>
                    <p className="text-xl mb-8">{slide.description}</p>
                    <div className="flex flex-wrap gap-4">
                      <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition">
                        Get a Quote
                      </a>
                      <a href="tel:8137384220" className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-3 rounded-lg font-semibold transition flex items-center gap-2">
                        <Phone size={20} />
                        (813) 738-4220
                      </a>
                      <a href="mailto:floridajanitorialservices@gmail.com" className="bg-white/90 hover:bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold transition flex items-center gap-2">
                        <Mail size={20} />
                        Email Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
    </div>
  );
};

export default HeroSlider;