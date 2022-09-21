import styled from "styled-components"
import cardBackImage from "../assets/images/bg-card-back.png"
import { colors } from "../util/globalStyles"

const CardContainer = styled.div`
  aspect-ratio: 5/3;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: flex-end;
  width: 100%;
  max-width: 25rem;
  border: purple solid 2px;
  background-image: url(${cardBackImage});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  @media (max-width: 768px) {
    order: 1;
    width: 80%;
    justify-self: center;
  } ;
`

const CardCode = styled.div`
  color: ${colors.white};
  font-size: 1.6rem;
  border: 2px solid pink;
  margin-right: 2rem;
  flex: 0 1 2rem;
  @media (max-width: 768px) {
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
