import { Container, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import ExchangeRate from "../stocks/ExchangeRate";
import BaseUserStocks from "../stocks/BaseUserStocks";
import StockPrice from "../stocks/StockPrice";
import StockInput from '../stocks/StockInput';

const useStyles = makeStyles({
  mainComponent: {
    marginTop: '100px'
  },
});

const MainLayout = () => {
  const styles = useStyles();

  const numberOfStocks = 15;

  return (
    <>
      <Container maxWidth="sm">
        <div className={styles.mainComponent}>
          <StockInput />

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
        </div>
      </Container>
    </>
  );
}

export default MainLayout;
