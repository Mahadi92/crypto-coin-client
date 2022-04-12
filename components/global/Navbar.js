import Link from 'next/link';
import Image from "next/image";
import navData from "../../data/navbarData.json";
import { RiGlobalLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg py-4" style={{ backgroundColor: "#F4F5FA" }}>
      <div className="container-fluid c_container">
        <Link href="/">
          <a className="navbar-brand">
            <Image src="/static/brand_logo.png" width="150" height="30" alt="Crypto Coin" />
          </a>
        </Link>
        <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon navbar-toggler-icon-custom"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            {
              navData.map((item, i) => {
                return (
                  <li key={i} className="nav-item">
                    <Link href={item.link}>
                      <a className="nav-link pe-4 pe-xl-5 text-dark">{item.linkText}</a>
                    </Link>
                  </li>
                )
              })
            }
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <RiGlobalLine size="25px" />
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li>
                  <Link href="/dashboard">
                    <a className="dropdown-item">Dashboard</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;