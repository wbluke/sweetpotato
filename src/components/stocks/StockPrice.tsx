import { makeStyles } from '@material-ui/core';
import numeral from 'numeral';
import React, { useCallback, useEffect, useState } from 'react';
import Moment from 'react-moment';
import BlockTitle from '../../common/BlockTitle';
import HorizonLine from '../../common/HorizonLine';
import { renderPercentWithSign } from '../../utils/numberUtils';

interface IStockPrice {
  setStockPrice: (stockPrice: number) => void
}

interface IStockQuotes {
  price: {
    regularMarketPrice: number,
    regularMarketTime: Date,
    regularMarketChangePercent: number
  }
}

interface IStockPriceStyleProps {
  stockPriceRatio: number
}

const useStyles = makeStyles({
  stockPrice: {
    fontSize: '1.4rem',
  },
  stockPriceUnit: {
    fontSize: '1rem',
  },
  stockPriceRatio: {
    fontSize: '1.1rem',
    marginTop: '0.4rem',
    color: (props: IStockPriceStyleProps) => {
      return props.stockPriceRatio >= 0
        ? 'red'
        : 'blue';
    },
  },
  stockPriceDate: {
    fontSize: '0.9rem',
    color: '#4D4D4D',
    marginTop: '0.4rem',
  },
});

const yahooFinance = require('yahoo-finance');

const StockPrice = ({ setStockPrice }: IStockPrice) => {
  const [dherStockQuotes, setDherStockQuotes] = useState<IStockQuotes>({
    price: {
      regularMarketChangePercent: 0,
      regularMarketTime: new Date(),
      regularMarketPrice: 0
    }
  });

  const fetchFinance = useCallback(() => {
    yahooFinance.quote({
      symbol: 'DHER.DE',
      modules: ['price']
    }, (err: any, quotes: IStockQuotes) => {
      setDherStockQuotes(quotes)
      setStockPrice(quotes.price.regularMarketPrice);
    });
  }, [setStockPrice]);

  const styles = useStyles({
    stockPriceRatio: dherStockQuotes.price.regularMarketChangePercent
  });

  useEffect(() => {
    fetchFinance();
  }, [fetchFinance]);

  return (
    <>
      <BlockTitle title="실시간 주가" />
      <span className={styles.stockPrice}>
        {dherStockQuotes.price.regularMarketPrice} €
        <span className={styles.stockPriceUnit}>
          {' (유로)'}
        </span>
      </span>
      <div className={styles.stockPriceRatio}>
        {renderPercentWithSign(dherStockQuotes.price.regularMarketChangePercent)}
      </div>
      <div className={styles.stockPriceDate}>
        <Moment
          date={dherStockQuotes.price.regularMarketTime}
          format="yyyy년 M월 D일 HH:mm 기준"
        />
      </div>
    </>
  );
}

export default StockPrice;
