
const { add, subtract, divide, multiply } = require('./calculator');

/**
 * @file index.js is the root file for this example app
 * @author Brad Traversy
 * @see <a href="https://traversymedia.com"> Traversy Media </a>
 */

/**
 * Student Name
 * @type {string}
 */
const studentName = 'John Doe';

/**
 * Array of grades
 * @type {Array<number>}
 */
const grades = [98, 97.7, 76, 89];

/**
 * Todo object
 * @type {{id: number|string, text: string}}
 */
const todo = {
    id: '1',
    text: 'Hello'
};


/**
 * Calculate Tax
 * @param {number} amount - Total amount 
 * @param {*} tax - Tax percentage
 * @returns {string} - Total with a dollar sign
 */
const calculateTax = (amount, tax) => {
    return `$${amount + tax * amount}`;
};

/**
 * Student Info
 * @typedef {Object} Student
 * @typedef {number} id - Student ID
 * @typedef {string} name -Student Name
 * @typedef {string|number} [age] - Student Age (optional) 
 * @typedef {boolean} isActive - Student is Active 
 */

/**
 * @type {Student}
 */
const Student = {
    id: 1,
    name: 'John Doe',
    age: 20,
    isActive: true
}

/**
 * Class to create a person object
 */
class Person {
  /**
   * 
   * @param {Object} personInfo Information about the person 
   */
  constructor(personInfo) {
      /**
       * @property {string} name Person Name
       */
      this.name = personInfo.name;
      /**
       * @property {string} name Person Age
       */
      this.age = personInfo.age
  }
  
  /**
   * @property {Function} greet A greeting with the name and age
   * @returns void
   */
  greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
  }
}

/**
 * Person Object
 * See {@link Person}
 */
const personObject = new Person({
    name: 'John Doe',
    age: 30
});

console.log(add(20, 30));