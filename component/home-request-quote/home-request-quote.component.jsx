import styles from "./home-request-quote.module.scss";
const HomeRequestQuote = () => {
  return (
    <section className={styles.requestQuote}>
      <div className={`container ${styles.requestQuoteContainer}`}>
        <img
          src="/assets/home-request-quote.webp"
          alt="Aerial view of a large cargo ship with colorful containers sailing in the ocean, representing global trade and logistics."
        />
        <div className={styles.content}>
          <h3 className="white-h3">
            Embark on a Journey of Success: Request a Quote Today!
          </h3>
          <p className="body-white">
            Discover the benefits of partnering with Premium Sourcing
            International for your detergent needs. Experience our dedication to
            quality, competitive pricing, and seamless brand integration.
            Request a quote today and let's journey towards success together.
          </p>
          <button className="main-button">Get a quote</button>
        </div>
      </div>
    </section>
  );
};

export default HomeRequestQuote;
