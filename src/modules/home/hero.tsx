"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const shuffle = (array: (typeof squareData)[0][]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "/ass/IMG_4989.jpg",
  },
  {
    id: 2,
    src: "/ass/IMG_5008.jpg",
  },
  {
    id: 3,
    src: "/ass/IMG_5011.jpg",
  },
  {
    id: 4,
    src: "/ass/IMG_5015.jpg",
  },
  {
    id: 5,
    src: "/ass/IMG_5017.jpg",
  },
  {
    id: 6,
    src: "/ass/IMG_5018.jpg",
  },
  {
    id: 7,
    src: "/ass/IMG_5021.jpg",
  },
  {
    id: 8,
    src: "/ass/IMG_5027.jpg",
  },
  {
    id: 9,
    src: "/ass/IMG_5035.jpg",
  },
  {
    id: 10,
    src: "/ass/IMG_5037.jpg",
  },
  {
    id: 11,
    src: "/ass/IMG_5041.jpg",
  },
  {
    id: 12,
    src: "/ass/IMG_5042.jpg",
  },
  {
    id: 13,
    src: "/ass/IMG_5158.jpg",
  },
  {
    id: 14,
    src: "/ass/IMG_5159.jpg",
  },
  {
    id: 15,
    src: "/ass/IMG_5229.jpg",
  },
  {
    id: 16,
    src: "/ass/IMG_5231.jpg",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full rounded-xl"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    />
  ));
};

export const ShuffleGrid = () => {
  const timeoutRef = useRef<any>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[550px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export const HomeSection = () => {
  return (
    <>
      <div className="overflow-hidden p-8">
        <ShuffleGrid />
      </div>
    </>
  );
};
