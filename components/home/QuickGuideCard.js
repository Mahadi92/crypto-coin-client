import Image from 'next/image';

const QuickGuideCard = ({ data }) => {
  return (
    <div className="quick_guide__card_wrapper">
      {
        data.map((card, i) => {
          const { image, cardHeading, cardParagraph } = card;
          return (
            <div key={i} className="quick_card">
              <div className="quick_card__img">
                <Image src={image} width="100" height="100" alt={cardHeading} />
              </div>
              <div className="quick_card__content">
                <h4 className="quick_card__heading">
                  {i + 1}. {cardHeading}
                </h4>
                <p className="quick_card__paragraph">{cardParagraph}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  );
};

export default QuickGuideCard;