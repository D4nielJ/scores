// const fetchData = (data = []) => data;

const fetchData = async () => {
  let data = [];
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/gagYyMmW80J2RAQLFXbE/scores/')
  .then(response => response.json())
  .then(json => data = json.result);
  return data;
}

export default fetchData;
