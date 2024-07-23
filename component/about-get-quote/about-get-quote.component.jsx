import styles from "./about-get-quote.module.scss";
import Link from "next/link";
const AboutGetQuote = () => {
  return (
    <div className={`${styles.requestQuoteContainer}`}>
      <img
        src="/assets/about-get-quote.webp"
        alt="aerial-view-container-cargo-ship-sea"
      />
      <div className={styles.content}>
        <p className="body-white">
          We take pride in our rich history of significant milestones. With a
          reach extending to more than 25 countries worldwide, we have helped
          clients create and develop their own brands, tailoring products to
          specific requirements and offering packaging designs that resonate
          with their target markets. Whether providing detergent powder as a
          finished product or supplying it in bulk for local packaging, we are
          always geared towards enhancing the growth and success of our clients.
          In sourcing raw materials, we leverage our worldwide network to
          provide the most competitive prices from prime manufacturers.
        </p>

        <Link className="main-button" href="/contact">
          Get a quote
        </Link>
      </div>
    </div>
  );
};

export default AboutGetQuote;
