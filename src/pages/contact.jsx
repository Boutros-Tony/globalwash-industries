import React, { useRef, useState } from "react";
import styles from "../styles/contact.module.scss";
import Link from "next/link";
import Head from "next/head";
import emailjs from "emailjs-com";
import MenuDark from "../../component/menu-dark/menu.component";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    const serviceID = "service_vq2n2ng";
    const templateID = "template_8davdpe";
    const userID = "KZEWz_E-ofjWVSuNt";

    emailjs.sendForm(serviceID, templateID, form.current, userID).then(
      (response) => {
        setLoading(false);
        setMessage("Email Sent Successfully!");
        form.current.reset();
      },
      (error) => {
        setLoading(false);
        setMessage("Failed to Send Email. Please try again later.");
      }
    );
  };

  return (
    <>
      <Head>
        <title>
          Contact GlobalWash Industries - Get in Touch for Quality Detergent
          Solutions
        </title>
        <meta
          name="title"
          content="Contact GlobalWash Industries - Get in Touch for Quality Detergent Solutions"
        />
        <meta
          name="description"
          content="Contact GlobalWash Industries to discuss your needs and discover how we can assist you. Whether it's a query about our products or a request for support, we're here to help. Call us at +961 3 334 443 or email info@globalwashindustries.com."
        />
        <meta
          name="keywords"
          content="GlobalWash Industries, Contact us, Detergent solutions, Product inquiry, Customer support, Quality assurance, Global trade partner, Phone, Email"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Structured Data */}
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
            "description": "Contact GlobalWash Industries to discuss your needs and discover how we can assist you. Whether it's a query about our products or a request for support, we're here to help.",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+961 3 334 443",
              "contactType": "Customer Service",
              "email": "info@globalwashindustries.com"
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
      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.content}>
            <h2 className="green-h2">
              Contact Us<span>.</span>
            </h2>
            <div className={styles.textHolder}>
              <p className="body">
                Choosing a trading partner is a critical decision. Your business
                deserves a partner that not only understands your unique needs
                but is also committed to meeting them in a flexible,
                responsible, and innovative manner. At Premium Sourcing
                International, we believe we are that partner.
              </p>
            </div>
          </div>
          <div className={styles.contactBox}>
            <div className={styles.contactInfo}>
              <p className="body-white">
                Reach out to discuss your needs and discover how we can assist
                you. Whether it's a query about our products or a request for
                support, we're just an email or call away. Contact us
                today—we're ready to help!
              </p>
              <ul>
                <li>
                  <Link href="/" className="body-white">
                    <img src="/assets/phone-icon.svg" alt="Phone Icon" />
                    +961 3 334 443
                  </Link>
                </li>
                <li>
                  <Link href="/" className="body-white">
                    <img src="/assets/mail-icon.svg" alt="Phone Icon" />
                    info@globalwashindustries.com
                  </Link>
                </li>
                <li>
                  <Link href="/" className="body-white">
                    <img src="/assets/address-icon.svg" alt="Phone Icon" />
                    Address
                  </Link>
                </li>
              </ul>
              <div className={styles.social}>
                <Link href="/">
                  <svg
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.8623 2.44944C18.1941 2.73329 17.4669 2.93758 16.7179 3.01715C17.4955 2.5622 18.0779 1.84345 18.3557 0.995766C17.626 1.42324 16.8265 1.723 15.9929 1.88173C15.6445 1.51493 15.2231 1.22272 14.7549 1.02331C14.2868 0.823895 13.782 0.721556 13.2719 0.722665C11.2083 0.722665 9.54866 2.36987 9.54866 4.39125C9.54866 4.67511 9.5836 4.95896 9.64038 5.23206C6.55039 5.07293 3.7945 3.61926 1.96234 1.39359C1.62851 1.95509 1.45356 2.59443 1.45572 3.24509C1.45572 4.51813 2.11302 5.64064 3.11536 6.30081C2.52467 6.2779 1.94781 6.11802 1.43169 5.83417V5.87933C1.43169 7.66201 2.71137 9.13934 4.41687 9.47911C4.09664 9.56102 3.76722 9.60292 3.43637 9.60383C3.19397 9.60383 2.96468 9.58018 2.7332 9.54792C3.20489 11.0016 4.57847 12.0574 6.21409 12.0918C4.93442 13.0789 3.33155 13.6595 1.59111 13.6595C1.27883 13.6595 0.990579 13.6487 0.691406 13.6143C2.34231 14.6573 4.30113 15.2594 6.41063 15.2594C13.2588 15.2594 17.0061 9.67264 17.0061 4.82348C17.0061 4.66435 17.0061 4.50522 16.9952 4.34609C17.7202 3.82355 18.3557 3.17627 18.8623 2.44944Z"
                      fill="#008080"
                    />
                  </svg>
                </Link>
                <Link href="/">
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.44622 0.354317C6.41506 0.309716 6.72396 0.299805 9.1919 0.299805C11.6598 0.299805 11.9687 0.310542 12.9368 0.354317C13.9048 0.398093 14.5655 0.552546 15.1437 0.776378C15.7491 1.00517 16.2984 1.3628 16.7527 1.82534C17.2152 2.27878 17.572 2.82721 17.8 3.43346C18.0246 4.01163 18.1782 4.67239 18.2228 5.63875C18.2674 6.60924 18.2774 6.91815 18.2774 9.38526C18.2774 11.8532 18.2666 12.1621 18.2228 13.1309C18.1791 14.0973 18.0246 14.7581 17.8 15.3362C17.572 15.9426 17.2146 16.4919 16.7527 16.946C16.2984 17.4085 15.7491 17.7654 15.1437 17.9933C14.5655 18.218 13.9048 18.3716 12.9384 18.4162C11.9687 18.4608 11.6598 18.4707 9.1919 18.4707C6.72396 18.4707 6.41506 18.46 5.44622 18.4162C4.47985 18.3724 3.81909 18.218 3.24093 17.9933C2.63461 17.7653 2.08527 17.4079 1.63115 16.946C1.16893 16.4923 0.811241 15.9432 0.583019 15.3371C0.359186 14.7589 0.205559 14.0981 0.160958 13.1318C0.116357 12.1613 0.106445 11.8524 0.106445 9.38526C0.106445 6.91732 0.117183 6.60842 0.160958 5.6404C0.204733 4.67239 0.359186 4.01163 0.583019 3.43346C0.811578 2.82728 1.16954 2.27822 1.63198 1.82451C2.08546 1.36239 2.63424 1.00471 3.2401 0.776378C3.81827 0.552546 4.47985 0.398919 5.44622 0.354317ZM12.8633 1.9897C11.9051 1.94592 11.6177 1.93684 9.1919 1.93684C6.76609 1.93684 6.47865 1.94592 5.52055 1.9897C4.63431 2.03017 4.1536 2.17802 3.83313 2.30273C3.40942 2.46793 3.1063 2.66368 2.78831 2.98167C2.48687 3.27492 2.25489 3.63192 2.10938 4.02649C1.98466 4.34696 1.83681 4.82767 1.79634 5.71391C1.75256 6.67201 1.74348 6.95944 1.74348 9.38526C1.74348 11.8111 1.75256 12.0985 1.79634 13.0566C1.83681 13.9429 1.98466 14.4236 2.10938 14.744C2.25474 15.138 2.48684 15.4956 2.78831 15.7889C3.08152 16.0903 3.43916 16.3224 3.83313 16.4678C4.1536 16.5925 4.63431 16.7404 5.52055 16.7808C6.47865 16.8246 6.76526 16.8337 9.1919 16.8337C11.6185 16.8337 11.9051 16.8246 12.8633 16.7808C13.7495 16.7404 14.2302 16.5925 14.5507 16.4678C14.9744 16.3026 15.2775 16.1068 15.5955 15.7889C15.897 15.4956 16.1291 15.138 16.2744 14.744C16.3991 14.4236 16.547 13.9429 16.5875 13.0566C16.6312 12.0985 16.6403 11.8111 16.6403 9.38526C16.6403 6.95944 16.6312 6.67201 16.5875 5.71391C16.547 4.82767 16.3991 4.34696 16.2744 4.02649C16.1092 3.60278 15.9135 3.29966 15.5955 2.98167C15.3022 2.68025 14.9452 2.44828 14.5507 2.30273C14.2302 2.17802 13.7495 2.03017 12.8633 1.9897ZM8.03144 12.1861C8.67953 12.4558 9.40118 12.4923 10.0731 12.2891C10.7451 12.0859 11.3257 11.6557 11.7157 11.0721C12.1057 10.4884 12.281 9.78739 12.2116 9.08883C12.1422 8.39027 11.8325 7.73747 11.3352 7.24192C11.0183 6.92515 10.635 6.6826 10.2131 6.53172C9.79109 6.38085 9.34093 6.32541 8.89497 6.3694C8.44901 6.41338 8.01835 6.5557 7.634 6.7861C7.24964 7.0165 6.92115 7.32926 6.67218 7.70185C6.4232 8.07444 6.25993 8.4976 6.19413 8.94087C6.12832 9.38413 6.16161 9.83647 6.29161 10.2653C6.4216 10.6942 6.64507 11.0889 6.94591 11.421C7.24676 11.7531 7.6175 12.0144 8.03144 12.1861ZM5.88975 6.08311C6.3234 5.64947 6.83821 5.30548 7.40479 5.07079C7.97138 4.83611 8.57864 4.71532 9.1919 4.71532C9.80517 4.71532 10.4124 4.83611 10.979 5.07079C11.5456 5.30548 12.0604 5.64947 12.4941 6.08311C12.9277 6.51676 13.2717 7.03157 13.5064 7.59815C13.7411 8.16473 13.8618 8.772 13.8618 9.38526C13.8618 9.99853 13.7411 10.6058 13.5064 11.1724C13.2717 11.739 12.9277 12.2538 12.4941 12.6874C11.6183 13.5632 10.4304 14.0552 9.1919 14.0552C7.95336 14.0552 6.76554 13.5632 5.88975 12.6874C5.01397 11.8116 4.52196 10.6238 4.52196 9.38526C4.52196 8.14671 5.01397 6.9589 5.88975 6.08311ZM14.8976 5.41079C15.005 5.30942 15.0911 5.18752 15.1506 5.0523C15.2101 4.91709 15.2418 4.77131 15.244 4.6236C15.2461 4.47589 15.2186 4.32924 15.1631 4.19235C15.1076 4.05546 15.0251 3.93111 14.9207 3.82665C14.8162 3.72219 14.6918 3.63975 14.555 3.58421C14.4181 3.52868 14.2714 3.50117 14.1237 3.50332C13.976 3.50548 13.8302 3.53725 13.695 3.59675C13.5598 3.65625 13.4379 3.74228 13.3365 3.84974C13.1394 4.05873 13.0314 4.33633 13.0356 4.6236C13.0398 4.91087 13.1558 5.1852 13.359 5.38836C13.5621 5.59151 13.8364 5.70749 14.1237 5.71168C14.411 5.71587 14.6886 5.60793 14.8976 5.41079Z"
                      fill="#008080"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className={styles.contactForm}>
              <form ref={form} onSubmit={sendEmail}>
                <div className={styles.doubleInput}>
                  <div className={styles.inputHolder}>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="first_name" required />
                  </div>
                  <div className={styles.inputHolder}>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="last_name" required />
                  </div>
                </div>
                <div className={styles.doubleInput}>
                  <div className={styles.inputHolder}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="reply_to" required />
                  </div>
                  <div className={styles.inputHolder}>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input type="text" name="phone_number" required />
                  </div>
                </div>
                <label htmlFor="subject">Select Subject</label>
                <div className={styles.radioHolder}>
                  <div className={styles.radio}>
                    <input
                      type="radio"
                      name="subject"
                      value="General Inquiry"
                      required
                    />
                    <label htmlFor="generalInquiry">General Inquiry</label>
                  </div>
                  <div className={styles.radio}>
                    <input
                      type="radio"
                      name="subject"
                      value="Product Support"
                      required
                    />
                    <label htmlFor="productSupport">Product Support</label>
                  </div>
                  <div className={styles.radio}>
                    <input
                      type="radio"
                      name="subject"
                      value="Partnership"
                      required
                    />
                    <label htmlFor="partnership">Partnership</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" name="subject" value="Other" required />
                    <label htmlFor="other">Other</label>
                  </div>
                </div>
                <div className={styles.textArea}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    placeholder="Write Your Message"
                    name="message"
                    required
                    cols="20"
                    rows="10"
                  ></textarea>
                </div>
                {message && (
                  <p className={!loading ? styles.success : styles.error}>
                    {message}
                  </p>
                )}
                <button
                  className="main-button"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Send"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
