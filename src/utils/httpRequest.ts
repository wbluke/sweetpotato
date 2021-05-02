import axios from 'axios';

const instance = axios.create();

const request = (() => {

  const get = (url: string) => {
    return instance.get(url);
  }

  return ({
    get
  });

})();

export default request;
