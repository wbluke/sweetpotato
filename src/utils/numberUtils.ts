import numeral from "numeral";

const renderComma = (number: number): string => {
  return numeral(number).format('0,0');
}

const renderCommaDouble = (number: number): string => {
  return numeral(number).format('0,0.00');
}

export {
  renderComma,
  renderCommaDouble
}
