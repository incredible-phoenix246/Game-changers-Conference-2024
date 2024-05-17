import React from "react";
import HEROSECTION from "@/modules/home/HEROSECTION";
import { SPEAKERSECTION } from "@/modules/speaker/SPEAKERSSECTION";
import { MyComponent } from "@/modules/Tickects";
import Features from "@/modules/features";
import LogoCarousel from "@/components/slider";
import SponsorsSection from "@/modules/sponsors";
import { Organizers } from "@/modules/org";
import { FORMSHEET, PriceSection, NewPriceSection } from "@/modules/price";
import { WHYSECTION } from "@/modules/why";

const HOME = () => {
  return (
    <>
      <HEROSECTION />
      <LogoCarousel color="white" />
      <Organizers />
      <LogoCarousel color="black" />
      <WHYSECTION />
      <LogoCarousel color="white" />
      <Features />
      <LogoCarousel color="black" />
      <SPEAKERSECTION />
      <LogoCarousel color="white" />
      <NewPriceSection />
      <LogoCarousel color="black" />
      <SponsorsSection />
      <LogoCarousel color="white" />
      <FORMSHEET />
    </>
  );
};

export default HOME;
