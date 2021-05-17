import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import BaseUserStocks from './BaseUserStocks';
import ExchangeRate from './ExchangeRate';
import StockInput from './StockInput';
import StockPrice from './StockPrice';
import StocksCurrentState from './StocksCurrentState';

const MainStockCalculator = () => {
  const [stocks, setStocks] = useState<number>(0);
  const [stockPrice, setStockPrice] = useState<number>(0);
  const [exchangeRate, setExchangeRate] = useState<number>(0);

  const [baseUserStocksValue, setBaseUserStocksValue] = useState<number>(0);

  const findStocksFromQueryString = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const stockValue = urlParams.get('stocks');

    const stocks = parseInt(stockValue ? stockValue : '0');
    setStocks(stocks);
  }

  useEffect(() => {
    findStocksFromQueryString();
  }, []);

  return (
    <>
      <StockInput
        stocks={stocks}
        setStocks={setStocks}
      />

      <Grid container spacing={1}>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <StocksCurrentState
            stocks={stocks}
            stockPrice={stockPrice}
            exchangeRate={exchangeRate}
            baseUserStocksValue={baseUserStocksValue}
          />
          <StockPrice
            setStockPrice={setStockPrice}
          />
          <ExchangeRate
            setExchangeRate={setExchangeRate}
          />
          <BaseUserStocks
            stocks={stocks}
            setBaseUserStocksValue={setBaseUserStocksValue}
          />
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </>
  );
}

export default MainStockCalculator;
