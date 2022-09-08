import styled from "styled-components";
import cardFrontImage from "../assets/images/bg-card-front.png";
import { colors } from "../util/globalStyles";

type CircleProps = {
  large?: boolean;
};

const CardContainer = styled.div`
  grid-column: 2;
  grid-row: 2;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  background-image: url(${cardFrontImage});
  background-repeat: no-repeat;
  padding: 0.5em;
  position: absolute;
  top: 250px;
  left: 180px;
  z-index: 2;
  width: 100%;
  height: 50%;
  @media (max-width: 768px) {
    display: grid;
    width: 100%;
    height: 50%;
    top: 200px;
    left: 5px;
    background-size: 75% 50%;
  }

`;

const CircleContainer = styled.div`
  grid-column: 1;
  grid-row: 1;
  display: flex; 
  flex-direction: row;
  justify-content: 'space-between';
  align-items: center;
  width: 50%;
  max-width: 300px;
  padding: 0.5em;
  border: 1px solid orange;
  @media (max-width: 768px) {
    height: 30%;
  }
`;

const Circle = styled.div<CircleProps>`
  background: ${(props) => props.large && `${colors.white}`};
  border-radius: 50%;
  margin-left: 20px;
  border: ${colors.white} solid 1px;
  width: ${(props) => (props.large ? "40px" : "25px")};
  height: ${(props) => (props.large ? "40px" : "25px")};
`;

const CardNumber = styled.div`
  grid-column: 1/3;
  grid-row: 2;
  padding: 20px;
  margin-top: 50px;
  color: ${colors.white};
  letter-spacing: 0.4em;
  border: purple solid 1px;
`;

const CardName = styled.p`
  grid-column: 1;
  grid-row: 3;
  margin-top: 10px;
  margin-left: 20px;
  color: ${colors.white};
  font-size: 0.8rem;
`;

const CardDate = styled.p`
  color: ${colors.white};
  font-size: 0.8rem;
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
