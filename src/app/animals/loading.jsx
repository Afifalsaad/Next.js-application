import { CardSkeleton } from "@/components/skeletons/Skeleton";
import React from "react";

const loading = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10 px-10 md:px-20 lg:px-5">
      {[...Array(8)].map((_, index) => (
        <CardSkeleton key={index}></CardSkeleton>
      ))}
    </div>
  );
};

export default loading;
