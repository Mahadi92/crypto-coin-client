import Script from "next/script"

/* -------------
    All styles
  -------------- */
//global styles
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/global/globals.css';
import '../styles/global/global.scss';
import '../styles/footer.scss';
//page styles
import '../styles/home.scss';
//components styles
import "../styles/WalletSlider.scss"

import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossorigin="anonymous" />

      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp

