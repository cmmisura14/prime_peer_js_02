
//Code goes here
function Person(name, age, workoutHours, weight, burritos){
	this.name = name;
	this.age = age;
	this.workoutHours = workoutHours;
	this.weight = weight;
	this.burritos = burritos;
	this.adjustedWeight = function(){
		console.log("This works");
		if (this.workoutHours > this.burritos){
			this.weight -= (this.workoutHours - this.burritos);
		}
		else if (this.workoutHours < this.burritos){
			this.weight += (this.burritos - this.workoutHours);
		}
		return this.weight;
	};


}
//Utility function
//A simple random number generator
function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}
var namingArray = ["Bob", "Steve", "Mark", "Cody", "Scott", "Mike", "Kelly", "Mary"];

var employeeArray = [];

function generateEmployee(array){
	var tempArray = [];
	for(var i = 0; i < array.length; i++){
		var newEmployee = new Person (array[i], randomNumber(18, 80), randomNumber(0, 10), randomNumber(150, 300), randomNumber(1, 5));
		newEmployee.adjustedWeight();
		tempArray.push(newEmployee);

	}
	return tempArray;
}
employeeArray = generateEmployee(namingArray);
console.log(employeeArray);



