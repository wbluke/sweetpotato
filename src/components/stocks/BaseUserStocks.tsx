import React, { useCallback, useEffect } from 'react';
import Moment from 'react-moment';
import { renderComma, roundFloat } from '../../utils/numberUtils';

interface IUserStocks {
  stocks: number
  setBaseUserStocksValue: (baseUserStocksValue: number) => void
}

const BaseUserStocks = ({ stocks, setBaseUserStocksValue }: IUserStocks) => {
  const baseStockPrice = 105.95;
  const baseExchangeRate = 1351;
  const baseWonPerStock = 143208;
  const baseDate = new Date('2021-03-02');

  const setBaseStocksValue = useCallback(() => {
    setBaseUserStocksValue(roundFloat(stocks * baseWonPerStock));
  }, [stocks, baseWonPerStock, setBaseUserStocksValue]);

  useEffect(() => {
    setBaseStocksValue();
  }, [setBaseStocksValue]);

  return (
    <>
      <br />
      <br />
      {renderComma(stocks * baseWonPerStock)} 원
      <br />
      기준 정보
      <br />
      기준 주가 : {baseStockPrice} €
      <br />
      1주 당 {renderComma(baseWonPerStock)} 원
      (
      기준 환율 : {renderComma(baseExchangeRate)} 원
      )
      <br />
      <Moment
        date={baseDate}
        format="yyyy년 M월 D일 기준"
      />
    </>
  );
}

export default BaseUserStocks;
