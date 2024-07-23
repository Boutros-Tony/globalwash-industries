import styles from "../styles/about.module.scss";
import Menu from "../../component/menu/menu.component";
import MenuDark from "../../component/menu-dark/menu.component";
import Head from "next/head";
import AboutGetQuote from "../../component/about-get-quote/about-get-quote.component";
const About = () => {
  return (
    <>
      <Head>
        <title>
          About GlobalWash Industries - Your Trusted Partner in Detergent
          Laundry Powder
        </title>
        <meta
          name="title"
          content="About GlobalWash Industries - Your Trusted Partner in Detergent
          Laundry Powder"
        />
        <meta
          name="description"
          content="Learn about GlobalWash Industries, a globally recognized provider of superior quality detergent laundry powders and raw materials. Serving 25+ countries with a commitment to on-time delivery, quality excellence, and ethical sourcing since 2009."
        />
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
            "description": "GlobalWash Industries is a globally recognized provider of superior quality detergent laundry powders and raw materials for manufacturing laundry powder since 2009.",
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
      <section className={styles.aboutSection}>
        <div className={`container ${styles.aboutContainer}`}>
          <div className={styles.content}>
            <h2 className="green-h2">
              About Global <br className="desktop-br" /> Wash Industries
              <span>.</span>
            </h2>
            <div className={styles.textHolder}>
              <p className="body">
                Founded in 2009, Premium Sourcing International (PSI) is a
                globally recognized provider of superior quality detergent
                laundry powders and raw materials for manufacturing laundry
                powder.{" "}
              </p>
              <div className="horizontal-buttons">
                <button className="main-button">Our Values</button>
                <button className="secondary-button">Contact Us</button>
              </div>
            </div>
          </div>
          <img
            className={styles.globe}
            src="/assets/globe.webp"
            alt="globe"
            srcset=""
          />
          <div className={styles.columns}>
            <div className={styles.column}>
              <h1 className="green-h1">
                100<span>%</span>
              </h1>
              <span className={styles.border}></span>
              <h3 className="green-h3">
                On-Time <br className="desktop-br" /> Shipment
              </h3>
              <p className="body">
                We take pride in our consistent track record of delivering
                products promptly, ensuring that our clients receive their
                orders right on schedule.
              </p>
            </div>
            <div className={styles.column}>
              <h1 className="green-h1">
                25<span>+</span>
              </h1>
              <span className={styles.border}></span>
              <h3 className="green-h3">
                Countries <br className="desktop-br" /> Worldwide
              </h3>
              <p className="body">
                Our extensive global network spans over 25 countries, serving
                satisfied clients who trust us for reliable sourcing solutions
                across international markets.
              </p>
            </div>
            <div className={styles.column}>
              <h1 className="green-h1">
                15<span>+</span>
              </h1>
              <span className={styles.border}></span>
              <h3 className="green-h3">
                Years <br className="desktop-br" /> of Experience
              </h3>
              <p className="body">
                With over 15 years in the industry, our expertise is unmatched,
                enabling us to offer valuable insights and tailored solutions
                for our clients.
              </p>
            </div>
          </div>
          <p className="body">
            We operate from our dual headquarters in France and UAE, delivering
            exceptional services to our valued clients in over 25 countries
            across the globe.
          </p>
          <p className="body">
            At PSI, our mission is to provide an unparalleled quality experience
            to our customers. We are steadfastly committed to ensuring
            transparency throughout the sourcing process, helping businesses
            achieve significant cost savings and fulfilling our commitments
            professionally and on time. With our solutions, businesses can focus
            on what they do best, knowing they have a reliable and committed
            partner in PSI.
          </p>
          <AboutGetQuote />
          <h2 className="green-h2">
            Our Values<span>.</span>
          </h2>

          <div className={styles.valuesColumns}>
            <div className={styles.valuesColumn}>
              <h3 className="green-h3">
                Quality Excellence<span>.</span>
              </h3>
              <p className="body">
                We provide superior quality detergent laundry powders and raw
                materials, ensuring that our clients receive only the best. Our
                ISO 9001 certification reflects our unwavering commitment to
                continuous improvement and maintaining the highest standards.
              </p>
            </div>
            <div className={styles.valuesColumn}>
              <h3 className="green-h3">
                Global <br className="desktop-br" /> Reach<span>.</span>
              </h3>
              <p className="body">
                Operating from dual headquarters in France and the UAE, we serve
                clients across over 25 countries, providing services that meet
                diverse market needs while expanding our global footprint.
              </p>
            </div>
            <div className={styles.valuesColumn}>
              <h3 className="green-h3">
                Customer Focus<span>.</span>
              </h3>
              <p className="body">
                Our mission revolves around providing an unparalleled quality
                experience. By focusing on transparency and cost-effectiveness,
                we deliver solutions that allow businesses to concentrate on
                what they do best.
              </p>
            </div>

            <div className={styles.valuesColumn}>
              <h3 className="green-h3">
                Commitment <br className="desktop-br" /> to Growth<span>.</span>
              </h3>
              <p className="body">
                We empower clients to build and develop their brands through
                tailored products and customized packaging. Our adaptability and
                market insight help businesses achieve growth and success.
              </p>
            </div>
            <div className={styles.valuesColumn}>
              <h3 className="green-h3">
                Ethical Sourcing<span>.</span>
              </h3>
              <p className="body">
                We leverage our extensive network to source competitively priced
                raw materials from top manufacturers. Our commitment to ethical
                practices ensures full compliance with all applicable laws and
                regulations.
              </p>
            </div>
            <div className={styles.valuesColumn}>
              <h3 className="green-h3">
                Long-Term Partnerships<span>.</span>
              </h3>
              <p className="body">
                With a reliable and professional approach, we foster long-term
                value creation for our clients, contributing positively to the
                global supply chain and ensuring mutual success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
