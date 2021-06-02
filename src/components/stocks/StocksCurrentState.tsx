import { makeStyles } from '@material-ui/core';
import React from 'react';
import BlockTitle from '../../common/BlockTitle';
import { renderComma, renderCommaWithSign, renderZeroToDash } from '../../utils/numberUtils';

interface IStocksCurrentState {
  stocks: number
  stockPrice: number
  exchangeRate: number
  baseUserStocksValue: number
}

interface IStocksCurrentStateStyleProps {
  differenceAmounts: number
}

const useStyles = makeStyles({
  currentStocksValueAmounts: {
    fontSize: '2rem',
  },
  difference: {
    marginTop: '0.7rem',
    fontSize: '1.2rem',
    textAlign: 'right',
  },
  differenceUnit: {
    fontSize: '1rem',
  },
  differenceAmounts: {
    color: (props: IStocksCurrentStateStyleProps) => {
      return props.differenceAmounts >= 0
        ? 'red'
        : 'blue';
    },
  },
  differenceText: {
    fontSize: '0.9rem',
    paddingRight: '0.5rem',
  },
  sweetPotato: {
    marginTop: '0.7rem',
    fontSize: '0.9rem',
  },
});

const StocksCurrentState = ({ stocks, stockPrice, exchangeRate, baseUserStocksValue }: IStocksCurrentState) => {
  const calculateCurrentStocksValue = () => {
    return stocks * stockPrice * exchangeRate;
  }

  const calculateDifference = () => {
    const currentStocksValue = calculateCurrentStocksValue();
    if (currentStocksValue === 0) {
      return 0;
    }

    return currentStocksValue - baseUserStocksValue;
  }

  const styles = useStyles({
    differenceAmounts: calculateDifference()
  });

  return (
    <>
      <BlockTitle title="현재 자산" />
      <span className={styles.currentStocksValueAmounts}>
        {renderComma(renderZeroToDash(calculateCurrentStocksValue()))}
      </span>
      {' 원'}

      <div className={styles.difference}>
        <span className={styles.differenceText}>
          {'기준 정보 대비'}
        </span>
        <span className={styles.differenceAmounts}>
          {renderCommaWithSign(renderZeroToDash(calculateDifference()))}
        </span>
        <span className={styles.differenceUnit}>
          {' 원'}
        </span>
      </div>

      <div className={styles.sweetPotato}>
        <b>
        {`고구마 ${stocks} 개`}
        </b>
      </div>
    </>
  );
}

export default StocksCurrentState;
