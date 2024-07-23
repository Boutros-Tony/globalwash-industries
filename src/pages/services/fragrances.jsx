import styles from "../../styles/services.module.scss";
import MenuDark from "../../../component/menu-dark/menu.component";
import Link from "next/link";
import Head from "next/head";
const Fragrances = () => {
  return (
    <>
      <Head>
        <title>
          Captivating Fragrances for Diverse Applications - GlobalWash
          Industries
        </title>
        <meta
          name="title"
          content="Captivating Fragrances for Diverse Applications - GlobalWash Industries"
        />
        <meta
          name="description"
          content="Enhance your products with captivating fragrances from GlobalWash Industries. Ideal for personal care, household products, and industrial applications. Choose from floral, fruity, woody, and fresh notes to create a memorable experience. Contact us for high-quality fragrances."
        />
        <meta
          name="keywords"
          content="GlobalWash Industries, Fragrances, Captivating fragrances, Personal care fragrances, Household product fragrances, Industrial fragrances, High-quality scents, Aromatic options, Customizable fragrances"
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
            "name": "Captivating Fragrances for Diverse Applications",
            "description": "Enhance your products with captivating fragrances from GlobalWash Industries. Ideal for personal care, household products, and industrial applications. Choose from floral, fruity, woody, and fresh notes to create a memorable experience.",
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
            "productID": "FRAGRANCES-DIVERSE-APPLICATIONS"
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
            src="/assets/fragrances.webp"
            alt="Fragrances"
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
              Captivating Fragrances <br />
              for Diverse Applications
            </h2>
          </div>
        </div>
        <div className={styles.servicesContent}>
          <div className={`container ${styles.contentContainer}`}>
            <div className={styles.orangeBg}></div>
            <div className={styles.contentHolder}>
              <h3 className="green-h3">Description</h3>
              <p className="body">
                Enhance your products with our captivating fragrances. Our
                high-quality fragrances are designed to add a unique and
                pleasant scent to a wide range of products, including personal
                care items, household products, and industrial applications.
                Whether you are formulating a new shampoo, creating a luxurious
                body lotion, or developing a scented cleaning product, our
                fragrances offer a wide range of aromatic options to suit your
                needs.
              </p>
              <p className="body">
                We work with leading fragrance houses to ensure that our scents
                are of the highest quality and consistency. Our fragrance
                portfolio includes floral, fruity, woody, and fresh notes,
                allowing you to create products that appeal to your target
                audience. Discover the perfect scent to elevate your
                formulations and create a memorable experience for your
                customers.
              </p>
              <h3 className="green-h3">Applications</h3>

              <ul>
                <li>
                  <p className="body">
                    Personal care products (shampoos, body washes, lotions)
                  </p>
                </li>
                <li>
                  <p className="body">
                    Household products (cleaners, air fresheners)
                  </p>
                </li>
                <li>
                  <p className="body">
                    Industrial applications (industrial cleaners, air
                    fresheners)
                  </p>
                </li>
                <li>
                  <p className="body">Candles and diffusers</p>
                </li>
                <li>
                  <p className="body">Cosmetics</p>
                </li>
              </ul>
              <h3 className="green-h3">Benefits</h3>
              <ul>
                <li>
                  <p className="body">High-quality and consistent fragrances</p>
                </li>
                <li>
                  <p className="body">Wide range of aromatic options</p>
                </li>
                <li>
                  <p className="body">Enhances product appeal</p>
                </li>
                <li>
                  <p className="body">Customizable scent profiles</p>
                </li>
                <li>
                  <p className="body">Suitable for various applications</p>
                </li>
              </ul>
              <h3 className="green-h3">Fragrance Categories</h3>
              <ul>
                <li>
                  <p className="body">Floral</p>
                </li>
                <li>
                  <p className="body">Fruity</p>
                </li>
                <li>
                  <p className="body">Woody</p>
                </li>
                <li>
                  <p className="body">Fresh</p>
                </li>
                <li>
                  <p className="body">Oriental</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Fragrances;
