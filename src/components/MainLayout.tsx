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
  const styles = useStyles();

  return (
    <>
      <Container maxWidth="sm">
        <Container maxWidth="sm">
          <div className={styles.mainComponent}>
            <ShareInput />
          </div>
        </Container>
      </Container>
    </>
  );
}

export default MainLayout;
