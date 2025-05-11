
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VideoTestimonialsSectionProps {
  id?: string;
}

const VideoTestimonialsSection = ({ id }: VideoTestimonialsSectionProps) => {
  const [activeVideo, setActiveVideo] = useState(0);
  
  const videos = [
    {
      id: 'lTk_C63Nkro',
      name: 'Success Story 1',
      description: 'How Bizgurukul helped transform my financial situation'
    },
    {
      id: 'YXPtLTDfcEQ',
      name: 'Success Story 2',
      description: 'From zero income to financial freedom with digital marketing'
    },
    {
      id: 'NL1bxHXG7dU',
      name: 'Success Story 3',
      description: 'My journey with Bizgurukul affiliate marketing program'
    },
    {
      id: 'UeFULKgqgzc',
      name: 'Success Story 4',
      description: 'How I started earning passive income as a student'
    },
    {
      id: 'ACPn22QJJMY',
      name: 'Success Story 5',
      description: 'Bizgurukul helped me build multiple income streams'
    }
  ];

  const nextVideo = () => {
    setActiveVideo((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setActiveVideo((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">Hear how Bizgurukul changed their life 360°</h2>
        <p className="section-subtitle">See how Bizgurukul transformed these lives</p>
        
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-black rounded-xl overflow-hidden shadow-xl aspect-video relative">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videos[activeVideo].id}?rel=0`}
              title={videos[activeVideo].name}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0"
            ></iframe>
          </div>
          
          <div className="mt-6 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold">{videos[activeVideo].name}</h3>
              <p className="text-gray-600">{videos[activeVideo].description}</p>
            </div>
            
            <div className="flex space-x-3">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={prevVideo}
                className="rounded-full"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={nextVideo}
                className="rounded-full"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-3">
            {videos.map((video, index) => (
              <button
                key={index}
                onClick={() => setActiveVideo(index)}
                className={`relative rounded-md overflow-hidden aspect-video ${activeVideo === index ? 'ring-2 ring-primary' : ''}`}
              >
                <img 
                  src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`} 
                  alt={`Thumbnail for ${video.name}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Play className="w-6 h-6 text-white" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonialsSection;
