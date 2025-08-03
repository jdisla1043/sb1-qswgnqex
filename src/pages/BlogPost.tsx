import React from 'react';
import { useParams } from 'react-router-dom';
import { Clock, ArrowLeft } from 'lucide-react';

const blogContent = {
  'importance-of-commercial-kitchen-cleaning': {
    title: "The Importance of Regular Commercial Kitchen Cleaning",
    date: "March 15, 2024",
    imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3",
    content: `
      <h2>Why Kitchen Cleanliness Matters</h2>
      <p>In the food service industry, maintaining a clean kitchen is not just about appearances – it's a crucial aspect of food safety, regulatory compliance, and business success. Regular commercial kitchen cleaning helps prevent foodborne illnesses, ensures compliance with health codes, and maintains your restaurant's reputation.</p>

      <h2>Key Areas of Focus</h2>
      <ul>
        <li>Food preparation surfaces</li>
        <li>Cooking equipment and appliances</li>
        <li>Floor and wall cleaning</li>
        <li>Ventilation systems</li>
        <li>Storage areas</li>
      </ul>

      <h2>Benefits of Professional Kitchen Cleaning</h2>
      <p>Professional cleaning services offer several advantages:</p>
      <ul>
        <li>Thorough sanitization using commercial-grade products</li>
        <li>Compliance with health department standards</li>
        <li>Prevention of pest infestations</li>
        <li>Extended equipment lifespan</li>
        <li>Improved workplace safety</li>
      </ul>

      <h2>Cleaning Schedule Recommendations</h2>
      <p>An effective cleaning schedule should include:</p>
      <ul>
        <li>Daily cleaning of all food contact surfaces</li>
        <li>Weekly deep cleaning of equipment</li>
        <li>Monthly cleaning of ventilation systems</li>
        <li>Quarterly deep cleaning of all areas</li>
      </ul>
    `
  },
  'choosing-commercial-cleaning-service': {
    title: "How to Choose the Right Commercial Cleaning Service",
    date: "March 10, 2024",
    imageUrl: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?ixlib=rb-4.0.3",
    content: `
      <h2>Essential Factors to Consider</h2>
      <p>Selecting the right commercial cleaning service is crucial for maintaining your facility's cleanliness and professional appearance. Here are key factors to consider in your decision-making process.</p>

      <h2>Experience and Expertise</h2>
      <ul>
        <li>Industry-specific experience</li>
        <li>Professional certifications</li>
        <li>Staff training programs</li>
        <li>Knowledge of regulations</li>
      </ul>

      <h2>Services and Capabilities</h2>
      <p>Ensure the cleaning service offers:</p>
      <ul>
        <li>Comprehensive cleaning packages</li>
        <li>Specialized services for your industry</li>
        <li>Flexible scheduling options</li>
        <li>Emergency cleaning services</li>
      </ul>

      <h2>Questions to Ask Potential Providers</h2>
      <ul>
        <li>What is your experience in our industry?</li>
        <li>What cleaning products and methods do you use?</li>
        <li>How do you handle quality control?</li>
        <li>What is your backup plan for staff absences?</li>
      </ul>
    `
  }
};

function BlogPost() {
  const { slug } = useParams();
  const post = blogContent[slug as keyof typeof blogContent];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <a href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft size={20} className="mr-2" />
            Back to Blog
          </a>
          
          <img 
            src={post.imageUrl} 
            alt={post.title}
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />
          
          <div className="flex items-center text-gray-500 text-sm mb-4">
            <Clock size={16} className="mr-2" />
            <span>{post.date}</span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-8">{post.title}</h1>
          
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </div>
  );
}

export default BlogPost;