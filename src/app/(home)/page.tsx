import React from "react";
import HEROSECTION from "@/modules/home/HEROSECTION";
import { ConfStat } from "@/modules/underHero";
import Features from "@/modules/features";
import { SPEAKERSECTION } from "@/modules/speaker/SPEAKERSSECTION";
import { MyComponent } from "@/modules/Tickects";
import LogoCarousel from "@/components/slider";

const HOME = () => {
  return (
    <>
      <HEROSECTION />
      <ConfStat />
      <Features />
      <LogoCarousel color="black" />
      <SPEAKERSECTION />
      <LogoCarousel color="white" />
      <MyComponent />
      <LogoCarousel color="black" />
    </>
  );
};

export default HOME;
