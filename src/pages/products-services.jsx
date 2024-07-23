import styles from "../styles/products-services.module.scss";
import Link from "next/link";
import GetAQuote from "../../component/get-a-quote/get-a-quote.component";
import Head from "next/head";
import MenuDark from "../../component/menu-dark/menu.component";
const ProductsServices = () => {
  return (
    <>
      <Head>
        <title>
          Our Products and Services - Premium Detergent Solutions by GlobalWash
          Industries
        </title>
        <meta
          name="title"
          content="Our Products and Services - Premium Detergent Solutions by GlobalWash Industries"
        />
        <meta
          name="description"
          content="Explore GlobalWash Industries' high-quality detergent solutions and comprehensive support. From tailored detergent powders and essential raw materials to dedicated OEM and logistic services, we enhance your product capabilities and streamline operations. Contact us for a quote today."
        />
        <meta
          name="keywords"
          content="GlobalWash Industries, Detergent solutions, Detergent laundry powder, Raw materials for detergent, OEM services, Logistic services, Surfactants, Builders, Bleaching agents, Quality detergent, Custom packaging"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "GlobalWash Industries",
            "url": "http://www.globalwashindustries.com",
            "logo": "http://www.globalwashindustries.com/logo.png",
            "description": "Explore GlobalWash Industries' high-quality detergent solutions and comprehensive support. From tailored detergent powders and essential raw materials to dedicated OEM and logistic services.",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone":"+961 3 334 443",
              "contactType": "Customer Service"
            },
            "sameAs": [
              "https://www.facebook.com/globalwashindustries",
              "https://www.linkedin.com/company/globalwashindustries",
              "https://twitter.com/globalwashind"
            ]
          }
        `,
          }}
        />
      </Head>
      <MenuDark />
      <section className={styles.productSection}>
        <div className={`container`}>
          <div className={styles.content}>
            <h2 className="green-h2">
              Our Products <br /> and Services<span>.</span>
            </h2>
            <div className={styles.textHolder}>
              <p className="body">
                At Premium Sourcing International, we are committed to providing
                high-quality detergent solutions and comprehensive support to
                meet the diverse needs of our global clientele. From tailored
                detergent powders to essential raw materials and dedicated OEM
                and logistic services, our offerings are designed to enhance
                your product capabilities and streamline your operations.
              </p>
            </div>
          </div>
          <h3 className="green-h3">Detergent Laundry Powder</h3>
          <h3 className="green-h3">Raw Materials for Detergent Production</h3>
          <h3 className="green-h3">OEM and Logistic Services</h3>
          <div className={styles.productsBox}>
            <img
              src="/assets/detergent-laundry-powder.webp"
              alt="Detergent Laundry Powder"
            />
            <div className={styles.productsContent}>
              <h3 className="green-h3">Detergent Laundry Powder</h3>
              <p className="body">
                At Premium Sourcing International, we specialize in the supply
                of a wide range of detergent laundry powders. With different
                formulations available, we can tailor our products to suit your
                specific needs. We offer the flexibility of using your own
                formulation or, alternatively, we can provide formulation
                suggestions based on our extensive industry experience. Our
                detergent laundry powders come in various package sizes, from as
                small as 15g to as large as 50 kg, and we offer custom packaging
                solutions with printed designs as per your specifications.
              </p>
            </div>
          </div>
          <div id="raw" className={styles.productsBox}>
            <img
              src="/assets/raw-materials.webp"
              alt="Raw Materials for Detergent Production"
            />
            <div className={styles.productsContent}>
              <h3 className="green-h3">
                Raw Materials for Detergent Production
              </h3>
              <p className="body">
                In addition to finished products, we also supply a broad
                spectrum of raw materials essential for the manufacture of
                detergent powders. These include:
              </p>
              <ul>
                <li>
                  <Link className="body" href="/services/surfactants">
                    Surfactants (Linear Alkylbenzene Sulfonate - LABSA,Sodium
                    Laureth Sulfate - SLES)
                  </Link>
                </li>
                <li>
                  <Link className="body" href="/services/reliable-builders">
                    Builders (Soda Ash Light, Sodium Silicate Solid)
                  </Link>
                </li>
                <li>
                  <Link className="body" href="/services/bleaching-agents">
                    Bleaching Agents (Sodium Percarbonate)
                  </Link>
                </li>
                <li>
                  <Link className="body" href="/services/sodium-sulphate">
                    Sodium Sulphate Anhydrous
                  </Link>
                </li>
                <li>
                  <Link
                    className="body"
                    href="/services/sodium-tripolyphosphate"
                  >
                    Sodium Tripolyphosphate (STPP)
                  </Link>
                </li>
                <li>
                  <Link className="body" href="/services/caustic-soda">
                    Caustic Soda Flakes/Pearls
                  </Link>
                </li>
                <li>
                  <Link className="body" href="/services/fragrances">
                    Fragrances
                  </Link>
                </li>
                <li>
                  <Link className="body" href="/services/optical-brighteners">
                    Optical brighteners
                  </Link>
                </li>
              </ul>
              <p className="body">
                We procure these materials from reliable manufacturers across
                the globe, ensuring consistent quality at competitive prices.
              </p>
            </div>
          </div>
          <div className={styles.productsBox}>
            <img src="/assets/oem.webp" alt="OEM and Logistic Services" />
            <div className={styles.productsContent}>
              <h3 className="green-h3">OEM and Logistic Services</h3>
              <p className="body">
                We understand the importance of brand identity, and that's why
                we offer Original Equipment Manufacturer (OEM) services. Our
                team will work closely with you to align the product with your
                brand, from formulation to packaging design.
              </p>
              <p className="body">
                Additionally, we offer logistic services for both sea and air
                shipments. As your trusted partner, we can manage the logistics
                of your orders, ensuring they reach their destination
                efficiently and on time.
              </p>
            </div>
          </div>
        </div>
        <GetAQuote />
      </section>
    </>
  );
};

export default ProductsServices;
