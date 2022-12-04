import run from "aocrunner";
import { sum } from "../utils.js";

const RPS = {
  rock: {
    tiesWith: "rock",
    beats: "scissors",
    losesTo: "paper",
    score: 1,
  },
  paper: {
    tiesWith: "paper",
    beats: "rock",
    losesTo: "scissors",
    score: 2,
  },
  scissors: {
    tiesWith: "scissors",
    beats: "paper",
    losesTo: "rock",
    score: 3,
  },
};

const SCORE_LOSS = 0;
const SCORE_TIE = 3;
const SCORE_WIN = 6;

const OPPONENT_GLYPH_MAPPING = {
  A: "rock",
  B: "paper",
  C: "scissors",
};

const MY_GLYPH_MAPPING = {
  X: "rock",
  Y: "paper",
  Z: "scissors",
};

const INTENDED_OUTCOME_MAPPING = {
  X: "lose",
  Y: "tie",
  Z: "win",
};

const INTENDED_OUTCOME_PICK_MAPPING = {
  lose: "beats", // pick the one the opponent beats to lose
  tie: "tiesWith",
  win: "losesTo", // pick the one the opponent loses to to win
};

function score(myShape, opponentShape) {
  let resultScore = SCORE_TIE;

  if (RPS[myShape].beats == opponentShape) {
    resultScore = SCORE_WIN;
  } else if (RPS[myShape].losesTo == opponentShape) {
    resultScore = SCORE_LOSS;
  }

  return RPS[myShape].score + resultScore;
}

function parseInput(rawInput) {
  return rawInput.split("\n");
}

function part1(rawInput) {
  const rounds = parseInput(rawInput);

  return rounds
    .map((round) => {
      const [opponentGlyph, myGlyph] = round.split(" ");
      return [OPPONENT_GLYPH_MAPPING[opponentGlyph], MY_GLYPH_MAPPING[myGlyph]];
    })
    .map(([opponentShape, myShape]) => score(myShape, opponentShape))
    .reduce(sum);
}

function part2(rawInput) {
  const rounds = parseInput(rawInput);

  return rounds
    .map((round) => {
      const [opponentGlyph, myGlyph] = round.split(" ");
      const intendedOutcome = INTENDED_OUTCOME_MAPPING[myGlyph];
      const opponentsShape = OPPONENT_GLYPH_MAPPING[opponentGlyph];

      const iChoose =
        RPS[opponentsShape][INTENDED_OUTCOME_PICK_MAPPING[intendedOutcome]];

      return [opponentsShape, iChoose];
    })
    .map(([opponentShape, myShape]) => score(myShape, opponentShape))
    .reduce(sum);
}

run({
  part1: {
    tests: [],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
        A Y
        B X
        C Z
        `,
        expected: 12,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
