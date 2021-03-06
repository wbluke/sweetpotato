import {Grid, makeStyles, Theme} from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import MainLogo from '../headers/MainLogo';
import BaseUserStocks from '../stocks/BaseUserStocks';
import ExchangeRate from '../stocks/ExchangeRate';
import StockInput from '../stocks/StockInput';
import StockPrice from '../stocks/StockPrice';
import StocksCurrentState from '../stocks/StocksCurrentState';

const useStyles = makeStyles((theme: Theme) => ({
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
      <MainLogo/>

      <StockInput
        stocks={stocks}
        setStocks={setStocks}
      />

      <Grid container spacing={1} className={styles.basicStyles}>
        <Grid item xs={1}/>
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
        <Grid item xs={1}/>
      </Grid>
    </>
  );
}

export default MainStockCalculator;
