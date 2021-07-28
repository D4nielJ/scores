const refresh = (fetchData, updateDOM) => {
  const refreshBtn = document.querySelector('.btn-refresh');
  refreshBtn.addEventListener('click', async () => {
    const loadedData = await fetchData();
    updateDOM(loadedData);
  });
};

export default refresh;
