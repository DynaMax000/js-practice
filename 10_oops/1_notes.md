# Javascripts Classes and Objects

## OOPS

- Object-Oriented Programming System
- A programming paradigm based on the concept of "objects", which can contain data and code:
- **Data**: Attributes or properties of the object.
- **Code**: Functions or methods that operate on the data.

## Object

- collection of properties and methods
- toLowerCase()
- toUpperCase() etc.

## Why use OOPS?

- **Organization**: Group related data and functions together.
- **Reusability**: Create reusable components.
- **Encapsulation**: Hide implementation details and expose only necessary parts.
- **Inheritance**: Create new objects based on existing ones, allowing for code reuse and extension.
- **Polymorphism**: Allow different objects to be treated as instances of the same class through a common interface.
- **Abstraction**: Simplify complex systems by modeling classes based on the essential properties and behaviors an object should have.

## Parts of OOPS

- Object literal notation

```javascript
const person = {
  name: "John",
  age: 30,
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};
```

- Constructor function

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
  };
}
const person1 = new Person("John", 30);
const person2 = new Person("Jane", 25);
```

- Prototype

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};
const person1 = new Person("John", 30);
const person2 = new Person("Jane", 25);
```

- Class syntax

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}
const person1 = new Person("John", 30);
const person2 = new Person("Jane", 25);
```

- Intances (new, this)

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}
const person1 = new Person("John", 30);
const person2 = new Person("Jane", 25);
person1.greet(); // Hello, my name is John
person2.greet(); // Hello, my name is Jane
```

## 4 pillars of OOPS

- Abstraction
- Encapsulation
- Inheritance
- Polymorphism
