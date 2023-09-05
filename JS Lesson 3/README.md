# Control Flow

## Lesson Objectives

To understand...

- Operators
- If
- Else
- Else if

## Intros

### Operators

`Operators` are `symbols` that are used to perform `operations` on one or more `values` in JavaScript. There are several types of `operators` in `JavaScript`, including `arithmetic operators`, `comparison operators`, `logical operators`, `assignment operators`, and `conditional operator` (`ternary`).

#### Arithmetic Operators

Arithmetic operators are used to perform mathematical calculations on numbers. The most common arithmetic operators in JavaScript are `+` (addition), `-` (subtraction), `*` (multiplication), `/` (division), and `%` (modulus).

```js
let x = 10;
let y = 5;

console.log(x + y);  // 15
console.log(x - y);  // 5
console.log(x * y);  // 50
console.log(x / y);  // 2
console.log(x % y);  // 0
```

#### Comparison Operators

Comparison operators are used to compare two values in JavaScript. The most common comparison operators in JavaScript are `==` (equal to), `!=` (not equal to), `>` (greater than), `<` (less than), `>=` (greater than or equal to), and `<=` (less than or equal to).

```js
let x = 10;
let y = 5;

console.log(x == y);  // false
console.log(x != y);  // true
console.log(x > y);   // true
console.log(x < y);   // false
console.log(x >= y);  // true
console.log(x <= y);  // false
```

#### Logical Operators

Logical operators are used to combine two or more conditions in JavaScript. The most common logical operators in JavaScript are `&&` (logical AND), `||` (logical OR), and `!` (logical NOT).

```js
let x = 10;
let y = 5;

console.log(x > 5 && y < 10);   // true
console.log(x > 5 || y > 10);   // true
console.log(!(x > 5));          // false
```

#### Assignment Operators

Assignment operators are used to assign a value to a variable in JavaScript. The most common assignment operators in JavaScript are `=` (assignment), `+=` (addition assignment), `-=` (subtraction assignment), `*=` (multiplication assignment), `/=` (division assignment), and `%=` (modulus assignment).

```js
let x = 10;
x += 5;   // equivalent to x = x + 5

console.log(x);   // 15
```

### If

In programming, the "if" statement is a conditional statement that allows a program to execute different blocks of code based on whether a specified condition is true or false. The basic syntax for an "if" statement is:

```js
if (condition) {
   // code to execute if condition is true
}
```

If the condition is true, the code within the curly braces will be executed. If the condition is false, the code within the curly braces will be skipped.

### Else

The "else" statement is used in conjunction with an "if" statement to execute a block of code if the "if" condition is false. The basic syntax for an "if-else" statement is:

```js
if (condition) {
   // code to execute if condition is true
} else {
   // code to execute if condition is false
}
```

If the condition is true, the code within the first set of curly braces will be executed. If the condition is false, the code within the second set of curly braces will be executed.

### Else If

The "else if" statement is used to chain multiple conditions together in an "if-else" statement. The basic syntax for an "if-else if" statement is:

```js
if (condition1) {
   // code to execute if condition1 is true
} else if (condition2) {
   // code to execute if condition2 is true
} else {
   // code to execute if all conditions are false
}

```

The "else if" statement allows for multiple conditions to be checked in sequence, with the code associated with the first true condition being executed. If no conditions are true, the code within the final "else" statement will be executed.

#### Conditional Operator (Ternary)

A Ternary is a shorthand way of writing an `if...else` statement in JavaScript. It takes three operands: a `condition`, a `value` to be returned if the condition is `true`, and a `value` to be returned if the condition is `false`.

```js
let age = 18;
let message = (age <= 18) ? "You are not old enough to vote" : "You are old enough to vote";

console.log(message);   // You are old enough to vote
```

## Resources

- [W3 Schools](https://www.w3schools.com/js/js_if_else.asp)
- [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
