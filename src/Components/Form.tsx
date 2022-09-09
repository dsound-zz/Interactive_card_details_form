import styled from "styled-components";
import { colors } from "../util/globalStyles";

const FormContainer = styled.div`
  grid-area: form;
  display: flex;
  flex-flow: row wrap;
  gap: 0.5rem;
  max-height: 8rem;
  padding: 0.5rem;
  //   @media (max-width: 768px) {
  //     transform: translate(0rem, 10rem);
  //   }
`;

const FormColumn = styled.div``;

const FormInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;
  padding-right: 1rem;
`;

const Label = styled.label`
  max-width: 20rem;
  width: 100%;
  align-self: flex-end;
  flex: 1;
`;

const Input = styled.input`
  max-width: 20rem;
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;

  .small {
    max-width: 10rem;
  }
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
      <Label>Cardholder Name</Label>
      <Input type="text" />

      <Label>Card Number name</Label>
      <Input type="text" />

      <FormInnerWrapper>
        <Label>Exp. Date</Label>
        <Input className="small" type="text" />
      </FormInnerWrapper>
      <FormInnerWrapper>
        <Label>(MM/YY)</Label>
        <Input className="small" type="text" />
      </FormInnerWrapper>
      <FormInnerWrapper>
        <Label>CVC</Label>
        <Input style={{ width: "6rem" }} className="small" type="text" />
      </FormInnerWrapper>
      <Button>continue</Button>
    </FormContainer>
  );
};

export default Form;
