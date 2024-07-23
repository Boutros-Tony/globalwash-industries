import styles from "./home-why-us.module.scss";

const HomeWhyUs = () => {
  return (
    <section className={styles.whyUsSection}>
      <div className={`container ${styles.homeWhyUsContainer}`}>
        <h4 className="orange-h4">Why us</h4>
        <h3 className="green-h3">Your Trustworthy Ally in Global Trade</h3>
        <p className="body">
          Partner with Premium Sourcing International, a company that truly
          understands your unique needs and is committed to meet them with
          unwavering quality assurance, unparalleled flexibility, strong
          sourcing capabilities, supportive financial options, and transparent
          business ethics. Our ISO 9001 certified operations and global presence
          attest to our proven expertise in detergent sourcing. Make us your
          partner in growth and innovation today, and together, we can build a
          successful future.
        </p>
        <button className="main-button">Learn More</button>
      </div>
    </section>
  );
};

export default HomeWhyUs;
