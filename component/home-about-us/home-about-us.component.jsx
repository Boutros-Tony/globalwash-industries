import styles from "./home-about-us.module.scss";
import Link from "next/link";
const HomeAboutUs = () => {
  return (
    <section className={styles.homeAboutUs}>
      <div className={`container ${styles.homeAboutUsContainer}`}>
        <img
          src="/assets/home-about-us.webp"
          alt="Industrial production line of detergent powder in a modern manufacturing facility, representing high-quality detergent production."
        />
        <div className={styles.contentHolder}>
          <span className="orange-h4">About Us</span>
          <h3 className="green-h3">
            Navigating Excellence <br /> in Detergent Sourcing
          </h3>
          <p className="body">
            Discover our unwavering commitment to quality, <br /> transparency,
            and customer satisfaction, all while <br /> significantly
            streamlining your sourcing process.
          </p>

          <Link className="main-button" href="/about">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutUs;
