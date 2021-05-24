import numeral from "numeral";

const roundFloat = (number: number): number => {
  return parseFloat(numeral(number).format('0.00'));
}

const renderComma = (number: number | string): string => {
  if (typeof number === 'string') {
    return number;
  }

  return numeral(number).format('0,0');
}

const renderCommaWithSign = (number: number | string): string => {
  if (typeof number === 'string') {
    return number;
  }

  return numeral(number).format('+0,0');
}

const renderCommaFloat = (number: number | string): string => {
  if (typeof number === 'string') {
    return number;
  }

  return numeral(number).format('0,0.00');
}

const renderPercentWithSign = (number: number | string): string => {
  if (typeof number === 'string') {
    return number;
  }

  return numeral(number).format('+0.00') + '%';
}

const renderZeroToDash = (number: number) => {
  if (number === 0) {
    return '-';
  }

  return number;
} 

export {
  roundFloat,
  renderComma,
  renderCommaWithSign,
  renderCommaFloat,
  renderPercentWithSign,
  renderZeroToDash,
}
