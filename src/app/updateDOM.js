import sortData from './sortData';

const updateDOM = (data) => {
  const table = document.querySelector('tbody');
  table.innerHTML = '';
  data = sortData(data);
  data.forEach((player) => {
    const row = document.createElement('tr');
    row.innerHTML = `
    <tr>
      <td>${player.user}</td>
      <td>${player.score}</td>
    </tr>`;
    table.appendChild(row);
  });
};

export default updateDOM;
