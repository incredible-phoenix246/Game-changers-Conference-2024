import React from "react";
import HEROSECTION from "@/modules/home/HEROSECTION";
import { ConfStat } from "@/modules/underHero";
import Features from "@/modules/features";
import { SPEAKERSECTION } from "@/modules/speaker/SPEAKERSSECTION";
import { MyComponent } from "@/modules/Tickects";

const HOME = () => {
  return (
    <>
      <HEROSECTION />
      <ConfStat />
      <Features />
      <SPEAKERSECTION />
      <MyComponent />
    </>
  );
};

export default HOME;
