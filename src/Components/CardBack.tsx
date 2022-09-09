import styled from "styled-components";
import cardBackImage from "../assets/images/bg-card-back.png";
import { colors } from "../util/globalStyles";

const CardContainer = styled.div`
  grid-area: card-2;
  aspect-ration: 3/2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  max-width: 100%;
  min-height: 10rem;
  transform: translate(3rem, 2rem);
  background-image: url(${cardBackImage});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  @media (max-width: 768px) {
    width: 80vw;
    transform: translate(3rem, -25rem);
  }
`;

const CardCode = styled.div`
  margin-right: 2rem;
  color: ${colors.white};
`;
const CardBack = () => {
  console.log("cardback");
  return (
    <CardContainer>
      <CardCode>007</CardCode>
    </CardContainer>
  );
};

export default CardBack;
