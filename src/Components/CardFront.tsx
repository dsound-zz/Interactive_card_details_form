import styled from "styled-components";
import cardFrontImage from "../assets/images/bg-card-front.png";

const CardContainer = styled.div`
  display: flex;
  position: absolute;
  top: 25%;
  left: 10%;
  width: 100%;
  height: 100vh;
  background-image: url(${cardFrontImage});
  background-repeat: no-repeat;
`;

const CardFront = () => {
  console.log("cardfront");
  return (
    <CardContainer>
      <div>CArd front</div>
    </CardContainer>
  );
};

export default CardFront;
