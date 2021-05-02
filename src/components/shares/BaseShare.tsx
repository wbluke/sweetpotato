import React, { useEffect } from 'react';
import { AxiosResponse } from 'axios';
import request from '../../utils/httpRequest';

interface IExchangeRate {
  date: Date
  name: string
  rate: Number
  timestamp: string
}

interface IFinanceQuotes {
  price: {
    regularMarketPrice: Number,
    regularMarketTime: Date
  }
}

const yahooFinance = require('yahoo-finance');

const BaseShare = () => {

  const fetchExchangeRate = () => {
    request.get('https://api.manana.kr/exchange/rate/KRW/EUR.json')
      .then(({ data }: AxiosResponse<IExchangeRate[]>) => {
        console.log('Exchange Rate Date : ' + data[0].date);
        console.log('Exchange Rate : ' + data[0].rate);
      })
  }

  const fetchFinance = () => {
    yahooFinance.quote({
      symbol: 'DHER.DE',
      modules: ['price']
    }, (err: any, quotes: IFinanceQuotes) => {
      console.log(quotes);
      console.log('DHER Price : ' + quotes.price.regularMarketPrice)
      console.log('DHER Price Time : ' + quotes.price.regularMarketTime) // Date type
    });
  }

  useEffect(() => {
    fetchExchangeRate();
    fetchFinance();
  });

  return (
    <>
    </>
  );
}

export default BaseShare;
