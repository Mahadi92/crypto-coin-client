import Link from 'next/link';
import Image from "next/image";

const Sidebar = () => {

  return (
    <div className="sidebar__container">
      <div className="sidebar__image">
        <Link href="/" passHref>
          <Image src="/static/brand_logo.png" width="180" height="30" alt="" />
        </Link>
      </div>
      <div className="sidebar__link_wrapper">
        <Link href="/">
          <a className="sidebar__link">Dashboard</a>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;