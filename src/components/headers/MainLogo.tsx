import { Grid, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import infoButton from '../../images/info_button.png';
import infoButtonHover from '../../images/info_button_hover.png';
import logo from '../../images/woowa_sweet_potato_logo.png';
import InformationModal from './InformationModal';

const useStyles = makeStyles({
  logo: {
    width: '10rem',
    paddingBottom: '3rem',
  },
  infoButton: {
    width: '2rem',
    marginBottom: '3.6rem',
    "&:hover": {
      cursor: 'pointer',
    },
  },
});

const MainLogo = () => {
  const styles = useStyles();

  const [infoModalOpen, setInfoModalOpen] = useState<boolean>(false);

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Grid item xs={1} />
        <Grid item xs={10}>
          <img
            className={styles.logo}
            src={logo}
            alt={"logo"}
          />
          <img
            className={styles.infoButton}
            src={infoButton}
            alt={"infoButton"}
            onMouseOver={event => event.currentTarget.src = infoButtonHover}
            onMouseOut={event => event.currentTarget.src = infoButton}
            onClick={() => setInfoModalOpen(true)}
          />
        </Grid>
        <Grid item xs={1} />
      </Grid>

      <InformationModal
        open={infoModalOpen}
        setOpen={setInfoModalOpen}
      />
    </>
  );
}

export default MainLogo;
