"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  GraduationCap,
  BookOpen,
  Code,
  Gamepad2,
  Cog,
  Brain,
} from "lucide-react";

interface SubProgram {
  name: string;
  description: string;
  tags?: string[];
}

interface CurriculumStage {
  stage: string;
  programs: SubProgram[];
  ages: string;
  icon?: React.ReactNode;
}

interface CurriculumRoadmapProps {
  stages: CurriculumStage[];
  title?: string | React.ReactNode;
  description?: string;
}

const CurriculumRoadmap: React.FC<CurriculumRoadmapProps> = ({
  stages,
  title = "Curriculum Roadmap",
  description = "Future Skills from K–12",
}) => {
  const [expandedStages, setExpandedStages] = useState<number[]>([0]); // First stage expanded by default

  const toggleStage = (index: number) => {
    setExpandedStages((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  // Helper function to get stage icon based on stage name
  const getStageIcon = (stageName: string) => {
    if (stageName.toLowerCase().includes("early")) {
      return <GraduationCap className="w-4 h-4 text-highlight" />;
    } else if (
      stageName.toLowerCase().includes("lower") ||
      stageName.toLowerCase().includes("primary")
    ) {
      return <BookOpen className="w-4 h-4 text-highlight" />;
    } else if (
      stageName.toLowerCase().includes("upper") ||
      stageName.toLowerCase().includes("middle")
    ) {
      return <Code className="w-4 h-4 text-highlight" />;
    } else if (
      stageName.toLowerCase().includes("secondary") ||
      stageName.toLowerCase().includes("high")
    ) {
      return <Cog className="w-4 h-4 text-highlight" />;
    } else {
      return <Brain className="w-4 h-4 text-highlight" />;
    }
  };

  // Helper function to get program icon based on program name
  const getProgramIcon = (programName: string) => {
    if (programName.toLowerCase().includes("thinker") || programName.toLowerCase().includes("ai")) {
      return <Brain className="w-4 h-4 text-highlight" />;
    } else if (
      programName.toLowerCase().includes("code") ||
      programName.toLowerCase().includes("develop")
    ) {
      return <Code className="w-4 h-4 text-highlight" />;
    } else if (
      programName.toLowerCase().includes("game") ||
      programName.toLowerCase().includes("create")
    ) {
      return <Gamepad2 className="w-4 h-4 text-highlight" />;
    } else if (
      programName.toLowerCase().includes("automate") ||
      programName.toLowerCase().includes("sensor")
    ) {
      return <Cog className="w-4 h-4 text-highlight" />;
    } else {
      return <BookOpen className="w-4 h-4 text-highlight" />;
    }
  };

  return (
    <div className="w-full">
      <div className="text-center mb-12">
        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-highlight mb-4">
          {title}
        </div>
        <p className="text-lg text-highlight/80 max-w-2xl mx-auto">{description}</p>
      </div>

      <div className="space-y-4">
        {stages.map((stage, index) => {
          const isExpanded = expandedStages.includes(index);

          return (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md"
            >
              {/* Stage Header */}
              <div
                className="flex items-center gap-4 p-6 cursor-pointer"
                onClick={() => toggleStage(index)}
              >
                {/* Stage Icon */}
                <div className="w-8 h-8 bg-highlight/10 rounded-full flex items-center justify-center flex-shrink-0">
                  {getStageIcon(stage.stage)}
                </div>

                {/* Stage Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-bold text-highlight">{stage.stage}</h3>
                    <span className="text-sm font-medium text-highlight/60 bg-highlight/10 px-2 py-1 rounded-full">
                      {stage.ages}
                    </span>
                  </div>
                  <p className="text-sm text-highlight/70">
                    {stage.programs.length} program{stage.programs.length > 1 ? "s" : ""}
                  </p>
                </div>

                {/* Simple Expand Icon */}
                <div className="text-highlight/60">
                  {isExpanded ? (
                    <ChevronDown className="w-5 h-5" />
                  ) : (
                    <ChevronRight className="w-5 h-5" />
                  )}
                </div>
              </div>

              {/* Expanded Content */}
              {isExpanded && (
                <div className="border-t border-gray-100">
                  <div className="p-6 pt-4 space-y-4">
                    {stage.programs.map((program, programIndex) => (
                      <div
                        key={programIndex}
                        className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl"
                      >
                        <div className="w-6 h-6 bg-highlight/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          {getProgramIcon(program.name)}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-highlight mb-2">{program.name}</h4>
                          <p className="text-sm text-highlight/80 leading-relaxed mb-3">
                            {program.description}
                          </p>
                          {program.tags && (
                            <div className="flex flex-wrap gap-2">
                              {program.tags.map((tag, tagIndex) => (
                                <span
                                  key={tagIndex}
                                  className="text-xs font-medium text-highlight/70 bg-highlight/10 px-2 py-1 rounded-md"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CurriculumRoadmap;
