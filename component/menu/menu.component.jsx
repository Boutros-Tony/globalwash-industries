import { useState } from "react";
import styles from "./menu.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav
        className={`${styles.menuBar} ${isMenuOpen ? styles.menuBarOpen : ""}`}
      >
        <div className={`container ${styles.menuBarWrapper}`}>
          <Link className={styles.logo} href="/">
            <img
              src={
                isMenuOpen ? "/assets/white-logo.svg" : "/assets/green-logo.svg"
              }
              alt="Logo"
            />
          </Link>
          <button className={styles.menuButton} onClick={toggleMenu}>
            <span className={styles.buttonText}>
              {isMenuOpen ? "Close" : "Menu"}
            </span>
            <span className={styles.buttonCircle}>
              <span className={styles.buttonLines}></span>
              <span className={styles.buttonLines}></span>
            </span>
          </button>
        </div>
      </nav>
      <div
        className={`${styles.menuWrapper} ${isMenuOpen ? styles.menuOpen : ""}`}
      >
        <div className="container">
          <ul>
            <li>
              <Link
                className={router.pathname == "/" ? styles.active : null}
                href="/"
              >
                <h1>Home</h1>
              </Link>
            </li>
            <li>
              <Link
                className={router.pathname == "/about" ? styles.active : null}
                href="/about"
              >
                <h1>About</h1>
              </Link>
            </li>
            <li>
              <Link
                className={router.pathname == "/why-us" ? styles.active : null}
                href="/why-us"
              >
                <h1>Why us?</h1>
              </Link>
            </li>
            <li>
              <Link
                className={
                  router.pathname == "/products-services" ? styles.active : null
                }
                href="/products-services"
              >
                <h1>Products & Services</h1>
              </Link>
            </li>
            <li>
              <Link
                className={router.pathname == "/contact" ? styles.active : null}
                href="/contact"
              >
                <h1>Contact</h1>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
