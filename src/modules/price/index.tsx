"use client";

import { Check } from "lucide-react";
import React from "react";
import Slider from "react-slick";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Ticket } from "iconsax-react";
import { Form } from "../Tickects";
import { useStateCtx } from "@/context/StateCtx";
import Link from "next/link";
import { cn } from "@/utils";
import useInView from "@/hooks/useInView";
import Image from "next/image";

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
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    swipeToSlide: true,
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
    type: "individual",
    includedFeatures: [
      "Access to the event Experience, all keynote speeches and discussions",
      "Networking Opportunities",
      "General seating row",
    ],
    price: {
      usd: "7-10",
      naira: "4-5k",
    },
    back: "/stand.png",
  },
  {
    id: 2,
    name: "Executive Pass",

    type: "individual",
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
    back: "/exec.png",
  },
  {
    id: 3,
    name: "VIP Premium Pass",
    type: "individual",
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
    back: "/prem.png",
  },
  {
    id: 4,
    name: "VVIP-Platinum Ticket",
    type: "individual",
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
    back: "/plat.png",
  },
  {
    id: 5,
    name: "VVIP-Corporate Ticket",
    type: "group",
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
    back: "/group.png",
  },
];

interface Ticket {
  id: number;
  back?: string;
  name: string;
  desc?: string;
  type?: "individual" | "group";
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
  const { setShowprice, setSelectedrice } = useStateCtx();
  return (
    <div
      key={ticket.id}
      className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none items-center justify-center bg-white"
    >
      <div className="p-8 sm:p-10 lg:flex-auto">
        <h3 className="text-2xl font-bold tracking-tight text-gray-900">
          {ticket.name}
        </h3>
        <p className="mt-6 text-base leading-7 text-gray-600">{ticket.desc}</p>
        <div className="mt-10 flex items-center gap-x-4">
          <h4 className="flex-none text-sm font-semibold leading-6 text-red-100">
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
              <Check className="h-6 w-5 flex-none text-red-100" />
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
            <Button
              onClick={() => {
                // @ts-ignore
                setSelectedrice(ticket.price.naira), setShowprice(true);
              }}
              className="mt-10 block w-full rounded-md bg-red-100 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-red-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-100"
            >
              Get Ticket
            </Button>
            <p className="mt-6 text-xs leading-5 text-gray-600">
              Tickects will be sent immediately to your provided email address
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FORMSHEET = () => {
  const { Showprice, setShowprice, selectedprice } = useStateCtx();
  return (
    <Sheet open={Showprice} onOpenChange={setShowprice}>
      <SheetContent className="w-full px-0">
        <SheetHeader className="px-5">
          <SheetTitle>Make Reservation</SheetTitle>
        </SheetHeader>
        <Form selectedPrice={selectedprice} />
      </SheetContent>
    </Sheet>
  );
};

export const NewPriceSection = () => {
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

  const [activeTab, setActiveTab] = React.useState("individual");
  const individualTickets = Tickets.filter(
    (ticket) => ticket.type === "individual"
  ).slice(0, 4);
  const groupTickets = Tickets.filter(
    (ticket) => ticket.type === "group"
  ).slice(0, 1);

  const SectionRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(SectionRef);

  return (
    <section
      ref={SectionRef}
      className={cn(
        "py-24 relative",
        isInView
          ? "opacity-100 translate-y-0 md:delay-300 duration-500 min-h-screen"
          : " opacity-0 translate-y-36"
      )}
      id="ticket"
    >
      <div className=" absolute top-0 left-0 md:p-[90px] p-[10px]">
        <div className="item-hints">
          <div className="hint" data-position="4">
            <span className="hint-radius"></span>
            <span className="hint-dot">Hint</span>
            <div className="hint-content do--split-children">
              <p>Hover on each card to see more details.</p>
            </div>
          </div>
        </div>
      </div>
      <div ref={containerRef} className="px-4 py-12 relative h-full">
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
          className="top-0 absolute left-0 mx-auto whitespace-nowrap text-center font-bold uppercase text-transparent outline-4 text-red-200 outline-red-100 p-2 font-outline-2 opacity-[30%]"
          ref={textRef}
        >
          PRICE
        </span>
      </div>
      <div className="absolute h-[36.5rem] w-full bg-gradient-to-r from-black/60 to-black/90 -z-10 bottom-0" />

      <div className="tabs relative">
        <div className="flex justify-center items-center bg-gray-100 rounded-full p-1.5 max-w-sm mx-auto">
          <button
            onClick={() => setActiveTab("individual")}
            className={cn(
              "inline-block w-1/2 text-center transition-all duration-500 rounded-full text-gray-400 font-semibold py-3 px-3 lg:px-11 hover:text-red-100",
              activeTab === "individual"
                ? "bg-red-100 rounded-full text-white tablink whitespace-nowrap active hover:text-white"
                : ""
            )}
            role="tab"
          >
            Individual
          </button>
          <button
            className={cn(
              "inline-block w-1/2 text-center transition-all duration-500 rounded-full text-gray-400 font-semibold py-3 px-3 lg:px-11 hover:text-red-100 whitespace-nowrap",
              activeTab === "group"
                ? "bg-red-100 rounded-full text-white tablink whitespace-nowrap active hover:text-white"
                : ""
            )}
            onClick={() => setActiveTab("group")}
            role="tab"
          >
            Group Ticket
          </button>
        </div>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 mt-6 relative min-h-[80vh]">
        <div
          className={cn(
            "space-y-8  sm:gap-6 xl:gap-8 lg:space-y-0",
            activeTab === "group"
              ? "grid-cols-1 place-content-center"
              : "lg:grid lg:grid-cols-4"
          )}
        >
          {activeTab === "individual" &&
            individualTickets.map((ticket) => (
              <div
                className={cn(
                  "flip-card w-full min-w-[385px] min-h-[570px] max-w-sm",
                  ticket.id === 2
                    ? "h-[700px]"
                    : ticket.id === 3
                    ? "h-[730px]"
                    : ticket.id === 4
                    ? "h-[750px]"
                    : ""
                )}
                key={ticket.id}
              >
                <div className="flip-card-inner w-full h-full">
                  <div className="flip-card-front rounded-3xl">
                    <Image
                      src={`${ticket.back}`}
                      alt="tickect"
                      className="w-full h-full object-cover duration-500 max-w-[385px] max-h-[570px]"
                      width={769}
                      height={1141}
                    />
                  </div>
                  <div className="flip-card-back rounded-3xl">
                    <div className="group flex flex-col mx-auto w-full max-w-sm bg-white rounded-2xl shadow-2xl transition-all duration-300  p-8 xl:p-12 box ">
                      <div className="content items-center justify-center w-full]">
                        <div className="border-b border-solid border-gray-200 pb-9 mb-9 ">
                          <div className="w-16 h-16 rounded-full bg-red-50 mx-auto flex justify-center items-center transition-all duration-300 group-hover:bg-red-100">
                            <svg
                              className="w-6 h-6 text-red-100 transition-all duration-300 group-hover:text-white"
                              viewBox="0 0 31 30"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.42418 27.2608V12.0502C8.42418 11.8031 8.22388 11.6028 7.97681 11.6028V11.6028C5.55154 11.6028 4.3389 11.6028 3.58547 12.3562C2.83203 13.1097 2.83203 14.3223 2.83203 16.7476V22.116C2.83203 24.5413 2.83203 25.754 3.58547 26.5074C4.3389 27.2608 5.55154 27.2608 7.97681 27.2608H8.42418ZM8.42418 27.2608L8.42418 22.5246C8.42418 15.9141 9.90241 9.38734 12.7507 3.42199V3.42199C13.2066 2.46714 14.4408 2.19891 15.2519 2.87841C16.4455 3.87836 17.135 5.35554 17.135 6.91266V8.08463C17.135 9.40562 18.2059 10.4765 19.5269 10.4765H24.0982C25.1518 10.4765 25.6786 10.4765 26.0736 10.6078C27.0571 10.9346 27.7484 11.8197 27.8273 12.8531C27.859 13.2681 27.7314 13.7792 27.4762 14.8014L25.3389 23.3623C24.8715 25.2346 24.6377 26.1707 23.9399 26.7158C23.242 27.2609 22.2771 27.2609 20.3473 27.2609L8.42418 27.2608Z"
                                stroke="currentColor"
                                strokeWidth="2"
                              />
                            </svg>
                          </div>
                          <h3 className="font-manrope text-2xl font-bold my-7 text-center text-red-100">
                            {ticket.name}
                          </h3>
                          <div className="flex items-center justify-center">
                            <span className="font-manrope text-4xl font-medium text-gray-900">
                              {`₦${ticket.price.naira}`}
                            </span>
                            <span className="font-manrope text-xl pl-3 font-medium text-gray-900 justify-end">
                              {`$${ticket.price.usd}`}
                            </span>
                          </div>
                        </div>
                        <ul className="mb-12 space-y-6 text-left text-sm text-gray-600 group-hover:text-gray-900">
                          {ticket.includedFeatures.map((feature, index) => (
                            <li
                              key={index}
                              className="flex items-center space-x-3.5"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-red-100" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <Link
                          target="_blank"
                          href="https://tix.africa/buy/forward-live-with-reo"
                          className="py-2.5 px-5 bg-red-50 shadow-sm rounded-full transition-all duration-500 text-base text-red-100 font-semibold text-center w-fit mx-auto group-hover:bg-red-100 group-hover:text-white "
                        >
                          Purchase Plan
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          {activeTab === "group" &&
            groupTickets.map((ticket) => (
              <div
                className="flip-card w-full min-w-[385px] min-h-[570px] max-w-sm h-[1000px]"
                key={ticket.id}
              >
                <div className="flip-card-inner w-full h-full">
                  <div className="flip-card-front rounded-3xl">
                    <Image
                      src={`${ticket.back}`}
                      alt="tickect"
                      className="w-full h-full object-cover duration-500 max-w-[385px] max-h-[570px]"
                      width={769}
                      height={1141}
                    />
                  </div>
                  <div className="flip-card-back rounded-3xl">
                    <div className="group flex flex-col mx-auto w-full max-w-sm bg-white rounded-2xl shadow-2xl transition-all duration-300  p-8 xl:p-12 box">
                      <div className="content items-center justify-center w-full">
                        <div className="border-b border-solid border-gray-200 pb-9 mb-9 ">
                          <div className="w-16 h-16 rounded-full bg-red-50 mx-auto flex justify-center items-center transition-all duration-300 group-hover:bg-red-100">
                            <svg
                              className="w-6 h-6 text-red-100 transition-all duration-300 group-hover:text-white"
                              viewBox="0 0 31 30"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.42418 27.2608V12.0502C8.42418 11.8031 8.22388 11.6028 7.97681 11.6028V11.6028C5.55154 11.6028 4.3389 11.6028 3.58547 12.3562C2.83203 13.1097 2.83203 14.3223 2.83203 16.7476V22.116C2.83203 24.5413 2.83203 25.754 3.58547 26.5074C4.3389 27.2608 5.55154 27.2608 7.97681 27.2608H8.42418ZM8.42418 27.2608L8.42418 22.5246C8.42418 15.9141 9.90241 9.38734 12.7507 3.42199V3.42199C13.2066 2.46714 14.4408 2.19891 15.2519 2.87841C16.4455 3.87836 17.135 5.35554 17.135 6.91266V8.08463C17.135 9.40562 18.2059 10.4765 19.5269 10.4765H24.0982C25.1518 10.4765 25.6786 10.4765 26.0736 10.6078C27.0571 10.9346 27.7484 11.8197 27.8273 12.8531C27.859 13.2681 27.7314 13.7792 27.4762 14.8014L25.3389 23.3623C24.8715 25.2346 24.6377 26.1707 23.9399 26.7158C23.242 27.2609 22.2771 27.2609 20.3473 27.2609L8.42418 27.2608Z"
                                stroke="currentColor"
                                strokeWidth="2"
                              />
                            </svg>
                          </div>
                          <h3 className="font-manrope text-2xl font-bold my-7 text-center text-red-100">
                            {ticket.name}
                          </h3>
                          <div className="flex items-center justify-center">
                            <span className="font-manrope text-4xl font-medium text-gray-900">
                              {`₦${ticket.price.naira}`}
                            </span>
                            <span className="font-manrope text-xl pl-3 font-medium text-gray-900 justify-end">
                              {`$${ticket.price.usd}`}
                            </span>
                          </div>
                        </div>
                        <ul className="mb-12 space-y-6 text-left text-sm text-gray-600 group-hover:text-gray-900">
                          {ticket.includedFeatures.map((feature, index) => (
                            <li
                              key={index}
                              className="flex items-center space-x-3.5"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-red-100" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <Link
                          target="_blank"
                          href="https://tix.africa/buy/forward-live-with-reo"
                          className="py-2.5 px-5 bg-red-50 shadow-sm rounded-full transition-all duration-500 text-base text-red-100 font-semibold text-center w-fit mx-auto group-hover:bg-red-100 group-hover:text-white "
                        >
                          Purchase Plan
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
