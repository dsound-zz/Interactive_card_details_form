import styled from "styled-components";
import { CSSReset } from "./util/globalStyles";
import backgroundImage from "./assets/images/bg-main-desktop.png";
import backgroundImageMobile from "./assets/images/bg-main-mobile.png";
import CardsController from "./Components/CardsController";

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr 2fr;
  grid-template-rows: minmax(100px, auto);
  width: 100%;
  height: 100vh;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const LeftScreen = styled.div`
  grid-column: 1/2;
  background-image: url(${backgroundImage});
  padding: 0.5em;
  @media (max-width: 768px) {
    flex: 1;
    background-image: url(${backgroundImageMobile});
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
`;

const RightScreen = styled.div`
  grid-column: 2/4;
  padding: 0.5em;
  border: blue solid 1px;
  @media (max-width: 768px) {
    flex: 2;
    width: 100%;
  }
`;

function App() {
  return (
    <>
      <CSSReset />
      <AppContainer>
        <LeftScreen>left</LeftScreen>
        <RightScreen>right</RightScreen>
        <CardsController />
      </AppContainer>
    </>
  );
}

export default App;
