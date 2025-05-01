import React from "react";
import { Settings, BarChart, Users, RefreshCw } from "lucide-react";

export default function FeaturesSectionOne() {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="flex justify-center items-center w-[1138px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {/* Feature 1 */}
          <div className="flex flex-col p-6 border-r border-gray-800">
            <div className="w-12 h-12 mb-4">
              <Settings className="w-full h-full text-white" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2">
              Drag-and-Drop Layout
            </h3>
            <p className="text-sm text-gray-400">
              Set rules, rewards, and workflows with simple visual tools.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col p-6 border-r border-gray-800">
            <div className="w-12 h-12 mb-4">
              <BarChart className="w-full h-full text-white" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2">
              Real-Time Analytics
            </h3>
            <p className="text-sm text-gray-400">
              Track user behavior and loyalty performance instantly.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col p-6 border-r border-gray-800">
            <div className="w-12 h-12 mb-4">
              <Users className="w-full h-full text-white" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2">
              Multi-User Dashboard
            </h3>
            <p className="text-sm text-gray-400">
              Give admins and operators custom access and controls.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col p-6">
            <div className="w-12 h-12 mb-4">
              <RefreshCw className="w-full h-full text-white" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2">
              Instant Updates
            </h3>
            <p className="text-sm text-gray-400">
              Make live edits to your program without redeploys or downtime.
            </p>
          </div>
        </div>
      </div>

      {/* Horizontal Border */}
      <div className="w-full max-w-[1138px] h-px bg-gray-800 mt-8" />
    </div>
  );
}
