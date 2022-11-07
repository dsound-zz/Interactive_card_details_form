import styled from "styled-components"
import cardBackImage from "../assets/images/bg-card-back.png"
import { colors } from "../util/globalStyles"

type CardBackProps = {
  cvc: string
}

const CardContainer = styled.div`
  aspect-ratio: 5/3;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  align-self: flex-end;
  width: 100%;
  max-width: 25rem;
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
  font-size: 1.2rem;
  width: 100%;
  max-width: 100px;
  flex: 0 1 5.5rem;
  @media (max-width: 768px) {
    flex: 0 1 3rem;
    font-size: 0.8rem;
  }
`
const CardBack = ({ cvc }: CardBackProps) => {
  console.log("cardback")
  return (
    <CardContainer>
      <CardCode>{cvc || "007"}</CardCode>
    </CardContainer>
  )
}

export default CardBack
