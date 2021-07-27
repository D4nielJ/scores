import fetchData from './fetchData.js';
import data from './data.js';
import updateDOM from './updateDOM.js';

const run = () => {
  let loadedData = [];
  loadedData = fetchData(data);
  updateDOM(loadedData);
};

export default run;
