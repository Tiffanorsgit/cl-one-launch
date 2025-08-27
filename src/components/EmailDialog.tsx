import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail, CheckCircle } from "lucide-react";

interface EmailDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function EmailDialog({ open, onOpenChange }: EmailDialogProps) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsLoading(false);
    
    toast({
      title: "Welcome to the waitlist!",
      description: "You'll be among the first to experience CL 1 when we launch.",
    });

    setTimeout(() => {
      onOpenChange(false);
      setIsSubmitted(false);
      setEmail("");
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-display">
            {isSubmitted ? "You're in!" : "Get Early Access"}
          </DialogTitle>
          <DialogDescription className="text-center">
            {isSubmitted 
              ? "Welcome to the CL 1 family. You'll receive updates as we approach launch."
              : "Join the waitlist and be the first to experience the future of AI video creation."
            }
          </DialogDescription>
        </DialogHeader>
        
        {isSubmitted ? (
          <div className="flex flex-col items-center space-y-4 py-6">
            <CheckCircle className="h-16 w-16 text-primary animate-glow" />
            <p className="text-center text-muted-foreground">
              Check your email for confirmation
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 glass border-white/30"
                required
              />
            </div>
            <Button 
              type="submit" 
              variant="hero" 
              size="lg" 
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? "Joining..." : "Join Waitlist"}
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              No spam, just updates about CL 1's progress.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}