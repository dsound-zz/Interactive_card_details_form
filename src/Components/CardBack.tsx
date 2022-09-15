import styled from "styled-components"
import cardBackImage from "../assets/images/bg-card-back.png"
import { colors } from "../util/globalStyles"

const CardContainer = styled.div`
  grid-area: card-2;
  aspect-ratio: 3/2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 2rem;
  max-width: 40rem;
  min-width: 20rem;
  width: 100%;
  grid-gap: 3rem;
  max-height: 27rem;
  transform: translate(3rem, 2rem);
  background-image: url(${cardBackImage});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  @media (max-width: 768px) {
    // width: 80%;
    // transform: translate(1.5rem, -31rem);
  }
`

const CardCode = styled.div`
  color: ${colors.white};
  font-size: 1.6rem;
  border: 2px solid pink;
  margin-right: 2rem;
  flex: 0 1 2rem;
  @media (max-width: 768px) {
    // font-size: 1rem;
    // transform: translate(4rem, 0.2rem);
  }
`
const CardBack = () => {
  console.log("cardback")
  return (
    <CardContainer>
      <CardCode>007</CardCode>
    </CardContainer>
  )
}

export default CardBack
