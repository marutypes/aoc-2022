import run from "aocrunner";

import { parseIntsOnNewline, sum, byDescendingValue } from "../utils.js";

function parseInput(rawInput) {
  return rawInput.split("\n\n").map(parseIntsOnNewline);
}

function part1(rawInput) {
  const input = parseInput(rawInput);

  const [mostCalorific] = input
    .map((elfRations) => elfRations.reduce(sum, 0))
    .sort(byDescendingValue);

  return mostCalorific;
}

function part2(rawInput) {
  const input = parseInput(rawInput);

  const [first, second, third] = input
    .map((elfRations) => elfRations.reduce(sum, 0))
    .sort(byDescendingValue);

  return first + second + third;
}

run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
