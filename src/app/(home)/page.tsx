import React from "react";
import HEROSECTION from "@/modules/home/HEROSECTION";
import { ConfStat } from "@/modules/underHero";
import Features from "@/modules/features";
import { Example } from "@/modules/speaker/SPEAKERSSECTION";

const HOME = () => {
  return (
    <>
      <HEROSECTION />
      <ConfStat />
      <Features />
      <Example />
    </>
  );
};

export default HOME;
