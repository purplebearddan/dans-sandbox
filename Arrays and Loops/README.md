# Arrays and Loops

## Lesson Objectives

To Understand...

- Loops
- Array Loops
- Array Methods
  - Map
  - Filter
  - Reduce
- Destructuring Arrays

## Intros

### JS Loops

Loops are a way to execute a block of code repeatedly.

In JavaScript, there are several types of loops, including

- `for loop`
- `while loop`
- `do-while loop`

**Loops can be used to iterate over arrays or perform a specific task a certain number of times.**

#### For Loop

```js
// if the number is lower or equal to 5 log the number
for (let i = 1; i <= 5; i++) {
  console.log(i)
}
```

##### For Loop Output

```text
1
2
3
4
5
```

#### For...Of Loop

```js
const letters = ['a', 'b', 'c']

for (const letter of letters) {
  console.log(letter)
}
```

##### For...Of Loop Output

```text
a
b
c
```

#### For...In Loop

```js
const object = { a: 1, b: 2, c: 3 }

for (const key in object) {
    // log the key and it's value within the object
  console.log(`${key}: ${object[key]}`)
}

```

##### For...In Loop Output

```text
a: 1
b: 2
c: 3
```

#### While Loop

```js
let i = 1

// While the condition is true...
while(i <= 5){
    // ...log the number...
    console.log(i)
    
    // ...add 1 each time the loop runs to stop it looping infiniately...
    i++ 
    // start again!
}   
```

##### While Loop Output

```text
1
2
3
4
5
```

### Do...While Loop

The `do...while` statement creates a `loop` that executes a specified statement until the test condition evaluates to `false`. The condition is evaluated after executing the statement, **resulting in the specified statement executing at least once**.

```js
let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
// Expected output: "12345"
```

### JS Array Loops

`Array loops` are a way to iterate over the elements of an `array`.

In JavaScript, **there are several `methods` you can use to loop through arrays**, including

- `forEach`
- `map`
- `filter`
- `reduce`

`Array loops` **can be used to perform operations on each element of an array or to extract specific elements based on certain criteria.**

#### ForEach Example

> "For-Each-Item-Do-This"

```js
// define an array variable
const myArray = [1, 2, 3, 4, 5]

// "forEach item do this"
myArray.forEach(function(item) {
    // perform this action to each element in the array without effecting the original
  console.log(item)
})
```

##### ForEach Example Output

```text
1
2
3
4
5
```

#### Map Example

Create a new array from an existing array
> aka `map` "to map an array" *verb*

The `map()` method allows you to **create a new `array`** by transforming each element of an existing `array` using a `callback function`. The transformed elements are added to the new `array` in the same order as the original `array`.

##### Map Syntax Example

```js
// Syntax Example
const colors = ['red', 'green', 'blue']

// upperColors array comes from the colors array
const upperColors = colors.map(function(item){
  return item.toUpperCase()
})

```

##### Map Use Example

```js
// Use example
// *Declare* an array to "map over"
const myArray = [1, 2, 3, 4, 5]

// Create a new array from an existing array
const newArray = myArray.map((item) => {
    // divide each of the numbers and return the answer
    return item / 2
})

// using foreach on newArray will...
newArray.forEach((item) => {
    
    // ... log each item
    console.log(item)

})

```

##### Map Use Example Output

```text
0.5
1
1.5
2
2.5
```

#### Filter Example

Return a filtered version of the original array

> aka `filter` "to **filter** an array" *verb*

The `filter()` method allows you to create a new array by filtering out elements from an existing array based on a certain condition. The condition is specified using a `callback function` that returns a `boolean value`. The new array will only contain the elements that passed the condition.

##### Filter Syntax Example

```js
// syntax
array.filter(function(item){
  return conditionForFilter
})

```

##### Filter Use Example

```js
const myArray = [1, 2, 3, 4]

// Returns a filtered array of the myArray
const filteredArray = myArray.filter((item) => {
    // return if true 1,2,3 but no more
    return (item <= 3)
})

// using foreach on filteredArray will...
filteredArray.forEach(function(item){
    
    // log each item
    console.log(item)

})
```

##### Filter Use Example Output

```text
1
2
3
```

#### JS Reduce

`reduce()` is a `method` that can be called on an `array` in JavaScript. It is used to reduce an `array` into a single value by performing a specified operation on each element of the array. The `reduce()` method takes a `callback function` as an argument, which is used to specify the operation to be performed on the `array` elements. The `callback function` takes *two arguments*: the `accumulator` and the current value. The `accumulator` is the `accumulated value` **from the previous iteration**, while the `current value` is the **current value being processed**.

#### JS Reduce Syntax Example

```js
Array.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue
})


```

#### JS Reduce Example

```js
const myArray = [1, 2, 3, 4, 5]

function reducerCallback(a, b) {
  return a + b
}

const sum = myArray.reduce(reducerCallback)

console.log(sum)
```

##### JS Reduce Example Output

```text
15
```

In the example above, the `reduce()` method is used to sum the elements of `myArray`. **The callback function takes two arguments**: `a` and `b`. **The `a` starts with an initial value of,`0`** and is updated with the sum of each element of the array as the `reduce()` method iterates through the array. Finally, **the sum of all the elements is returned and assigned to the sum variable**.

### Destructuring Arrays

To destructure an `array`, we use the square brackets `[]` syntax to specify the `variables` we want to *extract* from the `array`, followed by the `array` we want to destructure. The variables are assigned the values of the corresponding `array elements`.

```js
let numbers = [1, 2, 3]
let [a, b] = numbers
console.log(a)    // 1
console.log(b)    // 2
```

We can also destructure arrays with default values and use the rest operator `...` to capture any remaining elements of the array.

```js
let numbers = [1, 2, 3]
let [a, b = 0, ...rest] = numbers
console.log(a)    // 1
console.log(b)    // 2
console.log(rest) // [3]
```

## Resources

### W3 Schools

- [For](https://www.w3schools.com/js/js_loop_for.asp)
- [While](https://www.w3schools.com/js/js_loop_while.asp)
- [Array Iteration (forEach)](https://www.w3schools.com/js/js_array_iteration.asp)
- [Array Methods](https://www.w3schools.com/js/js_array_methods.asp)

### MDN Docs

- [For](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
- [While](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
