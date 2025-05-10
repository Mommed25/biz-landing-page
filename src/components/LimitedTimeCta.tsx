
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Timer } from 'lucide-react';
import { cn } from '@/lib/utils';

const LimitedTimeCta = ({ 
  className,
  variant = "full" // "full" or "compact"
}: { 
  className?: string;
  variant?: "full" | "compact";
}) => {
  const [isPulsing, setIsPulsing] = useState(false);
  const [remainingSlots, setRemainingSlots] = useState(4);

  // Create a pulsing effect every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing(true);
      const timer = setTimeout(() => setIsPulsing(false), 1000);
      return () => clearTimeout(timer);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cn(
      "bg-gradient-to-r from-orange-50 via-red-50 to-orange-50 rounded-2xl border border-red-100 shadow-lg p-6 md:p-8",
      variant === "compact" ? "max-w-3xl mx-auto" : "w-full",
      className
    )}>
      <div className={cn(
        "flex flex-col md:flex-row items-center justify-between gap-6",
        variant === "compact" ? "md:px-4" : ""
      )}>
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Timer className="h-5 w-5 text-primary animate-pulse" />
            <span className="bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full">
              Only {remainingSlots} slots remaining!
            </span>
          </div>
          
          <h3 className="text-xl md:text-2xl font-bold mb-2">
            30% Early Bird Discount Ending Soon
          </h3>
          
          <div className="flex items-center gap-3 mb-4">
            <span className="text-gray-500 line-through">₹15,999</span>
            <span className="text-2xl md:text-3xl font-bold text-primary">₹10,999</span>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
              Save ₹5,000
            </span>
          </div>
          
          {variant === "full" && (
            <p className="text-gray-600 mb-4 max-w-lg">
              Get lifetime access to our digital marketing course with complete affiliate marketing training. Join 2.5 Lakh+ students already earning thousands every month!
            </p>
          )}
        </div>
        
        <div className="w-full md:w-auto">
          <Button 
            size="lg"
            className={cn(
              "w-full md:w-auto text-base px-8 py-6 h-auto flex items-center gap-2 rounded-full shadow-md transition-all duration-300",
              isPulsing ? "scale-105 shadow-xl" : "",
            )}
          >
            <span>Enroll Now</span>
            <Zap className={cn(
              "h-5 w-5 transition-all",
              isPulsing ? "scale-125" : ""
            )} />
          </Button>
          
          <p className="text-xs text-center md:text-left text-gray-500 mt-2">
            Lifetime access • One-time payment
          </p>
        </div>
      </div>
    </div>
  );
};

export default LimitedTimeCta;
