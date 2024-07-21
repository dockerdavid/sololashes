import styles from "./Services.module.css";

interface ServicesProps {
  image: string;
  text: string;
  title?: string;
  subtitle?: string;
}

export const ServicesComponent = ({ image, text, title, subtitle }: ServicesProps) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className={styles.containerServices}
    >
      <div className={styles.containerOverlay}></div>
      <span className={styles.text}>{text}</span>

      {title && <h2 className={styles.title}>{title}</h2>}
      {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}
    </div>
  );
};
