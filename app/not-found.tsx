"use client";
import { useState } from "react";
import Link from "next/link";
import { Home, ArrowLeft, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const currentPathName = usePathname();

  const [counter, setCounter] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);

  const handleGlitchClick = () => {
    setIsGlitching(true);
    setCounter((prev) => prev + 1);
    setTimeout(() => setIsGlitching(false), 500);
  };

  // Easter egg messages that appear after certain click counts
  const getEasterEggMessage = () => {
    if (counter >= 10) return "You're persistent! Try the home button instead.";
    if (counter >= 5) return "Still clicking? This page really doesn't exist.";
    if (counter >= 1) return "Clicking won't fix the bug, but it's fun!";
    return null;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-gray-100 px-40">
      <div
        className="max-w-3xl w-full text-center mt-16
      "
      >
        {/* Glitchy 404 Text */}
        <div
          className={`relative text-[10rem] md:text-[15rem] font-bold leading-none select-none mb-6 ${
            isGlitching ? "animate-pulse" : ""
          }`}
          onClick={handleGlitchClick}
        >
          <span className="relative inline-block text-primary cursor-pointer">
            4
            <span
              className={`absolute top-0 left-0 text-red-500 opacity-70 cursor-pointer ${
                isGlitching ? "animate-ping" : ""
              }`}
              style={{
                clipPath: "inset(0 0 50% 0)",
                transform: "translate(-3px, 2px)",
              }}
            >
              4
            </span>
          </span>
          <span className="relative inline-block text-primary cursor-pointer">
            0
            <span
              className={`absolute top-0 left-0 text-blue-500 opacity-70 cursor-pointer ${
                isGlitching ? "animate-ping" : ""
              }`}
              style={{
                clipPath: "inset(50% 0 0 0)",
                transform: "translate(3px, -2px)",
              }}
            >
              0
            </span>
          </span>
          <span className="relative inline-block text-primary cursor-pointer">
            4
            <span
              className={`absolute top-0 left-0 text-green-500 opacity-70 cursor-pointer ${
                isGlitching ? "animate-ping" : ""
              }`}
              style={{
                clipPath: "inset(25% 0 25% 0)",
                transform: "translate(-2px, -3px)",
              }}
            >
              4
            </span>
          </span>
        </div>

        {/* Main message */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h1>
        <div className="relative mb-8">
          <p className="text-lg text-gray-600 mb-2">
            Oops! Looks like this page got lost in the code.
          </p>
          <p className="text-gray-500 mb-6">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved to another URL.
          </p>

          {/* Terminal-like error message */}
          <div className="bg-gray-900 text-gray-300 p-4 rounded-lg font-mono text-sm md:text-base text-left mb-8 mx-auto max-w-xl overflow-x-auto">
            <p>
              <span className="text-green-400">$</span> find {currentPathName}{" "}
              &quot;
              <span className="text-yellow-400">requested-page</span>
              &quot;
            </p>
            <p className="text-red-400">Error 404: No such file or directory</p>
            <p>
              <span className="text-green-400">$</span>{" "}
              <span className="animate-pulse">_</span>
            </p>
          </div>

          {/* Easter egg message */}
          {getEasterEggMessage() && (
            <p className="text-sm text-primary-500 italic mb-4">
              {getEasterEggMessage()}
            </p>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button asChild size="lg" className="gap-2">
            <Link href="/">
              <Home className="h-5 w-5" />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link href="javascript:history.back()">
              <ArrowLeft className="h-5 w-5" />
              Go Back
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="gap-2"
            onClick={() => window.location.reload()}
          >
            <RefreshCw className="h-5 w-5" />
            Refresh Page
          </Button>
        </div>
      </div>
    </div>
  );
}
