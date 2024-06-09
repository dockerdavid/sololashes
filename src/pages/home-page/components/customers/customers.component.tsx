import styles from "./Customers.module.css";

import { FaQuoteLeft } from "react-icons/fa";

const CustomersComponent = () => {
  return (
    <>
      <div className={styles.container}>
        <span className={styles.title}>REVIEWS</span>
        <span className={styles.subtitle}>What our customers say</span>
        <div className={styles.gridContainer}>
          <div className={styles.gridItem}>
            <div className={styles.quote}>
              <FaQuoteLeft color="rgba(252, 144, 75, 0.2)" size={45} />
            </div>
            <div className={styles.opinion}>
              <div className={styles.description}>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  dictum, purus nec dapibus fermentum, sem quam semper libero,
                  sit amet adipiscing sem neque sed ipsum.
                </span>
              </div>
              <div className={styles.person}>
                <img
                  className={styles.imgPerson}
                  src="https://via.placeholder.com/50"
                  alt="John Doe"
                />
                <div className={styles.flexPerson}>
                  <span>John Doe</span>
                  <span>CEO at Company</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.gridItem}>
            <div className={styles.quote}>
              <FaQuoteLeft color="rgba(252, 144, 75, 0.2)" size={45} />
            </div>
            <div className={styles.opinion}>
              <div className={styles.description}>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  dictum, purus nec dapibus fermentum, sem quam semper libero,
                  sit amet adipiscing sem neque sed ipsum.
                </span>
              </div>
              <div className={styles.person}>
                <img
                  className={styles.imgPerson}
                  src="https://via.placeholder.com/50"
                  alt="John Doe"
                />
                <div className={styles.flexPerson}>
                  <span>John Doe</span>
                  <span>CEO at Company</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomersComponent;
