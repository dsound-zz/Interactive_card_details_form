import styled from "styled-components"
import Button from "../util/FormComponents/Button"
import { colors, isMobile } from "../util/globalStyles"
import { CardDetailTypes, ErrorProps } from "../util/types"
import SubmitMessage from "./SubmitMessage"

type FormProps = {
  showSubmitMessage: boolean
  shouldShowSubmitMessage: (boolean: boolean) => void
  handleCardDetails: (items: CardDetailTypes) => void
  cardDetails: CardDetailTypes
  formErrors: ErrorProps
  onSubmit: () => void
}

type FormContainerProps = {
  mobile: boolean
}

type InputProps = {
  small?: boolean
}

type FormRowProps = {
  wrap?: boolean
}

const FormContainer = styled.div<FormContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: ${(props) => (props.mobile ? "50rem" : "30rem")};
  width: 100%
  padding: 1rem 0.5rem 1rem 0.5rem;
  gap: 1rem 0;
`

const FormRow = styled.div<FormRowProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  border: solid 1px orange;
`

const InputWrapper = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  flex: 1;
  width: ${(props) => (props.small ? "40%" : "100%")};
`

const Label = styled.label`
  color: ${colors.darkViolet};
  font-size: 1.3rem;
  white-space: nowrap;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  } ;
`

const Input = styled.input<InputProps>`
  border: 1px solid ${colors.darkGrey};
  border-radius: 5px;
  outline: none;
  padding: 1rem;
  width: 100%;
  margin: 0.5rem;
`

const ErrorRow = styled.div`
  display: flex;
  flex-direction: row;
`

const ErrorText = styled.div`
  color: ${colors.red};
  font-size: 0.8rem;
  margin-left: 1rem;
`

const Form = ({
  showSubmitMessage,
  shouldShowSubmitMessage,
  handleCardDetails,
  cardDetails,
  formErrors,
  onSubmit,
}: FormProps) => {
  console.log("form")
  console.log(cardDetails)
  return (
    <>
      {showSubmitMessage ? (
        <SubmitMessage shouldShowSubmitMessage={shouldShowSubmitMessage} />
      ) : (
        <FormContainer mobile={isMobile}>
          <FormRow>
            <InputWrapper>
              <Label>CARDHOLDER NAME</Label>
              <Input
                name='name'
                type='text'
                value={cardDetails?.name}
                placeholder='e.g. Jane Applesead'
                maxLength={30}
                onChange={(e: any) => handleCardDetails(e)}
              />
            </InputWrapper>
          </FormRow>
          <FormRow wrap>
            <InputWrapper>
              <Label>CARD NUMBER</Label>
              <Input
                name='cardNumber'
                type='text'
                value={cardDetails.cardNumber}
                placeholder='e.g. 1234 5678 9801 2345'
                maxLength={19}
                onChange={(e: any) => handleCardDetails(e)}
              />
              {/* <ErrorText>Wrong format, numbers only</ErrorText> */}
            </InputWrapper>
          </FormRow>
          <FormRow>
            <InputWrapper small>
              <FormRow
                wrap
                style={{
                  flexWrap: "wrap",
                  width: isMobile ? "9.5rem" : "100%",
                }}
              >
                <Label style={{ width: "100%" }}>EXP. DATE (MM/YY)</Label>{" "}
                <Input
                  name='month'
                  style={{
                    flex: isMobile ? "1 0 3.3rem" : "1 0 4rem",
                  }}
                  type='text'
                  value={cardDetails?.expDate.month}
                  placeholder='MM'
                  maxLength={2}
                  onChange={(e: any) => handleCardDetails(e)}
                />
                <Input
                  name='year'
                  style={{ flex: isMobile ? "1 0 3rem" : "1 0 4rem" }}
                  type='text'
                  value={cardDetails?.expDate.year}
                  placeholder='YY'
                  maxLength={2}
                  onChange={(e: any) => handleCardDetails(e)}
                />{" "}
                <ErrorRow>
                  {formErrors.month.isBlank && (
                    <ErrorText>Can't be blank</ErrorText>
                  )}
                  {formErrors.year.isBlank && (
                    <ErrorText>Can't be blankss</ErrorText>
                  )}
                </ErrorRow>
              </FormRow>
            </InputWrapper>
            <InputWrapper small>
              <FormRow wrap>
                <Label>CVC</Label>
                <Input
                  maxLength={3}
                  name='cvc'
                  type='text'
                  value={cardDetails?.cvc}
                  placeholder='e.g. 123'
                  onChange={(e: any) => handleCardDetails(e)}
                />
                {formErrors.cvc.isBlank && (
                  <ErrorText>Can't be blank</ErrorText>
                )}
                {formErrors.cvc.isMinLength && (
                  <ErrorText>Must be at least 3 numbers</ErrorText>
                )}
              </FormRow>
            </InputWrapper>
          </FormRow>
          <Button buttonText='Confirm' onClick={() => onSubmit()} />
        </FormContainer>
      )}
    </>
  )
}

export default Form
