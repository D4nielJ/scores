const submit = (fetchData, updateDOM) => {
  const form = document.querySelector('form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const user = form.name.value;
    const score = form.score.value;
    await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/9YugNr0GKrJIfPey1hC9/scores/',
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
