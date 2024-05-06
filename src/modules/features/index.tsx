"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";

const Features = () => {
  return (
    <div className="bg-red-400 -mt-[50px]">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-55%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-red-400">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
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
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-4xl font-black uppercase text-white backdrop-blur-lg w-full">
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
    url: "/transformation.jpg",
    title: "Transformational Experience",
    id: 1,
  },
  {
    url: "/expertsession.jpg",
    title: "Leading Experts Session",
    id: 2,
  },
  {
    url: "/network.jpg",
    title: "Networking Opportunity",
    id: 3,
  },
  {
    url: "/growth.jpg",
    title: "growth strategies",
    id: 4,
  },
  {
    url: "/goal.jpg",
    title: "Achive Goals",
    id: 5,
  },
];
