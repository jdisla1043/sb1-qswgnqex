import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import ReviewCard from './ReviewCard';
import 'swiper/css';
import 'swiper/css/navigation';

const reviews = [
  {
    name: 'John Smith',
    business: 'Tampa Bay Medical Center',
    review: 'Outstanding medical facility cleaning services. Their attention to detail and adherence to healthcare cleaning protocols is exceptional.',
    rating: 5,
    image: 'https://static.wixstatic.com/media/08c0d3_270e92f0ec2e4e9e9e32f83a089f4045~mv2.jpg'
  },
  {
    name: 'Sarah Johnson',
    business: 'Downtown Bistro',
    review: 'The restaurant cleaning service is top-notch. They understand the unique needs of food service establishments and always deliver excellent results.',
    rating: 5,
    image: 'https://static.wixstatic.com/media/08c0d3_69636e9f439747049d46ce3ae38f246f~mv2.jpeg'
  },
  {
    name: 'Michael Brown',
    business: 'Bay Area Corporate Center',
    review: 'Reliable and professional office cleaning services. Our workspace has never looked better. Highly recommended!',
    rating: 5,
    image: 'https://static.wixstatic.com/media/08c0d3_e50d5e8c68f04579935c00a2517628b0~mv2.png'
  },
  {
    name: 'Emily Davis',
    business: 'Clearwater Retail Plaza',
    review: 'Excellent commercial cleaning service. Their team is always punctual, professional, and thorough.',
    rating: 5,
    image: 'https://static.wixstatic.com/media/08c0d3_ebba0159dbd74acf9661f02ad431ea50~mv2.jpg'
  }
];

const ReviewsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">Trusted by businesses across Tampa Bay</p>
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
          className="py-8"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <ReviewCard {...review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ReviewsSection;