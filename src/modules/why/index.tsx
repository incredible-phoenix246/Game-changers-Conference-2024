"use client";

import * as React from "react";
import { VscLightbulbSparkle } from "react-icons/vsc";
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

const WHYSECTION = () => {
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
    <section>
      <div ref={containerRef} className="px-4 py-12 relative">
        <div className="flex flex-col px-5 text-center max-w-[756px] justify-center w-full mx-auto">
          <h2 className="self-center text-4xl md:text-6xl font-bold tracking-wide text-red-200 max-md:max-w-full">
            Reasons Why You Need To Be At{" "}
            <span className="text-red-100">Forward 24</span>
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
          JUSTIFICATION
        </span>
      </div>
      <div className="relative">
        <MAIN />
      </div>
    </section>
  );
};

export { ChipTabs, WHYSECTION };

export function MAIN() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wide text-red-300">
            [Incredible Experience]
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-zinc-900 dark:text-white">
            10 Reasons Why You Need To Be At
            <span className="text-red-300 text-3xl md:text-6xl italic">
              FORWARD 24
            </span>
          </h2>
          <ul className="mt-8 space-y-4">
            <li>
              <strong>Reason #1:</strong> A-rated Five-star speakers list you
              don&apos;t commonly have access to
            </li>
            <li>
              <strong>Reason #2:</strong> Insights from Captain of Industries
            </li>
            <li>
              <strong>Reason #3:</strong> Opportunity to grow your ideas by
              connecting with like minds.
            </li>
            <li>
              <strong>Reason #4:</strong> Forward inspiration that takes you to
              the next level.
            </li>
            <li>
              <strong>Reason #5:</strong> Experience of a lifetime personal
              transformation
            </li>
            <li>
              <strong>Reason #6:</strong> Best platform to network with quality
              people
            </li>
            <li>
              <strong>Reason #7:</strong> Get strategies to take actionable
              steps
            </li>
            <li>
              <strong>Reason #8:</strong> Practical tools for successful life,
              business and career
            </li>
            <li>
              <strong>Reason #9:</strong> “Forward” will ignite your passion for
              progress
            </li>
            <li>
              <strong>Reason #10:</strong> It&apos;s time to go FORWARD ……
            </li>
          </ul>
        </div>
        <div className="items-center justify-center h-full flex">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/qv1afUOxfwU?si=n4s-dl_M3ZBsf_Jo&autoplay=1&mute=1&amp;start=100"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // referrerpolicy="strict-origin-when-cross-origin"
            // allowfullscreen
            className="rounded-lg shadow-lg h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
