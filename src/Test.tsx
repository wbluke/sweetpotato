import { AxiosResponse } from 'axios';
import React, { useEffect } from 'react';

interface IExchangeRate {
  date: Date
  name: string
  rate: Number
  timestamp: string
}

const Test = () => {
  useEffect(() => {
    const axios = require("axios");
    const yahooFinance = require('yahoo-finance');

    axios.get('https://api.manana.kr/exchange/rate/KRW/EUR.json').then(({ data }: AxiosResponse<IExchangeRate[]>) => {
      console.log('Exchange Rate Date : ' + data[0].date);
      console.log('Exchange Rate : ' + data[0].rate);
    })

    yahooFinance.quote({
      symbol: 'DHER.DE',
      modules: ['price'] // see the docs for the full list
    }, function (err: any, quotes: any) {
      // console.log(err)
      console.log('DHER Price : ' + quotes.price.regularMarketPrice)
      console.log('DHER Price Time : ' + quotes.price.regularMarketTime)
    });

  }, []);

  return (
    <div className="Test">
    </div>
  );
}

export default Test;
