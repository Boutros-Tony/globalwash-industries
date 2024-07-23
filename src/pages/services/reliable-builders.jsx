import styles from "../../styles/services.module.scss";
import MenuDark from "../../../component/menu-dark/menu.component";
import Link from "next/link";
import Head from "next/head";
const ReliableBuilders = () => {
  return (
    <>
      <Head>
        <title>
          Reliable Builders: Soda Ash Light & Sodium Silicate Solid - GlobalWash
          Industries
        </title>
        <meta
          name="title"
          content="Reliable Builders: Soda Ash Light & Sodium Silicate Solid - GlobalWash Industries"
        />
        <meta
          name="description"
          content="Optimize your detergent formulations with reliable builders from GlobalWash Industries. Soda Ash Light and Sodium Silicate Solid enhance cleaning power, soften water, and stabilize pH for superior detergent performance. Contact us for high-quality builders."
        />
        <meta
          name="keywords"
          content="GlobalWash Industries, Soda Ash Light, Sodium Silicate Solid, Builders, Detergent builders, Water softeners, Cleaning power, Laundry detergents, Glass manufacturing, Water treatment"
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
            "name": "Reliable Builders: Soda Ash Light & Sodium Silicate Solid",
            "description": "Optimize your detergent formulations with reliable builders from GlobalWash Industries. Soda Ash Light and Sodium Silicate Solid enhance cleaning power, soften water, and stabilize pH for superior detergent performance.",
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
            "productID": "BUILDERS-SODA-ASH-SODIUM-SILICATE"
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
            src="/assets/reliable-builders.webp"
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
              Reliable Builders: <br /> Soda Ash Light <br /> & Sodium Silicate
              Solid
            </h2>
          </div>
        </div>
        <div className={styles.servicesContent}>
          <div className={`container ${styles.contentContainer}`}>
            <div className={styles.orangeBg}></div>
            <div className={styles.contentHolder}>
              <h3 className="green-h3">Description</h3>
              <p className="body">
                Optimize your detergent formulations with our reliable builders,
                Soda Ash Light and Sodium Silicate Solid. Builders are essential
                in enhancing the cleaning power of detergents by softening water
                and improving soil removal. Soda Ash Light, also known as sodium
                carbonate, is widely used in the manufacture of glass,
                detergents, and other chemical products. Its ability to act as a
                water softener makes it a crucial component in laundry
                detergents, helping to prevent the build-up of minerals that can
                interfere with cleaning performance.
              </p>
              <p className="body">
                Our high-quality builders ensure consistent performance and
                stability in your products, providing an effective and
                economical solution for your cleaning needs.
              </p>
              <p className="body">
                Sodium Silicate Solid, also known as water glass, is used in a
                variety of industrial applications, including detergents,
                adhesives, and cements. Its unique properties help to stabilize
                the pH of the cleaning solution, improve soil suspension, and
                prevent the redeposition of dirt on fabrics.
              </p>
              <h3 className="green-h3">Applications</h3>

              <ul>
                <li>
                  <p className="body"> Laundry detergents</p>
                </li>
                <li>
                  <p className="body">Glass manufacturing</p>
                </li>
                <li>
                  <p className="body">Water treatment</p>
                </li>
                <li>
                  <p className="body">Adhesives and sealants</p>
                </li>
                <li>
                  <p className="body">Cements and ceramics</p>
                </li>
              </ul>
              <h3 className="green-h3">Benefits</h3>

              <ul>
                <li>
                  <p className="body">Enhances cleaning power</p>
                </li>
                <li>
                  <p className="body">Softens water</p>
                </li>
                <li>
                  <p className="body">Stabilizes pH</p>
                </li>
                <li>
                  <p className="body">Improves soil suspension</p>
                </li>
                <li>
                  <p className="body">Prevents dirt redeposition</p>
                </li>
              </ul>
              <h3 className="green-h3">Technical Specifications</h3>

              <ul>
                <li>
                  <p className="body">
                    Soda Ash Light: White, odorless powder, soluble in water
                  </p>
                </li>
                <li>
                  <p className="body">
                    Sodium Silicate Solid: White, crystalline solid, soluble in
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

export default ReliableBuilders;
