import React from "react";

const SkeletonInfoItem = () => (
  <div className="flex items-center gap-3 bg-gray-100 p-3 rounded-xl border border-gray-200">
    <div className="w-10 h-10 bg-gray-200 rounded-lg animate-pulse"></div>
    <div className="space-y-2 flex-1">
      <div className="h-2 bg-gray-200 rounded w-1/2 animate-pulse"></div>
      <div className="h-3 bg-gray-200 rounded w-3/4 animate-pulse"></div>
    </div>
  </div>
);

const AnimalDetailsSkeleton = () => {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-4">
      {/* Main Container Skeleton */}
      <div className="max-w-5xl mx-auto w-full bg-white rounded-4xl shadow-2xl overflow-hidden">
        {/* Image Placeholder */}
        <div className="relative h-137 w-full bg-gray-300 animate-pulse">
          <div className="absolute inset-0 bg-linear-to-t from-gray-400/50 to-transparent"></div>
          <div className="absolute bottom-6 left-6 space-y-3 w-full"></div>
        </div>

        {/* Content Section Skeleton */}
        <div className="p-6 space-y-6 bg-slate-50">
          {/* Description Skeleton */}
          <div className="space-y-3">
            <div className="h-6 bg-gray-200 rounded-md w-1/3 animate-pulse"></div>
            <div className="space-y-2">
              <div className="h-3 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-3 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-3 bg-gray-200 rounded w-2/3 animate-pulse"></div>
            </div>
          </div>

          {/* Info Grid Skeleton (2x2) */}
          <div className="grid grid-cols-2 gap-3">
            <SkeletonInfoItem />
            <SkeletonInfoItem />
            <SkeletonInfoItem />
            <SkeletonInfoItem />
          </div>

          {/* Fun Fact Skeleton */}
          <div className="p-5 rounded-2xl bg-gray-100 border border-gray-200 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse"></div>
            </div>
            <div className="h-3 bg-gray-200 rounded w-full animate-pulse"></div>
            <div className="h-3 bg-gray-200 rounded w-5/6 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalDetailsSkeleton;
