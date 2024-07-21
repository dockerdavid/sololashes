import styles from './Presentation.module.css'

export const Presentation = () => {
    return (
      <div className={styles.presentationContainer}>
        <img src={"/slider/1.jpg"} alt={"Luxury Lash Extensions"} className={styles.presentationImage} />
        <div className={styles.presentationTextContainer}>
          <h1 className={styles.presentationTitle}>{"Luxury Lash Extensions"}</h1>
          <p className={styles.presentationSubtitle}>{"Classic Mascara Effect | Natural Mink | Natural Volume"}</p>
        </div>
      </div>
    );
  };