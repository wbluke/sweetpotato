import { AxiosResponse } from 'axios';
import numeral from 'numeral';
import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';
import request from '../../utils/httpRequest';
import { renderCommaDouble } from '../../utils/numberUtils';

interface IExchangeRate {
  date: Date
  rate: number
}

const ExchangeRate = () => {
  const [eurExchangeRate, setEurExchangeRate] = useState<IExchangeRate>({
    date: new Date(),
    rate: 0
  });

  const fetchExchangeRate = () => {
    request.get('https://api.manana.kr/exchange/rate/KRW/EUR.json')
      .then(({ data }: AxiosResponse<IExchangeRate[]>) => {
        setEurExchangeRate(data[0]);
        console.log(data)
        console.log('Exchange Rate Date : ' + data[0].date);
        console.log('Exchange Rate : ' + data[0].rate);
      })
  }

  useEffect(() => {
    fetchExchangeRate();
  }, []);

  return (
    <>
      <br />
      <br />
      1€(유로) 당 {renderCommaDouble(eurExchangeRate.rate)} 원
      <br />
      <Moment
        date={new Date(eurExchangeRate.date)}
        format="yyyy년 M월 D일 HH:mm 기준"
      />
    </>
  );
}

export default ExchangeRate;
