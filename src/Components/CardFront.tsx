import styled from "styled-components";
import cardFrontImage from "../assets/images/bg-card-front.png";
import { colors } from "../util/globalStyles";

type CircleProps = {
  large?: boolean;
};

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  position: absolute;
  top: 25%;
  left: 10%;
  right: 0;
  bottom: 0;
  background-image: url(${cardFrontImage});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 15px;
`;

const CircleContainer = styled.div`
  grid-row: 1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 100px;
`;

const Circle = styled.div<CircleProps>`
  background: ${(props) => props.large && `${colors.white}`};
  border-radius: 50%;
  border: ${colors.white} solid 1px;
  width: ${(props) => (props.large ? "40px" : "25px")};
  height: ${(props) => (props.large ? "40px" : "25px")};
`;

const CardNumber = styled.div`
  grid-row: 2;
  grid-column: 1/4;
  margin-top: 70px;
  padding: 30px;
  max-width: 100%;
  color: ${colors.white};
  letter-spacing: 0.4em;
  margin-left: 5px;
  border: purple solid 1px;
`;

const CardName = styled.p`
  grid-row: 3;
  grid-column: 1;
  color: ${colors.white};
  font-size: 0.8rem;
  margin-left: 35px;
`;

const CardDate = styled.p`
  grid-row: 3;
  grid-column: 3;
  color: ${colors.white};
  font-size: 0.8rem;
  margin-left: 70px;
`;

const CardFront = () => {
  console.log("cardfront");
  return (
    <CardContainer>
      <CircleContainer>
        <Circle large />
        <Circle />
      </CircleContainer>
      <CardNumber>2343 3433 3432 3432</CardNumber>
      <CardName>Demian Sims</CardName>
      <CardDate>01/01</CardDate>
    </CardContainer>
  );
};

export default CardFront;
