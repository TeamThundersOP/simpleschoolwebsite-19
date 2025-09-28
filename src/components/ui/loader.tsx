import React from "react";

interface LoaderProps {
  size?: "sm" | "md" | "lg";
  text?: string;
}

export const Loader: React.FC<LoaderProps> = ({ size = "md", text = "Loading..." }) => {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  const textSizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] gap-4">
      <div className={`${sizeClasses[size]} animate-spin`}>
        <div className="w-full h-full border-4 border-gray-200 border-t-blue-600 rounded-full"></div>
      </div>
      {text && <p className={`${textSizeClasses[size]} text-gray-600 font-medium`}>{text}</p>}
    </div>
  );
};

export const FullPageLoader: React.FC<LoaderProps> = ({ size = "lg", text = "Loading..." }) => {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-[9999]">
      <div className="flex flex-col items-center justify-center gap-6">
        <div
          className={`${size === "lg" ? "w-16 h-16" : size === "md" ? "w-12 h-12" : "w-8 h-8"} animate-spin`}
        >
          <div className="w-full h-full border-4 border-gray-200 border-t-blue-600 rounded-full"></div>
        </div>
        {text && (
          <p
            className={`${size === "lg" ? "text-xl" : size === "md" ? "text-lg" : "text-base"} text-gray-700 font-medium`}
          >
            {text}
          </p>
        )}
      </div>
    </div>
  );
};
