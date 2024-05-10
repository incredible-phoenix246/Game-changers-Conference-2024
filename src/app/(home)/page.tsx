import React from "react";
import HEROSECTION from "@/modules/home/HEROSECTION";
import { ConfStat } from "@/modules/underHero";
import Features from "@/modules/features";
import { SPEAKERSECTION } from "@/modules/speaker/SPEAKERSSECTION";
import { MyComponent } from "@/modules/Tickects";
import LogoCarousel from "@/components/slider";
import SponsorsSection from "@/modules/sponsors";
import { Organizers } from "@/modules/org";
import { PriceSection } from "@/modules/price";

const HOME = () => {
  return (
    <>
      <HEROSECTION />
      <ConfStat />
      <Features />
      <LogoCarousel color="black" />
      <SPEAKERSECTION />
      <LogoCarousel color="white" />
      <PriceSection />
      <LogoCarousel color="black" />
      <SponsorsSection />
      <LogoCarousel color="black" />
      <MyComponent />
      <LogoCarousel color="white" />
      <Organizers />
    </>
  );
};

export default HOME;
