import styled from "styled-components"
import { colors } from "../util/globalStyles"

type InputProps = {
  small?: boolean
}

const FormContainer = styled.div`
  grid-area: form;
  display: flex;
  flex-flow: row wrap;
  padding: 0.5rem;
  justify-content: center;
  width: 35rem;
  border: 1px pink solid;
  @media (max-width: 768px) {
    transform: translate(0rem, -11rem);
  }
`

const InputWrapper = styled.div`
  flex: 0 1 30rem;
`

const Label = styled.label`
  color: ${colors.darkViolet};
  font-size: 1.5rem;
  flex: 0 1 9rem;
`

const Input = styled.input<InputProps>`
  // width: ${(props) => (props.small ? "50%" : "100%")}
  border: 1px solid ${colors.darkGrey};
  border-radius: 5px;
  outline: none;
  padding: 1rem;
  margin-top: 1rem;
  width: 100%;
`

const DateWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  align-items: flex-start;
`

const Button = styled.button`
  flex: 1 0 30rem;
  background-color: ${colors.darkViolet};
  cursor: pointer;
  color: ${colors.white};
  font-size: 2rem;
  &:hover {
    color: rgba(255, 255, 255, 1);
    box-shadow: 0 5px 15px rgba(145, 92, 182, 0.4);
  }
`

const Form = () => {
  console.log("form")

  return (
    <FormContainer>
      <InputWrapper>
        <Label>Cardholder Name</Label>
        <Input type='text' />
      </InputWrapper>
      <InputWrapper>
        <Label>Card Number Name</Label>
        <Input type='text' />
      </InputWrapper>
      <DateWrapper>
        <Label style={{ flex: "0 1 7rem" }}>Exp. Date</Label>
        <Label style={{ flex: "0 1 7rem", marginLeft: "-0.8rem" }}>
          (MM/YY)
        </Label>
        <Label style={{ marginLeft: "3rem" }}>CVC</Label>
        <Input style={{ width: "8rem", marginTop: "-2rem" }} type='text' />

        <Input style={{ width: "8rem", marginTop: "-2rem" }} type='text' />

        <Input style={{ width: "12rem", marginTop: "-2rem" }} type='text' />
      </DateWrapper>
      <Button>confirm</Button>
    </FormContainer>
  )
}

export default Form
