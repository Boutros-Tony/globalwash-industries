import styles from "../../styles/services.module.scss";
import MenuDark from "../../../component/menu-dark/menu.component";
import Link from "next/link";
import Head from "next/head";
const OpticalBrighteners = () => {
  return (
    <>
      <Head>
        <title>
          Superior Optical Brighteners for Enhanced Whiteness - GlobalWash
          Industries
        </title>
        <meta
          name="title"
          content="Superior Optical Brighteners for Enhanced Whiteness - GlobalWash Industries"
        />
        <meta
          name="description"
          content="Achieve dazzling whiteness with superior optical brighteners from GlobalWash Industries. Ideal for textiles, detergents, and paper products, our optical brighteners enhance appearance by absorbing UV light and emitting visible blue light. Contact us for high-quality optical brighteners."
        />
        <meta
          name="keywords"
          content="GlobalWash Industries, Optical Brighteners, Enhanced whiteness, Laundry detergents, Textile manufacturing, Paper production, UV light absorption, High-performance brighteners, Quality optical brighteners"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Superior Optical Brighteners for Enhanced Whiteness",
            "description": "Achieve dazzling whiteness with superior optical brighteners from GlobalWash Industries. Ideal for textiles, detergents, and paper products, our optical brighteners enhance appearance by absorbing UV light and emitting visible blue light.",
            "brand": {
              "@type": "Brand",
              "name": "GlobalWash Industries"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "GlobalWash Industries",
              "logo": "http://www.globalwashindustries.com/white-logo.svg",
              "url": "http://www.globalwashindustries.com"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone":"+961 3 334 443",
              "contactType": "Customer Service",
              "email": "info@globalwashindustries.com"
            },
            "sameAs": [
              "https://www.facebook.com/globalwashindustries",
              "https://www.linkedin.com/company/globalwashindustries",
              "https://twitter.com/globalwashind"
            ],
            "additionalType": "https://schema.org/ChemicalSubstance",
            "productID": "OPTICAL-BRIGHTENERS"
          }
        `,
          }}
        />
      </Head>
      <MenuDark />
      <section className={styles.servicesSection}>
        <div className={styles.servicesBanner}>
          <img
            className={styles.bg}
            src="/assets/optical-brighteners.webp"
            alt="OpticalBrighteners"
          />
          <div className={styles.upperColor}></div>
          <div className={`container ${styles.bannerContainer}`}>
            <Link className={styles.backLink} href="/products-services#raw">
              <img
                className={styles.backIcon}
                src="/assets/back-arrow.svg"
                alt="back arrow"
              />

              <p> Back To Raw Materials</p>
            </Link>
            <h2 className="white-h2">
              Superior Optical Brighteners <br /> for Enhanced Whiteness
            </h2>
          </div>
        </div>
        <div className={styles.servicesContent}>
          <div className={`container ${styles.contentContainer}`}>
            <div className={styles.orangeBg}></div>
            <div className={styles.contentHolder}>
              <h3 className="green-h3">Description</h3>
              <p className="body">
                Achieve dazzling whiteness with our superior optical
                brighteners. Ideal for textiles, detergents, and paper products,
                our optical brighteners enhance the appearance of materials by
                absorbing ultraviolet (UV) light and re-emitting it as visible
                blue light. This creates a whitening effect that makes fabrics
                and materials look brighter and cleaner.
              </p>
              <p className="body">
                Our high-performance optical brighteners are designed to deliver
                exceptional brightness and clarity to your products. They are
                widely used in laundry detergents to keep clothes looking new
                and fresh, as well as in paper production to improve the
                whiteness and brightness of paper products. Trust our optical
                brighteners to provide the highest level of performance and
                quality.
              </p>
              <h3 className="green-h3">Applications</h3>

              <ul>
                <li>
                  <p className="body">Laundry detergents</p>
                </li>
                <li>
                  <p className="body">Textile manufacturing</p>
                </li>
                <li>
                  <p className="body">Paper production</p>
                </li>
                <li>
                  <p className="body">Plastics</p>
                </li>
                <li>
                  <p className="body">Coatings and paints</p>
                </li>
              </ul>
              <h3 className="green-h3">Benefits</h3>
              <ul>
                <li>
                  <p className="body">Enhances whiteness and brightness</p>
                </li>
                <li>
                  <p className="body">
                    Absorbs UV light, emits visible blue light
                  </p>
                </li>
                <li>
                  <p className="body">High-performance and quality</p>
                </li>
                <li>
                  <p className="body">Suitable for various applications</p>
                </li>
                <li>
                  <p className="body">
                    Keeps fabrics and materials looking new
                  </p>
                </li>
              </ul>
              <h3 className="green-h3">Technical Specifications</h3>
              <ul>
                <li>
                  <p className="body">
                    White to light yellow powder, highly soluble in water
                    Contact Us: For more information or to place an order,
                    please contact our sales team. We are dedicated to providing
                    you with high-quality optical brighteners for your specific
                    needs.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OpticalBrighteners;
