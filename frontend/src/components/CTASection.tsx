import { Button } from "./ui/button";

export function CTASection() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-[#364F6B] to-[#2a3d54]">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl lg:text-5xl text-white">
          Ready to land your next job?
        </h2>
        <p className="text-xl text-blue-100 leading-relaxed">
          Move from 'Applicant' to 'Top Candidate.' Get your AI-powered report today.
        </p>
        
        <div className="pt-4">
          <Button 
            size="lg" 
            className="bg-[#10B981] hover:bg-[#059669] text-white px-12 py-6 text-lg shadow-2xl"
          >
            Get Your $10 Gap Report
          </Button>
        </div>
      </div>
    </section>
  );
}
