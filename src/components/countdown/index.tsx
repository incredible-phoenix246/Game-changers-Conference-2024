import { AnimatePresence, motion } from "framer-motion";
const CountdownItem = ({ num, text }: { num: number; text: string }) => {
  return (
    <div className="font-mono w-24  h-24 flex flex-col gap-1 md:gap-2 items-center justify-center border-2 border-solid leading-[150%]  border-red-100/30 rounded-full">
      <div className="w-full text-center relative overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={num}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ ease: "backIn", duration: 0.75 }}
            className="block text-2xl md:text-3xl  text-red-300 font-bold"
          >
            {num}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-xs font-light text-black">{text}</span>
    </div>
  );
};

const CountdownItemday = ({ num, text }: { num: number; text: string }) => {
  return (
    <div className="font-mono w-24 h-24 flex flex-col gap-1 md:gap-2 items-center justify-center border-2 border-solid leading-[150%]  border-red-100/30 rounded-tr-full rounded-br-full rounded-tl-full">
      <div className="w-full text-center relative overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={num}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ ease: "backIn", duration: 0.75 }}
            className="block text-2xl md:text-4xl  text-red-300 font-bold"
          >
            {num}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-base font-light text-black">{text}</span>
    </div>
  );
};

const CountdownItemsec = ({ num, text }: { num: number; text: string }) => {
  return (
    <div className="font-mono w-24 h-24 flex flex-col gap-1 md:gap-2 items-center justify-center border-2 border-solid leading-[150%]  border-red-100/30 rounded-tl-full rounded-br-full rounded-bl-full">
      <div className="w-full text-center relative overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={num}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ ease: "backIn", duration: 0.75 }}
            className="block text-2xl md:text-4xl  text-red-300 font-bold"
          >
            {num}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-base font-light text-black">{text}</span>
    </div>
  );
};

export { CountdownItem, CountdownItemday, CountdownItemsec };
