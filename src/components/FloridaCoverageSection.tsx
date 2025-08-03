import React from 'react';
import { MapPin, Building2, Truck, Clock, Phone } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const regions = [
  {
    name: 'Tampa Bay Area',
    cities: ['Tampa', 'St. Petersburg', 'Clearwater', 'Brandon'],
    image: 'https://static.wixstatic.com/media/08c0d3_46f6f0bf85a249a38eddf9083743846d~mv2.png'
  },
  {
    name: 'Central Florida',
    cities: ['Orlando', 'Kissimmee', 'Winter Park', 'Lake Mary'],
    image: 'https://static.wixstatic.com/media/08c0d3_69636e9f439747049d46ce3ae38f246f~mv2.jpeg'
  },
  {
    name: 'South Florida',
    cities: ['Miami', 'Fort Lauderdale', 'West Palm Beach', 'Boca Raton'],
    image: 'https://static.wixstatic.com/media/08c0d3_270e92f0ec2e4e9e9e32f83a089f4045~mv2.jpg'
  },
  {
    name: 'Northeast Florida',
    cities: ['Jacksonville', 'St. Augustine', 'Ponte Vedra', 'Orange Park'],
    image: 'https://static.wixstatic.com/media/08c0d3_e50d5e8c68f04579935c00a2517628b0~mv2.png'
  }
];

const features = [
  {
    icon: Truck,
    title: 'Statewide Coverage',
    description: 'Professional cleaning services available throughout Florida'
  },
  {
    icon: Clock,
    title: 'Fast Response',
    description: 'Quick service deployment to any location in Florida'
  },
  {
    icon: Building2,
    title: 'Local Teams',
    description: 'Experienced cleaning crews in every major Florida region'
  }
];

const FloridaCoverageSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Serving All of Florida</h2>
          <p className="text-xl text-gray-600">Professional commercial cleaning services available statewide</p>
        </div>

        <Swiper
          modules={[Autoplay, Navigation]}
          navigation
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="mb-16"
        >
          {regions.map((region, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={region.image}
                    alt={region.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-5 h-5" />
                        <h3 className="text-xl font-semibold">{region.name}</h3>
                      </div>
                      <p className="text-sm opacity-90">{region.cities.join(' • ')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-6">
            Need commercial cleaning services anywhere in Florida? We've got you covered with our professional teams strategically located throughout the state.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              Get a Quote
            </a>
            <a 
              href="tel:8137384220"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold flex items-center gap-2 border border-gray-200"
            >
              <Phone size={20} />
              (813) 738-4220
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloridaCoverageSection;