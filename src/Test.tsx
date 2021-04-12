import { AxiosResponse } from 'axios';
import React, { useEffect } from 'react';

const Test = () => {
    useEffect(() => {
        const axios = require("axios");

        axios.get('https://www.naver.com/', { headers: { 'crossdomain': true } }).then((data: AxiosResponse) => {
            console.log(data);
        })

        // ======

        // chrome CORS extension으로 아래 yahooFinance 요청은 해결, 위 naver 요청은 미해결 (preflight)
        // chrome extension off 시에는 둘 다 No Access-Control-Allow-Origin header 문제
        // https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe

        // CORS : https://developer.mozilla.org/ko/docs/Web/HTTP/CORS#Preflighted_requests

        const yahooFinance = require('yahoo-finance');

        yahooFinance.quote({
            symbol: 'DHER.DE',
            modules: ['price', 'summaryDetail'] // see the docs for the full list
        }, function (err: any, quotes: any) {
            console.log(err)
            console.log(quotes)
        });

        yahooFinance.historical({
            symbol: 'DHER.DE',
            from: '2021-03-01',
            to: '2021-03-31',
            period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
        }, function (err: any, quotes: any) {
            console.log(err)
            console.log(quotes)
        });
    }, []);

    return (
        <div className="Test">
        </div>
    );
}

export default Test;
