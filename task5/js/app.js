function sum(a) {

  let result = a;

  function inner(b) {
    result += b;
    return inner;
  }

  inner.toString = function() {
    return result;
  };

  return inner;
}

console.log(sum(1)(3)(3));
