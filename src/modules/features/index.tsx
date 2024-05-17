"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import React from "react";
import { useRef } from "react";

const Features = () => {
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
  return (
    <div className="bg-white relative">
      {/* <div ref={containerRef} className="px-4 py-12 relative">
        <div className="flex flex-col px-5 text-center max-w-[756px] justify-center w-full mx-auto">
          <h2 className="self-center text-4xl md:text-6xl font-bold tracking-wide text-red-200 max-md:max-w-full">
            Thsoe Who Spoke <span className="text-red-100">Before</span>
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
          PAST SPEAKERS
        </span>
      </div> */}
      <div className="relative">
        <HorizontalScrollCarousel />
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

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

  return (
    <section ref={targetRef} className="relative h-[200vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div ref={containerRef} className="px-4 py-12 absolute">
          <span
            className="top-0 absolute left-0 mx-auto whitespace-nowrap text-center font-bold uppercase text-transparent outline-4 outline-red-100 p-2 font-outline-2 opacity-[30%]"
            ref={textRef}
          >
            PAST SPEAKERS
          </span>
        </div>
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[500px] w-[500px] overflow-hidden bg-black rounded-lg"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 opacity-[60%] bg-black"
      />
      <div className="absolute bottom-0 z-10 grid place-content-center justify-end w-full">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-2xl font-black uppercase text-white backdrop-blur-lg w-full">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Features;

type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "/speakers/speaker1.jpg",
    title: "Wantaise Davies",
    id: 1,
  },
  {
    url: "/speakers/speaker2.jpg",
    title: "Wantaise Davies",
    id: 2,
  },
  {
    url: "/speakers/speaker3.jpg",
    title: "Wantaise Davies",
    id: 3,
  },
  {
    url: "/speakers/speaker4.jpg",
    title: "Wantaise Davies",
    id: 4,
  },
  {
    url: "/speakers/speaker5.jpg",
    title: "Wantaise Davies",
    id: 5,
  },
];
