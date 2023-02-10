import React from "react";
import { FaHeart } from "react-icons/fa";
import styles from "../styles/HeaderBanner.module.scss";

const HeaderBanner = () => {
  return (
    <div className={styles.banner_container}>
      <div className={`${styles.banner}`}>
        <FaHeart className={styles.icon} />
        <p>Enjoy with us the month of love with our special offers!</p>
      </div>
    </div>
  );
};

export default HeaderBanner;
