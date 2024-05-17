import React from "react";
import { AboutHero, AboutUs } from "@/modules/about";
import LogoCarousel from "@/components/slider";
import { ConfStat } from "@/modules/underHero";


const page = () => {
  return (
    <>
      <AboutHero />
      <LogoCarousel color="white" />
      <AboutUs />
      <ConfStat />
      <LogoCarousel color="black" />
    </>
  );
};

export default page;