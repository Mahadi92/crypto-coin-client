import Image from 'next/image';
import Link from 'next/link';
import whatIsAkacoinData from "../data/home/whatIsAkacoinData.json";
import { BsArrowRight } from "react-icons/bs"

export default function Home() {

  // Second section data
  const { sectionHeading, subHeading, paragraph, link, linkText, img1, img2, videoLink } = whatIsAkacoinData;

  return (
    <main>
      <header>

      </header>

      <section className="home__dual_div_container">
        <h2 className="heading">{whatIsAkacoinData.sectionHeading}</h2>

        <div className="home_dd__content_wrapper">
          <div className="home_dd__subheading_wrapper">
            <h3>{whatIsAkacoinData.subHeading}</h3>
          </div>
          <div className="home_dd__paragraph_wrapper">
            <p>{whatIsAkacoinData.paragraph}</p>
            <Link href={whatIsAkacoinData.link}>
              <a className="home_ddp__link">{whatIsAkacoinData.linkText} <BsArrowRight size="25px" /></a>
            </Link>
          </div>
        </div>
        <div className="home_dd__img_wrapper">
          <div className="home_ddi__img1">
            <Image src={whatIsAkacoinData.img1} layout="responsive" width="80%" height="70" objectFit="content" alt="" />
          </div>
          <div className="home_ddi__img2">
            <Image src={whatIsAkacoinData.img2} layout="responsive" width="100%" height="38" alt="" />
          </div>
        </div>
      </section>
    </main>
  )
}
