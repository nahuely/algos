const binarySearch = (q, list) => {
  let l = 0;
  let h = list.length - 1;
  let mid = Math.floor(h / 2);

  while (l <= h) {
    if (list[mid] === q) {
      return mid;
    } else if (q < list[mid]) {
      h = mid - 1;
      mid = Math.floor(h / 2);
    } else {
      l = mid + 1;
      mid = Math.floor((l + h) / 2);
    }
  }

  return -1;
};

module.exports = binarySearch;
