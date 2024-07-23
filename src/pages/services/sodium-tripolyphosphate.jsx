import styles from "../../styles/services.module.scss";
import MenuDark from "../../../component/menu-dark/menu.component";
import Link from "next/link";
import Head from "next/head";
const SodiumTripolyphosphate = () => {
  return (
    <>
      <Head>
        <title>
          High-Efficiency Sodium Tripolyphosphate (STPP) - GlobalWash Industries
        </title>
        <meta
          name="title"
          content="High-Efficiency Sodium Tripolyphosphate (STPP) - GlobalWash Industries"
        />
        <meta
          name="description"
          content="Boost the performance of your cleaning products with high-efficiency Sodium Tripolyphosphate (STPP) from GlobalWash Industries. Ideal for detergents and industrial cleaners, STPP offers excellent water-softening and anti-redeposition properties. Contact us for premium STPP."
        />
        <meta
          name="keywords"
          content="GlobalWash Industries, Sodium Tripolyphosphate, STPP, Water softening, Detergent ingredient, Cleaning agents, Anti-redeposition, Industrial cleaners, High-purity STPP"
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
            "name": "High-Efficiency Sodium Tripolyphosphate (STPP)",
            "description": "Boost the performance of your cleaning products with high-efficiency Sodium Tripolyphosphate (STPP) from GlobalWash Industries. Ideal for detergents and industrial cleaners, STPP offers excellent water-softening and anti-redeposition properties.",
            "brand": {
              "@type": "Brand",
              "name": "GlobalWash Industries"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "GlobalWash Industries",
              "logo": "http://www.globalwashindustries.com/logo.png",
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
            "productID": "SODIUM-TRIPOLYPHOSPHATE-STPP"
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
            src="/assets/sodium-tripolyphosphate.webp"
            alt="Surfactants"
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
              High-Efficiency Sodium <br /> Tripolyphosphate (STPP)
            </h2>
          </div>
        </div>
        <div className={styles.servicesContent}>
          <div className={`container ${styles.contentContainer}`}>
            <div className={styles.orangeBg}></div>
            <div className={styles.contentHolder}>
              <h3 className="green-h3">Description</h3>
              <p className="body">
                Boost the performance of your cleaning products with our
                high-efficiency Sodium Tripolyphosphate (STPP). Known for its
                excellent water-softening and anti-redeposition properties, STPP
                is a key ingredient in many detergents and cleaning agents. It
                helps to prevent the formation of insoluble salts, which can
                interfere with the cleaning process, and keeps dirt and grime
                suspended in the wash water, preventing them from redepositing
                on fabrics.
              </p>
              <p className="body">
                Our STPP is of high purity and consistency, ensuring optimal
                performance and effectiveness in your formulations. It is widely
                used in both household and industrial cleaning products,
                providing a reliable solution for enhanced cleaning power.
              </p>

              <h3 className="green-h3">Applications</h3>

              <ul>
                <li>
                  <p className="body">Laundry detergents</p>
                </li>
                <li>
                  <p className="body">Automatic dishwasher detergents</p>
                </li>
                <li>
                  <p className="body">Industrial cleaners</p>
                </li>
                <li>
                  <p className="body">Water treatment</p>
                </li>
                <li>
                  <p className="body">Food preservation (as an emulsifier)</p>
                </li>
              </ul>
              <h3 className="green-h3">Benefits</h3>

              <ul>
                <li>
                  <p className="body">Excellent water-softening properties</p>
                </li>
                <li>
                  <p className="body">Prevents dirt redeposition</p>
                </li>
                <li>
                  <p className="body">Enhances cleaning power</p>
                </li>
                <li>
                  <p className="body">Consistent quality</p>
                </li>
                <li>
                  <p className="body">
                    Versatile industrial and household applications
                  </p>
                </li>
              </ul>
              <h3 className="green-h3">Technical Specifications</h3>

              <ul>
                <li>
                  <p className="body">
                    Sodium Tripolyphosphate: White, granular powder, soluble in
                    water
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

export default SodiumTripolyphosphate;
