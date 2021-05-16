import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import BaseUserStocks from './BaseUserStocks';
import ExchangeRate from './ExchangeRate';
import StockInput from './StockInput';
import StockPrice from './StockPrice';

const MainStockCalculator = () => {
  const [stocks, setStocks] = useState<number>(0);

  const findStockQueryString = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const stockValue = urlParams.get('stocks');

    const stocks = parseInt(stockValue ? stockValue : '0');
    setStocks(stocks);
  }

  useEffect(() => {
    findStockQueryString();
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
          <StockPrice />
          <ExchangeRate />
          <BaseUserStocks
            stocks={stocks}
          />
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </>
  );
}

export default MainStockCalculator;
