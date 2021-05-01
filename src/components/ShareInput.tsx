import { Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React from 'react';

const useStyles = makeStyles({
  textField: {
    width: "100%",
    maxWidth: "300px",
    float: "right",
    "&:hover": {
      borderColor: () => '#8A2908'
    },
    "&:after": {
      borderColor: () => '#8A2908'
    }
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

const onSearch = (value: string) => console.log(value);

const ShareInput = () => {
  const styles = useStyles();

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={1} />
        <Grid item xs={7}>
          <TextField
            className={styles.textField}
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

export default ShareInput;
