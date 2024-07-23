import Head from "next/head";
import MenuDark from "../../component/menu-dark/menu.component";
import styles from "@/styles/Home.module.scss";
import HomeWhyUs from "../../component/home-why-us/home-why-us.component";
import HomeMain from "../../component/home-main/home-main.component";
import HomeAboutUs from "../../component/home-about-us/home-about-us.component";
import HomeRequestQuote from "../../component/home-request-quote/home-request-quote.component";
import ProductsServices from "../../component/products-services/products-services.component";
export default function Home() {
  return (
    <>
      <Head>
        <title>
          GlobalWash Industries - Leading Global Provider of Detergent Laundry
          Powder & Raw Materials
        </title>
        <meta
          name="title"
          content="GlobalWash Industries - Leading Global Provider of Detergent Laundry Powder & Raw Materials"
        />
        <meta
          name="description"
          content="Partner with GlobalWash Industries for top-quality detergent laundry powder and raw materials. ISO 9001 certified, serving 25+ countries with affordable excellence and trusted OEM services."
        />
        <meta
          name="keywords"
          content="GlobalWash Industries, Detergent laundry powder, Raw materials for detergent production, OEM services, ISO 9001 certified, Competitive pricing, Quality control, Global trade partner"
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
            "logo": "http://www.globalwashindustries.com/white-logo.svg",
            "description": "GlobalWash Industries is a leading global provider of detergent laundry powder and raw materials for manufacturing laundry powder since 2009.",
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
      <HomeMain />
      <section className={styles.squareSection}>
        <div className={`container ${styles.squaresContainer}`}>
          <div className={styles.square}>
            <div className={styles.squareBg}></div>
            <div className={styles.contentHolder}>
              <h3 className="green-h3">
                Global <br className="desktop-br" /> Presence<span>.</span>
              </h3>
              <p className="body">
                We have a strong global presence in 25+ countries, focusing on
                responsible and innovative trading to continuously create new
                value and opportunities.
              </p>
            </div>
          </div>
          <div className={styles.square}>
            <div className={styles.squareBg}></div>
            <div className={styles.contentHolder}>
              <h3 className="green-h3">
                Affordable <br className="desktop-br" /> Excellence
                <span>.</span>
              </h3>
              <p className="body">
                Our unique quality-focused approach, complemented by our China
                office's on-site quality control, ensures superior product
                quality while offering competitive pricing.
              </p>
            </div>
          </div>
          <div className={styles.square}>
            <div className={styles.squareBg}></div>
            <div className={styles.contentHolder}>
              <h3 className="green-h3">
                Certified <br className="desktop-br" /> Excellence<span>.</span>
              </h3>
              <p className="body">
                Our ISO 9001 certified operations at Premium Sourcing
                International highlight our commitment to constant improvement
                and upholding the highest business conduct and ethical
                standards.
              </p>
            </div>
          </div>
          <div className={styles.square}>
            <div className={styles.squareBg}></div>
            <div className={styles.contentHolder}>
              <h3 className="green-h3">
                Trusted <br className="desktop-br" /> Partner<span>.</span>
              </h3>
              <p className="body">
                Specializing in brand creation, development, and competitive raw
                material sourcing, our transparent, cost-effective, and prompt
                service has garnered global business trust.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ProductsServices />
      <HomeAboutUs />
      <HomeRequestQuote />
      <HomeWhyUs />
    </>
  );
}
