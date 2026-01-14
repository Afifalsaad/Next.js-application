"use client";
import React from "react";

export function CardSkeleton() {
  return (
    <div className="max-w-86.25 bg-[#0c1425] rounded-xl overflow-hidden shadow">
      {/* Image */}
      <div className="w-full h-55 bg-gray-700 animate-pulse" />

      <div className="p-4 space-y-3">
        {/* Title + Status */}
        <div className="flex justify-between items-center">
          <div className="h-4 w-32 bg-gray-600 rounded animate-pulse" />
          <div className="h-4 w-16 bg-gray-600 rounded-full animate-pulse" />
        </div>

        {/* Description lines */}
        <div className="space-y-2">
          <div className="h-3 w-full bg-gray-700 rounded animate-pulse" />
          <div className="h-3 w-[95%] bg-gray-700 rounded animate-pulse" />
          <div className="h-3 w-[90%] bg-gray-700 rounded animate-pulse" />
          <div className="h-3 w-[80%] bg-gray-700 rounded animate-pulse" />
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-2">
          <div className="h-8 w-16 bg-gray-600 rounded animate-pulse" />
          <div className="h-8 w-20 bg-gray-600 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
}
