import { Container } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import BaseExchangeRate from "../shares/BaseExchangeRate";
import BaseShare from "../shares/BaseShare";
import ShareInput from '../shares/ShareInput';

const useStyles = makeStyles({
  mainComponent: {
    marginTop: '100px'
  },
});

const MainLayout = () => {
  const styles = useStyles();

  return (
    <>
      <Container maxWidth="sm">
        <div className={styles.mainComponent}>
          <ShareInput />
          <BaseShare />
          <BaseExchangeRate />
        </div>
      </Container>
    </>
  );
}

export default MainLayout;
