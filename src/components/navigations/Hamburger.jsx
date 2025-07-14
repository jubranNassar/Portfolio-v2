import React from "react";
import styles from "@/styles/globals.module.css";

const HamburgerMenu = ({ isOpen = false, setIsOpen = () => {} }) => {
  const handleClick = () => {
    if (setIsOpen && typeof setIsOpen === "function") {
      setIsOpen(!isOpen);
    }
  };

  return (
    <button
      className={`md:hidden ${styles.hamburgerMenu} ${
        isOpen ? styles.active : ""
      }`}
      onClick={handleClick}
      aria-label="Toggle menu"
    >
      <span className={`${styles.hamburgerLines}`}>
        <span></span>
        <span></span>
        <span></span>
      </span>
    </button>
  );
};

export default HamburgerMenu;
