"use client";

import Image from "next/image";
import Slider from "react-slick";
import LogoSlider from "../../../public/logoSlider.webp";
import { cn } from "@/utils";

const slides = [
  { alt: "Logo", src: LogoSlider },
  { alt: "Logo", src: LogoSlider },
  { alt: "Logo", src: LogoSlider.src },
  { alt: "Logo", src: LogoSlider },
  { alt: "Logo", src: LogoSlider },
];
interface LogoCarouselProps {
  color?: "black" | "white" | "red";
}

const LogoCarousel: React.FC<LogoCarouselProps> = ({ color }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className={cn(
        "overflow-hidden p-2 w-full",
        color === "black"
          ? "bg-black"
          : color === "white"
          ? "bg-white"
          : color === "red"
          ? "bg-red-400"
          : "bg-white"
      )}
    >
      <Slider {...settings}>
        {slides.map((logo, index) => (
          <div key={index}>
            <div className="flex justify-evenly items-center flex-row space-x-3 md:space-x-[30px]">
              <Image
                src={color === "black" ? "/newlogo.png" : "/logo2.png"}
                alt={logo.alt}
                width={155}
                height={55}
              />
              <Image
                src={logo.src}
                alt={logo.alt}
                width={30}
                height={30}
                className={color === "white" ? "invert" : ""}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoCarousel;
