import React from 'react';
import { MapPin } from 'lucide-react';

const VenueInfo: React.FC = () => {
  return (
    <div className="mt-16 w-full max-w-xl bg-cream/70 dark:bg-deepPurple/70 backdrop-blur-sm rounded-lg p-6 shadow-md text-center">
      <div className="flex items-center justify-center mb-4">
        <MapPin className="w-5 h-5 mr-2 text-gold dark:text-purple" />
        <h3 className="text-xl font-semibold text-charcoal dark:text-cream">Venue Information</h3>
      </div>
      
      <div className="mb-4">
        <h4 className="text-lg font-medium text-charcoal dark:text-cream">Movistar Arena</h4>
        <p className="text-sage dark:text-charcoal mt-1">Humboldt 450, Ciudad Autónoma de Buenos Aires</p>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between text-sm text-sage dark:text-charcoal">
        <div className="mb-2 md:mb-0">
          <span className="font-medium">Date:</span> May 27, 2025
        </div>
        <div className="mb-2 md:mb-0">
          <span className="font-medium">Doors Open:</span> 6:30 PM
        </div>
        <div>
          <span className="font-medium">Show Starts:</span> 8:00 PM
        </div>
      </div>
    </div>
  );
};

export default VenueInfo;