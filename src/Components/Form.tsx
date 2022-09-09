import styled from "styled-components";
import { colors } from "../util/globalStyles";

const FormContainer = styled.div`
  grid-area: form;
  display: flex;
  justify-content: flex-startr;
  flex-flow: row wrap;
  gap: 1rem;
  max-height: 8rem;
  max-width: 20rem;
  padding: 0.5rem;
  @media (max-width: 768px) {
    transform: translate(0rem, -11rem);
  }
`;

const InputWrapper = styled.div`
  flex: 1 0 20rem;
`;

const SmallInputWrapper = styled.div`
  border: solid red 1px;
  align-self: flex-end;
  max-width: 10rem;
  margin-right: 1rem;
`;

const FormInnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: no-wrap;
  max-width: 20rem;
`;

const Label = styled.label``;

const Input = styled.input`
  max-width: 30rem;
  width: 100%;
  padding: 0.5rem;

  //   .small {
  //     max-width: 5rem;
  //   }
`;

const Button = styled.button`
  background-color: ${colors.darkViolet};
  width: 2rem;
  flex: 1;
  justify-self: center;
  padding: 0.5rem;
  cursor: pointer;
  color: ${colors.white};

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
        <Label>Card Number name</Label>
        <Input type="text" />
      </InputWrapper>
      <FormInnerWrapper>
        <SmallInputWrapper>
          <Label>Exp. Date</Label>
          <Input className="small" type="text" />
        </SmallInputWrapper>
        <SmallInputWrapper>
          <Label>(MM/YY)</Label>
          <Input className="small" type="text" />
        </SmallInputWrapper>
        <SmallInputWrapper>
          <Label>CVC</Label>
          <Input style={{ width: "6rem" }} className="small" type="text" />
        </SmallInputWrapper>
      </FormInnerWrapper>
      {/* <Button>continue</Button> */}
    </FormContainer>
  );
};

export default Form;
