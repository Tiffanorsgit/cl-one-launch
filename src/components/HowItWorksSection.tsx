import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Cog, Upload, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "Input your idea",
    description: "Share your video concept or topic"
  },
  {
    icon: Cog,
    title: "AI creates & edits the video",
    description: "CL 1 writes, films, and edits automatically"
  },
  {
    icon: Upload,
    title: "Publish everywhere instantly",
    description: "Deploy to all your social platforms"
  }
];

export function HowItWorksSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to transform your ideas into professional videos
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Lines */}
            <div className="hidden md:block absolute top-1/2 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary -translate-y-1/2 z-0" />
            
            {steps.map((step, index) => (
              <div key={index} className="relative z-10">
                <Card className="glass border-white/20 hover:border-primary/50 transition-all duration-500 hover:scale-105 group">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6 relative">
                      <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-secondary rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 glow">
                        <step.icon className="h-10 w-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-card-glass rounded-full flex items-center justify-center border border-primary/30">
                        <span className="text-sm font-bold text-primary">{index + 1}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-4 font-display">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                
                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-8">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}