import styles from "./Galleries.module.css";

const GalleriesComponent = () => {
	return (
		<div className={styles.containerGallery}>
			<span className={styles.title}>GALLERIES</span>
			<span className={styles.subtitle}>Salon gallery</span>

			<div className={styles.gridContainer}>
				<div className={styles.gridItem}>
					<img src="/gallery/lash1.png" alt="lash1" />
				</div>
				<div className={styles.gridItem}>
					<img src="/gallery/lash2.png" alt="lash2" />
				</div>
				<div className={styles.gridItem}>
					<img src="/gallery/lash3.png" alt="lash3" />
				</div>
				<div className={styles.gridItem}>
					<img src="/gallery/lash4.png" alt="lash4" />
				</div>
				<div className={styles.gridItem}>
					<img src="/gallery/lash5.png" alt="lash5" />
				</div>
				<div className={styles.gridItem}>
					<img src="/gallery/lash6.png" alt="lash6" />
				</div>
			</div>
		</div>
	);
};

export default GalleriesComponent;
