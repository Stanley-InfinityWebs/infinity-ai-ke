
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FAQ = () => {
  const faqs = [
    {
      question: "What is the refund policy?",
      answer: "I offer a 100% refund guarantee if you're not satisfied with the service. Your satisfaction is my priority."
    },
    {
      question: "Should you purchase this service?",
      answer: "Only if you're 100% sure you need 1:1 help implementing AI solutions in your business online. This service is for those who want personalized guidance and dedicated support for their AI journey."
    },
    {
      question: "What kind of AI solutions can you help with?",
      answer: "I can help with a wide range of AI applications, from automation and efficiency workflows to advanced analytics and AI models for specific business challenges. Whether you're starting fresh or looking to optimize existing AI, I provide guidance."
    },
    {
      question: "How can you help with AI strategy?",
      answer: "I help you develop a comprehensive AI strategy, identify high-impact use cases, select the right technologies, and create a roadmap for successful AI adoption in your business."
    },
    {
      question: "Do you build the AI solutions for me?",
      answer: "My primary role is to guide and coach you, but based on the scope and your preferences, we can implement solutions together. The goal is to empower you with the skills and knowledge to own your AI initiatives."
    }
  ];

  return (
    <section className="py-20 px-6 bg-slate-800/20">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-white">
              Frequently asked questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-slate-600"
                >
                  <AccordionTrigger className="text-white hover:text-purple-200 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FAQ;
