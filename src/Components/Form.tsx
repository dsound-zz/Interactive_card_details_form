import styled from "styled-components"
import { colors } from "../util/globalStyles"

const FormContainer = styled.div`
  grid-area: form;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  gap: 2rem;
  width: 100%;
  max-width: 50rem;
  max-height: 40rem;
  padding: 0.5rem;
  border: 1px pink solid;
  @media (max-width: 768px) {
    transform: translate(0rem, -11rem);
  }
`

const InputWrapper = styled.div`
  max-width: 50rem;
  width: 100%;
`

const SmallInputWrapper = styled.div`
  border: solid red 1px;
  align-self: flex-end;
  margin-right: 1rem;
`

const FormInnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: no-wrap;
  min-width: 20rem;
`

const Label = styled.label`
  color: ${colors.darkViolet};
`

const Input = styled.input`
  width: 100%;
  padding: 1.2rem;
  margin-top: 0.5rem;
  border: 1px solid ${colors.darkGrey};
  border-radius: 5px;
  outline: none;

  //   .small {
  //     max-width: 5rem;
  //   }
`

const Button = styled.button`
  background-color: ${colors.darkViolet};
  min-width: 20rem;
  flex: 1;
  justify-self: center;
  padding: 0.5rem;
  margin-top: 1rem;
  cursor: pointer;
  color: ${colors.white};
  font-size: 1.5rem;
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
      <FormInnerWrapper>
        <SmallInputWrapper>
          <Label>Exp. Date</Label>
          <Input className='small' type='text' />
        </SmallInputWrapper>
        <SmallInputWrapper>
          <Label>(MM/YY)</Label>
          <Input className='small' type='text' />
        </SmallInputWrapper>
        <SmallInputWrapper>
          <Label>CVC</Label>
          <Input style={{ width: "6rem" }} className='small' type='text' />
        </SmallInputWrapper>
      </FormInnerWrapper>
      <Button>confirm</Button>
    </FormContainer>
  )
}

export default Form
