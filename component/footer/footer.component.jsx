import styles from "./footer.module.scss";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <Link href="/">
          <img
            className={styles.logo}
            src="/assets/white-logo.svg"
            alt="Logo"
          />
        </Link>
        <div className={styles.secondRow}>
          <ul>
            <li>
              <Link href="/">Address</Link>
            </li>
            <li>
              <Link href="/">Instagram</Link>
            </li>
            <li>
              <Link href="/">Linkedin</Link>
            </li>
            <li>
              <Link href="/">X</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/why-us">Why Us</Link>
            </li>
            <li>
              <Link href="/products-services">Products & Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
          <div></div>
        </div>
        <div className={styles.lastRow}>
          <span>© 2024 GlobalWash Industries</span>
          <div>
            <Link href="/">Privacy Policy</Link>
            <Link href="/"> • Terms of Service</Link>
          </div>
          <Link href="https://www.livbrid.com">Site by LIVBRID</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
