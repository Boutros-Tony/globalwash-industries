import "@/styles/globals.scss";
import { Onest } from "next/font/google";
import Menu from "../../component/menu/menu.component";
import Footer from "../../component/footer/footer.component";
import Head from "next/head";
const onest = Onest({
  family: "Onest",
  subsets: ["latin"],
  weights: ["100", "200", "300", "400", "500", "600", "900"], // Add the desired font weights,
  variable: "--font-onest",
});
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/assets/favicon.png" />
      </Head>
      <style jsx global>{`
        html {
          font-family: ${onest.style.fontFamily};
        }
      `}</style>

      <Component {...pageProps} />
      <Footer />
    </>
  );
}
