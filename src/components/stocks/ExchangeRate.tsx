import { makeStyles } from '@material-ui/core';
import { AxiosResponse } from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import Moment from 'react-moment';
import BlockTitle from '../../common/BlockTitle';
import request from '../../utils/httpRequest';
import { renderCommaFloat, renderZeroToDash, roundFloat } from '../../utils/numberUtils';

interface IExchangeRate {
  setExchangeRate: (exchangeRate: number) => void
}

interface IExchangeRateInfo {
  date: Date
  rate: number
}

const useStyles = makeStyles({
  exchangeRateText: {
    fontSize: '0.9rem',
    paddingRight: '0.5rem',
  },
  exchangeRate: {
    fontSize: '1.4rem',
  },
  exchangeRateUnit: {
    fontSize: '1rem',
  },
  exchangeRateDate: {
    fontSize: '0.9rem',
    color: '#4D4D4D',
    marginTop: '0.4rem',
  },
});

const ExchangeRate = ({ setExchangeRate }: IExchangeRate) => {
  const styles = useStyles();

  const replaceDateFormat = (date: Date) => {
    return new Date(date.toString().replace(/-/g, "/"));
  }

  const [eurExchangeRate, setEurExchangeRate] = useState<IExchangeRateInfo>({
    date: replaceDateFormat(new Date()),
    rate: 0
  });

  const fetchExchangeRate = useCallback(() => {
    request.get('https://api.manana.kr/exchange/rate/KRW/EUR.json')
      .then(({ data }: AxiosResponse<IExchangeRateInfo[]>) => {
        setEurExchangeRate({
          date: replaceDateFormat(data[0].date),
          rate: data[0].rate
        })
        setExchangeRate(roundFloat(data[0].rate));
      })
  }, [setExchangeRate]);

  useEffect(() => {
    fetchExchangeRate();
  }, [fetchExchangeRate]);

  return (
    <>
      <BlockTitle title="실시간 환율" />
      <span className={styles.exchangeRateText}>
        {'1€(유로) 당 '}
      </span>
      <span className={styles.exchangeRate}>
        {renderCommaFloat(renderZeroToDash(eurExchangeRate.rate))}
        <span className={styles.exchangeRateUnit}>
          {' 원'}
        </span>
      </span>
      <br />
      <div className={styles.exchangeRateDate}>
        <Moment
          date={new Date(eurExchangeRate.date)}
          format="yyyy년 M월 D일 HH:mm 기준"
        />
      </div>
    </>
  );
}

export default ExchangeRate;
