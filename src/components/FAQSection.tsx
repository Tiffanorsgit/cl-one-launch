import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "When will CL 1 launch for content creators?",
    answer: "We're opening early access soon — join the waitlist to be among the first creators to experience CL 1 and get special beta access."
  },
  {
    question: "Can I train the AI avatar to match my personal brand?",
    answer: "Absolutely! You can train CL 1 to look and sound exactly like you, maintaining your unique personality and brand voice across all content."
  },
  {
    question: "Which content platforms does CL 1 support?",
    answer: "YouTube, Instagram Reels, TikTok, LinkedIn, Twitter, and more. CL 1 automatically optimizes content format, length, and style for each platform."
  },
  {
    question: "How much will CL 1 cost for creators?",
    answer: "We'll announce creator-friendly pricing closer to launch. Early adopters get special access and preferential rates. No corporate pricing for individual creators."
  },
  {
    question: "Can CL 1 maintain my content style and voice?",
    answer: "Yes! CL 1 learns your unique style, tone, and preferences to ensure every video feels authentically you, just automated."
  },
  {
    question: "Will I still have creative control over my content?",
    answer: "100%. CL 1 handles the heavy lifting while you maintain full creative control. Edit, adjust, and customize everything to match your vision."
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