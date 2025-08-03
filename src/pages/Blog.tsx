import React from 'react';
import BlogCard from '../components/BlogCard';

const blogPosts = [
  {
    title: "The Importance of Regular Commercial Kitchen Cleaning",
    excerpt: "Learn why maintaining a clean commercial kitchen is crucial for food safety, health inspections, and customer satisfaction.",
    date: "March 15, 2024",
    imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3",
    slug: "importance-of-commercial-kitchen-cleaning"
  },
  {
    title: "How to Choose the Right Commercial Cleaning Service",
    excerpt: "A comprehensive guide to selecting a professional cleaning service that meets your business needs and budget.",
    date: "March 10, 2024",
    imageUrl: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?ixlib=rb-4.0.3",
    slug: "choosing-commercial-cleaning-service"
  },
  {
    title: "Medical Facility Cleaning: Best Practices and Protocols",
    excerpt: "Discover the specialized cleaning procedures and protocols required for maintaining a safe healthcare environment.",
    date: "March 5, 2024",
    imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3",
    slug: "medical-facility-cleaning-best-practices"
  },
  {
    title: "Green Cleaning: Eco-Friendly Commercial Cleaning Solutions",
    excerpt: "Explore environmentally responsible cleaning methods and products that maintain effectiveness while reducing environmental impact.",
    date: "March 1, 2024",
    imageUrl: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-4.0.3",
    slug: "eco-friendly-commercial-cleaning"
  }
];

function Blog() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cleaning Insights & Tips</h1>
          <p className="text-xl text-gray-600">Expert advice and industry insights to help maintain your facility</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;