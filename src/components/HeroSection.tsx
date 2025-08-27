import { useState } from "react";
import { Button } from "@/components/ui/button";
import { EmailDialog } from "./EmailDialog";
import { ArrowRight, Sparkles, Play, Users, TrendingUp } from "lucide-react";
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
            <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-8 animate-glow">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="font-medium">Be the first to experience the future</span>
            </div>
            
            {/* Logo */}
            <div className="mb-8">
              <img 
                src="/lovable-uploads/9223926c-17b9-4b2c-8b78-a2871b355da9.png" 
                alt="CL1 Logo" 
                className="h-32 lg:h-40 mx-auto animate-glow"
              />
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl lg:text-6xl font-display font-black mb-6 tracking-tight">
              AI that writes, edits, and publishes your{" "}
              <span className="gradient-text">videos end-to-end</span>
            </h1>
            
            {/* Sub-heading */}
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Join thousands of content creators who are transforming their workflow with AI. 
              From script to publish — completely automated.
            </p>
            
            {/* Creator Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-10 text-sm">
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
                <Users className="h-4 w-4 text-primary" />
                <span>10,000+ Creators</span>
              </div>
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
                <Play className="h-4 w-4 text-secondary" />
                <span>1M+ Videos Created</span>
              </div>
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span>500% Growth Rate</span>
              </div>
            </div>
            
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