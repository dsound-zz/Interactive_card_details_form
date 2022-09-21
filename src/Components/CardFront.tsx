import styled from "styled-components"
import cardFrontImage from "../assets/images/bg-card-front.png"
import { colors } from "../util/globalStyles"
import { ReactComponent as CardLogo } from "../assets/images/card-logo.svg"

const CardContainer = styled.div`
  aspect-ratio: 5/3;
  display: grid;
  grid-template-columns: minmax(repeat(6, 1fr));
  grid-template-rows: max-content 1rem max-content;
  grid-template-areas: "logo logo . . . ." "number  number number number number number" " name name . . expDate expDate";
  grid-gap: 1rem 0;
  align-self: flex-start;
  width: 100%;
  max-width: 25rem;
  background-image: url(${cardFrontImage});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  // border: 1px solid pink;
  @media (max-width: 768px) {
    order: 2;
    width: 80%;
    z-index: 1;
    transform: translate(-0.5rem, -4rem);
  } ;
`

const CardLogoContainer = styled.div`
  grid-area: logo;
  height: 30%;
  width: 30%;
`

const CardNumber = styled.div`
  grid-area: number;
  color: ${colors.white};
  font-size: 1.3rem;
  letter-spacing: 0.8rem;
  @media (max-width: 768px) {
    // transform: translate(-0.4rem, -2rem);
    // font-size: 0.7rem;
    // letter-spacing: 0.4rem;
  }
`

const CardName = styled.p`
  grid-area: name;
  color: ${colors.white};
  font-size: 1.2rem;
`

const CardDate = styled.p`
  grid-area: expDate;
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
      {/* <CardNumber>3433 3432 3432 3433</CardNumber>
      <CardName>Demian Sims</CardName>
      <CardDate>03/25</CardDate> */}
    </CardContainer>
  )
}

export default CardFront
