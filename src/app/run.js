import fetchData from './fetchData.js';
import updateDOM from './updateDOM.js';
import refresh from './refresh.js';
import submit from './submit.js';

const run = async () => {
  const loadedData = await fetchData();
  updateDOM(loadedData);
  refresh(fetchData, updateDOM);
  submit(fetchData, updateDOM);
};

export default run;
