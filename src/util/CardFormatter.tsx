export const cardFormatter = (input: any) => {
  const cleansedInput = charsToNums(input)
  return cleansedInput
}

const charsToNums = (input: any): number => {
  const numOnly = input.replace(/\D/g, "")
  return numOnly
}
