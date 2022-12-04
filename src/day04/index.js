import run from "aocrunner";

class Range {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  fullyContains(other) {
    return other.start >= this.start && other.end <= this.end;
  }

  overlaps(other) {
    return (
      (other.start >= this.start && other.start <= this.end) ||
      (this.start >= other.start && this.start <= other.end)
    );
  }
}

function parseInput(rawInput) {
  return rawInput.split("\n").map((rangePair) => rangePair.split(","));
}

function stringToRange(stringInput) {
  const [a, b] = stringInput.split("-");
  return new Range(parseInt(a), parseInt(b));
}

function part1(rawInput) {
  const input = parseInput(rawInput);
  return input
    .map(([first, second]) => {
      return [stringToRange(first), stringToRange(second)];
    })
    .filter(
      ([first, second]) =>
        first.fullyContains(second) || second.fullyContains(first),
    ).length;
}

function part2(rawInput) {
  const input = parseInput(rawInput);
  return input
    .map(([first, second]) => {
      return [stringToRange(first), stringToRange(second)];
    })
    .filter(([first, second]) => first.overlaps(second)).length;
}

run({
  part1: {
    tests: [
      {
        input: `
2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8
`,
        expected: 2,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
        2-4,6-8
        2-3,4-5
        5-7,7-9
        2-8,3-7
        6-6,4-6
        2-6,4-8
        `,
        expected: 4,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
