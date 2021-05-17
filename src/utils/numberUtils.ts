import numeral from "numeral";

const roundFloat = (number: number): number => {
  return parseFloat(numeral(number).format('0.00'));
}

const renderComma = (number: number): string => {
  return numeral(number).format('0,0');
}

const renderCommaFloat = (number: number): string => {
  return numeral(number).format('0,0.00');
}

export {
  roundFloat,
  renderComma,
  renderCommaFloat
}
