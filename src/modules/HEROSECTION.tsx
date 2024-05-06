"use client";

import {
  CountdownItemday,
  CountdownItem,
  CountdownItemsec,
} from "@/components/countdown";
import React, { useEffect, useRef, useState } from "react";
import { Location, Calendar2 } from "iconsax-react";

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
          <div className="flex flex-col w-full md:w-[50%] items-center justify-center">
            <div className="flex flex-col">
              <div className="flex gap-5 md:gap-2 w-full justify-between">
                <CountdownItemday num={remaining.days} text="days" />
                <CountdownItem num={remaining.hours} text="hours" />
                <CountdownItem num={remaining.minutes} text="minutes" />
                <CountdownItemsec num={remaining.seconds} text="seconds" />
              </div>

              <div className="flex gap-5 justify-between self-start py-0.5 text-sm leading-5 text-black mt-5 w-full">
                <div className="flex gap-2 items-center justify-center">
                  <Calendar2 />
                  <span>24 AUG, 2024</span>
                </div>
                <div className="flex gap-2 items-center justify-center">
                  <Location />
                  <span>Abuja Continental Hotel</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="mt-6 text-4xl font-bold text-red-500 leading-[60px] max-md:max-w-full">
              Game Changers for Global impact
              <span className="text-red-500"> 2024</span> Conference
            </h1>
            <p className="mt-2 text-base leading-6 text-neutral-600 max-md:max-w-full">
              It&apos;s time to transform and inspire you to get in your A game
              with increased capacity and capabilities providing you with the
              relevant knowledge from one percent of top change makers, impact
              leaders and entrepreneurs with peak performance.
            </p>
            <button 
            className="justify-center self-start px-10 py-4 mt-10 text-base font-medium leading-6 text-center text-white bg-red-500 shadow-2xl rounded-[400px] max-md:px-5">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HEROSECTION;

// export default function Widget() {
//     return (
//         <body className="bg-white dark:bg-zinc-800">
//             <div className="relative bg-pink-200 dark:bg-zinc-900">
//                 <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//                     <div className="flex justify-between items-center">
//                         <div className="flex space-x-8">

//                             <div className="flex flex-col items-center">
//                                 <div className="w-24 h-24 rounded-full border-4 border-pink-500 flex items-center justify-center">
//                                     <span className="text-3xl font-semibold text-pink-600 dark:text-pink-400">23</span>
//                                 </div>
//                                 <div className="mt-2 text-lg font-medium text-zinc-600 dark:text-zinc-300">Days</div>
//                             </div>
//                             <div className="flex flex-col items-center">
//                                 <div className="w-24 h-24 rounded-full border-4 border-pink-500 flex items-center justify-center">
//                                     <span className="text-3xl font-semibold text-pink-600 dark:text-pink-400">12</span>
//                                 </div>
//                                 <div className="mt-2 text-lg font-medium text-zinc-600 dark:text-zinc-300">Hours</div>
//                             </div>
//                             <div className="flex flex-col items-center">
//                                 <div className="w-24 h-24 rounded-full border-4 border-pink-500 flex items-center justify-center">
//                                     <span className="text-3xl font-semibold text-pink-600 dark:text-pink-400">35</span>
//                                 </div>
//                                 <div className="mt-2 text-lg font-medium text-zinc-600 dark:text-zinc-300">Minutes</div>
//                             </div>
//                         </div>
//                         <div className="flex-1 min-w-0">

//                             <h2 className="text-3xl font-bold leading-7 text-zinc-900 dark:text-white sm:text-4xl sm:truncate">
//                                 Atlas 2021 Conference
//                             </h2>
//                             <p className="mt-4 text-base text-zinc-500 dark:text-zinc-400">
//                                 Present porttitor, mi quis pulvinar rutrum, nunc dolor rutrum enim, eu tempor nulla felis eu orci. Ut vel turpis nisi. Pellentesque convallis, purus vitae mollis ultrices, ex lectus consectetur nulla, et blandit ipsum nibh sit amet ipsum.
//                             </p>
//                             <div className="mt-4">
//                                 <a href="#" className="text-base font-medium text-pink-600 hover:text-pink-500 dark:hover:text-pink-400">
//                                     Learn More →
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="absolute right-0 bottom-0 transform translate-x-1/2 -translate-y-1/2">

//                         <img src="https://placehold.co/300x300" alt="Person" className="rounded-full border-4 border-white dark:border-zinc-800 shadow-lg">
//                         <img src="https://placehold.co/300x300" alt="Person" className="rounded-full border-4 border-white dark:border-zinc-800 shadow-lg -ml-16">
//                     </div>
//                 </div>
//             </div>
//         </body>

//     )
// }
