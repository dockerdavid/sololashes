import styles from './Trusted.module.css'

const TrustedComponent = () => {
  return (
    <div className={styles.container}>
        <span className={styles.title}>We are trusted hair salon that has 10 years of experience</span>
        <span className={styles.subtitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dignissimos incidunt est eligendi suscipit dolorum quasi placeat qui quidem.</span>
        <div className={styles.appointment}>
            <span>MAKE APPOINTMENT</span>
        </div>
    </div>
  )
}

export default TrustedComponent