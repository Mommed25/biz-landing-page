import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from '@/components/ui/sonner';

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
  '2 minutes ago', '5 minutes ago', 'just now', '10 minutes ago',
  '15 minutes ago', '30 minutes ago', 'an hour ago'
];

const EnrollmentNotification = () => {
  // Create a notification at intervals
  useEffect(() => {
    // First notification after 10 seconds
    const firstTimer = setTimeout(() => {
      showRandomNotification();
    }, 10000);

    // Set up recurring notifications
    const intervalTimer = setInterval(() => {
      showRandomNotification();
    }, 25000); // Show a notification every 25 seconds

    return () => {
      clearTimeout(firstTimer);
      clearInterval(intervalTimer);
    };
  }, []);

  const showRandomNotification = () => {
    const name = southIndianNames[Math.floor(Math.random() * southIndianNames.length)];
    const location = locations[Math.floor(Math.random() * locations.length)];
    const timeframe = timeframes[Math.floor(Math.random() * timeframes.length)];

    toast(`${name} from ${location} enrolled ${timeframe}`, {
      duration: 4000,
      className: 'bg-green-50 border-green-200',
    });
  };

  return null; // This component doesn't render anything directly
};

export default EnrollmentNotification;
