"use client";

import * as React from "react";
import { VscLightbulbSparkle } from "react-icons/vsc";
import { type Icon } from "iconsax-react";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";

interface CardProps {
  imageSrc: string;
  title: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title }) => {
  return (
    <div className="flex flex-col justify-center p-10 w-full text-2xl font-bold leading-10 text-center whitespace-nowrap bg-white rounded-none text-stone-300 max-md:px-5 max-md:mt-2">
      <img
        src={imageSrc}
        alt={title}
        className="self-center w-14 aspect-square"
      />
      <div className="mt-4">{title}</div>
    </div>
  );
};

const MyComponent: React.FC = () => {
  const cards = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7f2ddee5a284b8c632b6c3f79ccb5cdb5471f9e1509f1b7e8882d34991d7b593?apiKey=252f8d5a726747838fcb04939a832fc3&",
      title: "Network",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/51bc382801057167c60cd912acccd0ceae0486714700acb28948e86c37d84fb0?apiKey=252f8d5a726747838fcb04939a832fc3&",
      title: "Rewards",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/190e9a2ff571a13916fcf39feba1b31aa5163f920726f6831f5439c524c6e62d?apiKey=252f8d5a726747838fcb04939a832fc3&",
      title: "Skills",
    },
  ];

  return (
    <section className="flex justify-center items-center px-16 py-20 bg-pink-200 max-md:px-5 -mt-[50px] z-[-99]">
      <div className="flex flex-col mt-36 w-full max-w-[1170px] max-md:mt-10 max-md:max-w-full">
        <h1 className="self-center text-9xl font-bold text-center border border-solid border-fuchsia-950 tracking-[8px] max-md:max-w-full max-md:text-4xl">
          GROWTH
        </h1>
        <div className="mt-28 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
                <div className="max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[54%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col justify-center p-10 w-full text-2xl font-bold leading-10 text-center text-white whitespace-nowrap bg-pink-500 shadow-2xl rounded-[2400px_2400px_0px_2400px] max-md:px-5 max-md:mt-2">
                        <VscLightbulbSparkle />
                        <div className="mt-4">Inspiration</div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[46%] max-md:ml-0 max-md:w-full">
                      <Card
                        imageSrc={cards[0].imageSrc}
                        title={cards[0].title}
                      />
                    </div>
                  </div>
                </div>
                <div className="self-end mt-2 max-w-full w-[548px]">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <Card
                        imageSrc={cards[1].imageSrc}
                        title={cards[1].title}
                      />
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                      <Card
                        imageSrc={cards[2].imageSrc}
                        title={cards[2].title}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                <h2 className="text-2xl font-bold leading-10 text-black max-md:max-w-full">
                  Get yourself Inspired
                </h2>
                <p className="mt-2 text-base leading-6 text-neutral-600 max-md:max-w-full">
                  Maecenas nec est sed justo ornare facilisis nec ac mauris.
                  Suspendisse eu auctor justo, in congue ex. Fusce lorem elit,
                  ultrices id erat lobortis, laoreet sodales ligula. Morbi
                  porta, sem sed convallis congue, nisl elit blandit neque, ut
                  porttitor metus turpis eu velit. Integer tincidunt commodo
                  consequat.
                  <br />
                  <br />
                  Vida diam at turpis bibendum, sed dignissim lectus iaculis.
                  Donec vel sollicitudin nulla, id finibus diam. Nulla elementum
                  mattis eros vitae pharetra. Cras eget accumsan dui. Aliquam
                  placerat tellus vitae tempor finibus. Maecenas ac arcu a
                  tortor aliquet lobortis sed nec leo. Vivamus ligula lectus,
                  luctus nec ipsum ac, congue imperdiet mi. Quisque laoreet
                  condimentum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyComponent;

// 270 320hover

export function Widget() {
  return (
    <div className="flex justify-center items-center h-screen bg-pink-100">
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-full bg-pink-500 text-white flex justify-center items-center text-center p-12 shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 mb-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v4.5m0 9V21m7.5-12h-4.5m-9 0H4.5m15.75 3a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
              />
            </svg>
            <div>Inspiration</div>
          </div>
        </div>
        <div className="rounded-full bg-white text-zinc-800 flex justify-center items-center text-center p-12 shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 mb-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6m12 3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>Network</div>
          </div>
        </div>
        <div className="rounded-full bg-white text-zinc-800 flex justify-center items-center text-center p-12 shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 mb-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v18m0 0l3.5-3.5M12 21l-3.5-3.5M21 12H3m0 0l3.5-3.5M3 12l3.5 3.5m15-3.5l-3.5 3.5m3.5-3.5l-3.5-3.5"
              />
            </svg>
            <div>Rewards</div>
          </div>
        </div>
        <div className="rounded-full bg-white text-zinc-800 flex justify-center items-center text-center p-12 shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 mb-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 16.862a1.5 1.5 0 102.121 2.121 1.5 1.5 0 00-2.121-2.121zM7.138 7.138a1.5 1.5 0 10-2.121-2.121 1.5 1.5 0 002.121 2.121zM12 3v3m0 12v3m9-9h-3m-12 0H3m14.121-5.121l-2.121 2.121m-8.242 8.242l-2.121 2.121m2.121-12.728l2.121 2.121m8.242 8.242l2.121 2.121"
              />
            </svg>
            <div>Skills</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const tabs = ["Home", "Search", "About", "FAQ"];

const ChipTabs = () => {
  const [selected, setSelected] = useState(tabs[0]);

  return (
    <div className="px-4 py-14 bg-slate-900 flex items-center flex-wrap gap-2">
      {tabs.map((tab) => (
        <Chip
          text={tab}
          selected={selected === tab}
          setSelected={setSelected}
          key={tab}
        />
      ))}
    </div>
  );
};

const Chip = ({
  text,
  selected,
  setSelected,
}: {
  text: string;
  selected: boolean;
  setSelected: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected
          ? "text-white"
          : "text-slate-300 hover:text-slate-200 hover:bg-slate-700"
      } text-sm transition-colors px-2.5 py-0.5 rounded-md relative`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-md"
        ></motion.span>
      )}
    </button>
  );
};

export { ChipTabs };
