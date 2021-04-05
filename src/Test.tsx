import React from 'react';

const Test = () => {
    var httpRequestOptions = {
        proxy: 'http://finance.yahoo.com'
    };

    const yahooFinance = require('yahoo-finance');

    yahooFinance.quote({
        symbol: 'DHER.DE',
        modules: ['price', 'summaryDetail'] // see the docs for the full list
    }, httpRequestOptions, function (err: any, quotes: any) {
        console.log(err)
        console.log(quotes)
        // ...
    });

    //   yahooFinance.historical({
    //     symbol: 'DHER.DE',
    //     from: '2021-03-01',
    //     to: '2021-03-31',
    //     // period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
    //   }, function (err: any, quotes: any) {
    //     console.log(err)
    //     console.log(quotes)
    //     //...
    //   });


    return (
        <div className="Test">
        </div>
    );
}

export default Test;
