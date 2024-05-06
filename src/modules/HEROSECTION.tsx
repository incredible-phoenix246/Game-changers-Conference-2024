"use client";

import {
  CountdownItemday,
  CountdownItem,
  CountdownItemsec,
} from "@/components/countdown";
import React, { useEffect, useRef, useState } from "react";
import { Location, Calendar2 } from "iconsax-react";
import { ShuffleGrid } from "./home/hero";

const HEROSECTION = () => {
  const COUNTDOWN_FROM = "8/24/2024";
  const SECOND = 1000;
  const MINUTE = SECOND * 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [remaining, setRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    intervalRef.current = setInterval(handleCountdown, 1000);

    return () => clearInterval(intervalRef.current || undefined);
  }, []);

  const handleCountdown = () => {
    const end = new Date(COUNTDOWN_FROM);

    const now = new Date();

    const distance = +end - +now;

    const days = Math.floor(distance / DAY);
    const hours = Math.floor((distance % DAY) / HOUR);
    const minutes = Math.floor((distance % HOUR) / MINUTE);
    const seconds = Math.floor((distance % MINUTE) / SECOND);

    setRemaining({
      days,
      hours,
      minutes,
      seconds,
    });
  };

  return (
    <section className="bg-white">
      <div className="container py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div className="items-start w-full">
          <div className="flex flex-col w-full  items-center justify-center">
            <div className="flex flex-col">
              <div className="flex gap-1 md:gap-2 justify-between w-full md:w-[60%]">
                <CountdownItemday num={remaining.days} text="days" />
                <CountdownItem num={remaining.hours} text="hours" />
                <CountdownItem num={remaining.minutes} text="minutes" />
                <CountdownItemsec num={remaining.seconds} text="seconds" />
              </div>

              <div className="flex gap-5 justify-between self-start py-0.5 text-sm leading-5 text-black mt-5 w-full md:w-[60%]">
                <div className="flex gap-2 items-center justify-center">
                  <Calendar2 />
                  <span>24 AUG, 2024</span>
                </div>
                <div className="flex gap-2 items-center justify-center">
                  <Location />
                  <span>Abuja Continental Hotel</span>
                </div>
              </div>
              <div>
                <h1 className="mt-6 text-4xl font-bold text-red-200 leading-[60px] max-md:max-w-full">
                  Game Changers for Global impact
                  <span className="text-red-100"> 2024</span> Conference
                </h1>
                <p className="mt-2 text-base leading-6 text-neutral-600 max-md:max-w-full">
                  It&apos;s time to transform and inspire you to get in your A
                  game with increased capacity and capabilities providing you
                  with the relevant knowledge from one percent of top change
                  makers, impact leaders and entrepreneurs with peak
                  performance.
                </p>
                <button className="justify-center self-start px-10 py-4 mt-10 text-base font-medium leading-6 text-center text-white bg-red-200 shadow-2xl rounded-[400px] max-md:px-5">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="items-start w-full"> */}
        <ShuffleGrid />
      </div>
    </section>
  );
};

export default HEROSECTION;
