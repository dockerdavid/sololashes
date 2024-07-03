import styles from './Trusted.module.css'

const TrustedComponent = () => {
	return (
		<div className={styles.container}>
			<span className={styles.title}>We are trusted hair salon that has 10 years of experience</span>
			<span className={styles.subtitle}>	Embark on a personalized beauty experience with Orlando Lash Lady. From eyelash extensions to high-quality services,
				 								we're here to enhance your natural beauty.</span>
			<button className={styles.appointment}>
				<a>MAKE APPOINTMENT</a>
			</button>
		</div>
	)
}

export default TrustedComponent
