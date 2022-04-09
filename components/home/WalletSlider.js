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
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
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
          prevEl: '.wallet_slider__right_arr',
          prevEl: '.wallet_slider__left_arr'
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {
          data.map((card, i) => {
            const { cardIcon, cardHeading, paragraph, linkList } = card;
            return (
              <SwiperSlide key={i}>
                <div className="ws__card">
                  <div className="ws__card_content">
                    <div className="ws__card_heading">
                      <Image src={cardIcon} width="40" height="40" alt="" />
                      <h4 className="cardHeading">{cardHeading}</h4>
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
              </SwiperSlide>
            )
          })
        }
      </Swiper>
      <span className="wallet_slider__left_arr"><HiOutlineChevronLeft /></span>
      <span className="wallet_slider__right_arr"><HiOutlineChevronRight /></span>
    </div >
  );
};

export default WalletSlider;