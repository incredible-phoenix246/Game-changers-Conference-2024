"use client";

import React, { MouseEvent, useEffect, useRef } from "react";
import { useAnimate } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import useMediaQuery from "@/hooks/use-media-query";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const SPEAKERSECTION = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
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

  return (
    <section className="w-full">
      <div ref={containerRef} className="px-4 py-12 relative">
        <div className="flex flex-col px-5 text-center max-w-[756px] justify-center w-full mx-auto">
          <h2 className="self-center text-4xl md:text-6xl font-bold tracking-wide text-red-200 max-md:max-w-full">
            Our Noteworthy <span className="text-red-100">SPEAKERS</span>
          </h2>

          <p className="mt-5 w-full text-base tracking-normal text-neutral-600 max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            malesuada tristique justo quis ultrices. Morbi gravida dignissim
            lectus, et semper nulla varius a
          </p>
        </div>
        <span
          className="top-0 absolute left-0 mx-auto whitespace-nowrap text-center font-bold uppercase text-transparent outline-4 outline-red-100 p-2 font-outline-2 opacity-[30%]"
          ref={textRef}
        >
          SPEAKERS
        </span>
      </div>
      <div className="mx-auto max-w-7xl flex items-center justify-center w-full">
        <ClipPathlink />
      </div>
    </section>
  );
};

const ClipPathlink = () => {
  return (
    <div className="md:divide-y divide-neutral-900 md:border border-neutral-900">
      <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x divide-neutral-900 w-full">
        {dummyData.map((item) => (
          <LinkBox key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

type Side = "top" | "left" | "bottom" | "right";
type KeyframeMap = {
  [key in Side]: string[];
};

const ENTRANCE_KEYFRAMES: KeyframeMap = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES: KeyframeMap = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const LinkBox = ({
  img,
  name,
  desc,
  id,
  link,
}: {
  id?: number;
  img: string;
  name?: string;
  desc?: string;
  link?: {
    platform: string;
    url: string;
  }[];
}) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e: MouseEvent) => {
    const box = (e.target as HTMLElement).getBoundingClientRect();

    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left" as Side,
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right" as Side,
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top" as Side,
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom" as Side,
    };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (e: MouseEvent) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side],
    });
  };

  const handleMouseLeave = (e: MouseEvent) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side],
    });
  };

  const { isMobile } = useMediaQuery();
  console.log(link);

  return (
    <div
      key={id}
      onMouseEnter={(e) => {
        handleMouseEnter(e);
      }}
      onMouseLeave={(e) => {
        handleMouseLeave(e);
      }}
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative grid md:h-[500px] md:w-[450px] h-[400px] w-[350px]  place-content-center inset-0 z-0 transition-transforms"
    >
      <div
        ref={scope}
        style={{
          clipPath: BOTTOM_RIGHT_CLIP,
        }}
        className="absolute inset-0 flex flex-col items-center justify-end bg-neutral-900 bg-opacity-[50%] text-white text-center"
      >
        <div className="text-center font-bold mb-4 w-full pb-3 md:max-w-[80%]">
          <p className="mt-2 text-base leading-6">Name: {name}</p>
          <div className="flex w-full justify-end">
            <Sheet>
              <SheetTrigger asChild>
                <Button>View Details</Button>
              </SheetTrigger>
              <SheetContent side={isMobile ? "bottom" : "right"}>
                <SheetHeader>
                  <SheetTitle>{name}</SheetTitle>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <div className="flex items-center gap-4 w-full">
                    <div className="flex w-[300px] h-[300px]">
                      <Image
                        width={300}
                        height={300}
                        src={img}
                        alt="speakers"
                        className="w-full h-full self-center object-cover rounded-lg transition-all duration-300 hover:duration-700 hover:scale-150"
                      />
                    </div>
                  </div>
                  <SheetDescription className="text-black">
                    {desc}
                  </SheetDescription>
                  <div className="flex gap-4 self-start mt-2">
                    {link?.map((social) => (
                      <Link
                        key={social.url}
                        href={social.url}
                        className="flex justify-center items-center bg-red-300 rounded-md aspect-[1.07]"
                      >
                        <Image
                          src={`/socials/${social.platform}.svg`}
                          alt="Social image"
                          width={40}
                          height={40}
                          loading="eager"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button>Close</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};

const dummyData = [
  {
    id: 1,
    img: "/speakers/speaker1.jpg",
    name: "John Doe",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/speaker1",
      },
      {
        platform: "Twitter",
        url: "https://twitter.com/speaker1",
      },
    ],
  },
  {
    id: 2,
    img: "/speakers/speaker2.jpg",
    name: "Jane Smith",
    desc: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/speaker1",
      },
      {
        platform: "Twitter",
        url: "https://twitter.com/speaker1",
      },
      // Add more link for Speaker 1 as needed
    ],
  },
  {
    id: 3,
    img: "/speakers/speaker3.jpg",
    name: "Alice Johnson",
    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    link: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/speaker1",
      },
      {
        platform: "Twitter",
        url: "https://twitter.com/speaker1",
      },
      // Add more link for Speaker 1 as needed
    ],
  },
  {
    id: 4,
    img: "/speakers/speaker4.jpg",
    name: "Michael Brown",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    link: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/speaker1",
      },
      {
        platform: "Twitter",
        url: "https://twitter.com/speaker1",
      },
      // Add more link for Speaker 1 as needed
    ],
  },
  {
    id: 5,
    img: "/speakers/speaker1.jpg",
    name: "Emily Wilson",
    desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    link: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/speaker1",
      },
      {
        platform: "Twitter",
        url: "https://twitter.com/speaker1",
      },
    ],
  },
  {
    id: 6,
    img: "/speakers/speaker2.jpg",
    name: "David Lee",
    desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    link: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/speaker1",
      },
      {
        platform: "Twitter",
        url: "https://twitter.com/speaker1",
      },
    ],
  },
];
