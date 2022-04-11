import Image from "next/image";
import Link from "next/link";

// Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { HiOutlineChevronLeft, HiOutlineChevronRight, HiOutlineArrowNarrowRight } from "react-icons/hi"


const WalletSlider = ({ data }) => {
  return (
    <div className="wallet_slider__container">
      <Swiper
        slidesPerView={1}
        spaceBetween={60}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: '.wallet_slider__left_arr',
          nextEl: '.wallet_slider__right_arr'
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {
          data.map((card, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="card__wrapper">
                  <div className="ws__card_illustration_wrapper">
                    <div className="ws__card_illustration1"></div>
                    <div className="ws__card_illustration2"></div>
                    <div className="ws__card_illustration3"></div>
                    <WsCard card={card} />
                  </div>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
      <span className="wallet_slider__left_arr"><HiOutlineChevronLeft size="40px" /></span>
      <span className="wallet_slider__right_arr"><HiOutlineChevronRight size="40px" /></span>
    </div >
  );
};

const WsCard = ({ card }) => {
  const { cardIcon, cardHeading, paragraph, linkList } = card;
  return (
    <div className="ws__card">
      <div className="ws__card_content">
        <div className="ws__card_heading">
          <Image src={cardIcon} width="40" height="40" alt="" />
          <h4 className="cardheading">{cardHeading}</h4>
        </div>
        <p className="ws__card_paragraph">{paragraph}</p>
        <div className="ws__card_link_list_wrapper">
          {
            linkList.map((linkItem, i) => {
              return (
                <Link href="/" key={i} passHref>
                  <Image src={linkItem.linkIcon} width="25" height="25" alt="" />
                </Link>
              )
            })
          }
        </div>
      </div>
      <Link href="/" passHref>
        <a className="ws__card_btn">
          <span>Choose Wallet</span>
          <HiOutlineArrowNarrowRight size="25px"
          />
        </a>
      </Link>
    </div>
  )
}

export default WalletSlider;