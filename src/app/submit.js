const submit = (fetchData, updateDOM) => {
  const form = document.querySelector('form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const user = form.name.value;
    const score = form.score.value;
    const validation = document.querySelector('.validation');
    if (score < 0 || score > 1000) {
      validation.classList.add('validation--active');
      return;
    }
    await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ORsjuMzFSdg6WhkhMt4f/scores/',
      {
        method: 'POST',
        body: JSON.stringify({
          user,
          score,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    );
    form.reset();
    validation.classList.remove('validation--active');
    const loadedData = await fetchData();
    updateDOM(loadedData);
  });
};

export default submit;
