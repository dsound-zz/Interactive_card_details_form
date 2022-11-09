import { colors, isMobile } from "../util/globalStyles"
import { CardDetailTypes, ErrorProps } from "../util/types"
import "../App.css"

type FormProps = {
  handleCardDetails: (items: CardDetailTypes) => void
  cardDetails: CardDetailTypes
  formErrors: ErrorProps
  onSubmit: () => void
}

const Form = ({
  handleCardDetails,
  cardDetails,
  formErrors,
  onSubmit,
}: FormProps) => {
  return (
    <>
      <div className='form'>
        <div className='form__field'>
          <label>CARDHOLDER NAME</label>
          <input
            maxLength={19}
            name='name'
            type='text'
            value={cardDetails?.name}
            placeholder='e.g. Jane Applesead'
            onChange={(e: any) => handleCardDetails(e)}
          />
        </div>

        <div className='form__field'>
          <label>CARD NUMBER</label>
          <input
            name='cardNumber'
            type='text'
            value={cardDetails.cardNumber}
            placeholder='e.g. 1234 5678 9801 2345'
            onChange={(e: any) => handleCardDetails(e)}
          />
          {/* <div>Wrong format, numbers only</div> */}
        </div>
        <div className='form__inner-row'>
          <div className='form__field small'>
            <label>EXP. DATE</label>{" "}
            <input
              maxLength={2}
              name='month'
              type='text'
              value={cardDetails?.expDate.month}
              placeholder='MM'
              style={{
                border: formErrors.year.isBlank
                  ? `1px solid ${colors.red}`
                  : "0",
              }}
              onChange={(e: any) => handleCardDetails(e)}
            />
            {formErrors.month.isBlank && (
              <div className='form__error-text'>Can't be blank</div>
            )}
          </div>
          <div className='form__field small'>
            <label>(MM/YY)</label>{" "}
            <input
              maxLength={2}
              name='year'
              type='text'
              value={cardDetails?.expDate.year}
              placeholder='YY'
              style={{
                border: formErrors.year.isBlank
                  ? `1px solid ${colors.red}`
                  : "0",
              }}
              onChange={(e: any) => handleCardDetails(e)}
            />{" "}
            {formErrors.year.isBlank && (
              <div className='form__error-text'>Can't be blank</div>
            )}
          </div>
          <div className='form__field small'>
            <label>CVC</label>
            <input
              maxLength={3}
              name='cvc'
              type='text'
              value={cardDetails?.cvc}
              placeholder='e.g. 123'
              style={{
                border: formErrors.year.isBlank
                  ? `1px solid ${colors.red}`
                  : "0",
              }}
              onChange={(e: any) => handleCardDetails(e)}
            />
            {formErrors.cvc.isBlank && (
              <div className='form__error-text'>Can't be blank</div>
            )}
            {formErrors.cvc.isMinLength && (
              <div className='form__error-text'>Must be at least 3 numbers</div>
            )}
          </div>
        </div>
        <button className='form__submit-button' onClick={() => onSubmit()}>
          Confirm
        </button>
      </div>
    </>
  )
}

export default Form
