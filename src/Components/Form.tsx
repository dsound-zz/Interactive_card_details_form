import styled from "styled-components"
import Button from "../util/FormComponents/Button"
import { colors } from "../util/globalStyles"
import SubmitMessage from "./SubmitMessage"

type FormProps = {
  showSubmitMessage: boolean
  shouldShowSubmitMessage: (boolean: boolean) => void
}

type InputProps = {
  small?: boolean
}

const FormContainer = styled.div`
  grid-area: form;
  display: flex;
  flex-direction: column;
  margin-top: 8rem;
  gap: 5rem;
  max-width: 35rem;
`

const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 2rem;
`

const InputWrapper = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.small ? "40%" : "100%")};
`

const Label = styled.label`
  color: ${colors.darkViolet};
  font-size: 1.5rem;
`

const Input = styled.input<InputProps>`
  border: 1px solid ${colors.darkGrey};
  border-radius: 5px;
  outline: none;
  padding: 1rem;
  width: 100%;
  max-width: 30rem;
  margin-top: 0.5rem;
`

const Form = ({ showSubmitMessage, shouldShowSubmitMessage }: FormProps) => {
  console.log("form")

  return (
    <>
      {showSubmitMessage ? (
        <SubmitMessage shouldShowSubmitMessage={shouldShowSubmitMessage} />
      ) : (
        <FormContainer>
          <FormRow>
            <InputWrapper>
              <Label>CARDHOLDER NAME</Label>
              <Input type='text' placeholder='e.g. Jane Applesead' />
            </InputWrapper>
          </FormRow>
          <FormRow>
            <InputWrapper>
              <Label>CARD NUMBER</Label>
              <Input type='text' placeholder='e.g. 1234 5678 9801 2345' />
            </InputWrapper>
          </FormRow>
          <FormRow>
            <InputWrapper small>
              <Label>EXP. DATE (MM/YY)</Label>
              <FormRow>
                {" "}
                <Input type='text' placeholder='MM' />{" "}
                <Input type='text' placeholder='YY' />{" "}
              </FormRow>
            </InputWrapper>
            <InputWrapper small>
              <Label>CVC</Label>
              <Input type='text' placeholder='e.g. 123' />
            </InputWrapper>
          </FormRow>
          <Button buttonText='Confirm' onClick={() => console.log("click")} />
        </FormContainer>
      )}
    </>
  )
}

export default Form
