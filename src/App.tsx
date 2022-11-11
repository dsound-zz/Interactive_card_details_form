import { useState, useEffect } from "react"
import CardFront from "./Components/CardFront"
import CardBack from "./Components/CardBack"
import Form from "./Components/Form"
import { cardFormatter } from "./util/CardFormatter"
import { CardProps, ErrorProps } from "./util/types"
import "./App.css"
import SubmitMessage from "./Components/SubmitMessage"

const initialErrorsState = {
  cardNumber: { wrongLength: false },
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
      // @ts-ignore
      cardNumber: { wrongLength: cardDetails.cardNumber.length !== 19 },
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
      <main className='grid'>
        <CardFront cardDetails={cardDetails} />

        <CardBack cvc={cardDetails.cvc} />

        {showSubmitMessage ? (
          <SubmitMessage resetForm={resetForm} />
        ) : (
          <Form
            handleCardDetails={handleCardDetails}
            cardDetails={cardDetails}
            formErrors={formErrors}
            onSubmit={onSubmit}
          />
        )}
      </main>
    </>
  )
}

export default App
