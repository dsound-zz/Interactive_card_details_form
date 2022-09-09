import styled from "styled-components";
import cardFrontImage from "../assets/images/bg-card-front.png";
import { colors } from "../util/globalStyles";

type CircleProps = {
  large?: boolean;
};

const CardContainer = styled.div`
  grid-area: card-1;
  aspect-ration: 3/2;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  grid-template-areas: "circles circles . . . ." "number  number number number number number" " name name . . expDate expDate";
  min-height: 11rem;
  max-width: 100%;
  background-image: url(${cardFrontImage});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  @media (max-width: 768px) {
  }
`;

const CircleContainer = styled.div`
  grid-area: circles;
  display: flex;
  align-items: center;
  transform: translate(0.1rem, 0.5rem);
  justify-content: flex-start;
  @media (max-width: 768px) {
  }
`;

const Circle = styled.div<CircleProps>`
  background: ${(props) => props.large && `${colors.white}`};
  border-radius: 50%;
  margin-left: 1.5rem;
  border: ${colors.white} solid 1px;
  width: ${(props) => (props.large ? "40px" : "25px")};
  height: ${(props) => (props.large ? "40px" : "25px")};
`;

const CardNumber = styled.div`
  grid-area: number;
  transform: translate(1.2rem, 1.3rem);
  color: ${colors.white};
  font-size: 1rem;
  letter-spacing: 0.3rem;
`;

const CardName = styled.p`
  grid-area: name;
  transform: translate(0.8rem, 1.5rem);
  color: ${colors.white};
  font-size: 0.8rem;
`;

const CardDate = styled.p`
  grid-area: expDate;
  transform: translate(2.5rem, 1.5rem);
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
      <CardNumber>3433 3432 3432 3433</CardNumber>
      <CardName>Demian Sims</CardName>
      <CardDate>03/25</CardDate>
    </CardContainer>
  );
};

export default CardFront;
