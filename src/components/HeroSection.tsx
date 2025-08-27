import { useState } from "react";
import { Button } from "@/components/ui/button";
import { EmailDialog } from "./EmailDialog";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/ai-avatar-hero.jpg";

export function HeroSection() {
  const [emailDialogOpen, setEmailDialogOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 futuristic-grid opacity-30" />
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 animate-glow">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">AI Video Revolution</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-6xl lg:text-8xl font-display font-black mb-6 tracking-tight">
              <span className="gradient-text">CL 1</span>
              <br />
              <span className="text-foreground">(CLone)</span>
            </h1>
            
            {/* Sub-heading */}
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              AI that writes, edits, and publishes your videos end-to-end.
            </p>
            
            {/* CTA Button */}
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-6 h-auto mb-12"
              onClick={() => setEmailDialogOpen(true)}
            >
              Get Early Access
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            {/* Hero Image */}
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl transform scale-110" />
              <img
                src={heroImage}
                alt="AI Avatar Hologram"
                className="relative w-full h-auto rounded-3xl glow animate-float"
                style={{ animationDelay: "1s" }}
              />
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