import React, { useState } from 'react';
import Moment from 'react-moment';
import { renderComma } from '../../utils/numberUtils';

interface IUserStocks {
  numberOfStocks: number
}

const BaseUserStocks = ({ numberOfStocks }: IUserStocks) => {
  const baseStockPrice = 105.95;
  const baseExchangeRate = 1351;
  const baseWonPerStock = 143208;
  const baseDate = '2021-03-02';

  return (
    <>
      <br />
      <br />
      {renderComma(numberOfStocks * baseWonPerStock)} 원
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
        date={new Date(baseDate)}
        format="yyyy년 M월 D일 기준"
      />
    </>
  );
}

export default BaseUserStocks;
