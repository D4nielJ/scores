const refresh = (fetchData, updateDom) => {
  const refreshBtn = document.querySelector('.btn-refresh');
  refreshBtn.addEventListener('click', async () => {
    const loadedData = await fetchData();
    updateDom(loadedData);
  });
};

export default refresh;
