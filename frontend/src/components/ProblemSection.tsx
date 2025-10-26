import { Target, Brain, Map } from "lucide-react";

export function ProblemSection() {
  const features = [
    {
      icon: Target,
      title: "Stop Guessing.",
      description: "See exactly which keywords you're missing.",
    },
    {
      icon: Brain,
      title: "Identify Skill Gaps.",
      description: "Discover the real hard and soft skills you need.",
    },
    {
      icon: Map,
      title: "Get an Action Plan.",
      description: "Receive a prioritized, step-by-step plan to become the perfect candidate.",
    },
  ];

  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <h2 className="text-4xl lg:text-5xl text-[#1F2937]">
            Tired of applying and hearing nothing back?
          </h2>
          <p className="text-xl text-gray-600">
            Generic resumes get lost. Our tool gives you the intelligence to stand out.
          </p>
        </div>

        {/* Three Column Features */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F7F9FC] rounded-2xl">
                <feature.icon className="h-8 w-8 text-[#364F6B]" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl text-[#1F2937]">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
