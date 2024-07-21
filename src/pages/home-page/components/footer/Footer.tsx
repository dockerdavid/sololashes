import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BiMap } from "react-icons/bi";

import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div>
        <img
          style={{ width: "100px" }}
          src="/logos/secondary-logo.png"
          alt=""
        />
      </div>
      <div className={styles.contactPart}>
        <BsTelephone />
        <span>407 - 739 - 9076</span>
      </div>
      <div className={styles.contactPart}>
        <AiOutlineMail />
        <span>orlandolashlady@gmail.com</span>
      </div>
      <div className={styles.contactPart}>
        <BiMap />
        <span>2802 E Anderson St. Orlando Fl 32803</span>
      </div>
    </div>
  );
};
