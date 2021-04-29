import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React from 'react';

const useStyles = makeStyles({
  textField: {
    width: '225px',
  },
});

const ShareInput = () => {
  const classes = useStyles();

  return (
    <>
      <TextField
        className={classes.textField}
        id="outlined-search"
        label="보유 주식 수를 입력해 주세요"
        type="search"
        variant="outlined"
      />
    </>
  );
}

export default ShareInput;
