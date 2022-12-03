/**
 * Root for your util libraries.
 *
 * You can import them in the src/template/index.js,
 * or in the specific file.
 *
 * Note that this repo uses ES Modules, so you have to explicitly specify
 * .js extension (yes, .js not .ts - even for TypeScript files)
 * for imports that are not imported from node_modules.
 *
 * For example:
 *
 *   correct:
 *
 *     import _ fro 'lodash
 *     import myLib from '../utils/myLib.js'
 *     import { myUtil } from '../utils/index.js'
 *
 *   incorrect:
 *
 *     import _ fro 'lodash
 *     import myLib from '../utils/myLib'
 *     import { myUtil } from '../utils'
 */

/**
 * A factory function to create a parser for a list of ints separated by a given delimiter
 * @param {string} delimeter a string representing the delimeter to split on
 * @returns {function} a function to parse a list of delimeter separated ints
 */
export function parseInts(delimeter = "\n") {
  return (input) => input.split(delimeter).map((string) => parseInt(string));
}

/**
 * Parse a string containing ints separated by newline
 * @returns {number[]} array of ints
 */
export const parseIntsOnNewline = parseInts("\n");

/**
 * A reducer that sums the given values
 * @param {number} next the next item in the array
 * @param {number} sum the sum so far
 * @returns {number} the sum
 */
export function sum(next, sum) {
  return next + sum;
}

/**
 * A sort function that can be used to sort a list by descending value
 * @param {number} a first item to compare
 * @param {number} b second item to compare
 * @returns {number} a negative number when a is larger than b, a positive number when b is larger than a, 0 when they are the same
 */
export function byDescendingValue(a, b) {
  return b - a;
}

export function splitIntoSlices(array, sliceSize) {
  const slices = [];
  for (let i = 0; i < array.length; i += sliceSize) {
    slices.push(array.slice(i, i + sliceSize));
  }
  return slices;
}
