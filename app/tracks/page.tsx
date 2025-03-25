import React from "react";
import HackathonTracks from "../component/Track";
import EvaluationCriteria from "@/components/custom/EvaluationCriteria";

export default function TracksPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <HackathonTracks />
        <EvaluationCriteria />
      </div>
    </div>
  );
}
