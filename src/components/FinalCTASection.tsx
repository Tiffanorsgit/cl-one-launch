import { useState } from "react";
import { Button } from "@/components/ui/button";
import { EmailDialog } from "./EmailDialog";
import { ArrowRight, Sparkles } from "lucide-react";

export function FinalCTASection() {
  const [emailDialogOpen, setEmailDialogOpen] = useState(false);

  return (
    <>
      <section className="py-32 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-secondary/5" />
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-8 animate-glow">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="font-medium">Limited Early Access</span>
            </div>
            
            {/* Heading */}
            <h2 className="text-5xl lg:text-7xl font-display font-black mb-8 tracking-tight">
              Be the first to experience{" "}
              <span className="gradient-text">CL 1</span>
            </h2>
            
            {/* Description */}
            <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Join the revolution of AI-powered video creation. Transform your content strategy forever.
            </p>
            
            {/* CTA Button */}
            <div className="flex flex-col items-center gap-6">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-xl px-12 py-8 h-auto font-bold"
                onClick={() => setEmailDialogOpen(true)}
              >
                Get Early Access
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              
              <p className="text-sm text-muted-foreground">
                Join 10,000+ creators already on the waitlist
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <EmailDialog 
        open={emailDialogOpen} 
        onOpenChange={setEmailDialogOpen} 
      />
    </>
  );
}