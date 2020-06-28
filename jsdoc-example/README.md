# JSDoc Example


An API documentation generator for JavaScript. [Live Demo](https://learning-zone.github.io/general-interview-questions/jsdoc-example/docs/)


#### Functions

```javascript
/**
 * This is a function.
 *
 * @param {string} n - A string param
 * @return {string} A good string
 *
 * @example
 *
 *     foo('hello')
 */

function foo(n) {
  return n
}
```

#### Types

```javascript
@param {string=} n	Optional
@param {string} [n]	Optional
@param {(string|number)} n	Multiple types
@param {*} n	Any type
@param {...string} n	Repeatable arguments
@param {string} [n="hi"]	Optional with default
@param {string[]} n	Array of strings
@return {Promise<string[]>} n	Promise fulfilled by array of strings
```
