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