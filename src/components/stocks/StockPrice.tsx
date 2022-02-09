import {makeStyles} from '@material-ui/core';
import React, {useCallback, useEffect, useState} from 'react';
import Moment from 'react-moment';
import BlockTitle from '../../common/BlockTitle';
import {renderPercentWithSign, renderZeroToDash} from '../../utils/numberUtils';
import request from "../../utils/httpRequest";
import * as cheerio from 'cheerio';

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

const StockPrice = ({setStockPrice}: IStockPrice) => {
  const [dherStockQuotes, setDherStockQuotes] = useState<IStockQuotes>({
    price: {
      regularMarketChangePercent: 0,
      regularMarketTime: new Date(),
      regularMarketPrice: 0
    }
  });

  const fetchFinance = useCallback(() => {
    /**
     * yahoo-finance crawling
     */
    // request.get('https://zb7bwm0d47.execute-api.ap-northeast-2.amazonaws.com/prod/quote/DHER.DE/history')
    //   .then(({data}: any) => {
    //     const splittedQuoteStore = data.split('QuoteSummaryStore')[1].split('"price"')[1];
    //
    //     const regularMarketChangePercent = parseFloat(splittedQuoteStore.split('"regularMarketChangePercent"')[1].split('"fmt":"')[1].split('%')[0]);
    //     const regularMarketTime = new Date(parseInt(splittedQuoteStore.split('"regularMarketTime":')[1].split(',')[0]) * 1000);
    //     const regularMarketPrice = parseFloat(splittedQuoteStore.split('"regularMarketPrice"')[1].split('"fmt":"')[1].split('"')[0]);
    //
    //     setDherStockQuotes({
    //       price: {
    //         regularMarketChangePercent,
    //         regularMarketTime,
    //         regularMarketPrice
    //       }
    //     })
    //     setStockPrice(regularMarketPrice);
    //   })

    /**
     * investing.com crawling
     */
    request.get('https://fsgtimcehh.execute-api.ap-northeast-2.amazonaws.com/prod/equities/delivery-hero-ag')
      .then(({data}: any) => {
        const $ = cheerio.load(data)

        const regularMarketPrice = parseFloat($("span[data-test=instrument-price-last]").text())
        const regularMarketChangePercent = parseFloat($("span[data-test=instrument-price-change-percent]").text().split(/[()]/)[1].split('%')[0])

        const time = ($("time")[0].children[0] as any).data // hh:mm:ss
        const today = new Date();
        const temp = time.split(":")
        const regularMarketTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), temp[0], temp[1], temp[2]);

        setDherStockQuotes({
          price: {
            regularMarketChangePercent,
            regularMarketTime,
            regularMarketPrice
          }
        })
        setStockPrice(regularMarketPrice);
      })

  }, [setStockPrice]);

  const styles = useStyles({
    stockPriceRatio: dherStockQuotes.price.regularMarketChangePercent
  });

  useEffect(() => {
    fetchFinance();
  }, [fetchFinance]);

  return (
    <>
      <BlockTitle title="실시간 주가"/>
      <span className={styles.stockPrice}>
        {renderZeroToDash(dherStockQuotes.price.regularMarketPrice)} €
        <span className={styles.stockPriceUnit}>
          {' (유로)'}
        </span>
      </span>
      <div className={styles.stockPriceRatio}>
        {renderPercentWithSign(renderZeroToDash(dherStockQuotes.price.regularMarketChangePercent))}
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
