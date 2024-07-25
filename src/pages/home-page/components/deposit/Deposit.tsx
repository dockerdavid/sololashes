import styles from "./Deposit.module.css";

export const Deposit = () => {
  return (
    <div className={styles.depositContainer}>
      <div className={`${styles.gridItemLeft}`}>
        <div className={styles.imageDepositContainer}>
          <img
            className={styles.imgDeposit}
            src="/deposit/1.jpeg"
            alt="Persona"
          />
        </div>
      </div>
      <div className={styles.gridItemRight}>
        <div className={styles.textDepositContainer}>
          <p>
            Orlando Lash Lady is renowned for her customized, natural designs
            and meticulous attention to detail. She founded her business with
            one goal in mind: to make lash applications natural yet glamorous,
            safe, and affordable for every woman and man. Her lash extension
            services focus on safety, beauty, and quality results. Ready to
            embark on a beautiful journey?
          </p>
        </div>
      </div>
    </div>
  );
};
