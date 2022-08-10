import React, { useState } from "react";
import styles from "../styles/TeamCard.module.scss";
import { FaMobileAlt } from "react-icons/fa";

const TeamCard = ({ img, number, personName, contactable }) => {
  return (
    <div className={styles.team_container}>
      <img src={img} loading="lazy" className={styles.team_image} />
      <p className={styles.person_name}>{personName}</p>
      {contactable === "true" && (
        <a href={`${number}`} className={`${styles.team_button} button`}>
          <FaMobileAlt
            style={{
              verticalAlign: "middle",
              fontSize: "20px",
              marginRight: "10px",
            }}
          />
          WhatsApp
        </a>
      )}
    </div>
  );
};

export default TeamCard;
