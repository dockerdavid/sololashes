import styles from "./Instagram.module.css";

const InstagramComponent = () => {
	return (
		<div className={styles.container}>
			<span className={styles.titleInstagram}>Instagram</span>
			<div className={styles.gridContainer}>
				<div className={styles.instagramContainer}>
					<img src="/instagram/instagram1.png" alt="instagram1" />
				</div>
				<div className={styles.instagramContainer}>
					<img src="/instagram/instagram1.png" alt="instagram2" />
				</div>
				<div className={styles.instagramContainer}>
					<img src="/instagram/instagram1.png" alt="instagram3" />
				</div>
				<div className={styles.instagramContainer}>
					<img src="/instagram/instagram1.png" alt="instagram4" />
				</div>
				<div className={styles.instagramContainer}>
					<img src="/instagram/instagram1.png" alt="instagram5" />
				</div>
				<div className={styles.instagramContainer}>
					<img src="/instagram/instagram1.png" alt="instagram6" />
				</div>
				<div className={styles.instagramContainer}>
					<img src="/instagram/instagram1.png" alt="instagram7" />
				</div>
			</div>
		</div>
	);
};

export default InstagramComponent;
