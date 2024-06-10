import * as React from "react";
import { Microphone2, Book, Icon, Profile } from "iconsax-react";

interface StatItemProps {
  Icon: Icon;
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, Icon }) => {
  return (
    <div className="flex flex-1 gap-4 rounded w-[270px]">
      <Icon className="shrink-0 my-auto aspect-square" />
      <div className="flex flex-col flex-1 justify-center">
        <div className="text-3xl font-bold text-black">{value}</div>
        <div className="mt-1 text-base text-neutral-600 w-full">{label}</div>
      </div>
    </div>
  );
};


const statData = [
  {
    Icon: Microphone2,
    value: "10+",
    label: "Transformational Sessions",
  },
  {
    Icon: Profile,
    value: "15+",
    label: "Global Speakers",
  },
  {
    Icon: Book,
    value: "2350+",
    label: "Unique Experience",
  },
];

function ConfStat() {
  return (
    <section className="flex justify-center self-center z-[999] relative bg-white mx-auto items-center py-4 md:py-2 h-full md:h-[150px] md:-mt-[20px] w-full md:w-[70%] rounded-3xl leading-[150%]">
      <div className="flex gap-5 md:gap-7 items-center justify-center flex-col md:flex-row">
        {statData.map((stat, index) => (
          <StatItem key={index} {...stat} />
        ))}
      </div>
    </section>
  );
}

export { ConfStat };
