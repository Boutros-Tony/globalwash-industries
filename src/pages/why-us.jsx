import React, { useState } from "react";
import styles from "../styles/why-us.module.scss";
import GetAQuote from "../../component/get-a-quote/get-a-quote.component";
import MenuDark from "../../component/menu-dark/menu.component";
import Head from "next/head";
const WhyUs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const tabsContent = [
    {
      title: "Unwavering Quality Assurance",
      content:
        "With our on-ground presence in China and a robust quality inspection process for every shipment, you don’t have to worry about the quality of products you receive. We're not just a supplier; we're your eyes on the ground, ensuring every shipment meets your expectations.",
      imgSrc: "/assets/unwavering-quality-assurance.webp",
    },
    {
      title: "Adaptability and Flexibility",
      content:
        "We understand that every business is unique, and so are its needs. That's why we adapt our services to fit your requirements. From helping you create a new brand to developing an existing one, we're flexible in how we work with you.",
      imgSrc: "/assets/adaptability-and-flexibility.webp",
    },
    {
      title: "Strong Sourcing Capabilities",
      content:
        "Our strong sourcing team and presence in China give us a competitive edge in procuring products. We leverage our extensive network and deep understanding of the market to source high-quality products at competitive prices.",
      imgSrc: "/assets/strong-sourcing-capabilities.webp",
    },
    {
      title: "Financial Support",
      content:
        "For our trusted clients, we offer the possibility of financing their orders. We believe in fostering long-term relationships and supporting our clients in their growth journey.",
      imgSrc: "/assets/financial-support.webp",
    },
    {
      title: "Proven Expertise",
      content:
        "As an ISO 9001 certified company with a presence in over 25 countries, we have a proven track record of delivering excellence. Our expertise spans across a wide range of detergent laundry powders and raw materials for manufacturing laundry powder.",
      imgSrc: "/assets/proven-expertise.webp",
    },
    {
      title: "Transparent and Ethical",
      content:
        "At Premium Sourcing International, we uphold the highest standards of business conduct and ethics. We ensure all our activities comply with applicable laws and regulations, and we're committed to maintaining complete transparency in our dealings.",
      imgSrc: "/assets/transparent-and-ethical.webp",
    },
  ];

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleTabSelect = (index) => {
    setActiveTab(index);
    setIsDropdownOpen(false);
  };

  return (
    <>
      <Head>
        <title>
          Why Choose GlobalWash Industries - Unwavering Quality & Proven
          Expertise
        </title>
        <meta
          name="title"
          content="Why Choose GlobalWash Industries - Unwavering Quality & Proven Expertise"
        />
        <meta
          name="description"
          content="Discover why GlobalWash Industries is the ideal partner for your business. We offer unwavering quality assurance, adaptability, strong sourcing capabilities, and transparent business practices. Contact us for a quote today."
        />
        <meta
          name="keywords"
          content="GlobalWash Industries, Why Choose Us, Quality assurance, Adaptability, Sourcing capabilities, Financial support, Proven expertise, Ethical business, Global trade partner"
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
            "description": "Discover why GlobalWash Industries is the ideal partner for your business. We offer unwavering quality assurance, adaptability, strong sourcing capabilities, and transparent business practices.",
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
      <section className={styles.whyUsSection}>
        <div className={styles.whyUsWrapper}>
          <div className={`container ${styles.whyUsContainer}`}>
            <h2 className="white-h2">
              Why Us<span>.</span>
            </h2>
            <p className="body-white">
              Choosing a trading partner is a critical decision. Your business
              deserves a partner that not only understands your unique needs but
              is also committed to meeting them in a flexible, responsible, and
              innovative manner. At Premium Sourcing International, we believe
              we are that partner.
            </p>
          </div>
        </div>
        <div className={styles.whyUsTabWrapper}>
          <div className={`container ${styles.tabsContainer}`}>
            <div className={styles.tabsButtonsHolder}>
              {tabsContent.map((tab, index) => (
                <button
                  key={index}
                  className={`display-2 ${styles.tabsButton} ${
                    activeTab === index ? styles.activeTabButton : ""
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab.title}
                </button>
              ))}
            </div>
            <div className={styles.dropdownWrapper}>
              <button
                onClick={handleDropdownToggle}
                className={styles.dropdownButton}
              >
                {tabsContent[activeTab].title}
                <img
                  src="/assets/down-arrow.svg"
                  alt="Dropdown icon"
                  width="20px"
                  className={`${styles.dropdownIcon} ${
                    isDropdownOpen ? styles.open : ""
                  }`}
                />
              </button>
              {isDropdownOpen && (
                <ul className={styles.dropdownMenu}>
                  {tabsContent.map((tab, index) => (
                    <li key={index} onClick={() => handleTabSelect(index)}>
                      {tab.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className={styles.whyUsTabsHolder}>
              {tabsContent.map((tab, index) => (
                <div
                  key={index}
                  className={`${styles.whyUsTab} ${
                    activeTab === index
                      ? styles.activeTabContent
                      : styles.inactiveTabContent
                  }`}
                >
                  <img src={tab.imgSrc} alt={tab.title} />
                  <div className={styles.tabTextHolder}>
                    <h3 className="orange-h3">{tab.title}</h3>
                    <p className="body">{tab.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <GetAQuote />
      </section>
    </>
  );
};

export default WhyUs;
