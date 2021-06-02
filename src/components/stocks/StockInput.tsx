import { Button, Grid } from '@material-ui/core';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { DatePicker } from "@material-ui/pickers";
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import React, { useEffect, useState } from 'react';
import { isSameYearMonth, monthDiff } from '../../utils/dateUtils';

interface IStockInput {
  setStocks: (number: number) => void
  dateParam: Date
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

const StockInput = ({ setStocks, dateParam }: IStockInput) => {
  const styles = useStyles();

  const [selectedDate, setSelctedDate] = useState<MaterialUiPickersDate>(new Date("2021/02"));

  const onRender = () => {
    if (isSameYearMonth(dateParam, new Date())) {
      setSelctedDate(new Date("2021/02"));
      return;
    }

    setSelctedDate(dateParam)

    if (invalidateDateRange(dateParam)) {
      setStocks(0);
      return;
    }

    onClickStockButton(dateParam);
  }

  const onClickStockButton = (targetDate: Date | MaterialUiPickersDate) => {
    if (!targetDate) {
      setStocks(0);
      return;
    }

    if (invalidateDateRange(targetDate)) {
      setStocks(0);
      return;
    }

    const baseWonPerStock = 143208;
    const numberOfStocks = Math.floor(calculateTotalStockPrices(targetDate) / baseWonPerStock);

    setStocks(numberOfStocks);

    const year = targetDate.getFullYear();
    const month = targetDate.getMonth() + 1;
    const formattedMonth = ("0" + month).slice(-2);

    window.history.replaceState({}, '', `?yearMonth=${year}-${formattedMonth}`);
  }

  const calculateTotalStockPrices = (targetDate: Date | MaterialUiPickersDate): number => {
    if (!targetDate) {
      return 0;
    }

    const year = targetDate.getFullYear();
    if (year === 2021) {
      return 20000000;
    }

    if (year === 2020) {
      return 30000000;
    }

    const differenceOfMonth = monthDiff(targetDate, new Date("2019/12"));
    return 50000000 + 800000 * differenceOfMonth;
  }

  const invalidateDateRange = (targetDate: Date): boolean => {
    if (monthDiff(new Date("2021/02"), targetDate) >= 1) {
      return true;
    }

    if (monthDiff(targetDate, new Date("2010/06")) >= 1) {
      return true;
    }

    return false;
  }

  useEffect(() => {
    onRender();
  }, [dateParam]);

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
              invalidDateMessage="정확한 값을 선택해 주세요"
              minDateMessage="2010년 6월 이후만 가능합니다"
              maxDateMessage="2021년 2월 이전만 가능합니다"
            />
          </ThemeProvider>
        </Grid>
        <Grid item xs={3}>
          <Button
            className={styles.button}
            onClick={() => onClickStockButton(selectedDate)}
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
