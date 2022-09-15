import styled from "styled-components"
import cardFrontImage from "../assets/images/bg-card-front.png"
import { colors } from "../util/globalStyles"
import { ReactComponent as CardLogo } from "../assets/images/card-logo.svg"

const CardContainer = styled.div`
  grid-area: card-1;
  aspect-ratio: 3/2;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas: "logo logo . . . ." "number  number number number number number" " name name . . expDate expDate";
  padding: 2rem;
  max-width: 50rem;
  width: 100%;
  grid-gap: 3rem;
  max-height: 27rem;
  transform: translate(-2rem, 0.5rem);
  background-image: url(${cardFrontImage});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  @media (max-width: 768px) {
    // background-size: 80% 50%;
    // z-index: 1;
    // width: 100%;
    // max-height: 27rem;
    // transform: translate(1.5rem, 2rem);
  }
`

const CardLogoContainer = styled.div`
  grid-area: logo;
  height: 30%;
  width: 30%;
`

const CardNumber = styled.div`
  grid-area: number;
  transform: translate(3rem, 3rem);
  color: ${colors.white};
  font-size: 2rem;
  letter-spacing: 0.8rem;
  @media (max-width: 768px) {
    // transform: translate(-0.4rem, -2rem);
    // font-size: 0.7rem;
    // letter-spacing: 0.4rem;
  }
`

const CardName = styled.p`
  grid-area: name;
  transform: translate(3rem, 4rem);
  color: ${colors.white};
  font-size: 1.2rem;
`

const CardDate = styled.p`
  grid-area: expDate;
  transform: translate(5rem, 4rem);
  color: ${colors.white};
  font-size: 1.2rem;
`

const CardFront = () => {
  console.log("cardfront")
  return (
    <CardContainer>
      <CardLogoContainer>
        <CardLogo />
      </CardLogoContainer>
      <CardNumber>3433 3432 3432 3433</CardNumber>
      <CardName>Demian Sims</CardName>
      <CardDate>03/25</CardDate>
    </CardContainer>
  )
}

export default CardFront
