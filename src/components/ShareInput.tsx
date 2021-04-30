import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React from 'react';


const useStyles = makeStyles({
  textField: {
    width: '350px',
    "&:hover": {
      borderColor: () => '#8A2908'
    },
    "&:after": {
      borderColor: () => '#8A2908'
    }
  },
  button: {
    margin: '0 0 0 1px',
    color: '#FFFFFF',
    backgroundColor: '#8A2908',
    "&:hover": {
      backgroundColor: () => '#B43104',
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
      <TextField
        className={styles.textField}
        label=" 🍠 심은 고구마 수"
        variant="outlined"
        size="small"
      />
      <Button
        className={styles.button}
        size="large"
      >
        캐기
      </Button>
    </>
  );
}

export default ShareInput;
