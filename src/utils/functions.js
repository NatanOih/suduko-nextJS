import { Sudoku } from "@/server/sudoku";

const functions = {
  getGrid: () => {
    return Array(9)
      .fill(0)
      .map((x) => Array(9).fill(0));
  },
  copyGrid: (from, to) => {
    for (let i = 0; i < from.length; i++) {
      to[i] = [...from[i]];
    }
  },
};

export default functions;
