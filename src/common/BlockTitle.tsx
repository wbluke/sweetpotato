import { makeStyles } from '@material-ui/core';
import React from 'react';
import HorizonLine from './HorizonLine';

interface IBlockTitle {
  title: string
}

const useStyles = makeStyles({
  layout: {
    paddingTop: '3rem',
  },
  stockPriceTitle: {
    fontFamily: 'GmarketSans Bold',
    fontSize: '1.4rem',
    float: 'left',
  },
});

const BlockTitle = ({ title }: IBlockTitle) => {

  const styles = useStyles();

  return (
    <>
      <div className={styles.layout}>
        <div className={styles.stockPriceTitle}>
          {title}
        </div>
        <br />
        <div>
          <HorizonLine />
        </div>
      </div>
    </>
  );
}

export default BlockTitle;
