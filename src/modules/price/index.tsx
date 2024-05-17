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
  },
];

interface Ticket {
  id: number;
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

  return (
    <section className="py-24 relative">
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

      <div className="mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div
          className={cn(
            "space-y-8  sm:gap-6 xl:gap-8 lg:space-y-0",
            activeTab === "group" ? "grid-cols-1" : "lg:grid lg:grid-cols-4"
          )}
        >
          {activeTab === "individual" &&
            individualTickets.map((ticket) => (
              <div
                key={ticket.id}
                className="group relative flex flex-col mx-auto w-full max-w-sm bg-white rounded-2xl shadow-2xl transition-all duration-300  p-8 xl:p-12  "
              >
                <div className="border-b border-solid border-gray-200 pb-9 mb-9">
                  <div className="w-16 h-16 rounded-full bg-red-50 mx-auto flex justify-center items-center transition-all duration-300 group-hover:bg-red-100">
                    {ticket.id === 1 && (
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
                    )}
                    {ticket.id === 2 && (
                      <svg
                        className="w-6 h-6 text-red-100 transition-all duration-300 group-hover:text-white"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M26.8333 21.25C26.8333 20.6977 26.3856 20.25 25.8333 20.25C25.281 20.25 24.8333 20.6977 24.8333 21.25H26.8333ZM5.16667 21.25C5.16667 20.6977 4.71895 20.25 4.16667 20.25C3.61438 20.25 3.16667 20.6977 3.16667 21.25H5.16667ZM4.16667 8.85714H25.8333V6.85714H4.16667V8.85714ZM26.5 9.64286V16.7857H28.5V9.64286H26.5ZM3.5 16.7857V9.64286H1.5V16.7857H3.5ZM12.5 17.5714H4.16667V19.5714H12.5V17.5714ZM25.8333 17.5714H17.5V19.5714H25.8333V17.5714ZM1.5 16.7857C1.5 18.2581 2.63005 19.5714 4.16667 19.5714V17.5714C3.86234 17.5714 3.5 17.2858 3.5 16.7857H1.5ZM26.5 16.7857C26.5 17.2858 26.1377 17.5714 25.8333 17.5714V19.5714C27.37 19.5714 28.5 18.2581 28.5 16.7857H26.5ZM25.8333 8.85714C26.1377 8.85714 26.5 9.14282 26.5 9.64286H28.5C28.5 8.17045 27.37 6.85714 25.8333 6.85714V8.85714ZM4.16667 6.85714C2.63004 6.85714 1.5 8.17045 1.5 9.64286H3.5C3.5 9.14282 3.86234 8.85714 4.16667 8.85714V6.85714ZM24.8333 21.25V25.7143H26.8333V21.25H24.8333ZM24.1667 26.5H5.83333V28.5H24.1667V26.5ZM5.16667 25.7143V21.25H3.16667V25.7143H5.16667ZM5.83333 26.5C5.52901 26.5 5.16667 26.2143 5.16667 25.7143H3.16667C3.16667 27.1867 4.29671 28.5 5.83333 28.5V26.5ZM24.8333 25.7143C24.8333 26.2143 24.471 26.5 24.1667 26.5V28.5C25.7033 28.5 26.8333 27.1867 26.8333 25.7143H24.8333ZM12.5 3.5H17.5V1.5H12.5V3.5ZM18.1667 4.28571V7.85714H20.1667V4.28571H18.1667ZM11.8333 7.85714V4.28571H9.83333V7.85714H11.8333ZM17.5 3.5C17.8043 3.5 18.1667 3.78567 18.1667 4.28571H20.1667C20.1667 2.81331 19.0366 1.5 17.5 1.5V3.5ZM12.5 1.5C10.9634 1.5 9.83333 2.81331 9.83333 4.28571H11.8333C11.8333 3.78567 12.1957 3.5 12.5 3.5V1.5ZM14.1667 16H15.8333V14H14.1667V16ZM16.5 16.7857V20.3571H18.5V16.7857H16.5ZM15.8333 21.1429H14.1667V23.1429H15.8333V21.1429ZM13.5 20.3571V16.7857H11.5V20.3571H13.5ZM14.1667 21.1429C13.8623 21.1429 13.5 20.8572 13.5 20.3571H11.5C11.5 21.8295 12.63 23.1429 14.1667 23.1429V21.1429ZM16.5 20.3571C16.5 20.8572 16.1377 21.1429 15.8333 21.1429V23.1429C17.37 23.1429 18.5 21.8295 18.5 20.3571H16.5ZM15.8333 16C16.1377 16 16.5 16.2857 16.5 16.7857H18.5C18.5 15.3133 17.37 14 15.8333 14V16ZM14.1667 14C12.63 14 11.5 15.3133 11.5 16.7857H13.5C13.5 16.2857 13.8623 16 14.1667 16V14Z"
                          fill="currentcolor"
                        />
                      </svg>
                    )}
                    {ticket.id === 3 && (
                      <svg
                        className="w-6 h-6 text-red-100 transition-all duration-300 group-hover:text-white"
                        viewBox="0 0 31 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.1641 14.75C18.7163 14.75 19.1641 14.3023 19.1641 13.75C19.1641 13.1977 18.7163 12.75 18.1641 12.75V14.75ZM13.1641 12.75C12.6118 12.75 12.1641 13.1977 12.1641 13.75C12.1641 14.3023 12.6118 14.75 13.1641 14.75V12.75ZM18.1641 19.75C18.7163 19.75 19.1641 19.3023 19.1641 18.75C19.1641 18.1977 18.7163 17.75 18.1641 17.75V19.75ZM13.1641 17.75C12.6118 17.75 12.1641 18.1977 12.1641 18.75C12.1641 19.3023 12.6118 19.75 13.1641 19.75V17.75ZM16.6641 23.75C16.6641 23.1977 16.2163 22.75 15.6641 22.75C15.1118 22.75 14.6641 23.1977 14.6641 23.75H16.6641ZM14.6641 27.5C14.6641 28.0523 15.1118 28.5 15.6641 28.5C16.2163 28.5 16.6641 28.0523 16.6641 27.5H14.6641ZM18.7499 3.08579L18.0427 2.37868L18.7499 3.08579ZM27.5783 3.08579L26.8712 3.79289L27.5783 3.08579ZM12.5783 3.08579L11.8712 3.79289L12.5783 3.08579ZM9.99985 8.08579L10.707 8.79289L9.99985 8.08579ZM21.3283 8.08579L22.0354 7.37868L21.3283 8.08579ZM21.3283 26.9142L20.6212 26.2071L21.3283 26.9142ZM27.5783 21.9142L28.2854 22.6213L27.5783 21.9142ZM9.99985 26.9142L10.707 26.2071L9.99985 26.9142ZM13.4141 8.5H17.9141V6.5H13.4141V8.5ZM20.9141 11.5V23.5H22.9141V11.5H20.9141ZM17.9141 26.5H13.4141V28.5H17.9141V26.5ZM10.4141 23.5V11.5H8.41406V23.5H10.4141ZM7.16407 3.5H9.16407V1.5H7.16407V3.5ZM4.16406 18.5L4.16407 6.5L2.16407 6.5L2.16406 18.5H4.16406ZM12.1641 6.5V7.5H14.1641V6.5H12.1641ZM9.41406 21.5H7.16406L7.16406 23.5H9.41406L9.41406 21.5ZM24.1641 1.5H22.1641V3.5H24.1641V1.5ZM29.1641 18.5V6.5H27.1641V18.5H29.1641ZM17.1641 6.5V7.5H19.1641V6.5H17.1641ZM21.9141 23.5H24.1641V21.5H21.9141V23.5ZM18.1641 12.75H13.1641V14.75H18.1641V12.75ZM18.1641 17.75H13.1641V19.75H18.1641V17.75ZM14.6641 23.75V27.5H16.6641V23.75H14.6641ZM22.1641 1.5C21.2495 1.5 20.463 1.49788 19.8363 1.58214C19.1808 1.67027 18.5524 1.86902 18.0427 2.37868L19.457 3.79289C19.5331 3.71677 19.669 3.62262 20.1028 3.56431C20.5653 3.50212 21.193 3.5 22.1641 3.5V1.5ZM19.1641 6.5C19.1641 5.52892 19.1662 4.90121 19.2284 4.4387C19.2867 4.00496 19.3808 3.86902 19.457 3.79289L18.0427 2.37868C17.5331 2.88834 17.3343 3.51669 17.2462 4.17221C17.1619 4.79896 17.1641 5.58546 17.1641 6.5H19.1641ZM24.1641 3.5C25.1351 3.5 25.7628 3.50212 26.2254 3.56431C26.6591 3.62262 26.795 3.71677 26.8712 3.79289L28.2854 2.37868C27.7757 1.86902 27.1474 1.67027 26.4918 1.58214C25.8651 1.49788 25.0786 1.5 24.1641 1.5V3.5ZM29.1641 6.5C29.1641 5.58546 29.1662 4.79896 29.0819 4.17221C28.9938 3.51669 28.795 2.88834 28.2854 2.37868L26.8712 3.79289C26.9473 3.86902 27.0414 4.00496 27.0998 4.4387C27.1619 4.90121 27.1641 5.52892 27.1641 6.5H29.1641ZM2.16406 18.5C2.16406 19.4145 2.16194 20.201 2.2462 20.8278C2.33434 21.4833 2.53308 22.1117 3.04274 22.6213L4.45696 21.2071C4.38083 21.131 4.28668 20.995 4.22837 20.5613C4.16619 20.0988 4.16406 19.4711 4.16406 18.5H2.16406ZM7.16406 21.5C6.19298 21.5 5.56527 21.4979 5.10277 21.4357C4.66903 21.3774 4.53308 21.2832 4.45696 21.2071L3.04274 22.6213C3.5524 23.131 4.18075 23.3297 4.83627 23.4179C5.46302 23.5021 6.24952 23.5 7.16406 23.5L7.16406 21.5ZM9.16407 3.5C10.1351 3.5 10.7629 3.50212 11.2254 3.56431C11.6591 3.62262 11.795 3.71677 11.8712 3.79289L13.2854 2.37868C12.7757 1.86902 12.1474 1.67027 11.4919 1.58214C10.8651 1.49788 10.0786 1.5 9.16407 1.5V3.5ZM14.1641 6.5C14.1641 5.58546 14.1662 4.79896 14.0819 4.17221C13.9938 3.51669 13.795 2.88834 13.2854 2.37868L11.8712 3.79289C11.9473 3.86902 12.0414 4.00496 12.0998 4.4387C12.1619 4.90121 12.1641 5.52892 12.1641 6.5H14.1641ZM7.16407 1.5C6.24953 1.5 5.46303 1.49788 4.83628 1.58214C4.18076 1.67027 3.55241 1.86902 3.04275 2.37868L4.45696 3.79289C4.53309 3.71677 4.66903 3.62262 5.10277 3.56431C5.56528 3.50212 6.19299 3.5 7.16407 3.5V1.5ZM4.16407 6.5C4.16407 5.52892 4.16619 4.90121 4.22838 4.4387C4.28669 4.00496 4.38084 3.86902 4.45696 3.79289L3.04275 2.37868C2.53309 2.88834 2.33434 3.51669 2.24621 4.17221C2.16195 4.79896 2.16407 5.58546 2.16407 6.5L4.16407 6.5ZM13.4141 6.5C12.4995 6.5 11.713 6.49788 11.0863 6.58214C10.4308 6.67027 9.8024 6.86902 9.29274 7.37868L10.707 8.79289C10.7831 8.71677 10.919 8.62262 11.3528 8.56431C11.8153 8.50212 12.443 8.5 13.4141 8.5V6.5ZM10.4141 11.5C10.4141 10.5289 10.4162 9.90121 10.4784 9.4387C10.5367 9.00496 10.6308 8.86902 10.707 8.79289L9.29274 7.37868C8.78308 7.88834 8.58433 8.51669 8.4962 9.17221C8.41194 9.79896 8.41406 10.5855 8.41406 11.5H10.4141ZM17.9141 8.5C18.8851 8.5 19.5129 8.50212 19.9754 8.56431C20.4091 8.62262 20.545 8.71677 20.6212 8.79289L22.0354 7.37868C21.5257 6.86902 20.8974 6.67027 20.2419 6.58214C19.6151 6.49788 18.8286 6.5 17.9141 6.5V8.5ZM22.9141 11.5C22.9141 10.5855 22.9162 9.79896 22.8319 9.17221C22.7438 8.51669 22.545 7.88834 22.0354 7.37868L20.6212 8.79289C20.6973 8.86902 20.7914 9.00496 20.8498 9.4387C20.9119 9.90121 20.9141 10.5289 20.9141 11.5H22.9141ZM20.9141 23.5C20.9141 24.4711 20.9119 25.0988 20.8498 25.5613C20.7914 25.995 20.6973 26.131 20.6212 26.2071L22.0354 27.6213C22.545 27.1117 22.7438 26.4833 22.8319 25.8278C22.9162 25.201 22.9141 24.4145 22.9141 23.5H20.9141ZM17.9141 28.5C18.8286 28.5 19.6151 28.5021 20.2419 28.4179C20.8974 28.3297 21.5257 28.131 22.0354 27.6213L20.6212 26.2071C20.545 26.2832 20.4091 26.3774 19.9754 26.4357C19.5129 26.4979 18.8851 26.5 17.9141 26.5V28.5ZM27.1641 18.5C27.1641 19.4711 27.1619 20.0988 27.0998 20.5613C27.0414 20.995 26.9473 21.131 26.8712 21.2071L28.2854 22.6213C28.795 22.1117 28.9938 21.4833 29.0819 20.8278C29.1662 20.201 29.1641 19.4145 29.1641 18.5H27.1641ZM24.1641 23.5C25.0786 23.5 25.8651 23.5021 26.4918 23.4179C27.1474 23.3297 27.7757 23.131 28.2854 22.6213L26.8712 21.2071C26.795 21.2832 26.6591 21.3774 26.2254 21.4357C25.7628 21.4979 25.1351 21.5 24.1641 21.5V23.5ZM13.4141 26.5C12.443 26.5 11.8153 26.4979 11.3528 26.4357C10.919 26.3774 10.7831 26.2832 10.707 26.2071L9.29274 27.6213C9.8024 28.131 10.4308 28.3297 11.0863 28.4179C11.713 28.5021 12.4995 28.5 13.4141 28.5V26.5ZM8.41406 23.5C8.41406 24.4145 8.41194 25.201 8.4962 25.8278C8.58433 26.4833 8.78308 27.1117 9.29274 27.6213L10.707 26.2071C10.6308 26.131 10.5367 25.995 10.4784 25.5613C10.4162 25.0988 10.4141 24.4711 10.4141 23.5H8.41406Z"
                          fill="currentColor"
                        />
                      </svg>
                    )}
                    {ticket.id === 4 && (
                      <svg
                        className="w-6 h-6 text-red-100 transition-all duration-300 group-hover:text-white"
                        viewBox="0 0 31 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.1641 14.75C18.7163 14.75 19.1641 14.3023 19.1641 13.75C19.1641 13.1977 18.7163 12.75 18.1641 12.75V14.75ZM13.1641 12.75C12.6118 12.75 12.1641 13.1977 12.1641 13.75C12.1641 14.3023 12.6118 14.75 13.1641 14.75V12.75ZM18.1641 19.75C18.7163 19.75 19.1641 19.3023 19.1641 18.75C19.1641 18.1977 18.7163 17.75 18.1641 17.75V19.75ZM13.1641 17.75C12.6118 17.75 12.1641 18.1977 12.1641 18.75C12.1641 19.3023 12.6118 19.75 13.1641 19.75V17.75ZM16.6641 23.75C16.6641 23.1977 16.2163 22.75 15.6641 22.75C15.1118 22.75 14.6641 23.1977 14.6641 23.75H16.6641ZM14.6641 27.5C14.6641 28.0523 15.1118 28.5 15.6641 28.5C16.2163 28.5 16.6641 28.0523 16.6641 27.5H14.6641ZM18.7499 3.08579L18.0427 2.37868L18.7499 3.08579ZM27.5783 3.08579L26.8712 3.79289L27.5783 3.08579ZM12.5783 3.08579L11.8712 3.79289L12.5783 3.08579ZM9.99985 8.08579L10.707 8.79289L9.99985 8.08579ZM21.3283 8.08579L22.0354 7.37868L21.3283 8.08579ZM21.3283 26.9142L20.6212 26.2071L21.3283 26.9142ZM27.5783 21.9142L28.2854 22.6213L27.5783 21.9142ZM9.99985 26.9142L10.707 26.2071L9.99985 26.9142ZM13.4141 8.5H17.9141V6.5H13.4141V8.5ZM20.9141 11.5V23.5H22.9141V11.5H20.9141ZM17.9141 26.5H13.4141V28.5H17.9141V26.5ZM10.4141 23.5V11.5H8.41406V23.5H10.4141ZM7.16407 3.5H9.16407V1.5H7.16407V3.5ZM4.16406 18.5L4.16407 6.5L2.16407 6.5L2.16406 18.5H4.16406ZM12.1641 6.5V7.5H14.1641V6.5H12.1641ZM9.41406 21.5H7.16406L7.16406 23.5H9.41406L9.41406 21.5ZM24.1641 1.5H22.1641V3.5H24.1641V1.5ZM29.1641 18.5V6.5H27.1641V18.5H29.1641ZM17.1641 6.5V7.5H19.1641V6.5H17.1641ZM21.9141 23.5H24.1641V21.5H21.9141V23.5ZM18.1641 12.75H13.1641V14.75H18.1641V12.75ZM18.1641 17.75H13.1641V19.75H18.1641V17.75ZM14.6641 23.75V27.5H16.6641V23.75H14.6641ZM22.1641 1.5C21.2495 1.5 20.463 1.49788 19.8363 1.58214C19.1808 1.67027 18.5524 1.86902 18.0427 2.37868L19.457 3.79289C19.5331 3.71677 19.669 3.62262 20.1028 3.56431C20.5653 3.50212 21.193 3.5 22.1641 3.5V1.5ZM19.1641 6.5C19.1641 5.52892 19.1662 4.90121 19.2284 4.4387C19.2867 4.00496 19.3808 3.86902 19.457 3.79289L18.0427 2.37868C17.5331 2.88834 17.3343 3.51669 17.2462 4.17221C17.1619 4.79896 17.1641 5.58546 17.1641 6.5H19.1641ZM24.1641 3.5C25.1351 3.5 25.7628 3.50212 26.2254 3.56431C26.6591 3.62262 26.795 3.71677 26.8712 3.79289L28.2854 2.37868C27.7757 1.86902 27.1474 1.67027 26.4918 1.58214C25.8651 1.49788 25.0786 1.5 24.1641 1.5V3.5ZM29.1641 6.5C29.1641 5.58546 29.1662 4.79896 29.0819 4.17221C28.9938 3.51669 28.795 2.88834 28.2854 2.37868L26.8712 3.79289C26.9473 3.86902 27.0414 4.00496 27.0998 4.4387C27.1619 4.90121 27.1641 5.52892 27.1641 6.5H29.1641ZM2.16406 18.5C2.16406 19.4145 2.16194 20.201 2.2462 20.8278C2.33434 21.4833 2.53308 22.1117 3.04274 22.6213L4.45696 21.2071C4.38083 21.131 4.28668 20.995 4.22837 20.5613C4.16619 20.0988 4.16406 19.4711 4.16406 18.5H2.16406ZM7.16406 21.5C6.19298 21.5 5.56527 21.4979 5.10277 21.4357C4.66903 21.3774 4.53308 21.2832 4.45696 21.2071L3.04274 22.6213C3.5524 23.131 4.18075 23.3297 4.83627 23.4179C5.46302 23.5021 6.24952 23.5 7.16406 23.5L7.16406 21.5ZM9.16407 3.5C10.1351 3.5 10.7629 3.50212 11.2254 3.56431C11.6591 3.62262 11.795 3.71677 11.8712 3.79289L13.2854 2.37868C12.7757 1.86902 12.1474 1.67027 11.4919 1.58214C10.8651 1.49788 10.0786 1.5 9.16407 1.5V3.5ZM14.1641 6.5C14.1641 5.58546 14.1662 4.79896 14.0819 4.17221C13.9938 3.51669 13.795 2.88834 13.2854 2.37868L11.8712 3.79289C11.9473 3.86902 12.0414 4.00496 12.0998 4.4387C12.1619 4.90121 12.1641 5.52892 12.1641 6.5H14.1641ZM7.16407 1.5C6.24953 1.5 5.46303 1.49788 4.83628 1.58214C4.18076 1.67027 3.55241 1.86902 3.04275 2.37868L4.45696 3.79289C4.53309 3.71677 4.66903 3.62262 5.10277 3.56431C5.56528 3.50212 6.19299 3.5 7.16407 3.5V1.5ZM4.16407 6.5C4.16407 5.52892 4.16619 4.90121 4.22838 4.4387C4.28669 4.00496 4.38084 3.86902 4.45696 3.79289L3.04275 2.37868C2.53309 2.88834 2.33434 3.51669 2.24621 4.17221C2.16195 4.79896 2.16407 5.58546 2.16407 6.5L4.16407 6.5ZM13.4141 6.5C12.4995 6.5 11.713 6.49788 11.0863 6.58214C10.4308 6.67027 9.8024 6.86902 9.29274 7.37868L10.707 8.79289C10.7831 8.71677 10.919 8.62262 11.3528 8.56431C11.8153 8.50212 12.443 8.5 13.4141 8.5V6.5ZM10.4141 11.5C10.4141 10.5289 10.4162 9.90121 10.4784 9.4387C10.5367 9.00496 10.6308 8.86902 10.707 8.79289L9.29274 7.37868C8.78308 7.88834 8.58433 8.51669 8.4962 9.17221C8.41194 9.79896 8.41406 10.5855 8.41406 11.5H10.4141ZM17.9141 8.5C18.8851 8.5 19.5129 8.50212 19.9754 8.56431C20.4091 8.62262 20.545 8.71677 20.6212 8.79289L22.0354 7.37868C21.5257 6.86902 20.8974 6.67027 20.2419 6.58214C19.6151 6.49788 18.8286 6.5 17.9141 6.5V8.5ZM22.9141 11.5C22.9141 10.5855 22.9162 9.79896 22.8319 9.17221C22.7438 8.51669 22.545 7.88834 22.0354 7.37868L20.6212 8.79289C20.6973 8.86902 20.7914 9.00496 20.8498 9.4387C20.9119 9.90121 20.9141 10.5289 20.9141 11.5H22.9141ZM20.9141 23.5C20.9141 24.4711 20.9119 25.0988 20.8498 25.5613C20.7914 25.995 20.6973 26.131 20.6212 26.2071L22.0354 27.6213C22.545 27.1117 22.7438 26.4833 22.8319 25.8278C22.9162 25.201 22.9141 24.4145 22.9141 23.5H20.9141ZM17.9141 28.5C18.8286 28.5 19.6151 28.5021 20.2419 28.4179C20.8974 28.3297 21.5257 28.131 22.0354 27.6213L20.6212 26.2071C20.545 26.2832 20.4091 26.3774 19.9754 26.4357C19.5129 26.4979 18.8851 26.5 17.9141 26.5V28.5ZM27.1641 18.5C27.1641 19.4711 27.1619 20.0988 27.0998 20.5613C27.0414 20.995 26.9473 21.131 26.8712 21.2071L28.2854 22.6213C28.795 22.1117 28.9938 21.4833 29.0819 20.8278C29.1662 20.201 29.1641 19.4145 29.1641 18.5H27.1641ZM24.1641 23.5C25.0786 23.5 25.8651 23.5021 26.4918 23.4179C27.1474 23.3297 27.7757 23.131 28.2854 22.6213L26.8712 21.2071C26.795 21.2832 26.6591 21.3774 26.2254 21.4357C25.7628 21.4979 25.1351 21.5 24.1641 21.5V23.5ZM13.4141 26.5C12.443 26.5 11.8153 26.4979 11.3528 26.4357C10.919 26.3774 10.7831 26.2832 10.707 26.2071L9.29274 27.6213C9.8024 28.131 10.4308 28.3297 11.0863 28.4179C11.713 28.5021 12.4995 28.5 13.4141 28.5V26.5ZM8.41406 23.5C8.41406 24.4145 8.41194 25.201 8.4962 25.8278C8.58433 26.4833 8.78308 27.1117 9.29274 27.6213L10.707 26.2071C10.6308 26.131 10.5367 25.995 10.4784 25.5613C10.4162 25.0988 10.4141 24.4711 10.4141 23.5H8.41406Z"
                          fill="currentColor"
                        />
                      </svg>
                    )}
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
                    <li key={index} className="flex items-center space-x-3.5">
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
            ))}
          {activeTab === "group" &&
            groupTickets.map((ticket) => (
              <div
                key={ticket.id}
                className="group relative flex flex-col mx-auto w-full max-w-sm bg-white rounded-2xl shadow-2xl transition-all duration-300  p-8 xl:p-12  h-full"
              >
                <div className="border-b border-solid border-gray-200 pb-9 mb-9">
                  <div className="w-16 h-16 rounded-full bg-red-50 mx-auto flex justify-center items-center transition-all duration-300 group-hover:bg-red-100">
                    {ticket.id === 5 && (
                      <svg
                        className="w-6 h-6 text-red-100 transition-all duration-300 group-hover:text-white"
                        viewBox="0 0 31 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.1641 14.75C18.7163 14.75 19.1641 14.3023 19.1641 13.75C19.1641 13.1977 18.7163 12.75 18.1641 12.75V14.75ZM13.1641 12.75C12.6118 12.75 12.1641 13.1977 12.1641 13.75C12.1641 14.3023 12.6118 14.75 13.1641 14.75V12.75ZM18.1641 19.75C18.7163 19.75 19.1641 19.3023 19.1641 18.75C19.1641 18.1977 18.7163 17.75 18.1641 17.75V19.75ZM13.1641 17.75C12.6118 17.75 12.1641 18.1977 12.1641 18.75C12.1641 19.3023 12.6118 19.75 13.1641 19.75V17.75ZM16.6641 23.75C16.6641 23.1977 16.2163 22.75 15.6641 22.75C15.1118 22.75 14.6641 23.1977 14.6641 23.75H16.6641ZM14.6641 27.5C14.6641 28.0523 15.1118 28.5 15.6641 28.5C16.2163 28.5 16.6641 28.0523 16.6641 27.5H14.6641ZM18.7499 3.08579L18.0427 2.37868L18.7499 3.08579ZM27.5783 3.08579L26.8712 3.79289L27.5783 3.08579ZM12.5783 3.08579L11.8712 3.79289L12.5783 3.08579ZM9.99985 8.08579L10.707 8.79289L9.99985 8.08579ZM21.3283 8.08579L22.0354 7.37868L21.3283 8.08579ZM21.3283 26.9142L20.6212 26.2071L21.3283 26.9142ZM27.5783 21.9142L28.2854 22.6213L27.5783 21.9142ZM9.99985 26.9142L10.707 26.2071L9.99985 26.9142ZM13.4141 8.5H17.9141V6.5H13.4141V8.5ZM20.9141 11.5V23.5H22.9141V11.5H20.9141ZM17.9141 26.5H13.4141V28.5H17.9141V26.5ZM10.4141 23.5V11.5H8.41406V23.5H10.4141ZM7.16407 3.5H9.16407V1.5H7.16407V3.5ZM4.16406 18.5L4.16407 6.5L2.16407 6.5L2.16406 18.5H4.16406ZM12.1641 6.5V7.5H14.1641V6.5H12.1641ZM9.41406 21.5H7.16406L7.16406 23.5H9.41406L9.41406 21.5ZM24.1641 1.5H22.1641V3.5H24.1641V1.5ZM29.1641 18.5V6.5H27.1641V18.5H29.1641ZM17.1641 6.5V7.5H19.1641V6.5H17.1641ZM21.9141 23.5H24.1641V21.5H21.9141V23.5ZM18.1641 12.75H13.1641V14.75H18.1641V12.75ZM18.1641 17.75H13.1641V19.75H18.1641V17.75ZM14.6641 23.75V27.5H16.6641V23.75H14.6641ZM22.1641 1.5C21.2495 1.5 20.463 1.49788 19.8363 1.58214C19.1808 1.67027 18.5524 1.86902 18.0427 2.37868L19.457 3.79289C19.5331 3.71677 19.669 3.62262 20.1028 3.56431C20.5653 3.50212 21.193 3.5 22.1641 3.5V1.5ZM19.1641 6.5C19.1641 5.52892 19.1662 4.90121 19.2284 4.4387C19.2867 4.00496 19.3808 3.86902 19.457 3.79289L18.0427 2.37868C17.5331 2.88834 17.3343 3.51669 17.2462 4.17221C17.1619 4.79896 17.1641 5.58546 17.1641 6.5H19.1641ZM24.1641 3.5C25.1351 3.5 25.7628 3.50212 26.2254 3.56431C26.6591 3.62262 26.795 3.71677 26.8712 3.79289L28.2854 2.37868C27.7757 1.86902 27.1474 1.67027 26.4918 1.58214C25.8651 1.49788 25.0786 1.5 24.1641 1.5V3.5ZM29.1641 6.5C29.1641 5.58546 29.1662 4.79896 29.0819 4.17221C28.9938 3.51669 28.795 2.88834 28.2854 2.37868L26.8712 3.79289C26.9473 3.86902 27.0414 4.00496 27.0998 4.4387C27.1619 4.90121 27.1641 5.52892 27.1641 6.5H29.1641ZM2.16406 18.5C2.16406 19.4145 2.16194 20.201 2.2462 20.8278C2.33434 21.4833 2.53308 22.1117 3.04274 22.6213L4.45696 21.2071C4.38083 21.131 4.28668 20.995 4.22837 20.5613C4.16619 20.0988 4.16406 19.4711 4.16406 18.5H2.16406ZM7.16406 21.5C6.19298 21.5 5.56527 21.4979 5.10277 21.4357C4.66903 21.3774 4.53308 21.2832 4.45696 21.2071L3.04274 22.6213C3.5524 23.131 4.18075 23.3297 4.83627 23.4179C5.46302 23.5021 6.24952 23.5 7.16406 23.5L7.16406 21.5ZM9.16407 3.5C10.1351 3.5 10.7629 3.50212 11.2254 3.56431C11.6591 3.62262 11.795 3.71677 11.8712 3.79289L13.2854 2.37868C12.7757 1.86902 12.1474 1.67027 11.4919 1.58214C10.8651 1.49788 10.0786 1.5 9.16407 1.5V3.5ZM14.1641 6.5C14.1641 5.58546 14.1662 4.79896 14.0819 4.17221C13.9938 3.51669 13.795 2.88834 13.2854 2.37868L11.8712 3.79289C11.9473 3.86902 12.0414 4.00496 12.0998 4.4387C12.1619 4.90121 12.1641 5.52892 12.1641 6.5H14.1641ZM7.16407 1.5C6.24953 1.5 5.46303 1.49788 4.83628 1.58214C4.18076 1.67027 3.55241 1.86902 3.04275 2.37868L4.45696 3.79289C4.53309 3.71677 4.66903 3.62262 5.10277 3.56431C5.56528 3.50212 6.19299 3.5 7.16407 3.5V1.5ZM4.16407 6.5C4.16407 5.52892 4.16619 4.90121 4.22838 4.4387C4.28669 4.00496 4.38084 3.86902 4.45696 3.79289L3.04275 2.37868C2.53309 2.88834 2.33434 3.51669 2.24621 4.17221C2.16195 4.79896 2.16407 5.58546 2.16407 6.5L4.16407 6.5ZM13.4141 6.5C12.4995 6.5 11.713 6.49788 11.0863 6.58214C10.4308 6.67027 9.8024 6.86902 9.29274 7.37868L10.707 8.79289C10.7831 8.71677 10.919 8.62262 11.3528 8.56431C11.8153 8.50212 12.443 8.5 13.4141 8.5V6.5ZM10.4141 11.5C10.4141 10.5289 10.4162 9.90121 10.4784 9.4387C10.5367 9.00496 10.6308 8.86902 10.707 8.79289L9.29274 7.37868C8.78308 7.88834 8.58433 8.51669 8.4962 9.17221C8.41194 9.79896 8.41406 10.5855 8.41406 11.5H10.4141ZM17.9141 8.5C18.8851 8.5 19.5129 8.50212 19.9754 8.56431C20.4091 8.62262 20.545 8.71677 20.6212 8.79289L22.0354 7.37868C21.5257 6.86902 20.8974 6.67027 20.2419 6.58214C19.6151 6.49788 18.8286 6.5 17.9141 6.5V8.5ZM22.9141 11.5C22.9141 10.5855 22.9162 9.79896 22.8319 9.17221C22.7438 8.51669 22.545 7.88834 22.0354 7.37868L20.6212 8.79289C20.6973 8.86902 20.7914 9.00496 20.8498 9.4387C20.9119 9.90121 20.9141 10.5289 20.9141 11.5H22.9141ZM20.9141 23.5C20.9141 24.4711 20.9119 25.0988 20.8498 25.5613C20.7914 25.995 20.6973 26.131 20.6212 26.2071L22.0354 27.6213C22.545 27.1117 22.7438 26.4833 22.8319 25.8278C22.9162 25.201 22.9141 24.4145 22.9141 23.5H20.9141ZM17.9141 28.5C18.8286 28.5 19.6151 28.5021 20.2419 28.4179C20.8974 28.3297 21.5257 28.131 22.0354 27.6213L20.6212 26.2071C20.545 26.2832 20.4091 26.3774 19.9754 26.4357C19.5129 26.4979 18.8851 26.5 17.9141 26.5V28.5ZM27.1641 18.5C27.1641 19.4711 27.1619 20.0988 27.0998 20.5613C27.0414 20.995 26.9473 21.131 26.8712 21.2071L28.2854 22.6213C28.795 22.1117 28.9938 21.4833 29.0819 20.8278C29.1662 20.201 29.1641 19.4145 29.1641 18.5H27.1641ZM24.1641 23.5C25.0786 23.5 25.8651 23.5021 26.4918 23.4179C27.1474 23.3297 27.7757 23.131 28.2854 22.6213L26.8712 21.2071C26.795 21.2832 26.6591 21.3774 26.2254 21.4357C25.7628 21.4979 25.1351 21.5 24.1641 21.5V23.5ZM13.4141 26.5C12.443 26.5 11.8153 26.4979 11.3528 26.4357C10.919 26.3774 10.7831 26.2832 10.707 26.2071L9.29274 27.6213C9.8024 28.131 10.4308 28.3297 11.0863 28.4179C11.713 28.5021 12.4995 28.5 13.4141 28.5V26.5ZM8.41406 23.5C8.41406 24.4145 8.41194 25.201 8.4962 25.8278C8.58433 26.4833 8.78308 27.1117 9.29274 27.6213L10.707 26.2071C10.6308 26.131 10.5367 25.995 10.4784 25.5613C10.4162 25.0988 10.4141 24.4711 10.4141 23.5H8.41406Z"
                          fill="currentColor"
                        />
                      </svg>
                    )}
                  </div>
                  <h3 className="font-manrope text-2xl font-bold my-7 text-center text-red-100">
                    {ticket.name}
                  </h3>
                  <div className="flex items-center justify-center">
                    <span className="font-manrope text-3xl font-medium text-gray-900">
                      {`₦${ticket.price.naira}`}
                    </span>
                    <span className="font-manrope text-lg pl-3 font-medium text-gray-900 justify-end">
                      {`$${ticket.price.usd}`}
                    </span>
                  </div>
                </div>

                <ul className="mb-12 space-y-6 text-left text-sm text-gray-600 group-hover:text-gray-900">
                  {ticket.includedFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3.5">
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
            ))}
        </div>
      </div>
    </section>
  );
};
