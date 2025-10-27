import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { RefreshCw, AlertCircle, CheckCircle2 } from "lucide-react";

interface AnalysisResultsProps {
  matchScore: number;
  foundKeywords: string[];
  missingKeywords: string[];
  onReset: () => void;
}

export function AnalysisResults({
  matchScore,
  foundKeywords,
  missingKeywords,
  onReset
}: AnalysisResultsProps) {
  const totalKeywords = foundKeywords.length + missingKeywords.length;

  return (
    <Card className="border-gray-200 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl text-[#1F2937]">Analysis Results</CardTitle>
        <CardDescription>
          Here's how your resume stacks up against the job description
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Circular Match Score */}
        <div className="flex flex-col items-center justify-center py-8">
          <div className="relative w-48 h-48">
            {/* Background Circle */}
            <svg className="w-48 h-48 transform -rotate-90">
              <circle
                cx="96"
                cy="96"
                r="88"
                stroke="#E5E7EB"
                strokeWidth="16"
                fill="none"
              />
              {/* Progress Circle */}
              <circle
                cx="96"
                cy="96"
                r="88"
                stroke="url(#gradient)"
                strokeWidth="16"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 88}`}
                strokeDashoffset={`${2 * Math.PI * 88 * (1 - matchScore / 100)}`}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#364F6B" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
              </defs>
            </svg>
            {/* Center Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-5xl text-[#1F2937] mb-1">{matchScore}%</div>
              <div className="text-sm text-gray-600">Match Score</div>
            </div>
          </div>
          
          {/* Summary Line */}
          <p className="mt-6 text-lg text-gray-700 text-center">
            Your resume contains <span className="text-[#10B981]">{foundKeywords.length}</span> out of{" "}
            <span className="text-[#364F6B]">{totalKeywords}</span> key terms.
          </p>
        </div>

        {/* Keywords Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Missing Keywords */}
          <div className="bg-red-50 rounded-xl p-6 space-y-4 border border-red-100">
            <div className="flex items-center gap-2 pb-2 border-b border-red-200">
              <AlertCircle className="h-5 w-5 text-red-600" />
              <h4 className="text-[#1F2937]">Missing Keywords 🚩</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {missingKeywords.map((keyword, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="bg-white border-red-300 text-red-700 hover:bg-red-50"
                >
                  {keyword}
                </Badge>
              ))}
            </div>
            {missingKeywords.length === 0 && (
              <p className="text-sm text-gray-500 italic">No missing keywords! 🎉</p>
            )}
          </div>

          {/* Found Keywords */}
          <div className="bg-green-50 rounded-xl p-6 space-y-4 border border-green-100">
            <div className="flex items-center gap-2 pb-2 border-b border-green-200">
              <CheckCircle2 className="h-5 w-5 text-[#10B981]" />
              <h4 className="text-[#1F2937]">Found Keywords ✅</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {foundKeywords.map((keyword, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="bg-white border-green-300 text-green-700 hover:bg-green-50"
                >
                  {keyword}
                </Badge>
              ))}
            </div>
            {foundKeywords.length === 0 && (
              <p className="text-sm text-gray-500 italic">No matching keywords found.</p>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button
            size="lg"
            variant="outline"
            onClick={onReset}
            className="flex-1 border-2 border-[#364F6B] text-[#364F6B] hover:bg-[#364F6B] hover:text-white"
          >
            <RefreshCw className="mr-2 h-5 w-5" />
            Analyze Another
          </Button>
          <Button
            size="lg"
            className="flex-1 bg-[#10B981] hover:bg-[#059669] text-white"
          >
            Upgrade to Deep Gap Report
          </Button>
        </div>

        {/* Upgrade CTA Card */}
        <div className="bg-gradient-to-r from-[#364F6B] to-[#2a3d54] rounded-xl p-8 text-center text-white space-y-4 mt-4">
          <h4 className="text-2xl">Want Personalized Career Coaching?</h4>
          <p className="text-blue-100">
            Our $10 Deep Gap Report gives you AI-powered skill analysis with a step-by-step action plan to close your gaps and land the job.
          </p>
          <ul className="text-left max-w-md mx-auto space-y-2 text-blue-100">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-[#10B981] flex-shrink-0 mt-0.5" />
              <span>Hard & soft skill breakdown</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-[#10B981] flex-shrink-0 mt-0.5" />
              <span>Prioritized learning roadmap</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-[#10B981] flex-shrink-0 mt-0.5" />
              <span>Specific course & resource recommendations</span>
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
