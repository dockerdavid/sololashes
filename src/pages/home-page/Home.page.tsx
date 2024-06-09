import { NavbarComponent } from "../../components";
import styles from "./Home.module.css";

import {
  GalleriesComponent,
  CustomersComponent,
  FooterComponent,
  InstagramComponent,
  PriceListComponent,
  TrustedComponent,
} from "./components";

const HomePage = () => {
  return (
    <>
      <div className={styles.presentation}>
        <NavbarComponent />
      </div>
      <div className={styles.galleries}>
        <GalleriesComponent />
      </div>
      <div className={styles.priceList}>
        <PriceListComponent />
      </div>
      <div className={styles.trusted}>
        <TrustedComponent />
      </div>
      <div className={styles.customers}>
        <CustomersComponent />
      </div>
      <div className={styles.instagram}>
        <InstagramComponent />
      </div>
      <div className={styles.footer}>
        <FooterComponent />
      </div>
    </>
  );
};

export default HomePage;
