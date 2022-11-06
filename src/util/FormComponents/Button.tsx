import styled from "styled-components"
import { colors } from "../globalStyles"

type ButtonProps = {
  buttonText: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const ButtonStyle = styled.button`
  background-color: ${colors.darkViolet};
  cursor: pointer;
  color: ${colors.white};
  font-size: 2rem;
  width: 100%;
  padding: 1rem;
  align-self: center;
  border-radius: 12px;
  &:hover {
    color: rgba(255, 255, 255, 1);
    box-shadow: 0 5px 15px rgba(145, 92, 182, 0.4);
  }
`

const Button = ({ buttonText, onClick }: ButtonProps) => (
  <ButtonStyle onClick={onClick}>{buttonText}</ButtonStyle>
)

export default Button
