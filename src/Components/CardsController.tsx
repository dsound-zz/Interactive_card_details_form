import styled from "styled-components";
import CardBack from "./CardBack";
import cardFrontImage from "../assets/images/bg-card-front.png";
import { colors } from "../util/globalStyles";

type CircleProps = {
  large?: boolean;
};

const CardContainer = styled.div`
  @media (max-width: 768px) {
  }
`;

const CardFront = styled.div`
  grid-area: card-1;
  aspect-ration: 3/2;
  border: orange 2px solid;
  background-image: url(${cardFrontImage});
  background-repeat: no-repeat;
`;

const CircleContainer = styled.div`
  @media (max-width: 768px) {
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

const CardNumber = styled.div``;

const CardName = styled.p`
  color: ${colors.white};
  font-size: 0.8rem;
`;

const CardDate = styled.p`
  color: ${colors.white};
  font-size: 0.8rem;
`;

const CardsController = () => {
  console.log("card container");

  return (
    <CardContainer>
      <CardFront>Hello</CardFront>
    </CardContainer>
  );
};

export default CardsController;
