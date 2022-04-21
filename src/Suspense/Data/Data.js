import  { wrapPromise } from '../Utils/Utils'

const getData = () => (
  fetch('https://api.coinstats.app/public/v1/markets?coinId=bitcoin')
    .then(response => response.json())
);

const fetchData = () => {
  // get data returns a promise
  const cryptoData = getData();

  return {
    data: wrapPromise(cryptoData),
  };
}

export {
  getData,
  fetchData
}
