import Image from "next/image";
import Link from "next/link";

const FacilitiesCard = ({ data }) => {
  return (
    <div className="facilities_card__container">
      {
        data.map((card, i) => {
          return (
            <div key={i} className="facilities_card__wrapper">
              <div className="fc__card_illustration_wrapper">
                <div className="fc__card_illustration1"></div>
                <div className="fc__card_illustration2"></div>
                <div className="fc__card_illustration3"></div>
              </div>
              <FacilityCard card={card} />
            </div>
          )
        })
      }
    </div>
  );
};

const FacilityCard = ({ card }) => {
  const { cardHeading, cardParagraph, cardImage, cardBtnLink, cardBtnText } = card;
  return (
    <div className="facilities_card">
      <div className="fc__content">
        <h3 className="fc__header">{cardHeading}</h3>
        <p className="fc__paragraph">{cardParagraph}</p>
        {
          cardImage &&
          <Image src={cardImage} layout="responsive" width="100%" height="30" alt="" />
        }
      </div>
      <Link href={cardBtnLink}>
        <a className="fc__btn">{cardBtnText}</a>
      </Link>
    </div>
  )
}

export default FacilitiesCard;