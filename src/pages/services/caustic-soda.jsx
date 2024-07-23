import styles from "../../styles/services.module.scss";
import MenuDark from "../../../component/menu-dark/menu.component";
import Link from "next/link";
import Head from "next/head";
const CausticSoda = () => {
  return (
    <>
      <Head>
        <title>
          Premium Caustic Soda Flakes/Pearls for Industrial Use - GlobalWash
          Industries
        </title>
        <meta
          name="title"
          content="Premium Caustic Soda Flakes/Pearls for Industrial Use - GlobalWash Industries"
        />
        <meta
          name="description"
          content="Discover the versatility of premium Caustic Soda Flakes and Pearls from GlobalWash Industries. Ideal for soap and detergent manufacturing, water treatment, and chemical processing. High-purity and consistent results. Contact us for high-quality Caustic Soda."
        />
        <meta
          name="keywords"
          content="GlobalWash Industries, Caustic Soda, Caustic Soda Flakes, Caustic Soda Pearls, Sodium Hydroxide, Industrial use, Soap manufacturing, Water treatment, Chemical processing, High-purity"
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
            "name": "Premium Caustic Soda Flakes/Pearls for Industrial Use",
            "description": "Discover the versatility of premium Caustic Soda Flakes and Pearls from GlobalWash Industries. Ideal for soap and detergent manufacturing, water treatment, and chemical processing. High-purity and consistent results.",
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
            "productID": "CAUSTIC-SODA-FLAKES-PEARLS"
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
            src="/assets/caustic-soda.webp"
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
              Premium Caustic Soda
              <br />
              Flakes/Pearls for Industrial Use
            </h2>
          </div>
        </div>
        <div className={styles.servicesContent}>
          <div className={`container ${styles.contentContainer}`}>
            <div className={styles.orangeBg}></div>
            <div className={styles.contentHolder}>
              <h3 className="green-h3">Description</h3>
              <p className="body">
                Our Caustic Soda Flakes and Pearls are essential for various
                industrial applications. From soap and detergent manufacturing
                to water treatment and chemical processing, our high-purity
                Caustic Soda ensures reliable and consistent results. Caustic
                Soda, also known as sodium hydroxide, is a strong base used in
                many chemical reactions, making it a versatile and valuable
                industrial chemical.
              </p>
              <p className="body">
                In the soap and detergent industry, Caustic Soda is used in the
                saponification process to convert fats and oils into soap. In
                water treatment, it helps to adjust pH levels and neutralize
                acidic water. Our Caustic Soda Flakes and Pearls are carefully
                produced and packaged to ensure the highest quality and safety
                standards.
              </p>

              <h3 className="green-h3">Applications</h3>

              <ul>
                <li>
                  <p className="body">Soap and detergent manufacturing</p>
                </li>
                <li>
                  <p className="body">Water treatment</p>
                </li>
                <li>
                  <p className="body">Chemical processing</p>
                </li>
                <li>
                  <p className="body">Pulp and paper production</p>
                </li>
                <li>
                  <p className="body">Food industry (as a cleaning agent)</p>
                </li>
              </ul>
              <h3 className="green-h3">Benefits</h3>

              <ul>
                <li>
                  <p className="body">High-purity</p>
                </li>
                <li>
                  <p className="body">Versatile industrial applications</p>
                </li>
                <li>
                  <p className="body">Reliable and consistent results</p>
                </li>
                <li>
                  <p className="body">Strong base for chemical reactions</p>
                </li>
                <li>
                  <p className="body">Safe and secure packaging</p>
                </li>
              </ul>
              <h3 className="green-h3">Technical Specifications</h3>

              <ul>
                <li>
                  <p className="body">
                    Caustic Soda Flakes: White, flaky solid, highly soluble in
                    water
                  </p>
                </li>
                <li>
                  <p className="body">
                    Caustic Soda Pearls: White, small spherical solid, highly
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

export default CausticSoda;
