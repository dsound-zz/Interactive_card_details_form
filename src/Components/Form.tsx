import styled from "styled-components";
import { colors } from "../util/globalStyles";

type InputProps = {
  small?: boolean;
};

const FormContainer = styled.div`
  grid-area: form;
  display: flex;
  flex-flow: row wrap;
  padding: 0.5rem;
  border: 1px pink solid;
  @media (max-width: 768px) {
    transform: translate(0rem, -11rem);
  }
`;

const InputWrapper = styled.div`
 
`;

const Label = styled.label`
  color: ${colors.darkViolet};
  font-size: 2rem;
  .head {
    flex-basis: 100%;
    width: 100%;
`;

const Input = styled.input<InputProps>`
  // width: ${(props) => (props.small ? "50%" : "100%")}
  width: 100%;
  padding: 1.2rem;
  margin-top: 0.5rem;
  border: 1px solid ${colors.darkGrey};
  border-radius: 5px;
  outline: none;
`;

const Button = styled.button`
  background-color: ${colors.darkViolet};
  cursor: pointer;
  color: ${colors.white};
  font-size: 2rem;
  &:hover {
    color: rgba(255, 255, 255, 1);
    box-shadow: 0 5px 15px rgba(145, 92, 182, 0.4);
  }
`;

const Form = () => {
  console.log("form");

  return (
    <FormContainer>
      <InputWrapper>
        <Label>Cardholder Name</Label>
        <Input type="text" />
      </InputWrapper>
      <InputWrapper>
        <Label>Card Number Name</Label>
        <Input type="text" />
      </InputWrapper>

      <Button>confirm</Button>
    </FormContainer>
  );
};

export default Form;
