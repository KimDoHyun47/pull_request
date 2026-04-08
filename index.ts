let a: number = 1;
let b: number = 2;
let c: number = 3;

console.log(a + b + c);

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(a, b));

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}