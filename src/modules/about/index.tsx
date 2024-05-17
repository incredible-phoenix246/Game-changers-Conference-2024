"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/utils";
import useInView from "@/hooks/useInView";

const AboutHero = () => {
  return (
    <section className="py-14 lg:py-24 relative z-0 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center flex flex-col items-center">
        <Image
          src="/newlogo.png"
          alt="forward"
          className="max-lg:mx-auto object-contain max-h-[400px] max-w-[800px] w-full h-full self-center"
          width={300}
          height={100}
        />
        <h1 className="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl  text-white mb-5 md:text-5xl md:leading-normal mt-2">
          ITS ALL ABOUT TRANSFORMING YOUR MIND
          <span className="text-red-200"> TO TRANSFORM YOUR LIFE </span>
        </h1>
        <p className="max-w-sm mx-auto text-center text-lg font-normal leading-7 text-white mb-9">
          It&apos;s time to Lead, Inspire, and Impact the Next generation.
        </p>
      </div>
    </section>
  );
};

const AboutUs = () => {
  return (
    <main>
      <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
            <div className="img-box">
              <Image
                src="/logo2.png"
                alt="forward"
                className="max-lg:mx-auto object-contain w-full h-full"
                width={300}
                height={100}
              />
            </div>
            <div className="lg:pl-[100px] flex items-center">
              <div className="data w-full">
                <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center relative">
                  About Us{" "}
                </h2>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  We are building the Number #1 life transformation gathering,
                  where lives are inspired to greatness with the best support
                  system one could ever imagine. A platform to network and
                  connect with the best minds in diverse sectors and industries
                  across the country. We are building a world class leadership
                  live session and the largest conference of emerging thought
                  leaders and excited to have you experience the transformation
                  for yourself.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9 ">
            <div className="lg:pr-24 flex items-center">
              <div className="data w-full">
                <Image
                  src="/reo.jpg"
                  alt="forward"
                  className="block lg:hidden mb-9 mx-auto rounded-lg"
                  width={400}
                  height={400}
                />
                <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center">
                  We are Creative Since 2018
                </h2>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  FORWARD is an all-time leadership and life transformation live
                  conference for those desirous of growth and global impact. A
                  curated live expression of Rotiba Emmanuel (REO) a global
                  leadership and transformation speaker and other Thought and
                  business leaders who are the best in the game and at the top
                  of their sectors. For over a decade REO has continued to
                  create platforms for positive life transformation and global
                  impact.
                </p>
              </div>
            </div>
            <div className="img-box ">
              <Image
                src="/reo.jpg"
                alt="forward"
                className="hidden lg:block rounded-lg"
                width={800}
                height={100}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export { AboutHero, AboutUs };
