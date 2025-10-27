import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onNavigateToTool?: () => void;
}

export function HeroSection({ onNavigateToTool }: HeroSectionProps) {
  return (
    <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-b from-white to-[#F7F9FC]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl leading-tight text-[#1F2937]">
              Don't just match the job. Get the skills to win it.
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our free ATS analyzer shows you where you stand. Our AI-powered 'Deep Gap Report' gives you a step-by-step action plan to get hired.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-[#10B981] hover:bg-[#059669] text-white px-8 py-6 text-lg"
              >
                Get Your $10 Gap Report
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={onNavigateToTool}
                className="border-[#364F6B] text-[#364F6B] hover:bg-[#364F6B] hover:text-white px-8 py-6 text-lg"
              >
                Try the Free Analyzer
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Right Column - Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#364F6B] to-[#10B981] rounded-2xl p-12 shadow-2xl">
              <div className="bg-white rounded-xl p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 rounded w-32"></div>
                    <div className="h-3 bg-gray-200 rounded w-24"></div>
                  </div>
                  <div className="h-12 w-12 bg-[#10B981] rounded-full flex items-center justify-center text-white text-xl">
                    ✓
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-2 bg-gray-100 rounded w-full"></div>
                  <div className="h-2 bg-gray-100 rounded w-5/6"></div>
                  <div className="h-2 bg-gray-100 rounded w-4/6"></div>
                </div>
                <div className="pt-4">
                  <div className="bg-[#F7F9FC] rounded-lg p-4 space-y-2">
                    <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
