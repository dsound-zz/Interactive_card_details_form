import styled from "styled-components";
import { CSSReset } from "./util/globalStyles";
import backgroundImage from "./assets/images/bg-main-desktop.png";
import backgroundImageMobile from "./assets/images/bg-main-mobile.png";
import CardsController from "./Components/CardsController";

const AppContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  max-height: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftScreen = styled.div`
  flex: 0 0 480px;
  background-image: url(${backgroundImage});
  height: 100%;
  padding: 0.5em;
  @media (max-width: 768px) {
    max-width: 100%;
    background-image: url(${backgroundImageMobile});
  }
`;

const RightScreen = styled.div`
  flex: 0 1 75%;
  max-width: 100%;
  padding: 0.5em;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

function App() {
  return (
    <>
      <CSSReset />
      <AppContainer>
        <CardsController />
        <LeftScreen>left</LeftScreen>
        <RightScreen>right</RightScreen>
      </AppContainer>
    </>
  );
}

export default App;
