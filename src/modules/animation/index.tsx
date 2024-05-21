"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface AnimationProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
}

const Reaveal = ({ width, children }: AnimationProps) => {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });
  const mainCnt = useAnimation();
  const slideCnt = useAnimation();

  useEffect(() => {
    if (isInview) {
      mainCnt.start("visible");
      slideCnt.start("visible");
    }
  }, [isInview]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 75 },
        }}
        initial="hidden"
        animate={mainCnt}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          visible: { left: "100%" },
          hidden: { left: 0 },
        }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          width: "100%",
          height: "100%",
          zIndex: 500,
          background: "#e90809",
        }}
      />
    </div>
  );
};

export { Reaveal };
