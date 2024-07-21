import { useForm } from "react-hook-form";
import styles from "./Contact.module.css";

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export const Contact = () => {
  const { register, handleSubmit } = useForm<IFormInput>();

  return (
    <>
      <div className={styles.contactContainer}>
        <h2>We always love to hear from our customers.</h2>
        <div className={styles.contactDescription}>
          <span>
            Feel free to drop by or get in touch today to learn more about our
            beautiful custom Natural, HD and Classic Lash extensions.
          </span>
          <span>2802 E Anderson St. Orlando Fl 32803</span>
          <span>407 - 739 - 9076</span>
        </div>
        <div>
          <form
            onSubmit={handleSubmit((data) => console.log(data))}
            className={styles.contactForm}
          >
            <div className={styles.namesContainer}>
              <input
                type="text"
                placeholder="First Name"
                {...register("firstName")}
              />
              <input
                type="text"
                placeholder="Last Name"
                {...register("lastName")}
              />
            </div>
            <input type="email" placeholder="Email" {...register("email")} />
            <textarea placeholder="Write a message" {...register("message")} />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};
