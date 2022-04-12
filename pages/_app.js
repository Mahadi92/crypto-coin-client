import Script from "next/script"
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

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
import "../styles/sidebar.scss";
import "../styles/quickGuideCard.scss";
import "../styles/facilitiesCard.scss";
import "../styles/walletCard.scss";

import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import Sidebar from "../components/global/Sidebar";

const MyApp = ({ Component, pageProps }) => {
  const [isDashboard, setIsDashboard] = useState(false);

  const router = useRouter()

  useEffect(() => {
    if (router.pathname.includes("dashboard")) {
      setIsDashboard(true);
    } else {
      setIsDashboard(false);
    }
  }, [router.pathname])



  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossorigin="anonymous" />

      {
        isDashboard ? (
          <main className="dashboard__container">

            <div className="dashboard__sidebar" >
              <Sidebar />
            </div>

            <div className="dashboard__content">
              <Component {...pageProps} />
            </div>

          </main>
        )
          :

          (
            <>
              <Navbar />
              <Component {...pageProps} />
              <Footer />
            </>
          )
      }
    </>
  )
}

export default MyApp

