import fetchData from './fetchData.js';
import data from './data.js';
import updateDOM from './updateDOM.js';

export default function run() {
  /*
   * 1. TODO: fetch async { data } from the API;
   * (for now load locally)
   */
  let loadedData = [];
  loadedData = fetchData(data);

  // 2. Update DOM
  updateDOM(loadedData);

  // TODO: 3. submit info from the form -> update DOM;
  // TODO: 4. Refresh button -> update DOM;
}
