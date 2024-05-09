"use client";

import {
  CountdownItemday,
  CountdownItem,
  CountdownItemsec,
} from "@/components/countdown";
import { Work_Sans, Charmonman } from "next/font/google";
import React, { useEffect, useRef, useState } from "react";
import { Location, Calendar2 } from "iconsax-react";
import { ShuffleGrid } from "./hero";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const char = Charmonman({ subsets: ["latin"], weight: ["400", "700"] });

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
    <section className="relative min-h-full bg-black">
      <div className="w-full h-full top-0 left-0 absolute object-cover opacity-[30%] overflow-hidden px-8">
        <ShuffleGrid />
      </div>
      <div className="container py-12 grid place-content-center md:w-[60%] items-center gap-8 relative z-10">
        <div className="items-center w-full">
          <div className="flex flex-col w-full  items-center justify-center">
            <div className="flex flex-col items-center justify-center w-full">
              <div className="flex gap-1 md:gap-2 justify-between items-center w-full md:w-[60%]">
                <CountdownItemday num={remaining.days} text="days" />
                <CountdownItem num={remaining.hours} text="hours" />
                <CountdownItem num={remaining.minutes} text="minutes" />
                <CountdownItemsec num={remaining.seconds} text="seconds" />
              </div>

              <div className="flex gap-5 justify-between self-center py-0.5 text-sm leading-5 text-white mt-5 w-full md:w-[60%]">
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
                <div className={`${char.className}`}>
                  <h1 className="mt-6 text-6xl font-bold text-red-200 leading-[50px] max-md:max-w-full">
                    Game Changers for Global Impact
                    <span className="text-red-100"> 2024</span>
                    {/* <span className=``>Conference</span> */}
                    <span> Conference</span>
                  </h1>
                </div>
                <p className="mt-2 text-base leading-6 text-white max-md:max-w-full">
                  It&apos;s time to transform and inspire you to get in your A
                  with the relevant knowledge from one percent of top change
                  makers, impact leaders and entrepreneurs with peak
                  performance.
                </p>

                <Button
                  asChild
                  className="justify-center self-start px-10 py-4 mt-10 text-base font-medium h-[56px] leading-6 text-center text-white bg-red-200 hover:bg-white hover:text-red-200 shadow-2xl rounded-[400px] max-md:px-5"
                >
                  <Link href="#organizer">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="items-start w-full"> */}
      </div>
    </section>
  );
};

export default HEROSECTION;
