import { Container, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import ShareInput from './ShareInput';

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
        {/* <Grid container spacing={2}> */}
          <div className={styles.mainComponent}>
            <ShareInput />
          </div>
        {/* </Grid> */}
      </Container>
    </>
  );
}

export default MainLayout;
