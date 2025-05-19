
import React, { useState, useEffect } from 'react';
import { toast } from '@/components/ui/sonner';
import { Bell } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

// Data for generating realistic notifications
const southIndianNames = [
  'Arun', 'Priya', 'Mohammed', 'Sarah', 'Karthik', 'Lakshmi', 'Joseph', 'Ananya', 
  'Vikas', 'Meena', 'Thomas', 'Divya', 'Raj', 'Sarika', 'Sanjay', 'Fatima', 
  'Krishna', 'Nisha', 'Rahul', 'Anjali', 'Abdul', 'Mary', 'Vijay', 'Deepa',
  'John', 'Gayatri', 'Arjun', 'Zainab', 'Samuel', 'Kavya'
];

const locations = [
  // Kerala districts
  'Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Thrissur', 'Kannur', 'Kollam', 'Alappuzha',
  'Kottayam', 'Palakkad', 'Malappuram', 'Kasaragod', 'Pathanamthitta', 'Idukki', 'Wayanad',
  // Other Indian states
  'Chennai', 'Bengaluru', 'Hyderabad', 'Mumbai', 'Delhi', 'Kolkata', 'Ahmedabad', 'Pune',
  // GCC countries
  'Dubai', 'Abu Dhabi', 'Doha', 'Riyadh', 'Kuwait', 'Muscat'
];

const timeframes = [
  '30 minutes ago', '25 minutes ago', '20 minutes ago', '15 minutes ago',
  '12 minutes ago', '10 minutes ago', '8 minutes ago', '5 minutes ago',
  '3 minutes ago', '2 minutes ago', 'just now'
];

const EnrollmentNotification = () => {
  const isMobile = useIsMobile();
  const [usedNames, setUsedNames] = useState<string[]>([]);

  // Create a notification at intervals
  useEffect(() => {
    // First notification after 10 seconds
    const firstTimer = setTimeout(() => {
      showRandomNotification();
    }, 10000);

    // Set up recurring notifications
    const intervalTimer = setInterval(() => {
      showRandomNotification();
    }, 8000); // Changed from 5000 to 8000 (8 seconds between notifications)

    return () => {
      clearTimeout(firstTimer);
      clearInterval(intervalTimer);
    };
  }, []);

  const getRandomName = () => {
    // Filter out already used names
    const availableNames = southIndianNames.filter(name => !usedNames.includes(name));
    
    // If all names have been used, reset the used names array
    if (availableNames.length === 0) {
      setUsedNames([]);
      return southIndianNames[Math.floor(Math.random() * southIndianNames.length)];
    }
    
    const name = availableNames[Math.floor(Math.random() * availableNames.length)];
    setUsedNames(prev => [...prev, name]);
    return name;
  };

  const showRandomNotification = () => {
    const name = getRandomName();
    const location = locations[Math.floor(Math.random() * locations.length)];
    const timeframe = timeframes[Math.floor(Math.random() * timeframes.length)];

    toast(
      <div className="flex items-center gap-2">
        <Bell className="h-4 w-4 text-green-600" />
        <span>{name} from {location} enrolled {timeframe}</span>
      </div>,
      {
        duration: 4000,
        className: 'bg-green-50 border-green-200',
        position: isMobile ? 'bottom-center' : 'bottom-left',
        style: { 
          zIndex: 50,
          position: 'fixed',
          bottom: '16px',
          left: isMobile ? '50%' : '16px',
          transform: isMobile ? 'translateX(-50%)' : 'none'
        }
      }
    );
  };

  return null; // This component doesn't render anything directly
};

export default EnrollmentNotification;
