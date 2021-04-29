import { Container } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import ShareInput from './ShareInput';

const useStyles = makeStyles({
  mainComponent: {
    marginTop: '100px'
  },
});

const MainLayout = () => {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="sm">
        <div className={classes.mainComponent}>
          <ShareInput />
        </div>
      </Container>
    </>
  );
}

export default MainLayout;
