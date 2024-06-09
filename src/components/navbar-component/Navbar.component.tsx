import { useEffect, useState } from "react";
import "./Navbar.css";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  // detect if scrolling, if so, close the navbar

  useEffect(() => {
    console.log(isOpen);
    const handleScroll = () => {
      setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <nav>
      <input type="checkbox" id="check" onClick={() => setIsOpen(!isOpen)} />
      <label htmlFor="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      <label className="logo">SoloLashes</label>
      <ul>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarComponent;
