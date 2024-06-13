import styles from "./Footer.module.css";

import { MdLocationOn  } from "react-icons/md";

const FooterComponent = () => {
	return (
		<div className={styles.container}>
			<span className={styles.title}>SoloLashes</span>
			<p className={styles.paragraph}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
				debitis quod quis, facere minus mollitia, commodi nulla laudantium
				repellendus ab nihil aliquid?
			</p>
			<div className={styles.gridContainer}>
				<div className={styles.gridItem}>
					<div className={styles.location}>
						<MdLocationOn color="var(--orange1)" size={20}/>
					</div>
					<span>Hawaii Branch</span>
					<span>1901 Thornbridge Cir. Shiloh, Hawaii, 81063</span>
				</div>
				<div className={styles.gridItem}>
					<div className={styles.location}>
						<MdLocationOn color="var(--orange1)" size={20}/>
					</div>
					<span>Hawaii Branch</span>
					<span>1901 Thornbridge Cir. Shiloh, Hawaii, 81063</span>
				</div>
				<div className={styles.gridItem}>
					<div className={styles.location}>
						<MdLocationOn color="var(--orange1)" size={20}/>
					</div>
					<span>Hawaii Branch</span>
					<span>1901 Thornbridge Cir. Shiloh, Hawaii, 81063</span>
				</div>
			</div>
			<hr className={styles.footerLine} />
			<span className={styles.copyright}>2024 SOLOLASHES</span>
		</div>
	);
};

export default FooterComponent;
