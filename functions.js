const math = {};

function add(a,b) {
   return a + b;
}

function substract(a,b) {
  return a - b;
}

function multiply(a,b) {
  return a * b;
}

function divide(a,b) {
  if (b == 0) {
    return "error no se puede dividir entre cero"
  } else {
    return a / b;
  }
}


math.add = add;
math.substract = substract;
math.multiply = multiply;
math.divide = divide;

module.exports = math;