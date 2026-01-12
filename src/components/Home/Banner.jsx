import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="space-x-5 bg-primary min-h-screen ">
        <button className="btn btn-primary text-neutral-content">Button Primary</button>
        <button className="btn btn-secondary">Button Secondary</button>
        <button className="btn btn-accent text-neutral-content">Button Accent</button>
        <button className="btn btn-neutral">Button neutral</button>
        <button className="btn btn-neutral-accent text-neutral-content">Button Neutral Content</button>
        <button className="btn btn-success">Button Success</button>
        <button className="btn btn-error">Button Error</button>
        <button className="btn btn-base-100 text-neutral-content">Button Base 100</button>
      </div>
    </div>
  );
};

export default Banner;
