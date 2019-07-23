import * as _ from 'lodash';

console.log('hello');

const sum = 2 + 10;

const multiply = (a: number, b: number): number => {
  return a * b;
}

console.log(multiply(sum, 9));

async function hello(name?: string) {
  if(!name) return 'Hello Stranger'
  return `Hello ${name}`;
}

hello();
const donGreeting = hello('Don');

_.pickBy(donGreeting, _.isString);

// this is a comment