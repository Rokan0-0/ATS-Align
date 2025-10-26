import { Button } from "./ui/button";
import { Check, Sparkles } from "lucide-react";

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-6 lg:px-8 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl text-[#1F2937]">
            Choose Your Path to Success
          </h2>
          <p className="text-xl text-gray-600">
            Start free, upgrade when you're ready to close the gap.
          </p>
        </div>

        {/* Two Column Comparison */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-200 space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl text-[#1F2937]">Our Free ATS Analyzer</h3>
              <p className="text-gray-600 leading-relaxed">
                The perfect starting point. Get a high-level overview of how you stack up.
              </p>
            </div>

            {/* Features List */}
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-[#10B981] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">ATS-Friendly Keyword Matching</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-[#10B981] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Instant Match Score (%)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-[#10B981] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Unlimited Resume Uploads</span>
              </li>
            </ul>

            {/* CTA Button */}
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full border-2 border-[#364F6B] text-[#364F6B] hover:bg-[#364F6B] hover:text-white py-6 text-lg"
            >
              Try for Free
            </Button>
          </div>

          {/* Paid Plan - Highlighted */}
          <div className="bg-gradient-to-br from-[#364F6B] to-[#2a3d54] rounded-2xl p-10 shadow-xl relative overflow-hidden space-y-8">
            {/* Badge */}
            <div className="absolute top-6 right-6">
              <div className="bg-[#10B981] text-white px-4 py-1.5 rounded-full flex items-center gap-2 text-sm">
                <Sparkles className="h-4 w-4" />
                Best Value
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-3xl text-white">The $10 Deep Gap Report</h3>
              <p className="text-blue-100 leading-relaxed">
                The ultimate career coach. Get a custom, AI-powered plan to close your skill gap.
              </p>
            </div>

            {/* Features List */}
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-[#10B981] flex-shrink-0 mt-0.5" />
                <span className="text-white">Everything in Free, plus...</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-[#10B981] flex-shrink-0 mt-0.5" />
                <span className="text-white">AI-Powered Hard & Soft Skill Analysis</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-[#10B981] flex-shrink-0 mt-0.5" />
                <span className="text-white">Prioritized, Actionable Career Plan</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-[#10B981] flex-shrink-0 mt-0.5" />
                <span className="text-white">Specific Learning Recommendations</span>
              </li>
            </ul>

            {/* CTA Button */}
            <Button 
              size="lg" 
              className="w-full bg-[#10B981] hover:bg-[#059669] text-white py-6 text-lg shadow-lg"
            >
              Get Your $10 Report
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
