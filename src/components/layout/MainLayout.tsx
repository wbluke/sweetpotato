import { Container } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import MainStockCalculator from "./MainStockCalculator";

const useStyles = makeStyles({
  mainComponent: {
    marginTop: '4rem',
    minWidth: '30rem',
  },
});

const MainLayout = () => {
  const styles = useStyles();

  return (
    <>
      <Container maxWidth="sm">
        <div className={styles.mainComponent}>
          <MainStockCalculator />
        </div>
      </Container>
    </>
  );
}

export default MainLayout;
