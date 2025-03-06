import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

const tattooFAQs: FAQItem[] = [
  { question: "Tatuagem dói?", answer: "Depende da região do corpo e da sua tolerância à dor." },
  { question: "Posso tomar sol depois de fazer uma tatuagem?", answer: "É recomendado evitar exposição ao sol durante a cicatrização." },
  { question: "Quanto tempo leva para cicatrizar?", answer: "Em média, de 2 a 4 semanas, dependendo dos cuidados." },
  { question: "Posso tomar banho normalmente?", answer: "Sim, mas evite esfregar diretamente e use sabonete neutro." }
];

const FAQ: React.FC = () => {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">FAQ sobre Tatoos</h2>
      <Accordion type="single" collapsible>
        {tattooFAQs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
