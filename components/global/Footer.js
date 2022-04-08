import Link from "next/link";
import Image from "next/image";
import footerData from "../../data/footerData.json";
import { BsGithub, BsDiscord, BsFacebook, BsInstagram } from "react-icons/bs"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__band_info_container">
          <Link href="/" passHref>
            <Image src="/static/brand_logo.png" width="200" height="40" alt="" />
          </Link>
          <p>
            Living Ecosystem
            <br />
            Decentralized Token
          </p>
          <div className="footer__social_ico_wrapper">
            <a href="" target="_blank"><BsGithub size="25px" /></a>
            <a href="" target="_blank"><BsDiscord size="25px" /></a>
            <a href="" target="_blank"><BsFacebook size="25px" /></a>
            <a href="" target="_blank"><BsInstagram size="25px" /></a>
          </div>
        </div>
        <div className="footer__list_container">
          {
            footerData.map((list, i) => {
              return (
                <div key={i} className="footer__list">
                  <h4 className="footer__list_heading">{list?.footerListHeading}</h4>
                  <ul className="footer__list_ul">
                    {
                      list?.footerList.map((listItem, i) => {
                        return (
                          <li key={i}>
                            <Link href="/">
                              <a className="">{listItem.linkText}</a>
                            </Link>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              )
            })
          }
        </div>
        <div className="footer__social_ico_wrapper_mobile">
          <a href="" target="_blank"><BsGithub size="25px" /></a>
          <a href="" target="_blank"><BsDiscord size="25px" /></a>
          <a href="" target="_blank"><BsFacebook size="25px" /></a>
          <a href="" target="_blank"><BsInstagram size="25px" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;