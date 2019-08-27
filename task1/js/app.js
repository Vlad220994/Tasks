const array = [1, 2, -1, 3];

function sum(arr) {
  const result =	arr.reduce(function(sum, res) {
    return sum + res;
  }, 0);

  console.log(result);
}

sum(array);
