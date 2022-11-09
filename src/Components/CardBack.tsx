import cardBackImage from "../assets/images/bg-card-back.png"
import { colors } from "../util/globalStyles"
import "../App.css"

type CardBackProps = {
  cvc: string
}

const CardBack = ({ cvc }: CardBackProps) => {
  return (
    <div className='card2'>
      <div id='cvc'>{cvc || "007"}</div>
    </div>
  )
}

export default CardBack
