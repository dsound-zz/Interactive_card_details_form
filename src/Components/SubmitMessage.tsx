import styled from "styled-components"
import { colors } from "../util/globalStyles"
import { ReactComponent as CompleteLogo } from "../assets/images/icon-complete.svg"
import Button from "../util/FormComponents/Button"

type SubmitMessageProps = {
  resetForm: () => void
}

const MessageContainer = styled.div`
  grid-area: form;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 5rem;
  padding: 3rem;
  width: 100%;
  border: solid blue 1px;
`

const LargeText = styled.div`
  color: ${colors.darkViolet};
  font-size: 4rem;
  width: 100%;
  border: 1px solid red;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 2rem;
  } ;
`

const SmallText = styled.div`
  color: ${colors.darkGrey};
  font-size: 1.3rem;
`

const SubmitMessage = ({ resetForm }: SubmitMessageProps) => {
  console.log("thank you")

  return (
    <MessageContainer>
      <CompleteLogo />
      <LargeText>Thank You!</LargeText>
      <SmallText>We've added your card details</SmallText>
      <Button buttonText='Continue' onClick={() => resetForm()} />
    </MessageContainer>
  )
}

export default SubmitMessage
