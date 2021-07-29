const fetchData = async () => {
  let data = [];
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ORsjuMzFSdg6WhkhMt4f/scores/')
    .then((response) => response.json())
    .then((json) => {
      data = json.result;
    });
  return data;
};

export default fetchData;
