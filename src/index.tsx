import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import koLocale from "date-fns/locale/ko";
import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <MuiPickersUtilsProvider utils={DateFnsUtils} locale={koLocale}>
    <App />
  </MuiPickersUtilsProvider>
  , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
