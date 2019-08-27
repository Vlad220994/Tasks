function Human(params) {
	this.firstName = params.firstName;
	this.lastName = params.lastName;
};

Human.prototype.walk = function() {
	console.log(`${this.firstName} walks`);
}

var human1 = new Human({
	firstName: "Sasha",
	lastName: "Dedko"
});

console.log(human1);

human1.walk();

function Man(params) {
	Human.apply(this, arguments);

	this.firstName = params.firstName;
	this.lastName = params.lastName;
	this.gender = params.gender;

	console.log(`gender: ${this.gender}`);
	console.log(`name: ${this.firstName} `);
};

Man.prototype = Object.create(Human.prototype);
Man.prototype.constructor = Man;

Man.prototype.playFootball = function() {
	console.log(`${this.firstName} plays football`);
};

var man1 = new Man({
	firstName: "Vasya",
	lastName: "Ivanov",
	gender: "male"
});

console.log(man1);

man1.playFootball();
man1.walk();
