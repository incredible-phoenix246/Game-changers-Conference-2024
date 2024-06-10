"use client";

import Link from "next/link";
import * as React from "react";
import { cn } from "@/utils";
import useInView from "@/hooks/useInView";
import { CldVideoPlayer } from "next-cloudinary";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, className }) => (
  <img loading="lazy" src={src} alt={alt} className={className} />
);

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ children, className }) => (
  <h1
    className={`text-9xl font-bold text-center border border-solid border-fuchsia-950 tracking-[8px] max-md:max-w-full max-md:text-4xl ${className}`}
  >
    {children}
  </h1>
);

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ children, className }) => (
  <p className={`text-lg leading-6 text-neutral-600 max-w-full ${className}`}>
    {children}
  </p>
);

function Organizers() {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const textRef = React.useRef<HTMLSpanElement | null>(null);

  React.useEffect(() => {
    resizeText();

    window.addEventListener("resize", resizeText);

    return () => {
      window.removeEventListener("resize", resizeText);
    };
  }, []);

  const resizeText = () => {
    const container = containerRef.current;
    const text = textRef.current;

    if (!container || !text) {
      return;
    }

    const containerWidth = container.offsetWidth;
    let min = 1;
    let max = 2500;

    while (min <= max) {
      const mid = Math.floor((min + max) / 2);
      text.style.fontSize = mid + "px";

      if (text.offsetWidth <= containerWidth) {
        min = mid + 1;
      } else {
        max = mid - 1;
      }
    }

    text.style.fontSize = max + "px";
  };

  const SectionRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(SectionRef);

  return (
    <section
      ref={SectionRef}
      className={cn(
        "bg-white",
        isInView
          ? "opacity-100 translate-y-0 md:delay-300 duration-500 min-h-screen"
          : " opacity-0 translate-y-36"
      )}
    >
      <div ref={containerRef} className="px-4 py-12 relative">
        <div className="flex flex-col px-5 text-center max-w-[756px] justify-center w-full mx-auto">
          <h2 className="self-center text-4xl md:text-6xl font-bold tracking-wide text-red-200 max-md:max-w-full">
            WHO <span className="text-red-100">WE ARE</span>
          </h2>

          <p className="mt-5 w-full text-base tracking-normal text-black max-md:max-w-full">
            We are building a world class leadership live session and the
            largest conference of emerging thought leaders
          </p>
        </div>
        <span
          className="absolute left-0 mx-auto whitespace-nowrap text-center font-bold uppercase text-transparent outline-4 outline-red-100 p-2 font-outline-2 opacity-[30%]"
          ref={textRef}
        >
          ORGANIZER
        </span>
      </div>
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="items-center justify-center h-full flex">
              {/* <iframe
                width="560"
                height="315"
                src="https://res.cloudinary.com/dnik53vns/video/upload/f_auto:video,q_auto/v1/videos/agrcodlyrjzauc5dtym6&autoplay=1&mute=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                // referrerpolicy="strict-origin-when-cross-origin"
                // allowfullscreen
                className="rounded-lg shadow-lg h-full w-full object-cover"
              /> */}
              <CldVideoPlayer
                width="1920"
                height="1080"
                src="videos/agrcodlyrjzauc5dtym6"
                autoplay={true}
                muted
                // AutoplayMode="on-scroll"
                loop={true}
                className="rounded-lg shadow-lg h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col my-5 max-w-full md:w-[570px] bg-white">
              <h2 className="text-2xl font-bold leading-10 text-black max-md:max-w-full">
                FORWARDLIVE
              </h2>
              <Paragraph className="mt-2">
                Welcome to the Number #1 life transformation gathering, where
                lives are inspired to greatness with the best support system you
                could ever imagine. Increase your network and connect with the
                best minds in diverse sectors and industries across the country.
                We are building a world class leadership live session and the
                largest conference of emerging thought leaders and excited to
                have you experience the transformation for yourself. FORWARD is
                an all-time leadership and life transformational live conference
                for those desirous of growth. A curated live expression of
                Rotiba Emmanuel (REO) a global leadership and transformation
                speaker and other Thought and business leaders who are the best
                in the game and at the top of their sectors. For over a decade
                REO has continued to create platforms for positive life
                transformation and global impact. For Over a decade Rotiba
                Emmanuel has spoken to over 10 Countries around the world. Just
                to name a few (London (UK), Canada, Italy, Ghana, Netherlands,
                Hungary, Nigeria etc.) impacting young people. We are bringing
                you the opportunity to be in the same room with the top leaders,
                career experts, and chief executives in various sectors who
                embody great positive values and have shown results.
              </Paragraph>

              <Link
                href={"/about"}
                className="w-full justify-end text-end text-red-100 underline capitalize text-xl"
              >
                read more ...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Organizers };
