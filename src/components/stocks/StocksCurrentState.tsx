import React from 'react';
import { renderComma } from '../../utils/numberUtils';

interface IStocksCurrentState {
  stocks: number
  stockPrice: number
  exchangeRate: number
  baseUserStocksValue: number
}

const StocksCurrentState = ({ stocks, stockPrice, exchangeRate, baseUserStocksValue }: IStocksCurrentState) => {

  const calculateCurrentStocksValue = () => {
    return stocks * stockPrice * exchangeRate;
  }

  const calculateDiffrence = () => {
    const currentStocksValue = calculateCurrentStocksValue();
    if (currentStocksValue === 0) {
      return 0;
    }

    return currentStocksValue - baseUserStocksValue;
  }

  return (
    <>
      <br />
      {renderComma(calculateDiffrence())} 원
      <br />
      {renderComma(calculateCurrentStocksValue())} 원
      <br />
    </>
  );
}

export default StocksCurrentState;
