import run from "aocrunner";

const parseInput = (rawInput) => rawInput;

const part1 = (rawInput) => {
  const input = parseInput(rawInput);
  const elves = input.split("\n\n");

  const elvishCalorieSums = elves.map(elfToSum);

  return Math.max(...elvishCalorieSums);
};

const part2 = (rawInput) => {
  const input = parseInput(rawInput);
  const elves = input.split("\n\n");

  const elvishCalorieSums = elves.map(elfToSum);

  const [first, second, third] = elvishCalorieSums.sort(sortByAscending);

  return first + second + third;
};

function elfToSum(calories) {
  return calories
    .split("\n")
    .map((string) => parseInt(string))
    .reduce((next, sum) => next + sum, 0);
}

function sortByAscending(a, b) {
  return b - a;
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
