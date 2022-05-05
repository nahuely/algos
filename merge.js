const merge = (a, b) => {
  let xa = 0;
  let xb = 0;
  const merged = [];

  while (xa < a.length && xb < b.length) {
    if (a[xa] < b[xb]) {
      merged.push(a[xa]);
      xa++;
    } else {
      merged.push(b[xb]);
      xb++;
    }
  }

  while (xa < a.length) {
    merged.push(a[xa]);
    xa++;
  }

  while (xb < b.length) {
    merged.push(b[xb]);
    xb++;
  }

  return merged;
};

module.exports = merge;
