import { Grid, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import BaseUserStocks from './BaseUserStocks';
import ExchangeRate from './ExchangeRate';
import StockInput from './StockInput';
import StockPrice from './StockPrice';
import StocksCurrentState from './StocksCurrentState';
import logo from '../../images/woowa_sweet_potato_logo.png';

const useStyles = makeStyles(theme => ({
  logoLayout: {
    paddingBottom: '1rem',
  },
  logo: {
    width: '10rem',
    paddingBottom: '3rem',
  },
  basicStyles: {
    fontFamily: 'GmarketSans Medium',
    fontSize: '1.2rem',
    textAlign: 'right',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: '1.5rem',
      paddingRight: '3rem'
    },
    marginBottom: '10rem',
  },
}));

const MainStockCalculator = () => {
  const styles = useStyles();

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
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Grid item xs={1} />
        <Grid item xs={10}>
          <img
            className={styles.logo}
            src={logo}
            alt={"logo"}
          />
        </Grid>
        <Grid item xs={1} />
      </Grid>

      <StockInput
        stocks={stocks}
        setStocks={setStocks}
      />

      <Grid container spacing={1} className={styles.basicStyles}>
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
