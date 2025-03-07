
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Send } from "lucide-react";

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
        description: "Please fill in all fields and agree to the terms.",
      });
      return;
    }

    setIsLoading(true);
    // Mailjet integration will go here once API keys are provided
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter!",
      });
      setEmail('');
      setAgreed(false);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
      <div className="space-y-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-12 text-lg bg-black/5 border-black/20 placeholder:text-black/50 text-black font-mono"
          required
        />
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox 
          id="terms" 
          checked={agreed}
          onCheckedChange={(checked) => setAgreed(checked as boolean)}
          className="border-black/20 data-[state=checked]:bg-black data-[state=checked]:border-black"
        />
        <Label htmlFor="terms" className="text-sm text-black/80 font-mono">
          I want to receive creative updates
        </Label>
      </div>
      <Button 
        type="submit" 
        disabled={isLoading}
        className="w-full h-12 text-lg font-mono bg-black hover:bg-black/90 text-[#FEF7CD] transition-all duration-300 ease-in-out uppercase tracking-wider"
      >
        {isLoading ? (
          "Processing..."
        ) : (
          <>
            Join Now <Send className="ml-2 h-5 w-5" />
          </>
        )}
      </Button>
    </form>
  );
};

export default NewsletterForm;
