export type CardDetailTypes = {
  name: string
  cardNumber: string
  expDate: ExpDateTypes
  cvc: string
}

type ExpDateTypes = {
  month: string
  year: string
}

export type CardProps = {
  name: string
  cardNumber: string
  expDate: { month: string; year: string }
  cvc: string
}

export type ErrorProps = {
  month: { isBlank: boolean }
  year: { isBlank: boolean }
  cvc: { isBlank: boolean; isMinLength: boolean }
}
