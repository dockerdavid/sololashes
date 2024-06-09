import styles from "./Instagram.module.css";

const InstagramComponent = () => {
  return (
    <div className={styles.container}>
      <span className={styles.titleInstagram}>Instagram</span>
      <div className={styles.gridContainer}>
        <div className={styles.instagramContainer}>
          <img src="/instagram/instagram1.png" alt="" />
        </div>
        <div className={styles.instagramContainer}>
          <img src="/instagram/instagram1.png" alt="" />
        </div>
        <div className={styles.instagramContainer}>
          <img src="/instagram/instagram1.png" alt="" />
        </div>
        <div className={styles.instagramContainer}>
          <img src="/instagram/instagram1.png" alt="" />
        </div>
        <div className={styles.instagramContainer}>
          <img src="/instagram/instagram1.png" alt="" />
        </div>
        <div className={styles.instagramContainer}>
          <img src="/instagram/instagram1.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default InstagramComponent;
