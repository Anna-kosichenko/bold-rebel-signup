
import NewsletterForm from "@/components/NewsletterForm";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#F97316] via-[#D946EF] to-[#8B5CF6] p-4">
      <div className="w-full max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <div className="inline-block">
            <span className="px-4 py-1.5 bg-white/10 rounded-full text-white/80 text-sm font-medium animate-shimmer">
              Fashion • Art • AI
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            STAY TUNED
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss our designs, latest news, and creative insights.
          </p>
        </div>
        
        <div className="w-full flex justify-center p-4">
          <NewsletterForm />
        </div>
        
        <p className="text-sm text-white/60">
          Our newsletter is sent once a week, every Monday.
        </p>
      </div>
    </div>
  );
};

export default Index;
