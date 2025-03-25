"use client";
import React, { useState, useEffect } from "react";

function Dots({ className }: Readonly<{ className: string }>) {
  return <div className={`h-1.5 w-1.5 rounded-full bg-white ${className}`} />;
}

function LeftDots() {
  const [dotCount, setDotCount] = useState(18);

  useEffect(() => {
    let isIncreasing = false;
    const interval = setInterval(() => {
      setDotCount((prevCount) => {
        if (isIncreasing) {
          if (prevCount < 18) return prevCount + 1;
          isIncreasing = false;
          return prevCount - 1;
        } else {
          if (prevCount > 0) return prevCount - 1;
          isIncreasing = true;
          return prevCount + 1;
        }
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid w-10 grid-cols-3 gap-x-5 gap-y-3">
      {Array.from({ length: dotCount }).map((_, index) => (
        <Dots key={index} className="transition-opacity opacity-100" />
      ))}
    </div>
  );
}

function RightDots() {
  const [dotCount, setDotCount] = useState(18);

  useEffect(() => {
    let isIncreasing = false;
    const interval = setInterval(() => {
      setDotCount((prevCount) => {
        if (isIncreasing) {
          if (prevCount < 18) return prevCount + 1;
          isIncreasing = false;
          return prevCount - 1;
        } else {
          if (prevCount > 0) return prevCount - 1;
          isIncreasing = true;
          return prevCount + 1;
        }
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid w-10 grid-cols-5 gap-x-6 gap-y-3">
      {Array.from({ length: dotCount }).map((_, index) => (
        <Dots key={index} className="transition-opacity opacity-100" />
      ))}
    </div>
  );
}

export { LeftDots, RightDots };
