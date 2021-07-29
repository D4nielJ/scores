const sortData = data => {
  let placeholder = {};
  data.forEach((player, i) => {
    data.forEach((player, j) => {
      if (data[i].score > data[j].score) {
        placeholder = data[i];
        data[i] = data[j];
        data[j] = placeholder;
      }
    })
  })
}

export default sortData;