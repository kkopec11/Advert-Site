import React from "react";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

const DivMotion: React.FC<Props> = ({ children }) => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      // scale: 0.8,
    },
    visible: {
      opacity: 1,
      // scale: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      // variants={containerVariants} initial="hidden" animate="visible"
      className="box"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  );
};

export default DivMotion;
