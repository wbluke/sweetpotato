import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import BaseUserStocks from './BaseUserStocks';
import ExchangeRate from './ExchangeRate';
import StockInput from './StockInput';
import StockPrice from './StockPrice';

const MainStockCalculator = () => {
  const [numberOfStocks, setNumberOfStocks] = useState<number>(0);
  console.log(numberOfStocks);

  return (
    <>
      <StockInput
        setNumberOfStocks={setNumberOfStocks}
      />

      <Grid container spacing={1}>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <StockPrice />
          <ExchangeRate />
          <BaseUserStocks
            numberOfStocks={numberOfStocks}
          />
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </>
  );
}

export default MainStockCalculator;
