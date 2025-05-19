import React from "react";
import { Settings, BarChart, Users, RefreshCw } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  features: Feature[];
}

export default function FeaturesSectionOne({ features }: FeaturesSectionProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex justify-center items-center">
        <div className="flex items-center justify-between gap-6 w-full">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col flex-1 p-6 pl-7  ${index < 3 ? "border-r border-gray-800" : ""}`}
            >
              {feature.icon}
              <h3 className="text-lg font-medium text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
