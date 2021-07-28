const refresh = (data, callback) => {
  const refreshBtn = document.querySelector('.btn-refresh');
  refreshBtn.addEventListener('click', () => {
    callback(data);
  })
}

export default refresh;