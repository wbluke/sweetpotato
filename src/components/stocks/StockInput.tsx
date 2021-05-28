import { Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { TextFieldProps } from '@material-ui/core/TextField';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { lightBlue } from "@material-ui/core/colors";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { DatePicker } from "@material-ui/pickers";
// import { MuiPickersComponentsToClassName } from '@material-ui/pickers/src/typings/overrides';

// declare module '@material-ui/core/styles/overrides' {
//   export interface ComponentNameToClassKey extends MuiPickersComponentsToClassName {}
// }

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

const materialTheme = createMuiTheme({
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: lightBlue.A200,
      },
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        // backgroundColor: lightBlue.A200,
        // color: "white",
      },
    },
    MuiPickersDay: {
      day: {
        color: lightBlue.A700,
      },
      daySelected: {
        backgroundColor: lightBlue["400"],
      },
      dayDisabled: {
        color: lightBlue["100"],
      },
      current: {
        color: lightBlue["900"],
      },
    },
    MuiPickersModal: {
      dialogAction: {
        color: lightBlue["400"],
      },
    },
  },
});

const StockInput = ({ stocks, setStocks }: IStockInput) => {
  const styles = useStyles();
  const textInput = useRef<TextFieldProps>();

  const [numberOfStocks, setNumberOfStocks] = useState<number>(stocks);
  const [startDate, setStartDate] = useState(new Date());

  const error = numberOfStocks.toString().length > 4;

  const onStockValue = (numberOfStocks: number) => {
    return numberOfStocks > 0 ? numberOfStocks : '';
  }

  const onInputStocks = (event: React.ChangeEvent<HTMLInputElement>) => {
    const stockValue = parseInt(event.target.value);
    if (Number.isNaN(stockValue)) {
      setNumberOfStocks(0);
      if (textInput.current) {
        textInput.current.value = "";
      }
      return;
    }

    setNumberOfStocks(stockValue);
  }

  const onInputKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      onClickStockButton();
    }
  }

  const onClickStockButton = () => {
    if (error) {
      return;
    }

    setStocks(numberOfStocks);
    window.history.replaceState({}, '', "?stocks=" + numberOfStocks);
  }

  const refreshNumberOfStocks = useCallback(() => {
    setNumberOfStocks(stocks);
  }, [stocks]);

  useEffect(() => {
    refreshNumberOfStocks();
  }, [stocks, refreshNumberOfStocks]);

  const [selectedDate, handleDateChange] = useState<MaterialUiPickersDate>(new Date("2021/02"));

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={1} />
        <Grid item xs={7}>
        <ThemeProvider theme={materialTheme}>
          <DatePicker
            format="yyyy년 M월"
            views={["year", "month"]}
            label="입사연월"
            helperText="With min and max"
            minDate={new Date("2010/06")}
            maxDate={new Date("2021/02")}
            value={selectedDate}
            onChange={handleDateChange}
            inputVariant="outlined"
          />
          </ThemeProvider>
          {/* <DatePicker
            // locale={ko}
            // selected={startDate}
            // onChange={(date: Date) => setStartDate(date)}
            // dateFormat="yyyy년 M월"
            // showMonthYearPicker
            // closeOnScroll={true}
            minDate={new Date("2010/06")}
            maxDate={new Date("2021/12")}
            // popperModifiers={{
            //   preventOverflow: {
            //     enabled: true,
            //   },
            // }}
          /> */}
          {/* <DatePicker
            locale={ko}
            dateFormat="yyyy-MM-dd"
            className="form-control"
            closeOnScroll={true}
            popperClassName="custom-date-picker"
            popperPlacement="top"
            fixedHeight
            popperModifiers={{
              offset: {
                enabled: true,
                offset: "5px, 10px"
              },
            }}
            selected={moment(date).toDate()}
            onChange={(date: Date) => setDate(dateToString(date))}
          /> */}

          {/* <TextField
            className={styles.textField}
            inputRef={textInput}
            value={onStockValue(numberOfStocks)}
            onChange={onInputStocks}
            label="심은 고구마 수"
            variant="outlined"
            size="small"
            type="number"
            error={error}
            helperText={error ? "최대 4자리 숫자로 입력해 주세요" : ""}
            onKeyDown={onInputKeyDown}
          /> */}
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
