import styles from "./Home.module.css";

import { OfferedServices } from "./components/offered-services/OfferedServices";
import { ServicesComponent } from "./components/services/Services";
import Instagram from "./components/instagram/Instagram";
import { Footer } from "./components/footer/Footer";
import { Deposit } from "./components/deposit/Deposit";
import { Quote } from "./components/quote/Quote";
import { Contact } from "./components/contact/Contact";
import { Slider } from "./components/slider/Slider";
import { Presentation } from "./components/presentation/Presentation";
import { Navbar } from "./components/navbar/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Presentation />
      <Slider />
      <Deposit />
      <ServicesComponent
        image="/services/services.jpeg"
        text="Our Story"
        title="Will Take Care of You."
        subtitle="Orlando Lash Lady is known for her customized design and detailed work. She founded her business with one goal in mind – to make lash treatments effective, safe, and affordable for every woman and man. Her Lash Extensions Services focuses on safety, beauty, and quality results. Ready to embark on a beautiful journey?"
      />
      <Quote />
      <ServicesComponent image="/services/services.jpeg" text="SERVICES" />
      <OfferedServices />
      <Instagram />
      <ServicesComponent image="/services/services.jpeg" text="CONTACT US" />
      <Contact />
      <Footer />
      <div className={styles.madeBy}>
        <a href="https://www.communicate360.net" target="_blank">
          &copy; {new Date().getFullYear()} by Orlando Lash Lady. Proudly
          created with Communicate 360
        </a>
      </div>
    </>
  );
};

export default HomePage;
