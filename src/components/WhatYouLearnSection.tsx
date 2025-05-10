
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WhatYouLearnSection = () => {
  const learningModules = [
    {
      title: "Instagram Growth & Reels",
      content: "Learn how to grow your Instagram following from zero and create engaging reels that capture attention. Master algorithms and engagement strategies that can help you build a valuable audience."
    },
    {
      title: "Affiliate Marketing",
      content: "Discover how to earn commissions by promoting products you love. Learn product selection, conversion strategies, and how to build passive income streams through strategic partnerships."
    },
    {
      title: "Personal Branding",
      content: "Build a powerful personal brand that attracts opportunities. Learn how to position yourself as an authority in your niche and create content that resonates with your target audience."
    },
    {
      title: "Content Strategy & Monetization",
      content: "Create content that not only engages but also converts. Learn various monetization methods including sponsorships, digital products, and service offerings tailored to your audience."
    },
    {
      title: "Community Building",
      content: "Build a loyal community around your brand. Learn how to foster engagement, create valuable interactions, and develop a tribe that supports your business growth."
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
