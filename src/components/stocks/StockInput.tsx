import { Button, Grid } from '@material-ui/core';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { DatePicker } from "@material-ui/pickers";
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import React, { useState } from 'react';
import { monthDiff } from '../../utils/dateUtils';

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
    margin: '0 0 0 -3px',
    color: '#FFFFFF',
    backgroundColor: '#2BC1BC',
    "&:hover": {
      backgroundColor: () => '#2DCFC9',
      borderColor: () => '#8A2908',
      color: () => '#FFFFFF'
    }
  }
});

const materialTheme = createMuiTheme({
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: "#2BC1BC",
      },
    },
    MuiTypography: {
      colorPrimary: {
        color: "#2BC1BC"
      }
    },
    MuiButton: {
      textPrimary: {
        color: "#2BC1BC"
      }
    },
    MuiPickersMonth: {
      monthSelected: {
        color: "#2BC1BC"
      },
      root: {
        "&:focus": {
          color: "#2BC1BC"
        },
      }
    },
    MuiFormControl: {
      root: {
        marginLeft: "1.5rem"
      }
    },
    MuiOutlinedInput: {
      root: {
        fontFamily: "GmarketSans Medium",
        width: "18rem",
      },
      input: {
        height: "0.3rem"
      }
    },
    MuiInputLabel: {
      outlined: {
        fontFamily: "GmarketSans Medium",
        '&$shrink': {
          transform: "translate(12px, -6px) scale(0.75)"
        },
      }
    }
  },
});

const StockInput = ({ stocks, setStocks }: IStockInput) => {
  const styles = useStyles();

  const [selectedDate, setSelctedDate] = useState<MaterialUiPickersDate>(new Date("2021/02"));

  const onClickStockButton = () => {
    if (!selectedDate) {
      return;
    }

    const baseWonPerStock = 143208;
    const numberOfStocks = Math.floor(calculateTotalStockPrices() / baseWonPerStock);

    setStocks(numberOfStocks);

    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth() + 1;
    const formattedMonth = ("0" + month).slice(-2);

    window.history.replaceState({}, '', `?yearMonth=${year}-${formattedMonth}`);
  }

  const calculateTotalStockPrices = (): number => {
    if (!selectedDate) {
      return 0;
    }

    const year = selectedDate.getFullYear();
    if (year === 2021) {
      return 20000000;
    }

    if (year === 2020) {
      return 30000000;
    }

    const differenceOfMonth = monthDiff(selectedDate, new Date("2019/12"));
    return 50000000 + 800000 * differenceOfMonth;
  }

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={1} />
        <Grid item xs={7}>
          <ThemeProvider theme={materialTheme}>
            <DatePicker
              format="🗓  yyyy년 M월"
              views={["year", "month"]}
              label="입사 연월"
              minDate={new Date("2010/06")}
              maxDate={new Date("2021/02")}
              value={selectedDate}
              onChange={setSelctedDate}
              inputVariant="outlined"
              okLabel="선택"
              cancelLabel="취소"
            />
          </ThemeProvider>
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
