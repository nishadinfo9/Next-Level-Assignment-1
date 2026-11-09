# What Is Type Narrowing in TypeScript?

## Introduction

Sometimes, we don't know what type of value we will get. It could be a string, a number, or an object. But we need to know its type before using it. This is where Type Narrowing comes in. It helps TypeScript understand what type of value we are working with.
How Does Type Narrowing Works?

There are different ways to narrow types in TypeScript. Let's look at three common ways.

1. Using typeof
We use typeof to check simple types like strings and numbers. For example:

function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toLowerCase());
  } else {
    console.log(value.toFixed(2));
  }
}

Here, the value can be a string or a number. TypeScript checks its type before running the code. If it's a string, it converts it to lowercase. Otherwise, it treats it as a number.

2. Using instanceof
We use instanceof to check if an object belongs to a particular class.

class Dog {
  speak() {
    console.log("waa waa!");
  }
}

function makeSound(animal: Dog | Date) {
  if (animal instanceof Dog) {
    animal.speak();
  }
}

Here, TypeScript knows that animal is a Dog inside the if block. So, we can call its speak() method.

3. Using the in Operator
We use the in operator to check if an object has a specific property.

type User = { name: string };
type Admin = { name: string; role: string };

function showInfo(person: User | Admin) {
  if ("role" in person) {
    console.log(person.role);
  }
}

If the object has a role property, TypeScript knows it can access that property.

## Conclusion
Type Narrowing helps write safer code. We can use typeof for simple types, instanceof for classes, and in for object properties.