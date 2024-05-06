import * as React from "react";

interface CountdownItemProps {
  value: number;
  label: string;
}

const CountdownItem: React.FC<CountdownItemProps> = ({ value, label }) => {
  return (
    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow justify-center p-10 text-center whitespace-nowrap border-2 border-pink-500 border-solid leading-[150%] rounded-[800px] max-md:px-5 max-md:mt-8">
        <div className="text-4xl font-bold text-pink-500">{value}</div>
        <div className="mt-1 text-base text-black">{label}</div>
      </div>
    </div>
  );
};

const MyComponent: React.FC = () => {
  const countdownItems = [
    { value: 23, label: "Days" },
    { value: 12, label: "Hours" },
    { value: 35, label: "Minutes" },
  ];

  return (
    <div>
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
          <section className="flex flex-col px-5 max-md:mt-10 max-md:max-w-full">
            <div className="max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                {countdownItems.map((item, index) => (
                  <CountdownItem
                    key={index}
                    value={item.value}
                    label={item.label}
                  />
                ))}
              </div>
            </div>
            <div className="flex gap-5 justify-between self-start py-0.5 text-sm leading-5 text-black ">
              <div className="flex gap-2">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3c3f2f1535454c3335304a1717a8c96d71a7e127b0bf6c36b4faa3adfe1991d?apiKey=252f8d5a726747838fcb04939a832fc3&"
                  alt="Calendar icon"
                  className="shrink-0 self-start aspect-square w-[18px]"
                />
                <div>23-26 Dec, 2021</div>
              </div>
              <div className="flex gap-2">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e61394db07672747222586f2846dbc0cf1bb8ceb7023f24d4f526a10d8bf4653?apiKey=252f8d5a726747838fcb04939a832fc3&"
                  alt="Location pin icon"
                  className="shrink-0 self-start aspect-square w-[18px]"
                />
                <div>Panorama Hotel, CA</div>
              </div>
            </div>
            <h1 className="mt-6 text-4xl font-bold text-pink-500 leading-[60px] max-md:max-w-full">
              Atlas <span className="text-pink-500">2021</span> Conference
            </h1>
            <p className="mt-2 text-base leading-6 text-neutral-600 max-md:max-w-full">
              Praesent porttitor, mi quis pulvinar rutrum, nunc dolor rutrum
              enim, eu tempor nulla felis eu orci. Ut eu turpis nisi.
              Pellentesque convallis, purus vitae mollis ultrices, ex lectus
              consectetur nulla, et blandit ipsum nibh sit amet ipsum.
            </p>
            <button className="justify-center self-start px-10 py-4 mt-10 text-base font-medium leading-6 text-center text-white bg-pink-500 shadow-2xl rounded-[400px] max-md:px-5">
              Learn More
            </button>
          </section>
        </div>
        <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
          <div className="flex overflow-hidden relative flex-col grow items-start px-16 pt-px pb-20 mt-20 min-h-[508px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
            {/* <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c62f555e9d43a7b7a14c08b467b780c5efeab3b72ded7cbfb80bcacf803e37e8?apiKey=252f8d5a726747838fcb04939a832fc3&"
              alt="Background image"
              className="object-cover absolute inset-0 size-full"
            /> */}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/058884fee661bb1efc25d37f39508314ae07d33dc0d1ce9684ce1072fbf2d344?apiKey=252f8d5a726747838fcb04939a832fc3&"
              alt="Conference logo"
              className="max-w-full aspect-[0.93] w-[116px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;

export function Widget() {
  return (
    <body className="bg-white dark:bg-zinc-800">
      <div className="relative bg-pink-200 dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="flex justify-center space-x-4">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full border-4 border-pink-500 flex items-center justify-center">
                  <span className="text-lg font-semibold text-pink-600 dark:text-pink-400">
                    23
                  </span>
                </div>
                <p className="mt-2 text-base text-zinc-600 dark:text-zinc-300">
                  Days
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full border-4 border-pink-500 flex items-center justify-center">
                  <span className="text-lg font-semibold text-pink-600 dark:text-pink-400">
                    12
                  </span>
                </div>
                <p className="mt-2 text-base text-zinc-600 dark:text-zinc-300">
                  Hours
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full border-4 border-pink-500 flex items-center justify-center">
                  <span className="text-lg font-semibold text-pink-600 dark:text-pink-400">
                    35
                  </span>
                </div>
                <p className="mt-2 text-base text-zinc-600 dark:text-zinc-300">
                  Minutes
                </p>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold text-zinc-800 dark:text-white">
                  Atlas 2021 Conference
                </h2>
                <p className="mt-3 text-zinc-500 dark:text-zinc-400">
                  Present porttitor, mi quis pulvinar rutrum, nunc dolor rutrum
                  enim, eu tempor nulla felis eu orci. Ut vel turpis nisi.
                  Pellentesque convallis, purus vitae mollis ultrices, ex lectus
                  consectetur nulla, et blandit ipsum nibh sit amet ipsum.
                </p>
                <div className="flex justify-center md:justify-start space-x-4 mt-4">
                  <span className="text-sm text-zinc-600 dark:text-zinc-300">
                    <i className="far fa-calendar-alt"></i> 23-26 Dec, 2021
                  </span>
                  <span className="text-sm text-zinc-600 dark:text-zinc-300">
                    <i className="fas fa-map-marker-alt"></i> Panorama Hotel, CA
                  </span>
                </div>
                <a
                  href="#"
                  className="mt-6 inline-block bg-pink-500 text-white rounded-md px-6 py-3 transition duration-150 ease-in-out hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-12 hidden lg:block">
          <img
            src="https://placehold.co/150x150"
            alt="Person"
            className="rounded-full p-2 bg-white shadow-xl"
          />
          <img
            src="https://placehold.co/100x100"
            alt="Person"
            className="rounded-full p-2 bg-white shadow-xl mt-8 ml-12"
          />
        </div>
      </div>
    </body>
  );
}
