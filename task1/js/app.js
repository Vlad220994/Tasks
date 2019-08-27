const array = [1, 2, -1, 3];

Array.prototype.sum = function() {
  const result = this.reduce(function(sum, res) {
		return sum + res;
	}, 0);

  console.log(result);
  return result;
}

array.sum();
