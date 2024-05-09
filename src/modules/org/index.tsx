"use client";

import * as React from "react";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, className }) => (
  <img loading="lazy" src={src} alt={alt} className={className} />
);

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ children, className }) => (
  <h1
    className={`text-9xl font-bold text-center border border-solid border-fuchsia-950 tracking-[8px] max-md:max-w-full max-md:text-4xl ${className}`}
  >
    {children}
  </h1>
);

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ children, className }) => (
  <p
    className={`text-base leading-6 text-neutral-600 max-md:max-w-full ${className}`}
  >
    {children}
  </p>
);

function Organizers() {
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
    <div className="flex flex-col px-5" id="organizer">
      <div ref={containerRef} className="px-4 py-12 relative">
        <div className="flex flex-col px-5 text-center max-w-[756px] justify-center w-full mx-auto">
          <h2 className="self-center text-4xl md:text-6xl font-bold tracking-wide text-red-200 max-md:max-w-full">
            WHO <span className="text-red-100">WE ARE</span>
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
          ORGANIZER
        </span>
      </div>
      <div className="md:mt-20 w-full max-md:mt-10 max-md:max-w-full md:max-w-[1000px]  mx-auto flex relative">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[23%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-6">
              <div className="flex flex-col justify-center items-start px-14 pt-20 pb-12 bg-pink-500 rounded-[800px_800px_0px_800px] max-md:px-5 md:h-[270px] md:w-[270px] w-[150px] h-[150px]">
                <Image
                  src="/Vector.png"
                  alt="Decorative image"
                  className="mt-2 aspect-[1.15] fill-white w-[155px]"
                />
              </div>
              <Image
                src="/Pattern2.png"
                alt="Decorative arrow"
                className="mt-4 aspect-[0.58] w-[42px] hidden md:block"
              />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:max-w-full">
              <Image
                src="/Pattern1.png"
                alt="Decorative image"
                className="z-10 self-end mr-14 w-24 aspect-[1.02] max-md:mr-2.5 hidden md:block"
              />
              <section className="flex justify-center items-center px-16 py-20 bg-white shadow-2xl md:rounded-[240px_240px_240px_0px] max-md:px-5 max-md:max-w-full">
                <div className="flex flex-col my-5 max-w-full md:w-[570px]">
                  <h2 className="text-2xl font-bold leading-10 text-black max-md:max-w-full">
                    FORWARDLIVE
                  </h2>
                  <Paragraph className="mt-2">
                    Duis porta quam arcu, vitae dignissim leo varius vel.
                    Curabitur dignissim luctus lobortis. Donec eu pharetra
                    ipsum. Fusce ornare suscipit augue sit amet tincidunt.
                    Pellentesque sollicitudin eget dui eleifend ultrices.
                    Vestibulum justo orci, ultrices ac porttitor nec,
                    sollicitudin semper dolor. Curabitur eu consectetur velit.
                    Suspendisse eleifend tristique semper. Phasellus sit amet
                    consequat lacus. Aenean auctor eros nec ipsum auctor, quis
                    porta lectus ultricies.
                  </Paragraph>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Organizers };
