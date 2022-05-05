const merge = require("./merge");

const mergeSort = (list) => {
  if (list.length < 2) {
    return list;
  }

  return merge(
    mergeSort(list.slice(0, list.length / 2)),
    mergeSort(list.slice(list.length / 2))
  );
};

module.exports = mergeSort;
