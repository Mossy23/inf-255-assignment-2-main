# Assignment 2 — Working with Lists of Data

Everything in this assignment happens in the **console**. You will not change
the web page. Your job is to work with an array of animal objects using loops,
callbacks, and functions.

Open `script.js`. The `animals` array is already there, followed by a heading
for each task. Write your code under each heading, in order.

## Setting up

1. Open the project folder in VS Code.
2. Open `index.html` with Live Server.
3. Press **F12** and select the **Console** tab. Keep it open the whole time.

All of your output goes to the console.

## The data

Each animal is an object with five properties:

```js
{ id: 1, name: "Luna", species: "cat", age: 3, adopted: false }
```

There are eight animals: three cats, four dogs, and one rabbit. Four have been
adopted and four are still available. Knowing the data is how you check your own
work.

**Do not change the `animals` array.** Every expected result below depends on it.

---

## The tasks

### Task 1 — Animal names with `.map()`

Create a new variable that stores all of the animal names, using `.map()`.
Then log it.

Expected output:

```
[ 'Luna', 'Biscuit', 'Pepper', 'Moose', 'Charly', 'Bill', 'Chompers', 'Beowulf' ]
```

### Task 2 — Log each animal with `.forEach()`

Loop through the animals using `.forEach()` and log the message
`Name: [name] Species: [species]` for each one. Replace the `[name]` and
`[species]` parts with the actual values.

Expected output (eight lines):

```
Name: Luna Species: cat
Name: Biscuit Species: dog
...
```

### Task 3 — Log each animal again with `for...of`

Write a new loop. This time use `for...of` instead of `.forEach()` to loop
through the animals, and log the message `Age: [age] Adopted: [adopted]`.

Expected output (eight lines):

```
Age: 3 Adopted: false
Age: 7 Adopted: true
...
```

You have now written the same kind of loop two different ways. 

### Task 4 — Adopted and available animals with `.filter()`

Use `.filter()` to make two new arrays: one of adopted animals and one of
available animals. Then log them.

Each array should contain **four** animal objects.

### Task 5 — Available dogs with method chaining

Use method chaining to create a new array called `availableDogs`. It should
contain the **names** of all dogs who have **not** been adopted. Then log it.

Expected output:

```
[ 'Moose', 'Charly' ]
```

Read that carefully — there are four dogs in the array, but only two of them
belong in this list.

### Task 6 — Average age with `.reduce()`

Calculate the average age of all the animals. Use `.reduce()` and
`animals.length` in your logic, and log the result.

You can either pass an anonymous function to `.reduce()` or write a separate
named function and pass that in.

Expected output:

```
3.5
```

### Task 7 — Write three functions

Write three functions using the `function` declaration syntax. These do not log
anything; you will use them in the next task.

1. `isCat` — takes a single argument, `animal`. Returns `true` if the animal's
   `species` property is `"cat"`, and `false` otherwise.
2. `isAdopted` — same shape. Returns `true` if the animal is adopted.
3. `getName` — takes an animal and returns its `name` property.

### Task 8 — Adopted cats, using your own functions

Create an array containing the names of adopted cats.

Use the functions you just wrote **instead of anonymous functions** when you
call `.filter()` and `.map()`. You can chain the methods or write separate calls
for each step.

Expected output:

```
[ 'Pepper', 'Bill' ]
```

Pass the function by name — `animals.filter(isCat)`, not
`animals.filter(isCat())`. The parentheses would call the function immediately
instead of handing it to `.filter()`.

### Task 9 — Write `makeSpeciesChecker` (a closure)

Write a function called `makeSpeciesChecker`. It takes a species string and
**returns a new function**. The returned function takes an animal and returns
`true` if that animal matches the species.

So `makeSpeciesChecker("dog")` does not test anything itself — it hands you back
a function that tests for dogs.

### Task 10 — Build `isDog` and `isRabbit`, then log their names

Use your species checker to create two functions called `isDog` and `isRabbit`.
You already wrote `isCat` in Task 7, so you do not need to make that one again.

Then use `isDog`, `isRabbit`, and `getName` with method chaining to log the
names of all the dogs, and then the names of all the rabbits.

Expected output:

```
[ 'Biscuit', 'Moose', 'Charly', 'Beowulf' ]
[ 'Chompers' ]
```

## Comment your code

**Comments are graded.** Replace the task headings in `script.js` with your own
comments explaining what your code does and why.

You do not need a comment on every line, but a reader should be able to follow
your logic from your comments alone. Comments that only restate the code — like
`// map the animals` above a line that maps the animals — do not count.

## Commit and push

Make **at least three commits of your own** while working. The starter commit
does not count. Spread them across your work and write messages that explain
what changed, for example:

- `Add map and forEach tasks`
- `Add filter and reduce tasks`
- `Fixing bug with species checker closure`

A commit saves your work locally. It does not put it on GitHub. Push before you
submit:

```
git push
```

## Before you submit

- All ten tasks are complete and produce the expected output.
- The console shows **no JavaScript errors**. (other errors like "GET http://127.0.0.1:5500/favicon.ico" are not a problem)
- You did not change the `animals` array.
- Tasks 8 and 10 use your named functions, not anonymous ones.
- `script.js` is commented in your own words.
- Your repository has at least three commits you made.
