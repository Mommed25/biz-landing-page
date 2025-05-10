
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "Do I need prior knowledge to start this digital marketing course?",
      answer: "No, our program is designed for complete beginners. We start from the basics and gradually build up to advanced strategies. No technical or marketing knowledge is required to get started."
    },
    {
      question: "How do I access the course after enrollment?",
      answer: "Once enrolled, you get lifetime access to all course materials. This means you can learn at your own pace and revisit lessons whenever you need to refresh your knowledge."
    },
    {
      question: "How does the affiliate marketing program work?",
      answer: "Our affiliate marketing program provides complete training on how to promote products and earn commissions. Many of our students earn thousands to lakhs monthly through this program alone."
    },
    {
      question: "What freelancing opportunities are available after completing the course?",
      answer: "The upskilling courses included in our program prepare you for various freelancing opportunities including content creation, social media management, digital marketing consulting, and more."
    },
    {
      question: "How long will it take to start earning from the affiliate program?",
      answer: "While results vary based on effort and implementation, many of our 2.5 lakh+ students start seeing initial results within 4-6 weeks of consistently applying the strategies we teach."
    },
    {
      question: "Do you offer support after enrollment?",
      answer: "Yes, we provide dedicated support through our community platform where you can interact with trainers and fellow students. You'll be part of our community of 2.5 lakh+ students across India."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">Get answers to the most common questions about our digital marketing course</p>
        
        <div className="max-w-3xl mx-auto mt-10">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-gray-50 mb-4 rounded-lg border border-gray-200">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-100 rounded-t-lg font-montserrat font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
