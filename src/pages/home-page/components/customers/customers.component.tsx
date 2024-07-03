import styles from "./Customers.module.css";

import { FaQuoteLeft } from "react-icons/fa";

const CustomersComponent = () => {
	return (
		<div className={styles.container}>
			<span className={styles.title}>REVIEWS</span>
			<span className={styles.subtitle}>What our customers say</span>

			<div className={styles.gridContainer}>
				<div className={styles.gridItem}>
					<div className={styles.quote}>
						<FaQuoteLeft color="var(--orange1Soft)" size={80} />
					</div>
					<div className={styles.opinion}>
						<div className={styles.description}>
							<span>
							Working at this lash salon for a year has been incredible. The teamwork and support are amazing,
							 and we use the best products to ensure our clients leave feeling confident and beautiful.
							  I
							</span>
						</div>
						<div className={styles.person}>
							<img className={styles.imgPerson} src="https://via.placeholder.com/50" alt="John Doe" />
							<div className={styles.flexPerson}>
								<span>John Doe</span>
								<span>Eyelash Specialist</span>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.gridItem}>
					<div className={styles.quote}>
						<FaQuoteLeft color="var(--orange1Soft)" size={80} />
					</div>
					<div className={styles.opinion}>
						<div className={styles.description}>
							<span>
							I enjoy working here because it lets me be creative and make clients feel great.
							The management supports learning, and the positive atmosphere makes the job enjoyable.
							</span>
						</div>
						<div className={styles.person}>
							<img className={styles.imgPerson} src="https://via.placeholder.com/50" alt="John Doe" />
							<div className={styles.flexPerson}>
								<span>Ava Smith</span>
								<span>Lash Stylist</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CustomersComponent;
