// paste this constants in node_modules/yahoo-finance/lib/constants.js

const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
exports.HISTORICAL_CRUMB_URL = PROXY_URL + 'finance.yahoo.com/quote/$SYMBOL/history';
exports.HISTORICAL_DOWNLOAD_URL = PROXY_URL + 'query1.finance.yahoo.com/v7/finance/download/$SYMBOL';
exports.SNAPSHOT_URL = PROXY_URL + 'query2.finance.yahoo.com/v10/finance/quoteSummary/$SYMBOL';
