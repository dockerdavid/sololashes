import styles from "./Slider.module.css";
import images from "../../../../data/slider/data.json";
import { Carousel } from "react-responsive-carousel";

export const Slider = () => {
  return (
    <div>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showIndicators={false}
        preventMovementUntilSwipeScrollTolerance
        swipeScrollTolerance={50}
        showArrows={false}
        showStatus={false}
        interval={4500}

      >
        {images.images.map((image, index) => (
          <div
            key={index}
            className={styles.imageContainerSlider}
            style={{ height: "300px", width: "100%" }}
          >
            <img src={image.image} alt={image.text} />
            <div className={styles.textContainerSlider}>
              <p className={styles.text}>{image.text}</p>
              <p className={styles.subtitle}>{image.subtitle}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
