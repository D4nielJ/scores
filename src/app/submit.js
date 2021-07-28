const submit = (fetchData, updateDOM) => {
  const form = document.querySelector('form');
  form.addEventListener('submit', async (e) => {
    // Fetch the data to the API
    e.preventDefault();
    const user = form.name.value;
    const score = form.score.value;
    await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/gagYyMmW80J2RAQLFXbE/scores/',
      {
        method: 'POST',
        body: JSON.stringify({
          user: user,
          score: score
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    );
    form.reset();
    const loadedData = await fetchData();
    updateDOM(loadedData);
  });
};

export default submit;
