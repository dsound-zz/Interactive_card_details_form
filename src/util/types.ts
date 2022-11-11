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
  cardNumber: { wrongLength: boolean | number } | any
  month: { isBlank: boolean } | any
  year: { isBlank: boolean } | any
  cvc: { isBlank: boolean; isMinLength: boolean } | any
}
