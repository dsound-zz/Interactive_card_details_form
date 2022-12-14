import { useState, useEffect } from "react"
import styled from "styled-components"
import { CSSReset } from "./util/globalStyles"
import backgroundImage from "./assets/images/bg-main-desktop.png"
import backgroundImageMobile from "./assets/images/bg-main-mobile.png"
import CardFront from "./Components/CardFront"
import CardBack from "./Components/CardBack"
import Form from "./Components/Form"
import { cardFormatter } from "./util/CardFormatter"
import { CardProps, ErrorProps } from "./util/types"

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
  flex: 1;
  width: 100%;
  max-width: 40rem;
  padding: 3rem;
  grid-gap: 1rem;
  @media (max-width: 768px) {
    justify-content: center;
    width: 95%;
  } ;
`

const initialErrorsState = {
  month: { isBlank: false },
  year: { isBlank: false },
  cvc: { isBlank: false, isMinLength: false },
}

const initialCardDetails = {
  name: "",
  cardNumber: "",
  expDate: { month: "", year: "" },
  cvc: "",
}

const App = () => {
  const [showSubmitMessage, shouldShowSubmitMessage] = useState<boolean>(false)
  const [cardDetails, setCardDetails] = useState<CardProps>(initialCardDetails)

  const [formErrors, setFormErrors] = useState<ErrorProps>(initialErrorsState)

  const handleCardDetails = (e: any) => {
    const { name, value } = e.target

    if (name === "month") {
      setCardDetails((prevState) => ({
        ...prevState,
        expDate: {
          ...prevState.expDate,
          month: value,
        },
      }))
    } else if (name === "year") {
      setCardDetails((prevState) => ({
        ...prevState,
        expDate: {
          ...prevState.expDate,
          year: value,
        },
      }))
    } else {
      setCardDetails((prevState) => ({
        ...prevState,
        [name]: name === "cardNumber" ? cardFormatter(value) : value,
      }))
    }
  }

  const onSubmit = () => {
    const setErrors = {
      month: { isBlank: !cardDetails.expDate.month },
      year: { isBlank: !cardDetails.expDate.year },
      cvc: {
        isBlank: !cardDetails.cvc,
        isMinLength: cardDetails.cvc.length !== 3,
      },
    }

    const flattenErrors = (obj = setErrors): any => {
      let result: [] = []
      Object.keys(obj).forEach((key) => {
        // @ts-ignore
        if (typeof obj[key] === "object") {
          // @ts-ignore
          flattenErrors(obj[key])
        }
        // @ts-ignore
        result.push(Object.values(obj[key]))
      })
      return result.reduce((a, b) => a.concat(b), [])
    }

    if (flattenErrors().includes(true)) {
      setFormErrors(setErrors)
    } else {
      shouldShowSubmitMessage(true)
    }
  }

  const resetForm = () => {
    shouldShowSubmitMessage(false)
    setFormErrors(initialErrorsState)
    setCardDetails(initialCardDetails)
  }

  // validate month and year entries
  useEffect(() => {
    if (
      parseInt(cardDetails.expDate.month) < 1 ||
      parseInt(cardDetails.expDate.month) > 12
    ) {
      setCardDetails((prevState) => ({
        ...prevState,
        expDate: { ...prevState.expDate, month: "" },
      }))
    }
    if (
      cardDetails.expDate.year.length === 2 &&
      parseInt(cardDetails.expDate.year) <
        parseInt(new Date().toDateString().slice(13, 15))
    ) {
      setCardDetails((prevState) => ({
        ...prevState,
        expDate: { ...prevState.expDate, year: "" },
      }))
    }
  }, [cardDetails.expDate.year, cardDetails.expDate.month])

  return (
    <>
      <CSSReset />
      <AppContainer>
        <Row>
          <CardContainer>
            <CardFront cardDetails={cardDetails} />

            <CardBack cvc={cardDetails.cvc} />
          </CardContainer>
          <Form
            showSubmitMessage={showSubmitMessage}
            resetForm={resetForm}
            handleCardDetails={handleCardDetails}
            cardDetails={cardDetails}
            formErrors={formErrors}
            onSubmit={onSubmit}
          />
        </Row>
      </AppContainer>
    </>
  )
}

export default App
