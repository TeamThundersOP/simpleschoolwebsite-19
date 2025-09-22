import React from "react";
import { cn } from "@/lib/utils";
import {
  CheckCircle,
  Circle,
  Clock,
  Target,
  Users,
  GraduationCap,
  BookOpen,
  Code,
  Brain,
  Lightbulb,
  Award,
} from "lucide-react";

interface TimelineItem {
  id: string;
  title: string;
  description: string;
  timestamp?: Date;
  status: "completed" | "active" | "pending";
  icon?: React.ReactNode;
  badge?: string;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
  variant?: "default" | "roadmap";
}

const Timeline: React.FC<TimelineProps> = ({ items, className, variant = "default" }) => {
  const getStatusIcon = (status: TimelineItem["status"], customIcon?: React.ReactNode) => {
    if (customIcon) return customIcon;

    switch (status) {
      case "completed":
        return <CheckCircle className="w-6 h-6 text-white" />;
      case "active":
        return <Clock className="w-6 h-6 text-white" />;
      case "pending":
        return <Clock className="w-6 h-6 text-white" />;
      default:
        return <Clock className="w-6 h-6 text-white" />;
    }
  };

  const getStatusColors = (status: TimelineItem["status"]) => {
    switch (status) {
      case "completed":
        return {
          border: "border-green-500 bg-green-50",
          text: "text-green-700",
          bg: "bg-green-100",
        };
      case "active":
        return {
          border: "border-blue-500 bg-blue-50",
          text: "text-blue-700",
          bg: "bg-blue-100",
        };
      case "pending":
        return {
          border: "border-gray-300 bg-gray-50",
          text: "text-gray-600",
          bg: "bg-gray-100",
        };
      default:
        return {
          border: "border-gray-300 bg-gray-50",
          text: "text-gray-600",
          bg: "bg-gray-100",
        };
    }
  };

  const getConnectorColor = (status: TimelineItem["status"]) => {
    switch (status) {
      case "completed":
        return "bg-green-300";
      case "active":
        return "bg-blue-300";
      default:
        return "bg-gray-200";
    }
  };

  if (variant === "roadmap") {
    return (
      <div className={cn("relative w-full", className)}>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-6 bottom-0 w-0.5 bg-blue-200"></div>

          <div className="space-y-12">
            {items.map((item, index) => {
              const colors = getStatusColors(item.status);

              return (
                <div key={item.id} className="relative flex items-start">
                  {/* Icon circle */}
                  <div
                    className={cn(
                      "relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center",
                      item.status === "completed"
                        ? "bg-blue-600"
                        : item.status === "active"
                          ? "bg-blue-600"
                          : "bg-gray-300",
                    )}
                  >
                    {getStatusIcon(item.status, item.icon)}
                  </div>

                  {/* Content */}
                  <div className="ml-6 flex-1 min-w-0">
                    {/* Timestamp */}
                    {item.timestamp && (
                      <div className="text-sm text-gray-500 mb-2">
                        {item.timestamp.toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}{" "}
                        at{" "}
                        {item.timestamp.toLocaleTimeString("en-US", {
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: true,
                        })}
                      </div>
                    )}

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>

                    {/* Badge */}
                    {item.badge && (
                      <span className="inline-block mt-3 px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Default timeline variant
  return (
    <div className={cn("relative", className)}>
      {items.map((item, index) => {
        const colors = getStatusColors(item.status);

        return (
          <div key={item.id} className="relative flex items-start space-x-4 mb-8">
            {/* Timeline line */}
            {index !== items.length - 1 && (
              <div
                className={cn("absolute left-6 top-12 w-0.5 h-16", getConnectorColor(item.status))}
              ></div>
            )}

            {/* Icon */}
            <div
              className={cn(
                "flex-shrink-0 w-12 h-12 rounded-full border-2 flex items-center justify-center shadow-sm",
                colors.border,
              )}
            >
              {getStatusIcon(item.status, item.icon)}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-3 mb-2">
                <h3 className={cn("text-lg font-semibold", colors.text)}>{item.title}</h3>
                {item.timestamp && (
                  <span className="text-sm text-gray-500">
                    {item.timestamp.toLocaleDateString()}
                  </span>
                )}
                {item.badge && (
                  <span
                    className={cn(
                      "text-xs font-medium px-2 py-1 rounded-full",
                      colors.bg,
                      colors.text,
                    )}
                  >
                    {item.badge}
                  </span>
                )}
              </div>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { Timeline, type TimelineItem };
