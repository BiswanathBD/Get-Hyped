import { motion } from "framer-motion";
import React from "react";
motion;

const NavIItemsAnimation = ({ children }) => {
  const variants = {
    rest: { y: "130%", skewY: -20, opacity: 0 },
    hover: { y: "0%", skewY: 0, opacity: 100 },
  };
  const transition = {
    type: "tween",
    ease: "easeOut",
  };
  return (
    <>
      <motion.a
        href="#"
        className="relative overflow-hidden px-3.5 py-2 rounded-lg cursor-pointer bg-white"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        {/* red bg */}
        <motion.span
          className="absolute inset-0 bg-orange-600 rounded-lg"
          variants={variants}
          transition={{ transition, delay: 0, duration: 0.3 }}
        />

        {/* black bg */}
        <motion.span
          className="absolute inset-0 bg-black rounded-lg"
          variants={variants}
          transition={{ transition, delay: 0.1, duration: 0.25 }}
        />

        {/* original text slides out up */}
        <motion.span
          className="relative z-10 block"
          variants={{
            rest: { y: 0 },
            hover: { y: "-110%" },
          }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          {children}
        </motion.span>

        {/* white text slides in from below */}
        <motion.span
          className="absolute inset-0 z-10 flex items-center justify-center text-white"
          variants={{
            rest: { y: "110%" },
            hover: { y: "0%" },
          }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          {children}
        </motion.span>
      </motion.a>
    </>
  );
};

export default NavIItemsAnimation;
