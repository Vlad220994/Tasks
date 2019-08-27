class Human {
  constructor(params) {
  	this.firstName = params.firstName;
  	this.lastName = params.lastName;
  }

  walk() {
  	console.log(`${this.firstName} walks`);
  }
}

class Man extends Human {
	
  playFootballAndWalk() {
  	console.log(`${this.lastName} plays football`);
  	super.walk();
  }
}

let man1 = new Man({
	firstName: "Vasya",
	lastName: "Ivanov",
	gender: "male"
});

console.log(man1);

man1.walk();
man1.playFootballAndWalk();