import styles from './Deposit.module.css'

export const Deposit = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src="https://via.placeholder.com/300x450" // Reemplaza con la URL de la imagen de prueba
          alt="Persona"
        />
      </div>
      <div className={styles.textContainer}>
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
  );
};
