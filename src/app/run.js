import fetchData from './fetchData.js';
import data from './data.js';
import updateDOM from './updateDOM.js';

const run = () => {
  const loadedData = fetchData(data);
  updateDOM(loadedData);
};

export default run;
