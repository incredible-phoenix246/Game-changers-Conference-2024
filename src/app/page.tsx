import React from "react";
import ShuffleHero from "@/modules/home/hero";
import { FeatureSection } from "@modules/home/features";
import ShiftingCountdown from "@/components/countdown";

const HOME = () => {
  return (
    <div>
      <ShuffleHero />
      <ShiftingCountdown />
      <FeatureSection />
    </div>
  );
};

export default HOME;
