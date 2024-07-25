import styles from "./Instagram.module.css";

const Instagram = () => {
	return (
		<div className={styles.container}>
			<span className={styles.titleInstagram}>Instagram</span>
			<div className={styles.gridContainer}>
				<div className={styles.instagramContainer}>
					<img src="/instagram/1.jpeg" alt="instagram1" />
				</div>
				<div className={styles.instagramContainer}>
					<img src="/instagram/2.jpeg" alt="instagram2" />
				</div>
				<div className={styles.instagramContainer}>
					<img src="/instagram/3.jpeg" alt="instagram3" />
				</div>
				<div className={styles.instagramContainer}>
					<img src="/instagram/4.jpeg" alt="instagram4" />
				</div>
				<div className={styles.instagramContainer}>
					<img src="/instagram/5.jpeg" alt="instagram5" />
				</div>
				<div className={styles.instagramContainer}>
					<img src="/instagram/6.jpeg" alt="instagram6" />
				</div>
				<div className={styles.instagramContainer}>
					<img src="/instagram/7.jpeg" alt="instagram7" />
				</div>
			</div>
		</div>
	);
};

export default Instagram;