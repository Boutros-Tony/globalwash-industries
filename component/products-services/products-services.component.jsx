import styles from "./products-services.module.scss";

const ProductsServices = () => {
  return (
    <section className={styles.productsServicesSection}>
      <div className={`container ${styles.productsServicesContainer}`}>
        <span className="orange-h4">Our Products & Services</span>
        <h2 className="green-h2">
          Exceptional Products and Services <br className="desktop-br" /> to
          Empower Your Detergent Business
        </h2>
        <p className="body">
          Unveil the synergy of high-quality detergent products and bespoke
          services at Premium Sourcing International. From customized laundry
          powders to essential raw materials, alongside Original Equipment
          Manufacturer (OEM) and logistic solutions, we provide a comprehensive
          suite designed to enhance your market success. Explore our offerings
          and fuel your growth journey with us.
        </p>
        <div className={styles.rect}>
          <div className={styles.rectBg}></div>
          <div className={styles.rectContent}>
            <h3 className="green-h3">Detergent Laundry Powder</h3>
            <p className="body">
              Customizable detergent powders tailored to your needs, with
              flexible packaging and formulation options.
            </p>
          </div>
        </div>
        <div className={styles.rect}>
          <div className={styles.rectBg}></div>
          <div className={styles.rectContent}>
            <h3 className="green-h3">Raw Materials for Detergent Production</h3>
            <p className="body">
              Quality-assured, competitively priced raw materials sourced from
              reliable global manufacturers for detergent production.
            </p>
          </div>
        </div>
        <div className={styles.rect}>
          <div className={styles.rectBg}></div>
          <div className={styles.rectContent}>
            <h3 className="green-h3">OEM and Logistic Services</h3>
            <p className="body">
              Comprehensive OEM services aligning products with your brand,
              alongside efficient logistics management.
            </p>
          </div>
        </div>
        <button className="main-button">Learn More</button>
      </div>
    </section>
  );
};

export default ProductsServices;
