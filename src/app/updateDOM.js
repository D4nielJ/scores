const updateDOM = (data) => {
  const table = document.querySelector('tbody');
  data.forEach((player) => {
    const row = document.createElement('tr');
    row.innerHTML = `
    <tr>
      <td>${player.name}</td>
      <td>${player.score}</td>
    </tr>`;
    table.appendChild(row);
  });
};

export default updateDOM;
