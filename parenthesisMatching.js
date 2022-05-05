const Stack = require("./stack");

const front = {
  "{": "}",
  "(": ")",
  "[": "]",
};

let re = /[{|}|(|)|\[|\]]/i;

const checkParenthesisMatching = (string) => {
  const s = new Stack(string.length);
  for (let char of string) {
    if (re.test(char)) {
      if (front[char]) {
        s.push(char);
      } else {
        if (front[s.stackTop()] === char) {
          s.pop();
        } else {
          return false;
        }
      }
    }
  }
  return s.isEmpty();
};

module.exports = checkParenthesisMatching;
