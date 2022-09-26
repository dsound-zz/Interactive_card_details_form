import styled from "styled-components"
import cardFrontImage from "../assets/images/bg-card-front.png"
import { colors } from "../util/globalStyles"
import { ReactComponent as CardLogo } from "../assets/images/card-logo.svg"

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
  border: 1px red solid;
  @media (max-width: 768px) {
    transform: scale(1.9);
  } ;
`

const CardNumber = styled.div`
  grid-area: number;
  color: ${colors.white};
  letter-spacing: 0.6rem;
  margin-top: 1rem;
  @media (max-width: 768px) {
    font-size: 0.9rem;
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

const CardFront = () => {
  console.log("cardfront")
  return (
    <CardContainer>
      <StyledCardLogo />
      <CardNumber>3433 3432 3432 3433</CardNumber>
      <CardName>Demian Sims</CardName>
      <CardDate>03/25</CardDate>
    </CardContainer>
  )
}

export default CardFront
