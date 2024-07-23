import styles from "../../styles/services.module.scss";
import MenuDark from "../../../component/menu-dark/menu.component";
import Link from "next/link";
import Head from "next/head";
const Surfactants = () => {
  return (
    <>
      <Head>
        <title>
          High-Quality Surfactants: LABSA & SLES - GlobalWash Industries
        </title>
        <meta
          name="title"
          content="High-Quality Surfactants: LABSA & SLES - GlobalWash Industries"
        />
        <meta
          name="description"
          content="Enhance your cleaning products with premium surfactants LABSA and SLES from GlobalWash Industries. Ideal for household, personal care, and industrial applications, our surfactants ensure superior cleaning performance and high foam generation. Contact us for consistent quality surfactants."
        />
        <meta
          name="keywords"
          content="GlobalWash Industries, LABSA, SLES, Surfactants, High-quality surfactants, Cleaning products, Household cleaning, Personal care products, Industrial cleaners, Laundry detergents"
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
            "name": "High-Quality Surfactants: LABSA & SLES",
            "description": "Enhance your cleaning products with premium surfactants LABSA and SLES from GlobalWash Industries. Ideal for household, personal care, and industrial applications, our surfactants ensure superior cleaning performance and high foam generation.",
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
            "productID": "SURFACTANTS-LABSA-SLES"
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
            src="/assets/surfactants.webp"
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
              High-Quality Surfactants: <br /> LABSA & SLES
            </h2>
          </div>
        </div>
        <div className={styles.servicesContent}>
          <div className={`container ${styles.contentContainer}`}>
            <div className={styles.orangeBg}></div>
            <div className={styles.contentHolder}>
              <h3 className="green-h3">Description</h3>
              <p className="body">
                Enhance the efficiency of your cleaning products with our
                premium surfactants, Linear Alkylbenzene Sulfonate (LABSA) and
                Sodium Laureth Sulfate (SLES). Our surfactants are essential
                ingredients in a wide range of household and industrial cleaning
                applications. LABSA, a key component in laundry detergents and
                dishwashing liquids, provides excellent cleaning performance by
                breaking down grease and removing dirt effectively. SLES, known
                for its ability to create rich lather, is widely used in
                shampoos, body washes, and hand soaps, offering a gentle yet
                powerful cleaning action.
              </p>
              <p className="body">
                At our company, we prioritize quality and consistency. Our LABSA
                and SLES undergo rigorous quality control processes to ensure
                that each batch meets the highest industry standards. Whether
                you are formulating detergents, personal care products, or
                industrial cleaners, our surfactants deliver reliable and
                effective results.
              </p>
              <h3 className="green-h3">Applications</h3>

              <ul>
                <li>
                  <p className="body">Household cleaning products </p>
                </li>
                <li>
                  <p className="body">Personal care products</p>
                </li>
                <li>
                  <p className="body">Industrial cleaners</p>
                </li>
                <li>
                  <p className="body">Dishwashing liquids</p>
                </li>
                <li>
                  <p className="body">Laundry detergents</p>
                </li>
              </ul>
              <h3 className="green-h3">Benefits</h3>
              <ul>
                <li>
                  <p className="body"> Superior cleaning performances </p>
                </li>
                <li>
                  <p className="body">High foam generation</p>
                </li>
                <li>
                  <p className="body">Gentle on skin (SLES)</p>
                </li>
                <li>
                  <p className="body">Effective grease and dirt removal</p>
                </li>
                <li>
                  <p className="body">Consistent quality</p>
                </li>
              </ul>
              <h3 className="green-h3">Technical Specifications</h3>
              <ul>
                <li>
                  <p className="body">
                    {" "}
                    LABSA: Clear to light yellow liquid, anionic surfactant
                  </p>
                </li>
                <li>
                  <p className="body">
                    SLES: Clear to slightly hazy liquid, anionic surfactant
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

export default Surfactants;
