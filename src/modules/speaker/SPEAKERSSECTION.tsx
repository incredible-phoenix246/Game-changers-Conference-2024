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
    <section className="w-full bg-black">
      <div ref={containerRef} className="px-4 py-12 relative">
        <div className="flex flex-col px-5 text-center max-w-[756px] justify-center w-full mx-auto">
          <h2 className="self-center text-4xl md:text-6xl font-bold tracking-wide text-red-200 max-md:max-w-full">
            Our Noteworthy <span className="text-red-100">SPEAKERS</span>
          </h2>

          <p className="mt-5 w-full text-base tracking-normal text-white max-md:max-w-full">
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
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x divide-neutral-900 w-full">
        {dummyData.slice(0, 6).map((item) => (
          <LinkBox key={item.id} {...item} />
        ))}
      </div>
      <div className="flex items-center justify-center w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 place-content-center">
          {dummyData.slice(6).map((item) => (
            <LinkBox key={item.id} {...item} />
          ))}
        </div>
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
      <div className="flex items-start justify-start top-0 left-0 md:max-w-[80%] p-4 absolute inset-0">
        <div className="max-w-[100px]">
          <Image src="/logo2.png" alt="watermark" width={155} height={55} />
        </div>
      </div>
      <div
        ref={scope}
        style={{
          clipPath: BOTTOM_RIGHT_CLIP,
        }}
        className="absolute inset-0 flex flex-col bg-neutral-900 bg-opacity-[50%] text-white text-center"
      >
        <div className="absolute inset-0 flex flex-col items-center justify-end text-center">
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
                  <div className="grid gap-4 py-4 place-content-center">
                    <div className="flex items-center gap-4 w-full ">
                      <div className="flex w-[300px] h-[300px] self-center mx-auto">
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
                          className="flex justify-center items-center bg-red-400 rounded-md aspect-[1.07]"
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
    </div>
  );
};

const dummyData = [
  {
    id: 1,
    img: "/speakers/speaker1.jpg",
    name: "Dr Foy",
    desc: `Dr Foy is a thought leader, public speaker, entertainment guru and marketing expert guru. Through Energize Music, he is on a mission to impact and empower generations of artists whose music will influence systems and cultures. 
`,
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
    name: "Jimi Tewe",
    desc: `Jimi Tewe, is a mentor, global executive coach, leader and transformational specialist with two decades of experience garners in HR Consulting. He is called the King Maker and this because he has raised thousands of emerging leaders to become apostles in the market place.
`,
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
    name: "Gusi Tobby Lord-Williams",
    desc: `A social impact and influence strategist and the Executive Director, GirHub Africa. She is known for her value driven approach to individuals, organizations and the society. She is referred to as LORD-T, the Connectologist and through her well curated and luxurious lifestyle events, she has linked many to valuable and global relationships that they have leveraged on.
`,
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
    img: "/speakers/speaker4.JPG",
    name: "Dr Jamie Pajoel",
    desc: `Dr. Jamie Pajoel is a globally recognized Leadership Development Coach, Is renowned for his impactful training of government officials, industry leaders, and managers worldwide.
As a seasoned Leadership and Management Expert, he specializes in Human Capital Development through innovative approaches in Organizational Leadership, Process Simplification, Emotional Intelligence, and Sales Leadership.
With a wealth of experience, he remains a sought-after figure, contributing significantly to the success of organizations on an international scale.`,
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
    img: "/speakers/speaker5.JPG",
    name: "Pastor Brite",
    desc: `Pastor Brite Egwougu, resident pastor Celebration Church International, Toronto and anointed gospel singer.
Pastor Brite shares tested and verified Bible principles that transcend time. His leadership style serves as an inspiration to the people of CCI Toronto and many young people around the world.
As the Pastor of a vibrant church, he has held many by their hands and helped them on their journey to greatness.`,
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
    img: "/speakers/speaker6.JPG",
    name: "Pastor Tinu Asiegbeme",
    desc: `Pastor Tinu Asegieme is a distinguished global relationship speaker and a dedicated preacher of the gospel. Her fervent commitment is rooted in a profound desire to witness women embrace their purpose and fulfill the divine call upon their lives.
Her impactful ministry has reached women across the globe, liberating them from the shackles of the enemy.
Beyond her dedicated focus on women, Pastor Tinu is deeply passionate about fostering the establishment of robust and flourishing relationships and marriages, exemplifying her broader commitment to the well-being of individuals.`,
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
    id: 7,
    img: "/speakers/speaker7.JPG",
    name: "Wantaise Davies",
    desc: `Wantaise Davis is not just a respected Motivational speaker and Manifestation Coach; she's a beacon of inspiration for many.
Her personal journey, marked by persistent self-doubt, the fear of falling short of expectations, and a negative mindset, resonates deeply with people today.
Through her guidance, thousands have been enabled to tap into their innate capacity.`,
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
    id: 8,
    img: "/speakers/speaker8.JPG",
    name: "Wantaise Davies",
    desc: `Wantaise Davis is not just a respected Motivational speaker and Manifestation Coach; she's a beacon of inspiration for many.
Her personal journey, marked by persistent self-doubt, the fear of falling short of expectations, and a negative mindset, resonates deeply with people today.
Through her guidance, thousands have been enabled to tap into their innate capacity.`,
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
