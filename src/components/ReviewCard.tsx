import React from 'react';
import { Star, Quote } from 'lucide-react';

interface ReviewCardProps {
  name: string;
  business: string;
  review: string;
  rating: number;
  image: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, business, review, rating, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 relative">
      <div className="absolute -top-6 left-6">
        <div className="w-12 h-12 rounded-full overflow-hidden border-4 border-white shadow-md">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="mt-6">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <Quote className="w-8 h-8 text-blue-100 mb-2" />
        <p className="text-gray-600 mb-4">{review}</p>
        <div>
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-500">{business}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;