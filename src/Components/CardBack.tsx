import styled from "styled-components";
import cardBackImage from "../assets/images/bg-card-back.png";

const CardContainer = styled.div`
  grid-column: 2;
  grid-row: 3;
  background-image: url(${cardBackImage});
  background-repeat: no-repeat;
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
