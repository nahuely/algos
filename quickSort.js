const partition = (list) => {
  let pivot = list[0];
  let l = 0;
  let h = list.length - 1;

  while (l < h) {
    while (list[l] <= pivot) {
      l++;
    }

    while (list[h] > pivot) {
      h--;
    }

    if (list[l] > list[h] && l < h) {
      let temp = list[l];
      list[l] = list[h];
      list[h] = temp;
    }
  }

  let temp = list[0];
  list[0] = list[h];
  list[h] = temp;

  return h;
};

const quickSort = (list) => {
  if (list.length < 2) {
    return list;
  }

  const pivot = partition(list);
  return [].concat(
    quickSort(list.slice(0, pivot + 1)),
    quickSort(list.slice(pivot + 1))
  );
};

module.exports = quickSort;
