import { useState } from "react"
import styled from "styled-components"
import { CSSReset } from "./util/globalStyles"
import backgroundImage from "./assets/images/bg-main-desktop.png"
import backgroundImageMobile from "./assets/images/bg-main-mobile.png"
import CardFront from "./Components/CardFront"
import CardBack from "./Components/CardBack"
import Form from "./Components/Form"

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  max-width: 2400px;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: 30% 100%;
  @media (max-width: 768px) {
    background-size: 100% 30%;
    max-width: 100%;
  } ;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border: 2px blue solid;
  width: 100%;
  max-width: 1900px;

  padding: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
  } ;
`

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid green;
  width: 100%;
  max-width: 45rem;
  gap: 1rem;
  @media (max-width: 768px) {
    justify-content: center;
    width: 95%;
  } ;
`

const App = () => {
  const [showSubmitMessage, shouldShowSubmitMessage] = useState<boolean>(false)
  return (
    <>
      <CSSReset />
      <AppContainer>
        <Row>
          <CardContainer>
            <CardFront />

            <CardBack />
          </CardContainer>
          <Form
            showSubmitMessage={showSubmitMessage}
            shouldShowSubmitMessage={shouldShowSubmitMessage}
          />
        </Row>
      </AppContainer>
    </>
  )
}

export default App
