"use client";

import { Button } from "@/components/ui/button";
import * as React from "react";
import useInView from "@/hooks/useInView";
import { cn } from "@/utils";

interface SponsorImageProps {
  src: string;
  alt: string;
  aspectRatio: string;
}

const SponsorImage: React.FC<SponsorImageProps> = ({
  src,
  alt,
  aspectRatio,
}) => (
  <img
    loading="lazy"
    src={src}
    alt={alt}
    className={`shrink-0 max-w-full w-[170px] ${aspectRatio}`}
  />
);

const sponsorImages = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1b7c836d71019813dae334a1e89b22bafd573d0a58474e3c261f848977a044ca?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    alt: "Sponsor 1",
    aspectRatio: "aspect-[3.03]",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6b03d5786d7a8b89fdf70f35482a3c4afed0ec142058abfbb6744f30e08eb40e?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    alt: "Sponsor 2",
    aspectRatio: "aspect-[4.76] my-auto",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/67c7b144fd6b61db70ca900ea7ae4ff08531df1bda09af83223992b2394d025b?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    alt: "Sponsor 3",
    aspectRatio: "aspect-[3.23] self-start",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/de52c2d9d64bc71e10a60c054e8d220eac46464c91aff7ebccb13afecb4b6023?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    alt: "Sponsor 4",
    aspectRatio: "aspect-[3.57] my-auto",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5f3ac92d861a8aad2a30ad571802dc8d8d7958eb5058f1125bc41a7599c709f1?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    alt: "Sponsor 5",
    aspectRatio: "aspect-[2.94] self-stretch invert",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5c17e32cffa80334328a6ea10722362634c9ecd2921f064cca40ee2f06729f5a?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    alt: "Sponsor 6",
    aspectRatio: "aspect-[5] self-stretch my-auto",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f5947c26d488054c9e644d3cd39f0a2f2b7a1a42c481cfe2fcc24928f98fa69f?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    alt: "Sponsor 7",
    aspectRatio: "aspect-[5.88] self-stretch my-auto",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/620671d3679e4d825cb27d712b2ef41964bd4caf916005c6d7ff9b49f2144f60?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
    alt: "Sponsor 8",
    aspectRatio: "aspect-[7.69] self-stretch my-auto",
  },
];

const SponsorsSection: React.FC = () => {
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
        "flex flex-col px-5 bg-black items-center justify-center mx-auto",
        isInView
          ? "opacity-100 translate-y-0 md:delay-300 duration-500"
          : " opacity-0 translate-y-36"
      )}
    >
      <div ref={containerRef} className="px-4 py-12 relative">
        <div className="flex flex-col px-5 text-center max-w-[756px] justify-center w-full mx-auto">
          <h2 className="self-center text-4xl md:text-6xl font-bold tracking-wide text-red-200 max-md:max-w-full">
            Our Awesome <span className="text-red-100">Sponsors</span>
          </h2>

          <p className="mt-5 w-full text-base tracking-normal text-white max-md:max-w-full">
            By aligning with our mission of fostering leadership and
            transformation, you will showcase your commitment to empowering
            future leaders. Take advantage of this unique opportunity to enhance
            your brand's presence and connect with influential decision-makers
            and innovators. Join us in making a lasting impact and driving
            positive change.
          </p>
        </div>
        <span
          className="top-0 absolute left-0 mx-auto whitespace-nowrap text-center font-bold uppercase text-transparent outline-4 outline-red-100 p-2 font-outline-2 opacity-[30%]"
          ref={textRef}
        >
          Sponsors
        </span>
      </div>

      <section className="flex justify-center items-center px-16 mx-auto md:pb-20 pb-6 max-md:px-5">
        <div className="flex flex-col items-center justify-center mx-auto md:mt-7 w-full gap-8 md:gap-0 md:space-y-8 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2  xl:grid-cols-4">
            {sponsorImages.slice(0, 4).map((image) => (
              <SponsorImage key={image.src} {...image} />
            ))}
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2  xl:grid-cols-4">
            {sponsorImages.slice(4).map((image) => (
              <SponsorImage key={image.src} {...image} />
            ))}
          </div>

          <Button className="justify-center px-10 py-4 mt-20 text-base h-[56px] font-medium leading-6 text-center text-white bg-red-300 hover:bg-white hover:text-red-300 shadow-2xl rounded-[400px] max-md:px-5 max-md:mt-10">
            Become a Sponsor
          </Button>
        </div>
      </section>
    </section>
  );
};

export default SponsorsSection;
