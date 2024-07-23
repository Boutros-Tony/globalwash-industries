import styles from "./home-main.module.scss";

const HomeMain = () => {
  return (
    <div className={styles.homeMainWrapper}>
      <img
        className={styles.homeMainBg}
        src="/assets/home-main-bg.webp"
        alt="Close-up view of detergent powder with colorful specks, showcasing the texture and quality of the product."
      />
      <div className={styles.leftColumn}>
        <div className={`center-vertical ${styles.contentHolder}`}>
          <h1 className="white-h1">
            Your Trusted Partner <br /> in Global Trade
          </h1>
          <p className="body-white">
            Welcome to GlobalWash Industries, your leading global provider of
            detergent laundry powder and raw materials for manufacturing laundry
            powder since 2009.
          </p>
          <div className="horizontal-buttons">
            <button className="main-button">Get a quote</button>
            <button className="secondary-button">Learn more</button>
          </div>
        </div>
      </div>
      <div className={styles.homeMainText}>
        <h2 className="green-h2">
          Innovating Trade<span>.</span> <br className="phone-br" /> Creating
          Value<span>.</span>
          <br />
          Building Global Relationships<span>.</span>
        </h2>
      </div>
    </div>
  );
};

export default HomeMain;
