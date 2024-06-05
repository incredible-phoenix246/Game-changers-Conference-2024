"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/utils";

export const ParallaxScrollSecond = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateYFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateXFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const rotateXFirst = useTransform(scrollYProgress, [0, 1], [0, -20]);

  const translateYThird = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateXThird = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rotateXThird = useTransform(scrollYProgress, [0, 1], [0, 20]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div
      className={cn("h-[40rem] items-start overflow-y-auto w-full", className)}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10"
        ref={gridRef}
      >
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{
                y: translateYFirst,
                x: translateXFirst,
                rotateZ: rotateXFirst,
              }}
              key={"grid-1" + idx}
            >
              <Image
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div key={"grid-2" + idx}>
              <Image
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div
              style={{
                y: translateYThird,
                x: translateXThird,
                rotateZ: rotateXThird,
              }}
              key={"grid-3" + idx}
            >
              <Image
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const images = [
  "/zuma/DSC_4965.jpg",
  "/zuma/DSC_4966.jpg",
  "/zuma/DSC_4967.jpg",
  "/zuma/DSC_4968.jpg",
  "/zuma/DSC_4969.jpg",
  "/zuma/IMG_4973.jpg",
  "/zuma/IMG_4974.jpg",
  "/zuma/IMG_4975.jpg",
  "/zuma/IMG_4982.jpg",
  "/zuma/IMG_4983.jpg",
  "/zuma/IMG_4986.jpg",
  "/zuma/IMG_4988.jpg",
  "/zuma/IMG_4989.jpg",
  "/zuma/IMG_4991.jpg",
  "/zuma/IMG_4993.jpg",
  "/zuma/IMG_4994.jpg",
  "/zuma/IMG_4997.jpg",
  "/zuma/IMG_4999.jpg",
  "/zuma/IMG_5001.jpg",
  "/zuma/IMG_5003.jpg",
  "/zuma/IMG_5004.jpg",
  "/zuma/IMG_5005.jpg",
  "/zuma/IMG_5008.jpg",
  "/zuma/IMG_5010.jpg",
  "/zuma/IMG_5011.jpg",
  "/zuma/IMG_5013.jpg",
  "/zuma/IMG_5014.jpg",
  "/zuma/IMG_5015.jpg",
  "/zuma/IMG_5016.jpg",
  "/zuma/IMG_5017.jpg",
  "/zuma/IMG_5018.jpg",
  "/zuma/IMG_5020.jpg",
  "/zuma/IMG_5021.jpg",
  "/zuma/IMG_5022.jpg",
  "/zuma/IMG_5023.jpg",
  "/zuma/IMG_5024.jpg",
  "/zuma/IMG_5026.jpg",
  "/zuma/IMG_5027.jpg",
  "/zuma/IMG_5029.jpg",
  "/zuma/IMG_5030.jpg",
  "/zuma/IMG_5031.jpg",
  "/zuma/IMG_5032.jpg",
  "/zuma/IMG_5035.jpg",
  "/zuma/IMG_5036.jpg",
  "/zuma/IMG_5037.jpg",
  "/zuma/IMG_5038.jpg",
  "/zuma/IMG_5039.jpg",
  "/zuma/IMG_5040.jpg",
  "/zuma/IMG_5041.jpg",
  "/zuma/IMG_5042.jpg",
  "/zuma/IMG_5043.jpg",
  "/zuma/IMG_5044.jpg",
  "/zuma/IMG_5046.jpg",
  "/zuma/IMG_5047.jpg",
  "/zuma/IMG_5048.jpg",
  "/zuma/IMG_5049.jpg",
  "/zuma/IMG_5050.jpg",
  "/zuma/IMG_5052.jpg",
  "/zuma/IMG_5053.jpg",
  "/zuma/IMG_5056.jpg",
  "/zuma/IMG_5057.jpg",
  "/zuma/IMG_5059.jpg",
  "/zuma/IMG_5060.jpg",
  "/zuma/IMG_5061.jpg",
  "/zuma/IMG_5062.jpg",
  "/zuma/IMG_5064.jpg",
  "/zuma/IMG_5065.jpg",
  "/zuma/IMG_5066.jpg",
  "/zuma/IMG_5067.jpg",
  "/zuma/IMG_5069.jpg",
  "/zuma/IMG_5072.jpg",
  "/zuma/IMG_5073.jpg",
  "/zuma/IMG_5074.jpg",
  "/zuma/IMG_5076.jpg",
  "/zuma/IMG_5077.jpg",
  "/zuma/IMG_5078.jpg",
  "/zuma/IMG_5079.jpg",
  "/zuma/IMG_5080.jpg",
  "/zuma/IMG_5081.jpg",
  "/zuma/IMG_5083.jpg",
  "/zuma/IMG_5086.jpg",
  "/zuma/IMG_5092.jpg",
  "/zuma/IMG_5095.jpg",
  "/zuma/IMG_5096.jpg",
  "/zuma/IMG_5097.jpg",
  "/zuma/IMG_5098.jpg",
  "/zuma/IMG_5099.jpg",
  "/zuma/IMG_5101.jpg",
  "/zuma/IMG_5102.jpg",
  "/zuma/IMG_5103.jpg",
  "/zuma/IMG_5104.jpg",
  "/zuma/IMG_5105.jpg",
  "/zuma/IMG_5108.jpg",
  "/zuma/IMG_5113.jpg",
  "/zuma/IMG_5114.jpg",
  "/zuma/IMG_5115.jpg",
  "/zuma/IMG_5121.jpg",
  "/zuma/IMG_5124.jpg",
  "/zuma/IMG_5125.jpg",
  "/zuma/IMG_5129.jpg",
  "/zuma/IMG_5130.jpg",
  "/zuma/IMG_5131.jpg",
  "/zuma/IMG_5135.jpg",
  "/zuma/IMG_5136.jpg",
  "/zuma/IMG_5137.jpg",
  "/zuma/IMG_5139.jpg",
  "/zuma/IMG_5140.jpg",
  "/zuma/IMG_5142.jpg",
  "/zuma/IMG_5143.jpg",
  "/zuma/IMG_5145.jpg",
  "/zuma/IMG_5147.jpg",
  "/zuma/IMG_5148.jpg",
  "/zuma/IMG_5149.jpg",
  "/zuma/IMG_5150.jpg",
  "/zuma/IMG_5153.jpg",
  "/zuma/IMG_5155.jpg",
  "/zuma/IMG_5156.jpg",
  "/zuma/IMG_5158.jpg",
  "/zuma/IMG_5159.jpg",
  "/zuma/IMG_5160.jpg",
  "/zuma/IMG_5161.jpg",
  "/zuma/IMG_5166.jpg",
  "/zuma/IMG_5168.jpg",
  "/zuma/IMG_5169.jpg",
  "/zuma/IMG_5172.jpg",
  "/zuma/IMG_5176.jpg",
  "/zuma/IMG_5178.jpg",
  "/zuma/IMG_5179.jpg",
  "/zuma/IMG_5183.jpg",
  "/zuma/IMG_5184.jpg",
  "/zuma/IMG_5186.jpg",
  "/zuma/IMG_5187.jpg",
  "/zuma/IMG_5189.jpg",
  "/zuma/IMG_5191.jpg",
  "/zuma/IMG_5192.jpg",
  "/zuma/IMG_5196.jpg",
  "/zuma/IMG_5197.jpg",
  "/zuma/IMG_5202.jpg",
  "/zuma/IMG_5203.jpg",
  "/zuma/IMG_5204.jpg",
  "/zuma/IMG_5210.jpg",
  "/zuma/IMG_5220.jpg",
  "/zuma/IMG_5226.jpg",
  "/zuma/IMG_5227.jpg",
  "/zuma/IMG_5229.jpg",
  "/zuma/IMG_5231.jpg",
  "/zuma/IMG_5232.jpg",
  "/zuma/IMG_5233.jpg",
  "/zuma/IMG_5234.jpg",
  "/zuma/IMG_5235.jpg",
  "/zuma/IMG_5236.jpg",
];

export const GalleryPage = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center text-xl md:text-3xl font-medium">
              Gallery
            </h1>
          </div>
        </div>
      </div>
      <ParallaxScrollSecond images={images} />
    </>
  );
};
