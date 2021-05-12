import React, { useState } from 'react';
import Moment from 'react-moment';

interface IUserStocks {
  numberOfStocks: number
}

const BaseUserStocks = ({ numberOfStocks }: IUserStocks) => {
  const baseStockPrice = 105.95;
  const baseExchangeRate = 1351;
  const baseWonPerStock = 143208;

  // 15주 * 143208원 = 출발 자금
  // 105.95유로 | 환율 1,351원 1주당 14만 3208원)

  return (
    <>
      <br />
      <br />
      {numberOfStocks * baseWonPerStock} 원
      <br />
      기준 정보
      <br />
      기준 주가 : {baseStockPrice} €
      <br />
      1주 당 {baseWonPerStock} 원
      (
      기준 환율 : {baseExchangeRate} 원
      )
      <br />
      <Moment
        date={new Date('2021-03-02')}
        format="yyyy년 M월 D일 기준"
      />
    </>
  );
}

export default BaseUserStocks;
