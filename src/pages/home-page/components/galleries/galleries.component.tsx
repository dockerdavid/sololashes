import styles from "./Galleries.module.css";

const GalleriesComponent = () => {
  return (
    <>
      <span className={styles.title}>GALLERIES</span>
      <span className={styles.subtitle}>Salon gallery</span>
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
          <img src="/gallery/lash1.png" alt="" />
        </div>
        <div className={styles.gridItem}>
          <img src="/gallery/lash2.png" alt="" />
        </div>
        <div className={styles.gridItem}>
          <img src="/gallery/lash3.png" alt="" />
        </div>
        <div className={styles.gridItem}>
          <img src="/gallery/lash4.png" alt="" />
        </div>
        <div className={styles.gridItem}>
          <img src="/gallery/lash5.png" alt="" />
        </div>
        <div className={styles.gridItem}>
          <img src="/gallery/lash6.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default GalleriesComponent;
