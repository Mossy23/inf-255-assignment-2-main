const animals = [
	{ id: 1, name: "Luna", species: "cat", age: 3, adopted: false },
	{ id: 2, name: "Biscuit", species: "dog", age: 7, adopted: true },
	{ id: 3, name: "Pepper", species: "cat", age: 1, adopted: true },
	{ id: 4, name: "Moose", species: "dog", age: 5, adopted: false },
	{ id: 5, name: "Charly", species: "dog", age: 4, adopted: false },
	{ id: 6, name: "Bill", species: "cat", age: 0.5, adopted: true },
	{ id: 7, name: "Chompers", species: "rabbit", age: 0.5, adopted: false },
	{ id: 8, name: "Beowulf", species: "dog", age: 7, adopted: true },
];

// Instructions for every task are in README.md.
// Write your code below each heading,
// Be sure to add your own comments to the code you are writing

// ---------------------------------------------------------------------------
// Task 1 — Animal names with .map()
const animalNames = animals.map(function (animal) {
	return animal.name;
// ---------------------------------------------------------------------------
console.log("Animal names:", animalNames);
// ---------------------------------------------------------------------------
// Task 2 — Log each animal with .forEach()
	animals.forEach(function (animal) {
	console.log(`${animal.name} is a ${animal.species}.`);
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Task 3 — Log each animal again with for...of
		for (const animal of animals) {
	console.log(
		`${animal.name} is ${animal.age} years old. Adopted: ${animal.adopted}`
	);
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Task 4 — Adopted and available animals with .filter()
		const adoptedAnimals = animals.filter(function (animal) {
	return animal.adopted === true;
});

const availableAnimals = animals.filter(function (animal) {
	return animal.adopted === false;
});

console.log("Adopted animals:", adoptedAnimals);
console.log("Available animals:", availableAnimals);

// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Task 5 — Available dogs with method chaining
	const availableDogNames = animals
	.filter(function (animal) {
		return animal.species === "dog";
	})
	.filter(function (animal) {
		return animal.adopted === false;
	})
	.map(function (animal) {
		return animal.name;
	});

console.log("Available dogs:", availableDogNames);

// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Task 6 — Average age with .reduce() 
	const totalAge = animals.reduce(function (sum, animal) {
	return sum + animal.age;
}, 0);

const averageAge = totalAge / animals.length;

console.log("Average age:", averageAge);
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Task 7 — Write isCat, isAdopted, and getName 
		function isCat(animal) {
	return animal.species === "cat";
}

function isAdopted(animal) {
	return animal.adopted === true;
}

function getName(animal) {
	return animal.name;
}

// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Task 8 — Adopted cats, using your own functions as callbacks
const adoptedCatNames = animals
	.filter(isCat)
	.filter(isAdopted)
	.map(getName);

console.log("Adopted cats:", adoptedCatNames);
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Task 9 — Write makeSpeciesChecker (a closure)
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Task 10 — Build isDog and isRabbit, then log their names
// ---------------------------------------------------------------------------
