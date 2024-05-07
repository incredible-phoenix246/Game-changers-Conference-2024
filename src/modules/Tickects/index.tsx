"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

interface PackageItemProps {
  imageSrc: string;
  packageName: string;
  price: string;
  isSelected: boolean;
}

const PackageItem: React.FC<PackageItemProps> = ({
  imageSrc,
  packageName,
  price,
  isSelected,
}) => (
  <div
    className={`flex gap-4 p-6 whitespace-nowrap rounded-lg max-md:px-5 ${
      isSelected ? "bg-pink-200 rounded-3xl" : ""
    }`}
  >
    <img src={imageSrc} alt="" className="shrink-0 w-8 aspect-square" />
    <div className={`flex-1 ${isSelected ? "text-pink-500" : "text-zinc-500"}`}>
      {packageName}
    </div>
    <div
      className={`text-right ${
        isSelected ? "text-fuchsia-950" : "text-stone-300"
      }`}
    >
      {price}
    </div>
  </div>
);

const packageData = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/992826a5d401dda76ab88f3b725802609a49953f98ccd065043548b9892c3726?apiKey=252f8d5a726747838fcb04939a832fc3&",
    packageName: "Basic",
    price: "$100",
    isSelected: false,
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e739cbb8083cfe35d01f9987b821aa2f551a66a931713318fb4c3dc5695438df?apiKey=252f8d5a726747838fcb04939a832fc3&",
    packageName: "Standard",
    price: "$200",
    isSelected: false,
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2ee7025e1738c984f1b3229cbb5ff1138f7582861a2971cee84e0b5d85acb595?apiKey=252f8d5a726747838fcb04939a832fc3&",
    packageName: "Premium",
    price: "$300",
    isSelected: true,
  },
];

export function MyComponent() {
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
    <div className="flex flex-col px-5">
      <div ref={containerRef} className="px-4 py-12 relative">
        <div className="flex flex-col px-5 text-center max-w-[756px] justify-center w-full mx-auto">
          <h2 className="self-center text-4xl md:text-6xl font-bold tracking-wide text-red-200 max-md:max-w-full">
            Reserve your <span className="text-red-100">SEATS</span>
          </h2>

          <p className="mt-5 w-full text-base tracking-normal text-black max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            malesuada tristique justo quis ultrices. Morbi gravida dignissim
            lectus, et semper nulla varius a
          </p>
        </div>
        <span
          className="top-0 absolute left-0 mx-auto whitespace-nowrap text-center font-bold uppercase text-transparent outline-4 outline-red-100 p-2 font-outline-2 opacity-[30%]"
          ref={textRef}
        >
          BOOKING
        </span>
      </div>
      <div className="mt-28 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-7 text-xl font-bold leading-8 max-md:mt-10">
              <h2 className="text-2xl text-black">Choose a Package</h2>
              <p className="mt-1 text-sm leading-5 text-black underline">
                Learn More about pricing <a href="#">here</a>
              </p>
              {packageData.map((item, index) => (
                <PackageItem key={index} {...item} />
              ))}
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[67%] max-md:ml-0 max-md:w-full">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

const Form = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    npaNumber: "",
    department: "",
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };
  return (
    <>
      <div className="w-full items-center mx-auto container justify-center md:mt-[50px] relative z-[999]">
        {/* className="w-full " */}
        <form
          action=""
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border border-dashed border-neutral-200 stroke-[1px] stroke-neutral-200"
        >
          <div className="mb-4">
            <Label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </Label>
            <Input
              className="shadow appearance-none border h-12 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <Label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="npaNumber"
            >
              Phone Number
            </Label>
            <Input
              className="shadow appearance-none border rounded h-12 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="tel"
              name="phone"
              placeholder="(+234) 123 456 78"
            />
          </div>
          <div className="mb-4">
            <Label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </Label>
            <Input
              className="shadow appearance-none h-12 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <Label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </Label>
            <textarea
              // onChange={(e) => setCommentText(e.target.value)}
              // value={commentText}
              name="comment"
              id="comment"
              placeholder="Leave a comment"
              className="w-full rounded-md border border-gray-200 md:py-4 py-2 px-2 md:px-4 outline-none focus-visible:border focus-visible:border-red-100  h-[150px] sm:h-[193px] resize-none text-sm sm:text-base"
            />
          </div>
        </form>
      </div>
    </>
  );
};
