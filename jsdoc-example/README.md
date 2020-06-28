# JSDoc Example

* *[Setup Guide](setup-guide.md)*
* *[Live Example](https://learning-zone.github.io/general-interview-questions/jsdoc-example/docs/)*


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

#### Variables

```javascript
/**
 * @type {number}
 */
var num = 1
/**
 * @const {number}
 */
const num = 1
```

#### Typedef

```javascript
/**
 * A song
 * @typedef {Object} Song
 * @property {string} title - The title
 * @property {string} artist - The artist
 * @property {number} year - The year
 */
/**
 * Plays a song
 * @param {Song} song - The {@link Song} to be played
 */

function play(song) {}
```

#### Typedef Shorthand

```javascript
/**
 * A song
 * @typedef {{title: string, artist: string, year: number}} Song
 */
/**
 * Plays a song
 * @param {Song} song - The {@link Song} to be played
 */

function play(song) {}
```

#### Importing types

```javascript
/**
 * @typedef {import('./Foo').default} Bar
 */

/**
 * @param {Bar} x
 */

function test(x) {}
```

#### Other keywords

```javascript
/**
 * @throws {FooException}
 * @private
 * @deprecated
 * @see
 *
 * @function
 * @class
 */
```

#### Renaming

```javascript
/*
 * @alias Foo.bar
 * @name Foo.bar
 */
```
