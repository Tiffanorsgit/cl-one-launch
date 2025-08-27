import { Card, CardContent } from "@/components/ui/card";
import { FileText, User, Scissors } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Script Writing",
    description: "Engaging scripts generated in your brand's tone."
  },
  {
    icon: User,
    title: "Realistic Avatar Presenter",
    description: "Custom digital presenter that looks and talks like you."
  },
  {
    icon: Scissors,
    title: "Auto Editing",
    description: "Jump cuts, captions, thumbnails, and social-ready exports."
  }
];

export function FeaturesSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="glass border-white/20 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:glow group"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 relative">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 font-display">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}