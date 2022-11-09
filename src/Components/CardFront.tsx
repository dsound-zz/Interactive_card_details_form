import cardFrontImage from "../assets/images/bg-card-front.png"
import { colors } from "../util/globalStyles"
import { ReactComponent as CardLogo } from "../assets/images/card-logo.svg"
import { CardDetailTypes } from "../util/types"
import "../App.css"

type CardFrontProps = {
  cardDetails: CardDetailTypes
}

const CardFront = ({ cardDetails }: CardFrontProps) => {
  const cardNumDisplay = (cardNum: string) => {
    return `${cardNum.slice(0, 4)} ${cardNum.slice(4, 8)} ${cardNum.slice(
      8,
      12
    )} ${cardNum.slice(12, 16)}`
  }

  return (
    <div className='card1'>
      <CardLogo width={80} className='card1__logo' />
      <div>
        {cardDetails.cardNumber.length ? (
          <div className='card1__card-number'>
            {cardNumDisplay(cardDetails.cardNumber)}
          </div>
        ) : (
          <div className='card1__card-number'>0000 0000 0000 0000</div>
        )}
      </div>
      <div className='card1__card-name'>
        {cardDetails.name || "Jane Appleseed"}
      </div>
      <div className='card1__card-expdate'>
        {cardDetails.expDate.month || "02"}/{cardDetails.expDate.year || "22"}
      </div>
    </div>
  )
}

export default CardFront
