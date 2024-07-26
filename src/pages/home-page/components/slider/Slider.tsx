import styles from "./Slider.module.css";
import images from "../../../../data/slider/data.json";

export const Slider = () => {
  return (
    <div className={styles.imageContainerSlider}>
      {images.images.map((image) => (
        <div className={styles.cardSliderContainer}>
          <img src={image.image} alt="" className={styles.cardImage} />
          <div className={styles.cardSliderText}>
            <span className={styles.mainText}>{image.text}</span><br />
            <span className={styles.subtitleText}>{image.subtitle}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
