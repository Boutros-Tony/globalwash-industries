import styles from "../../styles/services.module.scss";
import MenuDark from "../../../component/menu-dark/menu.component";
import Link from "next/link";
import Head from "next/head";
const BleachingAgents = () => {
  return (
    <>
      <Head>
        <title>
          Effective Bleaching Agents: Sodium Percarbonate - GlobalWash
          Industries
        </title>
        <meta
          name="title"
          content="Effective Bleaching Agents: Sodium Percarbonate - GlobalWash Industries"
        />
        <meta
          name="description"
          content="Achieve brilliant whiteness with Sodium Percarbonate from GlobalWash Industries. Ideal for laundry detergents and stain removers, it offers strong oxidizing properties for effective stain removal and brightens fabrics. Environmentally friendly and chlorine-free. Contact us for high-quality Sodium Percarbonate."
        />
        <meta
          name="keywords"
          content="GlobalWash Industries, Sodium Percarbonate, Bleaching agents, Laundry detergents, Stain removers, All-purpose cleaners, Effective stain removal, Brightens fabrics, Environmentally friendly, Chlorine-free"
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
            "name": "Effective Bleaching Agents: Sodium Percarbonate",
            "description": "Achieve brilliant whiteness with Sodium Percarbonate from GlobalWash Industries. Ideal for laundry detergents and stain removers, it offers strong oxidizing properties for effective stain removal and brightens fabrics. Environmentally friendly and chlorine-free.",
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
            "productID": "BLEACHING-AGENTS-SODIUM-PERCARBONATE"
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
            src="/assets/bleaching-agents.webp"
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
              Effective Bleaching Agents: <br />
              Sodium Percarbonate
            </h2>
          </div>
        </div>
        <div className={styles.servicesContent}>
          <div className={`container ${styles.contentContainer}`}>
            <div className={styles.orangeBg}></div>
            <div className={styles.contentHolder}>
              <h3 className="green-h3">Description</h3>
              <p className="body">
                Achieve brilliant whiteness with our effective bleaching agent,
                Sodium Percarbonate. Known for its strong oxidizing properties,
                Sodium Percarbonate is a granular, crystalline solid that
                releases hydrogen peroxide when dissolved in water. This makes
                it an excellent choice for laundry detergents, stain removers,
                and all-purpose cleaners. It effectively removes stubborn stains
                and brightens fabrics, delivering a powerful cleaning action
                without the harshness of chlorine-based bleaches.
              </p>
              <p className="body">
                Our Sodium Percarbonate is of high purity and consistency,
                ensuring reliable performance in your formulations. It is
                environmentally friendly, breaking down into water, oxygen, and
                soda ash, making it a sustainable choice for green cleaning
                products.
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
                  <p className="body">Laundry detergents</p>
                </li>
                <li>
                  <p className="body">Stain removers</p>
                </li>
                <li>
                  <p className="body">All-purpose cleaners</p>
                </li>
                <li>
                  <p className="body">Carpet cleaners</p>
                </li>
                <li>
                  <p className="body">Deck and patio cleaners</p>
                </li>
              </ul>
              <h3 className="green-h3">Benefits</h3>

              <ul>
                <li>
                  <p className="body">Strong oxidizing properties</p>
                </li>
                <li>
                  <p className="body">Effective stain removal</p>
                </li>
                <li>
                  <p className="body">Brightens fabrics</p>
                </li>
                <li>
                  <p className="body">Environmentally friendly</p>
                </li>
                <li>
                  <p className="body">Chlorine-free</p>
                </li>
              </ul>
              <h3 className="green-h3">Technical Specifications</h3>

              <ul>
                <li>
                  <p className="body">
                    Sodium Percarbonate: White, granular powder, releases
                    hydrogen peroxide in water
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

export default BleachingAgents;
