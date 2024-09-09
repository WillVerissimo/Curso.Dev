function add(n1, n2) {
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    return "Error";
  }
  return n1 + n2;
}

function divide(n1, n2) {
  if (n2 === 0) {
    return 0;
  } else {
    return n1 / n2;
  }
}

exports.add = add;
exports.divide = divide;
