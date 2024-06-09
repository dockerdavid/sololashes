import styles from "./Footer.module.css";

import { GrLocation } from "react-icons/gr";

const FooterComponent = () => {
  return (
    <>
      <div className={styles.container}>
        <span className={styles.title}>SoloLashes</span>
        <span className={styles.subtitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          debitis quod quis, facere minus mollitia, commodi nulla laudantium
          repellendus ab nihil aliquid?
        </span>
        <div className={styles.gridContainer}>
          <div className={styles.gridItem}>
            <div className={styles.location}>
              <GrLocation color="rgb(252, 144,75)" />
            </div>
            <span>Hawaii Branch</span>
            <span>1901 Thornbridge Cir. Shiloh, Hawaii, 81063</span>
          </div>
          <div className={styles.gridItem}>
            <div className={styles.location}>
              <GrLocation color="rgb(252, 144,75)" />
            </div>
            <span>Hawaii Branch</span>
            <span>1901 Thornbridge Cir. Shiloh, Hawaii, 81063</span>
          </div>
          <div className={styles.gridItem}>
            <div className={styles.location}>
              <GrLocation color="rgb(252, 144,75)" />
            </div>
            <span>Hawaii Branch</span>
            <span>1901 Thornbridge Cir. Shiloh, Hawaii, 81063</span>
          </div>
        </div>
        <hr />
        <span className={styles.copyright}>2024 SOLOLASHES</span>
      </div>
    </>
  );
};

export default FooterComponent;
