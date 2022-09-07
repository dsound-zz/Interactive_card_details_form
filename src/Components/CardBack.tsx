import styled from "styled-components";
import cardBackImage from "../assets/images/bg-card-back.png";

const CardContainer = styled.div`
  display: flex;
  position: absolute;
  top: 60%;
  left: 18%;
  width: 100%;
  height: 100vh;
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
