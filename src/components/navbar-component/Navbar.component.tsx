import { useEffect, useState } from "react";
import "./Navbar.css";
import { FaQuoteLeft } from "react-icons/fa";

const NavbarComponent = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleScroll = () => {
		setIsOpen(false);
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		}
	}, []);

  	return (
		<>
			<nav>
				<button className="btnMenu" onClick={() => setIsOpen(!isOpen)}>
					<i className="fas fa-bars"></i>
				</button>

				<label className="logo">SoloLashes</label>

				<ul className={`containerList ${isOpen ? "opennav" : "closenav"}`}>
					<li>
						<a href="#trusted">ABOUT</a>
					</li>
					<li>
						<a href="#gallery">GALLERY</a>
					</li>
					<li>
						<a href="#">CONTACT US</a>
					</li>
					<li className="priceListLink">
						<a href="#priceList">PRICE LIST</a>
					</li>
				</ul>

				<a href="#priceList" className="buttonPrice">PRICE LIST</a>
			</nav>

			<div className="containerContent">
				<div className="section1">
					<h2>
						Where quality meets comfort & Style
					</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia suscipit deserunt soluta accusamus doloribus saepe.</p>
					<button>
						<a href="#">Schedule a Consultation</a>
					</button>
				</div>
				<div className="section2">
					<img src="model_intro.webp" alt="" />
				</div>
				<div className="section3">
					<FaQuoteLeft color="var(--pink1)" size={45} />
					<p>
						"It really saves me time and effort. Hair salon is exactly what i want. It's just amazing."
					</p>
					<div >
						<h3>
							Janice Maya
						</h3>
						<div></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default NavbarComponent;
