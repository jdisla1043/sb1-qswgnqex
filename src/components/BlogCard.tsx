import React from 'react';
import { Clock } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  slug: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, excerpt, date, imageUrl, slug }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={imageUrl} 
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <Clock size={16} className="mr-2" />
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <a 
          href={`/blog/${slug}`} 
          className="text-blue-600 font-semibold hover:text-blue-700 transition"
        >
          Read More →
        </a>
      </div>
    </div>
  );
};

export default BlogCard;