"use client";

import { Check } from "lucide-react";
import React from "react";
import Slider from "react-slick";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
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
import { Ticket } from "iconsax-react";
import { Form } from "../Tickects";

const PriceSection = () => {
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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
  };
  return (
    <section className="pb-[60px] w-full">
      <div ref={containerRef} className="px-4 py-12 relative">
        <div className="flex flex-col px-5 text-center max-w-[756px] justify-center w-full mx-auto">
          <h2 className="self-center text-4xl md:text-6xl font-bold tracking-wide text-red-200 max-md:max-w-full">
            Price <span className="text-red-100">Details</span>
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
          PRICE
        </span>
      </div>

      <Slider
        {...settings}
        className="max-w-7xl px-2 lg:px-8 self-center md:mx-auto"
      >
        {Tickets.map((ticket) => (
          <TicketsCard key={ticket.id} ticket={ticket} />
        ))}
      </Slider>
    </section>
  );
};

export { PriceSection };

const Tickets: Ticket[] = [
  {
    id: 1,
    name: "Standard Pass",
    includedFeatures: [
      "Access to the event Experience, all keynote speeches and discussions",
      "Networking Opportunities",
      "General seating row",
    ],
    price: {
      usd: "7-10",
      naira: "4-5k",
    },
  },
  {
    id: 2,
    name: "Executive Pass",
    includedFeatures: [
      "Executive Service",
      "Front row seating in all sessions",
      "Access to speakers during the networking session",
      "Light refreshment",
      "Customized Forward Live souvenir (Tag, branded package)",
      "Access to conference replays",
    ],
    price: {
      usd: 16,
      naira: "20k",
    },
  },
  {
    id: 3,
    name: "VIP Premium Pass",
    includedFeatures: [
      "Priority seating",
      "Fastrack registration entry",
      "Light refreshment",
      "Lunch",
      "Priority media coverage",
      "Access to conference replay",
      "Access to networking with speakers",
      "Customized premium Forward Live souvenir",
    ],
    price: {
      usd: 38,
      naira: "50k",
    },
  },
  {
    id: 4,
    name: "VVIP-Platinum Ticket",
    includedFeatures: [
      "Executive Priority entry Service",
      "Reserved Front-row seating in all sessions",
      "Access to networking with speakers",
      "Customized FORWARD goody bag",
      "Access to conference replays",
      "Special Recognition",
      "One-on-one info session with REO at a scheduled Time",
    ],
    price: {
      usd: 75,
      naira: "100k",
    },
  },
  {
    id: 5,
    name: "VVIP-Corporate Ticket",
    includedFeatures: [
      "Discounted Platinum ticket",
      "Entry Access for 3-5 persons respectives of the organization/brand",
      "Attached Protocols",
      "Pictures with Speakers and Special Guests",
      "Designated seating area for organization CEO / representatives",
      "Display of organization logo on backdrop",
      "Special recognition by the Mc/Host during the event while logo is displayed at the background",
      "Display of Organization Logo on LED screen",
      "Recognition on all social media platforms as guest",
      "One-on-one team corporate session with REO",
      "Certificate of Recognition as a FORWARD-THINKING ORGANIZATION",
    ],
    price: {
      usd: "150-384",
      naira: "200-500k",
    },
  },
];

interface Ticket {
  id: number;
  name: string;
  desc?: string;
  includedFeatures: string[];
  price: {
    usd: number | string;
    naira: number | string;
  };
}

interface TicketsCardProps {
  ticket: Ticket;
}

const TicketsCard = ({ ticket }: TicketsCardProps) => {
  const { replace } = useRouter();
  const [price, setSelectedprice] = React.useState<string>();
  return (
    <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none items-center justify-center bg-white">
      <div className="p-8 sm:p-10 lg:flex-auto">
        <h3 className="text-2xl font-bold tracking-tight text-gray-900">
          {ticket.name}
        </h3>
        <p className="mt-6 text-base leading-7 text-gray-600">{ticket.desc}</p>
        <div className="mt-10 flex items-center gap-x-4">
          <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
            What&apos;s included
          </h4>
          <div className="h-px flex-auto bg-gray-100" />
        </div>
        <ul
          role="list"
          className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
        >
          {ticket.includedFeatures.map((feature, index) => (
            <li key={index} className="flex gap-x-3 items-center">
              <Check className="h-6 w-5 flex-none text-indigo-600" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
        <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
          <div className="mx-auto max-w-xs px-8">
            <p className="text-base font-semibold text-gray-600">
              Pay now or Book your Ticket
            </p>
            <p className="mt-6 flex items-baseline justify-center gap-x-2">
              <span className="text-5xl font-bold tracking-tight text-gray-900">
                {`$${ticket.price.usd}`}
              </span>
              <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                USD
              </span>
            </p>
            <p className="mt-6 flex items-baseline justify-center gap-x-2">
              <span className="text-5xl font-bold tracking-tight text-gray-900">
                {`₦${ticket.price.naira}`}
              </span>
              <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                naria
              </span>
            </p>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  // @ts-ignore
                  onClick={() => setSelectedprice(ticket.price.usd)}
                  className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get Ticket
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Make Reservation</SheetTitle>
                  {/* <SheetDescription>
                    Make changes to your profile here. Click save when you're
                    done.
                  </SheetDescription> */}
                </SheetHeader>
                <Form selectedPrice={price!} />
              </SheetContent>
            </Sheet>
            <p className="mt-6 text-xs leading-5 text-gray-600">
              Tickects will be sent immediately to your provided email address
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
