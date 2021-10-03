import {makeStyles} from '@material-ui/core';
import React, {useCallback, useEffect} from 'react';
import Moment from 'react-moment';
import BlockTitle from '../../common/BlockTitle';
import {renderComma, roundFloat} from '../../utils/numberUtils';

interface IUserStocks {
  stocks: number
  setBaseUserStocksValue: (baseUserStocksValue: number) => void
}

const useStyles = makeStyles({
  baseWonPerStockText: {
    fontSize: '0.9rem',
    paddingRight: '0.5rem',
  },
  baseStockPrice: {
    fontSize: '1.4rem',
  },
  baseStockPriceUnit: {
    fontSize: '1rem',
  },
  baseWonPerStock: {
    fontSize: '1rem',
    marginTop: '0.4rem',
  },
  basePrices: {
    fontSize: '0.9rem',
    marginTop: '1.2rem',
    color: '#4D4D4D',
  },
  baseDate: {
    fontSize: '0.9rem',
    marginTop: '0.4rem',
    color: '#4D4D4D',
  },
});

const BaseUserStocks = ({stocks, setBaseUserStocksValue}: IUserStocks) => {
  const styles = useStyles();

  const baseStockPrice = 105.95;
  const baseExchangeRate = 1351;
  const baseWonPerStock = 143208;
  const baseDate = new Date('2021-03-02');

  const setBaseStocksValue = useCallback(() => {
    setBaseUserStocksValue(roundFloat(stocks * baseWonPerStock));
  }, [stocks, baseWonPerStock, setBaseUserStocksValue]);

  useEffect(() => {
    setBaseStocksValue();
  }, [setBaseStocksValue]);

  return (
    <>
      <BlockTitle title="기준 정보"/>
      <div>
        <span className={styles.baseStockPrice}>
          {renderComma(stocks * baseWonPerStock)}
        </span>
        <span className={styles.baseStockPriceUnit}>
          {' 원'}
        </span>
      </div>
      <div className={styles.baseWonPerStock}>
        <span className={styles.baseWonPerStockText}>
          1주 당
        </span>
        {renderComma(baseWonPerStock)} 원
      </div>
      <div className={styles.basePrices}>
        (
        기준 주가 : {baseStockPrice} €,
        기준 환율 : {renderComma(baseExchangeRate)} 원
        )
      </div>
      <div className={styles.baseDate}>
        <Moment
          date={baseDate}
          format="yyyy년 M월 D일 기준"
        />
      </div>
    </>
  );
}

export default BaseUserStocks;
