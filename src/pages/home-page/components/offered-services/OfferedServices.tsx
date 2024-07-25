import styles from "./OfferedServices.module.css";
import data from "../../../../data/offered-services/data.json";

export const OfferedServices = () => {
	return data.sections.map((service, index) => (
		<div
			key={index}
			style={{
				backgroundColor: service["background-color"],
			}}
			className={`${styles.offeredServicesContainer} ${index % 2 === 0 ? styles.offeredServicesContainerOdd : styles.offeredServicesContainerEven}`}
		>
			<div className={styles.offeredServicesinformation}>
				{/* <h2 style={{ color: service["title-color"] }}>{service.title}</h2>
				<span style={{ color: service["subtitle-color"] }}>{service.subtitle}</span>
				<span style={{ color: service["body-color"] }}>{service.body}</span>
				<span style={{ color: service["pricing-color"] }}>{service.pricing}</span> */}
				{
					service.title != "" && <h2 style={{ color: service["title-color"] }}>{service.title}</h2>
				}
				{
					service.subtitle != "" && <span style={{ color: service["subtitle-color"] }}>{service.subtitle}</span>
				}
				{
					service.body != "" && <span style={{ color: service["body-color"] }}>{service.body}</span>
				}
				{
					service.pricing != "" && <span style={{ color: service["pricing-color"] }}>{service.pricing}</span>
				}
			</div>
			<div className={styles.offeredServicesimage}>
				<img src={service.image} />
			</div>
		</div>
	));
};
