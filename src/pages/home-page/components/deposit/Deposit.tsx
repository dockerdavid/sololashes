import styles from "./Deposit.module.css";

export const Deposit = () => {
  return (
    <div className={styles.depositContainer}>
      <div className={`${styles.gridItemLeft}`}>
        <div className={styles.imageDepositContainer}>
          <img className={styles.imgDeposit} src="/deposit/1.jpg" alt="Persona" />
        </div>
      </div>
      <div className={styles.gridItemRight}>
        <div className={styles.textDepositContainer}>
          <p>
            In order to secure your appointment and reduce the number of
            cancellations Orlando Lash Lady will require a 50% deposit for all
            services. Payments can be made online through the booking calendar. If
            you need to cancel or change an appointment a minimum of 48 hours
            notice will be required in order to not lose your deposit. Only one
            reschedule allowed per appointment.
          </p>
        </div>
      </div>
    </div>
  );
};
