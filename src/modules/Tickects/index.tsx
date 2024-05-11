"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/utils";
import { Work_Sans, Dancing_Script, Bebas_Neue } from "next/font/google";
import useMediaQuery from "@/hooks/use-media-query";

const dance = Bebas_Neue({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

interface PackageItemProps {
  imageSrc: string;
  packageName: string;
  price: string;
  isSelected: boolean;
}

const packageData = [
  {
    packageName: "Standard Pass",
    price: "₦10,000 {$7}",
  },
  {
    packageName: "Executive Pass",
    price: "₦20,000 {$16}",
  },
  {
    packageName: "VIP Premium Pass",
    price: "₦50,000 {$35}",
  },
  {
    packageName: "VVIP-Platinum Pass",
    price: "₦100,000 {$100}",
  },
  {
    packageName: "VVIP-Corporate Pass",
    price: "(₦200,000 - ₦500,000) {$150 - $400}",
  },
];

interface Package {
  packageName: string;
  price: string;
}

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

  const [selectedPrice, setSelectedPrice] = React.useState<string>("");

  const handleSelectPrice = (packageName: string) => {
    setSelectedPrice(packageName);
  };

  return (
    <div className="flex flex-col px-5 h-full py-6" id="price">
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
          TICKETS
        </span>
      </div>
      <div className="w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <Price
            packageData={packageData}
            selectedPrice={selectedPrice}
            handleSelectPrice={handleSelectPrice}
          />
          <div className="flex flex-col ml-5 w-[67%] max-md:ml-0 max-md:w-full">
            <Form selectedPrice={selectedPrice} />
          </div>
        </div>
      </div>
    </div>
  );
}

interface FormProps {
  selectedPrice: string;
}

const Form = ({ selectedPrice }: FormProps) => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isDisabled = !formData.name && !formData.phone && !formData.email;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    toast({
      title: `Ticket Secured! ${formData.name}`,
      description: "Your ticket has been sent to your email.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      comment: "",
    });
  };

  return (
    <>
      <div className="w-full items-center md:container justify-center md:mt-[50px] relative z-[99]">
        {/* className="w-full " */}
        <form
          onSubmit={handleSubmit}
          action=""
          className="bg-white md:shadow-md rounded md:px-8 pt-6 pb-8 mb-4 md:border border-dashed border-neutral-200 stroke-[1px] stroke-neutral-200"
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
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <Label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone Number
            </Label>
            <Input
              className="shadow appearance-none border rounded h-12 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="tel"
              name="phone"
              placeholder="(+234) 123 456 78"
              value={formData.phone}
              onChange={handleChange}
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
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <Label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="comment"
            >
              Additional Comment
            </Label>
            <textarea
              name="comment"
              id="comment"
              placeholder="Leave a comment"
              value={formData.comment}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-200 md:py-4 py-2 px-2 md:px-4 outline-none focus-visible:border focus-visible:border-red-100  h-[150px] sm:h-[193px] resize-none text-sm sm:text-base"
            />
            <div className="flex items-center justify-between w-full">
              {selectedPrice && (
                <Button
                  disabled={isDisabled}
                  type="submit"
                  className="justify-center self-start px-10 py-4 mt-10 text-base font-medium leading-6 text-center h-[56px] text-white bg-red-200 shadow-2xl rounded-[400px] max-md:px-5"
                >
                  Get your Ticket
                </Button>
              )}

              <p className={`${dance.className} text-3xl font-bold`}>
                {selectedPrice}
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

interface PriceProps {
  packageData: Package[];
  selectedPrice: string;
  handleSelectPrice: (price: string) => void;
}

const Price = ({
  packageData,
  selectedPrice,
  handleSelectPrice,
}: PriceProps) => {
  const { isMobile } = useMediaQuery();
  return (
    <>
      <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full bg-white md:mt-[50px] mb-[20px] md:mb-0 relative z-[99]">
        <div className="flex flex-col mt-7 text-xl font-bold leading-8 max-md:mt-10">
          <h2 className="text-2xl text-black">Choose a Package</h2>
          {/* <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="mt-1 text-sm leading-5 text-black underline text-start justify-start items-start flex hover:bg-none"
              >
                Learn More about Pricing here
              </Button>
            </SheetTrigger>
            <SheetContent side={isMobile ? "bottom" : "left"}>
              <SheetHeader>
                <SheetTitle>Package Details</SheetTitle>
              </SheetHeader>
              <div className="grid gap-4 py-4 place-content-center">
                <div className="flex items-center gap-4 w-full ">
                  <div className="flex w-[300px] h-[300px] self-center mx-auto"></div>
                </div>
                <SheetDescription className="text-black"></SheetDescription>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button>Close</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet> */}

          <div className="mt-5 flex flex-col gap-y-3">
            {packageData.map((item) => (
              <Button
                key={item.packageName}
                className={cn(
                  "flex items-center justify-between w-full h-[80px] bg-red-200 hover:bg-red-100 rounded-t-xl rounded-br-xl rounded-bl-none text-[24px] font-medium px-4",

                  selectedPrice === item.price && "bg-black hover:bg-black"
                )}
                onClick={() => handleSelectPrice(item.price)}
              >
                <p
                  className={`${dance.className} text-xl md:text-3xl font-bold`}
                >
                  {item.packageName}
                </p>
                <p className="text-sm">{item.price}</p>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
