import fetchData from './fetchData.js';
import updateDOM from './updateDOM.js';
import refresh from './refresh.js';
import submit from './submit.js';

const run = async () => {
  refresh(fetchData, updateDOM);
  submit(fetchData, updateDOM);
  const loadedData = await fetchData();
  updateDOM(loadedData);
};

export default run;
