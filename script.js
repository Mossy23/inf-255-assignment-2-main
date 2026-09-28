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
// Task 1: map() creates a new array by taking the name property from
// every animal object, giving us a simple list of all animal names.
const animalNames = animals.map(function (animal) {
	return animal.name;
});

console.log(animalNames);

// Task 2: forEach() runs the callback once for every animal, allowing us
// to display each animal's name and species without creating a new array.
animals.forEach(function (animal) {
	console.log(`Name: ${animal.name} Species: ${animal.species}`);
});

// Task 3: for...of also goes through each animal, but it lets us work
// directly with each value from the array instead of using a callback.
// Unlike forEach(), for...of can also be stopped with break or continue.
for (const animal of animals) {
	console.log(`Age: ${animal.age} Adopted: ${animal.adopted}`);
}

// Task 4: filter() creates new arrays without changing the original animals
// array. One array contains adopted animals and the other contains animals
// that are still available.
const adoptedAnimals = animals.filter(function (animal) {
	return animal.adopted === true;
});

const availableAnimals = animals.filter(function (animal) {
	return animal.adopted === false;
});

console.log("Adopted animals:", adoptedAnimals);
console.log("Available animals:", availableAnimals);

// Task 5: The first filter keeps only dogs, the second keeps only dogs
// that are not adopted, and map() turns those animal objects into names.
const availableDogs = animals
	.filter(function (animal) {
		return animal.species === "dog";
	})
	.filter(function (animal) {
		return animal.adopted === false;
	})
	.map(function (animal) {
		return animal.name;
	});

console.log(availableDogs);

// Task 6: reduce() adds all of the animal ages together. Dividing the
// total by animals.length gives the average age of the entire array.
const totalAge = animals.reduce(function (sum, animal) {
	return sum + animal.age;
}, 0);

const averageAge = totalAge / animals.length;

console.log(averageAge);

// Task 7: These named functions each perform one small job so they can
// be reused as callbacks in later array methods.
function isCat(animal) {
	return animal.species === "cat";
}

function isAdopted(animal) {
	return animal.adopted === true;
}

function getName(animal) {
	return animal.name;
}

// Task 8: First filter() uses isCat to keep only cats. The second filter()
// uses isAdopted to keep only adopted cats. Finally, map() uses getName
// to turn those animal objects into an array containing their names.
const adoptedCatNames = animals
	.filter(isCat)
	.filter(isAdopted)
	.map(getName);

console.log(adoptedCatNames);

// Task 9: This function creates a new checker function for whichever
// species is supplied. The returned function remembers the species value,
// which is what makes this a closure.
function makeSpeciesChecker(species) {
	return function (animal) {
		return animal.species === species;
	};
}

// Task 10: These two functions are created by the species checker, so
// each one remembers a different species. They can then be passed directly
// to filter(), followed by getName to return only the matching names.
const isDog = makeSpeciesChecker("dog");
const isRabbit = makeSpeciesChecker("rabbit");

const dogNames = animals.filter(isDog).map(getName);
const rabbitNames = animals.filter(isRabbit).map(getName);

console.log(dogNames);
console.log(rabbitNames);
