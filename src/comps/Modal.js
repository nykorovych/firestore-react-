import React from "react";
import { motion } from "framer-motion";

const Modal = ({ selectedImg, setImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setImg(null);
    }
  };
  return (
    <motion.div
      onClick={handleClick}
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImg}
        alt="sss"
        initial={{ y: "-100vh" }}
        animate={{ y: "0" }}
      />
    </motion.div>
  );
};
export default Modal;
