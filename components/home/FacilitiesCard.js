import Image from "next/image";
import Link from "next/link";

const FacilitiesCard = ({ data }) => {
  return (
    <div className="facilities_card__container">
      {
        data.map((card, i) => {
          return (
            <div key={i} className="facilities_card__wrapper">
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
      <div className="facilities_card__content">
        <h3>{cardHeading}</h3>
        <p>{cardParagraph}</p>
        {
          cardImage &&
          <Image src={cardImage} width="100%" height="40" alt="" />
        }
      </div>
      <Link href={cardBtnLink}>
        <a className="facilities_card__btn">{cardBtnText}</a>
      </Link>
    </div>
  )
}

export default FacilitiesCard;