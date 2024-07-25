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
        id="about-us"
        image="/services/1.jpeg"
        text="Our Story"
        title="Will Take Care of You."
        subtitle="Angie's journey has been marked by resilience and perseverance. From overcoming language barriers and driving anxieties to raising two children and navigating a divorce seven years ago, her experiences have shaped her into a master of her craft. Honesty and integrity have become her guiding principles. She is transparent with her clients, ensuring she can meet their expectations. For example, Angie once advised a client to postpone a three-hour session because her lashes were too damaged for the desired mega volume look, refunding the session fee to uphold her commitment to quality.  Angie Salomeʼs story is one of dedication, continual self-improvement, and a deep commitment to her clients' satisfaction. Her personal journey not only highlights her professional expertise but also showcases the authenticity and care she brings to her renowned lash extension services."
      />
      <Quote />
      <ServicesComponent
        image="/services/1.jpeg"
        text="SERVICES"
        id="services"
      />
      <OfferedServices />
      <Instagram />
      <ServicesComponent
        image="/services/1.jpeg"
        text="CONTACT US"
        id="contact-us"
      />
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
