import styled from "styled-components"
import { colors } from "../util/globalStyles"

type InputProps = {
  small?: boolean
}

const FormContainer = styled.div`
  grid-area: form;
  display: flex;
  flex-direction: column;
  gap: 5rem;
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
`

const Button = styled.button`
  background-color: ${colors.darkViolet};
  cursor: pointer;
  color: ${colors.white};
  font-size: 2rem;
  width: 100%;
  padding: 1rem;
  align-self: center;
  &:hover {
    color: rgba(255, 255, 255, 1);
    box-shadow: 0 5px 15px rgba(145, 92, 182, 0.4);
  }
`

const Form = () => {
  console.log("form")

  return (
    <FormContainer>
      <FormRow>
        <InputWrapper>
          <Label>CARDHOLDER NAME</Label>
          <Input type='text' />
        </InputWrapper>
      </FormRow>
      <FormRow>
        <InputWrapper>
          <Label>CARD NUMBER</Label>
          <Input type='text' />
        </InputWrapper>
      </FormRow>
      <FormRow>
        <InputWrapper small>
          <Label>EXP. DATE (MM/YY)</Label>
          <FormRow>
            {" "}
            <Input type='text' /> <Input type='text' />{" "}
          </FormRow>
        </InputWrapper>
        <InputWrapper small>
          <Label>CVC</Label>
          <Input type='text' />
        </InputWrapper>
      </FormRow>
      <Button>confirm</Button>
    </FormContainer>
  )
}

export default Form
