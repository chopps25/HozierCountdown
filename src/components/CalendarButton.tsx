import React from 'react';
import { Calendar } from 'lucide-react';

const CalendarButton: React.FC = () => {
  const concertDate = new Date(2025, 4, 27, 20, 0); // May 27, 2025, 8:00 PM
  const endDate = new Date(2025, 4, 27, 23, 0); // Assuming 3 hour concert
  
  const handleAddToCalendar = () => {
    // Format dates for Google Calendar
    const startTime = concertDate.toISOString().replace(/-|:|\.\d+/g, '');
    const endTime = endDate.toISOString().replace(/-|:|\.\d+/g, '');
    
    // Create Google Calendar URL
    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=Hozier%20Concert&dates=${startTime}/${endTime}&details=Hozier%20Wasteland%20Baby%20Tour&location=Movistar%20Arena,%20Humboldt%20450,%20Ciudad%20Autónoma%20de%20Buenos%20Aires`;
    
    // Open in new tab
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <button 
      onClick={handleAddToCalendar}
      className="flex items-center bg-gold hover:bg-gold/80 dark:bg-purple dark:hover:bg-purple/80 text-white py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold dark:focus:ring-purple"
    >
      <Calendar className="w-5 h-5 mr-2" />
      <span className="font-medium">Add to Calendar</span>
    </button>
  );
};

export default CalendarButton;