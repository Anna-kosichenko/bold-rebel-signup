import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Send } from "lucide-react";
import AnimatedPlaceholder from './AnimatedPlaceholder';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !agreed) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all fields and agree to the terms."
      });
      return;
    }
    setIsLoading(true);
    // Mailjet integration will go here once API keys are provided
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter!"
      });
      setEmail('');
      setAgreed(false);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
      <div className="space-y-2 relative">
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-12 text-lg bg-white/10 border-white/20 text-white font-mono backdrop-blur-sm placeholder:text-transparent"
          required
        />
        <AnimatedPlaceholder isTyping={email.length > 0} />
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="terms"
          checked={agreed}
          onCheckedChange={(checked) => setAgreed(checked as boolean)}
          className="border-white/20 data-[state=checked]:bg-[#D946EF] data-[state=checked]:border-[#D946EF]"
        />
        <Label htmlFor="terms" className="text-sm text-white/90 font-mono">
          I want to receive creative updates
        </Label>
      </div>
      <Button
        type="submit"
        disabled={isLoading}
        className="w-full h-12 text-lg font-mono text-white transition-all duration-300 ease-in-out uppercase tracking-wider bg-orange-500 hover:bg-orange-400 relative overflow-hidden group"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shimmer-hover -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
        {isLoading ? "Processing..." : (
          <>
            Join Now <Send className="ml-2 h-5 w-5" />
          </>
        )}
      </Button>
    </form>
  );
};

export default NewsletterForm;
