import styles from "../../styles/services.module.scss";
import MenuDark from "../../../component/menu-dark/menu.component";
import Link from "next/link";
import Head from "next/head";
const SodiumSulphate = () => {
  return (
    <>
      <Head>
        <title>
          Pure Sodium Sulphate Anhydrous for Various Applications - GlobalWash
          Industries
        </title>
        <meta
          name="title"
          content="Pure Sodium Sulphate Anhydrous for Various Applications - GlobalWash Industries"
        />
        <meta
          name="description"
          content="Explore the versatility of Pure Sodium Sulphate Anhydrous from GlobalWash Industries. Ideal for detergents, glass manufacturing, textile dyeing, and more, our high-purity Sodium Sulphate ensures reliable performance and quality. Contact us for premium Sodium Sulphate Anhydrous."
        />
        <meta
          name="keywords"
          content="GlobalWash Industries, Sodium Sulphate Anhydrous, Detergent filler, Glass manufacturing, Textile dyeing, Paper production, High-purity Sodium Sulphate, Industrial applications"
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
            "name": "Pure Sodium Sulphate Anhydrous for Various Applications",
            "description": "Explore the versatility of Pure Sodium Sulphate Anhydrous from GlobalWash Industries. Ideal for detergents, glass manufacturing, textile dyeing, and more, our high-purity Sodium Sulphate ensures reliable performance and quality.",
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
            "productID": "SODIUM-SULPHATE-ANHYDROUS"
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
            src="/assets/sodium-sulphate.webp"
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
              Pure Sodium Sulphate Anhydrous <br /> for Various Applications
            </h2>
          </div>
        </div>
        <div className={styles.servicesContent}>
          <div className={`container ${styles.contentContainer}`}>
            <div className={styles.orangeBg}></div>
            <div className={styles.contentHolder}>
              <h3 className="green-h3">Description</h3>
              <p className="body">
                Our Sodium Sulphate Anhydrous is a versatile compound used in a
                wide range of industries. From detergents and glass
                manufacturing to textile dyeing and paper production, our
                high-purity Sodium Sulphate Anhydrous ensures reliable
                performance and quality. This white, crystalline substance is
                highly soluble in water and is commonly used as a filler in
                powdered home laundry detergents, providing bulk and reducing
                the cost of the formulation.
              </p>
              <p className="body">
                In the glass industry, Sodium Sulphate Anhydrous helps to remove
                small air bubbles from molten glass, improving the clarity and
                quality of the final product. In textile dyeing, it acts as a
                leveling agent, ensuring even distribution of the dye.
              </p>

              <h3 className="green-h3">Applications</h3>

              <ul>
                <li>
                  <p className="body">Detergents</p>
                </li>
                <li>
                  <p className="body">Glass manufacturing</p>
                </li>
                <li>
                  <p className="body">Textile dyeing</p>
                </li>
                <li>
                  <p className="body">Paper production</p>
                </li>
                <li>
                  <p className="body">Pharmaceuticals</p>
                </li>
              </ul>
              <h3 className="green-h3">Benefits</h3>

              <ul>
                <li>
                  <p className="body">High solubility in water</p>
                </li>
                <li>
                  <p className="body">Acts as a filler in detergents</p>
                </li>
                <li>
                  <p className="body">
                    Removes air bubbles in glass manufacturing
                  </p>
                </li>
                <li>
                  <p className="body">
                    Ensures even dye distribution in textiles
                  </p>
                </li>
                <li>
                  <p className="body">Versatile industrial applications</p>
                </li>
              </ul>
              <h3 className="green-h3">Technical Specifications</h3>

              <ul>
                <li>
                  <p className="body">
                    Sodium Sulphate Anhydrous: White, crystalline solid, highly
                    soluble in water
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

export default SodiumSulphate;
