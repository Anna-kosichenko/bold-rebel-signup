
import NewsletterForm from "@/components/NewsletterForm";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FEF7CD]">
      <div className="w-full max-w-4xl mx-auto text-center space-y-8 animate-fade-in p-4">
        <div className="space-y-4">
          <div className="inline-block">
            <span className="px-4 py-1.5 bg-black text-[#FEF7CD] text-sm font-mono tracking-widest">
              DIRECTOR • CREATOR • ARTIST
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-mono tracking-tighter text-black uppercase">
            LET IT B
          </h1>
          <p className="text-xl font-mono text-black/80 max-w-2xl mx-auto tracking-tight">
            Subscribe for weekly insights on art, fashion, and creative AI.
          </p>
        </div>
        
        <div className="w-full flex justify-center p-4">
          <NewsletterForm />
        </div>
        
        <p className="text-sm font-mono text-black/60 tracking-tight">
          New content every Monday.
        </p>
      </div>
    </div>
  );
};

export default Index;
