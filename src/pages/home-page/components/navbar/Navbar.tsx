import { useState } from "react";
import { GrMenu } from "react-icons/gr";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const routes = [
    { path: "about-us", name: "About us" },
    { path: "services", name: "Services" },
    { path: "contact-us", name: "Contact us" },
  ];

  const [activeRoute, setActiveRoute] = useState(routes[0].path);
  const [showNav, setShowNav] = useState(false);

  const handleActiveRoute = (path: string) => {
    setActiveRoute(path);
  };

  const handleShowNavbar = () => {
    setShowNav(!showNav);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <img src="/logos/main-logo.png" alt="Logo" className={styles.logo} />
        <div className={styles.menuIcon} onClick={handleShowNavbar}>
          <GrMenu size={30} />
        </div>
        <div
          className={`${styles.navElements} ${showNav ? styles.active2 : ""}`}
        >
          <ul>
            {routes.map((route) => (
              <li key={route.path}>
                <a
                  onClick={() => {
                    handleActiveRoute(route.path);
                    handleShowNavbar();
                  }}
                  href={`#${route.path}`}
                  className={activeRoute === route.path ? styles.active : ""}
                >
                  {route.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
