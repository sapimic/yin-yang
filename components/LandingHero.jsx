import React from "react";
import styles from "../styles/LandingHero.module.scss";

const LandingHero = () => {
  return (
    <div className={styles.centered_hero}>
      <h1 className={styles.centered_heading}>Welcome to Yin Yang Spa</h1>
      <h2 className={styles.secondary_heading}>
        Relax yourself in an amazing way
      </h2>
    </div>
  );
};

export default LandingHero;
