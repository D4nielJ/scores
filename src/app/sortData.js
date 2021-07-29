const sortData = (data) => {
  let placeholder = {};
  for (let i = 0; i < data.length; i += 1) {
    for (let j = i + 1; j < data.length; j += 1) {
      if (parseInt(data[i].score, 10) < parseInt(data[j].score, 10)) {
        placeholder = data[i];
        data[i] = data[j];
        data[j] = placeholder;
      }
    }
  }
  return data;
};

export default sortData;
