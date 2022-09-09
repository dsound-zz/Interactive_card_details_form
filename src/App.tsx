import styled from "styled-components";
import { CSSReset } from "./util/globalStyles";
import backgroundImage from "./assets/images/bg-main-desktop.png";
import backgroundImageMobile from "./assets/images/bg-main-mobile.png";
import CardFront from "./Components/CardFront";
import CardBack from "./Components/CardBack";

const AppContainer = styled.div`
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: 20vw 100%;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    background-image: url(${backgroundImageMobile});
    background-size: 100vw 30vh;
  }
`;

const AppGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: max-content 1.5rem max-content;
  min-height: 100vh;
  grid-template-areas: ". card-1 card-1 card-1 card-1 . form form form form" ". . . . . . form form form form" ". card-2 card-2 card-2 card-2 . form form form form";
  max-width: 49rem;
  empty-cells: ;
  place-content: center;
`;

const App = () => {
  return (
    <>
      <CSSReset />
      <AppContainer>
        <AppGrid>
          <CardFront />
          <CardBack />
        </AppGrid>
      </AppContainer>
    </>
  );
};

export default App;
