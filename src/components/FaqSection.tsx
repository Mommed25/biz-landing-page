
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "Do I need prior knowledge to start this program?",
      answer: "No, our program is designed for complete beginners. We start from the basics and gradually build up to advanced strategies. No technical or marketing knowledge is required to get started."
    },
    {
      question: "Can I do this part-time while studying or working?",
      answer: "Absolutely! Most of our successful students started part-time, putting in just 1-2 hours daily. The course is self-paced, and you can access the content at your convenience."
    },
    {
      question: "Is this program suitable for beginners?",
      answer: "Yes, this program is specifically designed for beginners. We guide you step-by-step from the fundamentals to advanced techniques without assuming any prior knowledge."
    },
    {
      question: "How long will it take to start earning?",
      answer: "While results vary based on effort and implementation, many of our students start seeing initial results within 4-6 weeks of consistently applying the strategies we teach."
    },
    {
      question: "Do you offer support after enrollment?",
      answer: "Yes, we provide 6 months of dedicated support through our community platform and weekly Q&A sessions where you can get your questions answered by our expert mentors."
    },
    {
      question: "Is the content available in Malayalam?",
      answer: "Yes, we offer bilingual instruction with content available in both English and Malayalam to ensure maximum understanding and convenience for all students."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">Get answers to the most common questions</p>
        
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
