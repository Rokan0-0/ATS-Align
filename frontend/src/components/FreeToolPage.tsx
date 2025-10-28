import React from 'react';
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Upload, FileText, Sparkles } from "lucide-react";
import { useState } from "react";
import { AnalysisResults } from "./AnalysisResults";

export function FreeToolPage() {
  const [fileName, setFileName] = useState<string>("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState<string>("");
  const [hasAnalyzed, setHasAnalyzed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [foundKeywords, setFoundKeywords] = useState<string[]>([]);
  const [missingKeywords, setMissingKeywords] = useState<string[]>([]);
  const [matchScore, setMatchScore] = useState<number>(0);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    if (file) {
      setFileName(file.name);
      setResumeFile(file);
    }
  };

  const handleAnalyze = async () => {
    setError(null);
    if (!resumeFile) {
      setError("Please upload a resume file.");
      return;
    }
    if (!jobDescription.trim()) {
      setError("Please paste the job description.");
      return;
    }

    setIsLoading(true);
    setHasAnalyzed(false);

    try {
      const formData = new FormData();
      formData.append("resume", resumeFile);
      formData.append("job_description", jobDescription);

      const resp = await fetch("http://localhost:5000/api/analyze", {
        method: "POST",
        body: formData,
      });

      const data = await resp.json().catch(() => null);

      if (!resp.ok) {
        const msg = data && data.error ? data.error : `Server returned ${resp.status}`;
        setError(msg);
        return;
      }

      // Expecting { score, found_count, total_count, missing_keywords, found_keywords }
      const score = typeof data.score === "number" ? data.score : Math.round((data.found_keywords?.length ?? 0) / ((data.found_keywords?.length ?? 0) + (data.missing_keywords?.length ?? 0)) * 100);
      setMatchScore(score);
      setFoundKeywords(Array.isArray(data.found_keywords) ? data.found_keywords : []);
      setMissingKeywords(Array.isArray(data.missing_keywords) ? data.missing_keywords : []);
      setHasAnalyzed(true);

      // scroll to results
      setTimeout(() => {
        const resultsElement = document.getElementById("analysis-results");
        if (resultsElement) {
          resultsElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } catch (err) {
      setError("An error occurred while contacting the backend. Make sure it is running.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setFileName("");
    setResumeFile(null);
    setJobDescription("");
    setHasAnalyzed(false);
    setFoundKeywords([]);
    setMissingKeywords([]);
    setMatchScore(0);
    setError(null);
    // reset actual file input
    const fileInput = document.getElementById("resume-upload") as HTMLInputElement | null;
    if (fileInput) fileInput.value = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Real results come from the backend and are stored in state (foundKeywords, missingKeywords, matchScore)

  return (
    <div className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-b from-white to-[#F7F9FC] min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl text-[#1F2937] mb-4">
            Free ATS Analyzer
          </h1>
          <p className="text-xl text-gray-600">
            Upload your resume and paste a job description to
            see how well you match.
          </p>
        </div>

        {/* Main Content Card */}
        <Card className="border-gray-200 shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-[#1F2937]">
              Upload & Analyze
            </CardTitle>
            <CardDescription>
              Get instant feedback on your resume's ATS
              compatibility
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* File Upload */}
            <div className="space-y-3">
              <Label
                htmlFor="resume-upload"
                className="text-[#1F2937]"
              >
                Upload Your Resume (.pdf, .docx)
              </Label>
              <div className="relative">
                <input
                  id="resume-upload"
                  type="file"
                  accept=".pdf,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label
                  htmlFor="resume-upload"
                  className="flex items-center justify-center w-full px-6 py-8 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#364F6B] transition-colors bg-white"
                >
                  <div className="text-center space-y-2">
                    <Upload className="h-10 w-10 text-gray-400 mx-auto" />
                    {fileName ? (
                      <div className="flex items-center gap-2 text-[#364F6B]">
                        <FileText className="h-5 w-5" />
                        <span>{fileName}</span>
                      </div>
                    ) : (
                      <>
                        <p className="text-gray-600">
                          Click to upload or drag and drop
                        </p>
                        <p className="text-sm text-gray-500">
                          PDF or DOCX (Max. 5MB)
                        </p>
                      </>
                    )}
                  </div>
                </label>
              </div>
            </div>

            {/* Job Description Textarea */}
            <div className="space-y-3">
              <Label
                htmlFor="job-description"
                className="text-[#1F2937]"
              >
                Paste Job Description
              </Label>
              <Textarea
                id="job-description"
                placeholder="Paste the full job description here..."
                value={jobDescription}
                onChange={(e) =>
                  setJobDescription(e.target.value)
                }
                className="min-h-[240px] resize-none border-gray-300 focus:border-[#364F6B] focus:ring-[#364F6B]"
              />
            </div>

            {/* Analyze Button */}
            <Button
              size="lg"
              onClick={handleAnalyze}
              disabled={!fileName || !jobDescription || isLoading}
              className="w-full bg-[#10B981] hover:bg-[#059669] text-white py-6 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              {isLoading ? "Analyzing..." : "Analyze Now"}
            </Button>
          </CardContent>
        </Card>

        {/* Results Area */}
        {hasAnalyzed && (
          <div id="analysis-results" className="scroll-mt-24">
            <AnalysisResults
              matchScore={matchScore}
              foundKeywords={foundKeywords}
              missingKeywords={missingKeywords}
              onReset={handleReset}
            />
          </div>
        )}
      </div>
    </div>
  );
}