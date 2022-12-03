import run from "aocrunner";

import { sum, splitIntoSlices } from "../utils.js";

const parseInput = (rawInput) => rawInput.split("\n").map((i) => i.trim());

const ASCII_OFFSET = -96;
const CAPITAL_BONUS = 26;

function getValueForChar(inputChar) {
  const isCapital = inputChar.toUpperCase() === inputChar;
  const aascii = inputChar.toLowerCase().charCodeAt(0);
  if (isCapital) {
    return aascii + ASCII_OFFSET + CAPITAL_BONUS;
  }
  return aascii + ASCII_OFFSET;
}

const part1 = (rawInput) => {
  const input = parseInput(rawInput);

  const commonItems = input.map((rucksack) => {
    const compartmentLength = rucksack.length / 2;

    const first = rucksack.split("").slice(0, compartmentLength);
    const second = rucksack.split("").slice(compartmentLength, rucksack.length);

    const commonValue = first.find((value) => {
      const hasCommon = second.find((v) => v === value);
      return hasCommon != undefined;
    });

    return commonValue;
  });

  return commonItems.map(getValueForChar).reduce(sum);
};

const part2 = (rawInput) => {
  const input = parseInput(rawInput);

  const groups = splitIntoSlices(input, 3);

  const commonItems = groups.map((group) => {
    const [first, second, third] = group.map((a) => a.split(""));

    const commonValue = first.find((value) => {
      return second.some((v) => v == value) && third.some((v) => v === value);
    });

    return commonValue;
  });

  return commonItems.map(getValueForChar).reduce(sum);
};

run({
  part1: {
    tests: [
      {
        input: `
      vJrwpWtwJgWrhcsFMMfFFhFp
      jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
      PmmdzqPrVvPwwTWBwg
      wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
      ttgJtRGJQctTZtZT
      CrZsJsPPZsGzwwsLwLmpwMDw
      `,
        expected: 157,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
        vJrwpWtwJgWrhcsFMMfFFhFp
        jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
        PmmdzqPrVvPwwTWBwg
        wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
        ttgJtRGJQctTZtZT
        CrZsJsPPZsGzwwsLwLmpwMDw`,
        expected: 70,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
