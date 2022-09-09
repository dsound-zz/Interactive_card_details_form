import styled from "styled-components";
import cardBackImage from "../assets/images/bg-card-back.png";

const CardContainer = styled.div`
  grid-area: card-2;
  aspect-ration: 3/2;
  display: grid;
  max-width: 100%;
  min-height: 10rem;
  transform: translate(3rem, 2rem);
  background-image: url(${cardBackImage});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  @media (max-width: 768px) {
  }
`;
const CardBack = () => {
  console.log("cardback");
  return (
    <CardContainer>
      <div>CArd back</div>
    </CardContainer>
  );
};

export default CardBack;
