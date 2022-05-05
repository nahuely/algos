const merge = require("./merge.js");

const twoWayMergeSort = (a) => {
  let splited = a.map((c) => [c]);
  let aux = [];
  while (true) {
    do {
      let rest = splited.splice(0, 2);
      aux.push(merge(rest[0], rest[1] ?? []));
    } while (splited.length > 0);
    splited = aux;

    if (splited.length === 1) {
      break;
    }
    aux = [];
  }
  return splited;
};

module.exports = twoWayMergeSort;
