import styles from "./PriceList.module.css";

const PriceListComponent = () => {
	return (
		<div className={styles.gridContainer}>
			<div className={styles.gridItem}>
				<span className={styles.title}>PRICING</span>
				<span className={styles.subtitle}>Price List</span>
				<div className={styles.cards}>
					<div className={styles.pricingCard}>
						<span className={styles.kind}>C+Volume Natural Mixed Full Set</span>
						<span className={styles.price}>From $149</span>
					</div>
					<div className={styles.pricingCard}>
						<span className={styles.kind}>Volume Signature Full Set</span>
						<span className={styles.price}>From $179</span>
					</div>
					<div className={styles.pricingCard}>
						<span className={styles.kind}>Mega Volume Lashes</span>
						<span className={styles.price}>From $249</span>
					</div>
					<div className={styles.pricingCard}>
						<span className={styles.kind}>LASH REMOVAL</span>
						<span className={styles.price}>From $200</span>
					</div>
				</div>
				<button className={styles.schedule}>
					<a>Schedule a consultation</a>
				</button>
			</div>
			<div className={styles.gridItem}>
				<img width="100%" height="100%" src="/pricing/pricing.png" alt="" />
			</div>
		</div>
	);
};

export default PriceListComponent;
