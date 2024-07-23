import styles from "./get-a-quote.module.scss";
import Link from "next/link";
const GetAQuote = () => {
  return (
    <section className={styles.getSection}>
      <div className={`container ${styles.getAQuote}`}>
        <p className="display-2">
          Choose Premium Sourcing International, your trusted partner for
          quality, adaptability, and innovation in the world of global trade.
          Contact us today for a quote and let’s build a successful future
          together.
        </p>

        <Link className="main-button" href="/contact">
          Get a quote
        </Link>
      </div>
    </section>
  );
};

export default GetAQuote;
