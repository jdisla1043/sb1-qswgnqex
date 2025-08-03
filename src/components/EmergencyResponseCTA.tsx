import React from 'react';
import { AlertTriangle, Phone, Clock, MapPin } from 'lucide-react';

const EmergencyResponseCTA = () => {
  return (
    <div className="bg-red-50 border border-red-100 rounded-xl p-8 mb-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-red-900">24/7 Emergency Response</h3>
            <p className="text-red-700">Immediate assistance across Florida</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2 text-red-700">
            <Clock className="w-5 h-5" />
            <span>Response within 2 hours</span>
          </div>
          <div className="flex items-center gap-2 text-red-700">
            <MapPin className="w-5 h-5" />
            <span>Serving all of Florida</span>
          </div>
        </div>
        <a 
          href="tel:8137384220"
          className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition font-semibold whitespace-nowrap"
        >
          <Phone className="w-5 h-5" />
          (813) 738-4220
        </a>
      </div>
    </div>
  );
};

export default EmergencyResponseCTA;