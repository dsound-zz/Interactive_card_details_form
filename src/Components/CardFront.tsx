import styled from "styled-components"
import cardFrontImage from "../assets/images/bg-card-front.png"
import { colors } from "../util/globalStyles"
import { ReactComponent as CardLogo } from "../assets/images/card-logo.svg"
import { CardDetailTypes } from "../util/types"

type CardFrontProps = {
  cardDetails: CardDetailTypes
}

const CardContainer = styled.div`
  aspect-ratio: 5/3;
  display: grid;
  grid-template-columns: minmax(repeat(6, 1fr));
  grid-template-rows: max-content;
  grid-template-areas: "logo logo . . . ." "number  number number number number number" " name name . . expDate expDate";
  grid-gap: 2rem 0;
  align-self: flex-start;
  width: 100%;
  max-width: 25rem;
  padding: 1rem;
  background-image: url(${cardFrontImage});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  @media (max-width: 768px) {
    order: 2;
    grid-gap: 1.5rem;
    z-index: 1;
    transform: translate(-0.5rem, -4rem);
    width: 80%;
  } ;
`

const StyledCardLogo = styled(CardLogo)`
  grid-area: logo;
  width: 30%;
  height: auto;
  padding-top: 0.3rem;
  margin-left: 0.5rem;
  @media (max-width: 768px) {
    transform: scale(1.9);
  } ;
`

const CardNumber = styled.div`
  grid-area: number;
  color: ${colors.white};
  letter-spacing: 0.4rem;
  font-size: 1.2rem;
  margin-top: 1rem;
  margin-left: 1rem;
  @media (max-width: 768px) {
    font-size: 1rem;
    letter-spacing: 0.1rem;
    margin-top: 0.5rem;
  } ;
`

const CardName = styled.p`
  grid-area: name;
  color: ${colors.white};
  @media (max-width: 768px) {
    font-size: 0.8rem;
  } ;
`

const CardDate = styled.p`
  grid-area: expDate;
  color: ${colors.white};
  @media (max-width: 768px) {
    font-size: 0.7rem;
  } ;
`

const CardFront = ({ cardDetails }: CardFrontProps) => {
  console.log("cardfront")

  const cardNumDisplay = (cardNum: string) => {
    return `${cardNum.slice(0, 4)} ${cardNum.slice(4, 8)} ${cardNum.slice(
      8,
      12
    )} ${cardNum.slice(12, 16)}`
  }

  return (
    <CardContainer>
      <StyledCardLogo />
      <CardNumber>
        {cardDetails.cardNumber.length
          ? cardNumDisplay(cardDetails.cardNumber)
          : "0000 0000 0000 0000"}
      </CardNumber>
      <CardName>{cardDetails.name || "Jane Appleseed"}</CardName>
      <CardDate>
        {cardDetails.expDate.month || "02"}/{cardDetails.expDate.year || "22"}
      </CardDate>
    </CardContainer>
  )
}

export default CardFront
