import { Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React, { useCallback, useEffect, useState } from 'react';

interface IStockInput {
  stocks: number
  setStocks: (number: number) => void
}

const useStyles = makeStyles({
  textField: {
    width: "100%",
    maxWidth: "300px",
    float: "right",
  },
  button: {
    width: "100%",
    maxWidth: "90px",
    margin: '0 0 0 1px',
    color: '#FFFFFF',
    backgroundColor: '#2BC1BC',
    "&:hover": {
      backgroundColor: () => '#2DCFC9',
      borderColor: () => '#8A2908',
      color: () => '#FFFFFF'
    }
  }
});

const StockInput = ({ stocks, setStocks }: IStockInput) => {
  const styles = useStyles();

  const [numberOfStocks, setNumberOfStocks] = useState<number>(stocks);

  const onStockValue = (numberOfStocks: number) => {
    return numberOfStocks > 0 ? numberOfStocks : '';
  }

  const onInputStocks = (event: React.ChangeEvent<HTMLInputElement>) => {
    const stockValue = parseInt(event.target.value);

    setNumberOfStocks(stockValue);
  }

  const onClickStockButton = () => {
    setStocks(numberOfStocks);
    window.history.replaceState({}, '', "?stocks=" + numberOfStocks);
  }

  const refreshNumberOfStocks = useCallback(() => {
    setNumberOfStocks(stocks);
  }, [stocks]);

  useEffect(() => {
    refreshNumberOfStocks();
  }, [stocks, refreshNumberOfStocks]);

  // todo : 음수, 자릿수 4 체크 / TextField => error, helperText
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={1} />
        <Grid item xs={7}>
          <TextField
            className={styles.textField}
            value={onStockValue(numberOfStocks)}
            onChange={onInputStocks}
            label="심은 고구마 수"
            variant="outlined"
            size="small"
            type="number"
          />
          {/* 🍠 */}
        </Grid>
        <Grid item xs={3}>
          <Button
            className={styles.button}
            onClick={onClickStockButton}
            size="large"
          >
            ⛏️ 캐기
        </Button>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </>
  );
}

export default StockInput;
