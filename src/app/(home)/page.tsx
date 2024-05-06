import React from "react";
import HEROSECTION from "@/modules/home/HEROSECTION";
import { ConfStat } from "@/modules/underHero";
import MyComponent from "@/modules/why";
import Features from "@/modules/features";

const HOME = () => {
  return (
    <>
      <HEROSECTION />
      <ConfStat />
      <Features />
      {/* <MyComponent /> */}
    </>
  );
};

export default HOME;
