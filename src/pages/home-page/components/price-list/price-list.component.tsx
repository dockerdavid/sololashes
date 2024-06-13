import styles from "./PriceList.module.css";

const PriceListComponent = () => {
	return (
		<div className={styles.gridContainer}>
			<div className={styles.gridItem}>
				<span className={styles.title}>PRICING</span>
				<span className={styles.subtitle}>Price List</span>
				<div className={styles.cards}>
					<div className={styles.pricingCard}>
						<span className={styles.kind}>Blow Dry</span>
						<span className={styles.price}>From $23</span>
					</div>
					<div className={styles.pricingCard}>
						<span className={styles.kind}>Basic Tint</span>
						<span className={styles.price}>From $23</span>
					</div>
					<div className={styles.pricingCard}>
						<span className={styles.kind}>Organic Color</span>
						<span className={styles.price}>From $23</span>
					</div>
					<div className={styles.pricingCard}>
						<span className={styles.kind}>Full Highlights</span>
						<span className={styles.price}>From $23</span>
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
