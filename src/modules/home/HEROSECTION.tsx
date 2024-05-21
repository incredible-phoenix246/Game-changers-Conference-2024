"use client";

import {
  CountdownItemday,
  CountdownItem,
  CountdownItemsec,
} from "@/components/countdown";
import { Josefin_Sans } from "next/font/google";
import React, { useEffect, useRef, useState } from "react";
import { Location, Calendar2 } from "iconsax-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Slider from "react-slick";
import { Reaveal } from "../animation";

const char = Josefin_Sans({ subsets: ["latin"] });

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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  return (
    <section className="relative min-h-full bg-black">
      <div className="w-full h-full top-0 left-0 absolute object-cover overflow-hidden opacity-[30%]">
        {/* <ShuffleGrid /> */}
        <Slider {...settings}>
          {Images.map((image) => {
            return (
              <div key={image}>
                <div className="w-full h-full max-h-[720px]">
                  <Image
                    src={image}
                    alt="hero image"
                    width={1440}
                    height={720}
                    priority
                    className="w-full h-full object-cover"
                  />
                  <Image
                    src={image}
                    alt="hero image"
                    width={1440}
                    height={720}
                    priority
                    className="w-full h-full object-cover flex md:hidden"
                  />
                  <Image
                    src={image}
                    alt="hero image"
                    width={1440}
                    height={720}
                    priority
                    className="w-full h-full object-cover flex md:hidden"
                  />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="container py-12 grid place-content-center md:w-[60%] items-center gap-8 relative z-10">
        <div className="items-center w-full">
          <div className="flex flex-col w-full  items-center justify-center">
            <div className="flex flex-col items-center justify-center w-full">
              <div className="flex gap-1 md:gap-2 justify-between items-center w-full md:w-[60%] mt-[50px] md:mt-0 text-center">
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
                {/* <div >
                  
                </div>
                <p className="mt-2 text-base leading-6 text-white max-md:max-w-full text-center">
                  It&apos;s time to transform and inspire you to get in your A
                  with the relevant knowledge from one percent of top change
                  makers, impact leaders and entrepreneurs with peak
                  performance.
                </p> */}
                
                <div className="items-center justify-center w-full flex mx-auto">
                  <Image
                    src="/newlogo.png"
                    alt="logo"
                    width={500}
                    height={150}
                    className="self-center mt-5"
                  />
                </div>
                <div className={`${char.className} text-center`}>
                  <h1 className="mt-6 text-6xl font-bold text-red-200 leading-[55px] max-md:max-w-full hidden md:block">
                    Game Changers for Global Impact
                    <span className="text-red-100"> 2024</span>
                    <span> Conference</span>
                  </h1>
                  <h1 className="mt-6 text-2xl font-bold text-red-200 leading-[25px] max-md:max-w-full block md:hidden">
                    Game Changers for Global Impact
                    <span className="text-red-100"> 2024</span>
                    <span> Conference</span>
                  </h1>
                </div>

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
      </div>
    </section>
  );
};

export default HEROSECTION;

const Images = ["/home1.jpg", "/home2.jpg", "/home3.jpg", "/home4.jpg"];
