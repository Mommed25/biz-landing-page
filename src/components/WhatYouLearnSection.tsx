
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WhatYouLearnSection = () => {
  const learningModules = [
    {
      title: "Social Media Marketing",
      content: "Learn how to leverage different social media platforms to grow your brand presence, engage with your audience, and convert followers into customers."
    },
    {
      title: "Facebook & Google Ads",
      content: "Master paid advertising on the two biggest platforms to reach targeted audiences, drive traffic, and generate leads with effective campaigns and budget optimization."
    },
    {
      title: "Search Engine Optimisation",
      content: "Understand how to rank your websites higher on search engines, drive organic traffic, and implement effective keyword strategies for better visibility."
    },
    {
      title: "Website Development",
      content: "Learn to build and optimize websites that convert visitors into customers, with focus on user experience, responsive design, and conversion optimization."
    },
    {
      title: "Content & Copywriting",
      content: "Master the art of creating compelling content that engages your audience and persuasive copy that drives action and increases conversions."
    },
    {
      title: "Affiliate Marketing",
      content: "Discover how to earn commissions by promoting products you love. Learn product selection, conversion strategies, and how to build passive income streams through strategic partnerships."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">Master Skills That Pay</h2>
        <p className="section-subtitle">Practical, proven skills that can generate income within weeks</p>
        
        <div className="max-w-3xl mx-auto mt-10">
          <Accordion type="single" collapsible className="w-full">
            {learningModules.map((module, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white mb-4 rounded-lg border border-gray-200">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 rounded-t-lg font-montserrat font-semibold">
                  {module.title}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-700">
                  {module.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearnSection;
