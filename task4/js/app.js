const obj = {
	a: 0,

	add() {
		 this.a++;
		 return this;
	},

	dec() {
		this.a--;
		return this;
	},

	showResult() {
		console.log(this.a);
	}
};

obj.add().add().dec().add().showResult();
