import { colors } from "../util/globalStyles"
import { ReactComponent as CompleteLogo } from "../assets/images/icon-complete.svg"
import "../App.css"

type SubmitMessageProps = {
  resetForm: () => void
}

const SubmitMessage = ({ resetForm }: SubmitMessageProps) => {
  return (
    <div className='form__submit-message'>
      <CompleteLogo />
      <h2>Thank You!</h2>
      <div>We've added your card details</div>
      <button className='form__complete-button' onClick={() => resetForm()}>
        Continue
      </button>
    </div>
  )
}

export default SubmitMessage
