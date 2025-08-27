import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "When will CL 1 launch?",
    answer: "We're opening early access soon — join the waitlist to be among the first to experience CL 1."
  },
  {
    question: "Is the avatar customizable?",
    answer: "Yes, you can train CL 1 to look and sound like you, creating a personalized digital presenter that matches your brand."
  },
  {
    question: "Which platforms are supported?",
    answer: "YouTube, Instagram, TikTok, LinkedIn, Twitter, and more. CL 1 optimizes content for each platform automatically."
  },
  {
    question: "What's the pricing?",
    answer: "We'll announce plans closer to launch. Early users get special access and preferential pricing."
  },
  {
    question: "How realistic are the AI avatars?",
    answer: "Our avatars use cutting-edge AI to create lifelike digital presenters with natural speech, gestures, and expressions."
  },
  {
    question: "Can I edit the generated videos?",
    answer: "Absolutely! While CL 1 creates professional videos automatically, you have full control to make adjustments and customizations."
  }
];

export function FAQSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about CL 1
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="glass border-white/20 rounded-lg px-6 hover:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}