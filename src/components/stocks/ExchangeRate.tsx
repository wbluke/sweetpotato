import { AxiosResponse } from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import Moment from 'react-moment';
import request from '../../utils/httpRequest';
import { renderCommaFloat, roundFloat } from '../../utils/numberUtils';

interface IExchangeRate {
  setExchangeRate: (exchangeRate: number) => void
}

interface IExchangeRateInfo {
  date: Date
  rate: number
}

const ExchangeRate = ({ setExchangeRate }: IExchangeRate) => {
  const [eurExchangeRate, setEurExchangeRate] = useState<IExchangeRateInfo>({
    date: new Date(),
    rate: 0
  });

  const fetchExchangeRate = useCallback(() => {
    request.get('https://api.manana.kr/exchange/rate/KRW/EUR.json')
      .then(({ data }: AxiosResponse<IExchangeRateInfo[]>) => {
        setEurExchangeRate(data[0]);
        setExchangeRate(roundFloat(data[0].rate));
        console.log(data)
        console.log('Exchange Rate Date : ' + data[0].date);
        console.log('Exchange Rate : ' + data[0].rate);
      })
  }, [setExchangeRate]);

  useEffect(() => {
    fetchExchangeRate();
  }, [fetchExchangeRate]);

  return (
    <>
      <br />
      <br />
      1€(유로) 당 {renderCommaFloat(eurExchangeRate.rate)} 원
      <br />
      <Moment
        date={new Date(eurExchangeRate.date)}
        format="yyyy년 M월 D일 HH:mm 기준"
      />
    </>
  );
}

export default ExchangeRate;
