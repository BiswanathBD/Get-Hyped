import { motion } from "framer-motion";
import React from "react";
motion;

const SkewBtn = ({ children }) => {
  return (
    <motion.button
      whileHover={{ skewY: -5, scaleX: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      {children}
    </motion.button>
  );
};

export default SkewBtn;
