import numeral from 'numeral';
import React, { useCallback, useEffect, useState } from 'react';
import Moment from 'react-moment';

interface IStockPrice {
  setStockPrice: (stockPrice: number) => void
}

interface IStockQuotes {
  price: {
    regularMarketPrice: number,
    regularMarketTime: Date,
    regularMarketChangePercent: number
  }
}

const yahooFinance = require('yahoo-finance');

const StockPrice = ({ setStockPrice }: IStockPrice) => {
  const [dherStockQuotes, setDherStockQuotes] = useState<IStockQuotes>({
    price: {
      regularMarketChangePercent: 0,
      regularMarketTime: new Date(),
      regularMarketPrice: 0
    }
  });

  const fetchFinance = useCallback(() => {
    yahooFinance.quote({
      symbol: 'DHER.DE',
      modules: ['price']
    }, (err: any, quotes: IStockQuotes) => {
      setDherStockQuotes(quotes)
      setStockPrice(quotes.price.regularMarketPrice);
      console.log(quotes);
      console.log('DHER Price : ' + quotes.price.regularMarketPrice)
      console.log('DHER Price Time : ' + quotes.price.regularMarketTime.toString()) // Date type
      console.log('DHER last percent : ' + quotes.price.regularMarketChangePercent)
    });
  }, [setStockPrice]);

  useEffect(() => {
    fetchFinance();
  }, [fetchFinance]);

  return (
    <>
      <br />
      현재 주가 : {dherStockQuotes.price.regularMarketPrice} €
      <br />
      {numeral(dherStockQuotes.price.regularMarketChangePercent).format('0.00%')}
      <br />
      <Moment
        date={dherStockQuotes.price.regularMarketTime}
        format="yyyy년 M월 D일 HH:mm 기준"
      />
    </>
  );
}

export default StockPrice;
