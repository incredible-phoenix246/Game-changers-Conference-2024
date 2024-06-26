"use client";

import React from "react";
import useWindowHeight from "@/hooks/useDimension";
import { useStateCtx } from "@/context/StateCtx";
import { cn } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Ticket } from "iconsax-react";

const Navbar = () => {
  const { setShowMobileMenu } = useStateCtx();
  const scrollHeight = useWindowHeight();
  const pathname = usePathname();
  const home = "/";

  return (
    <nav
      className={cn(
        " max-[500px]:py-2 px-4 sm:px-8 xl:px-16 2xl:px-24 flex w-full justify-between items-center  transition-colors duration-500 ",
        scrollHeight > 200
          ? " fixed backdrop-blur-xl top-0 left-0  z-50 -translate-y-28 bg-black/90 opacity-0 animate-slideDown py-2 shadow-md"
          : "sm:py-6 py-4",
        pathname === home ? "fixed top-0 left-0 z-[99]" : "bg-black",
        {
          "bg-black/60 ": scrollHeight > 800 && scrollHeight < 4300,
        }
      )}
    >
      <Link
        href="/?path=home"
        className={cn(
          " max-sm:w-[120px] max-[450px]:w-[100px] font-montserrat",
          scrollHeight > 200 ? "w-[120px] " : "w-fit"
        )}
      >
        <Image src="/newlogo.png" alt="logo" width={155} height={55} />
      </Link>
      <Link
        href="#ticket"
        className="justify-center flex gap-x-2 self-start px-10 py-4 text-base font-medium leading-6 text-center text-white bg-red-300 hover:bg-white hover:text-red-300 shadow-2xl rounded-[400px] max-md:px-5"
      >
        <Ticket />
        Buy Ticket
      </Link>
    </nav>
  );
};

export default Navbar;
