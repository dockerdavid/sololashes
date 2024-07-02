import styles from "./Footer.module.css";

import { MdLocationOn  } from "react-icons/md";

const FooterComponent = () => {
	return (
		<div className={styles.container}>
			<span className={styles.title}>SoloLashes</span>
			<p className={styles.paragraph}>
			Orlando Lash Lady is known for her customized design and detailed work.
			 She founded her business with one goal in mind - to make lash services customizable,
			  safe and affordable for every woman and man. Her Lash Extensions Services focuses on safety,
			   beauty and quality results. Ready to embark on a beautiful journey?
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
