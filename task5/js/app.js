function sum(a) {          
	return function sum2(b) {
		if (typeof b === 'undefined') {
			return a;
		}
		return sum(a + b);
	}
}

console.log(sum(5)(6)(7)());
