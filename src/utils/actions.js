"use server";

import { Sudoku } from "@/server/sudoku";
import { Util } from "@/server/Util";

export async function myAction(action, grid) {
  switch (action.toLowerCase()) {
    case "create":
      try {
        console.log("creating...");
        let sudoku = new Sudoku();
        const game = await sudoku.puzzle;
        return Promise.resolve({
          game: game,
          status: "NEW GAME-ENJOY",
          init: true,
        });
      } catch (error) {
        console.log(error);
        return { error: error };
      }
      break;
    case "solve":
      console.log("solving...");
      try {
        let puzzle = [];
        Util.copyGrid(grid, puzzle);
        let sudoku = new Sudoku(puzzle);
        let solution = sudoku.isSolvable();
        console.log("solution", solution);
        let solvedSudoku;
        let status;
        if (solution) {
          solvedSudoku = sudoku.solvedPuzzle;
          status = "** SOLVED **";
        } else {
          solvedSudoku = grid;
          status = "** UNSOLVABLE **";
        }
        return Promise.resolve({ game: solvedSudoku, status: status });
      } catch (error) {
        console.log(error);
      }
      break;
    case "validate":
      try {
        console.log("validating...");
        let puzzle = [];
        Util.copyGrid(grid, puzzle);
        let sudoku = new Sudoku(puzzle);
        let status = sudoku.validate();
        const puzzleStatus = status ? "**SOLVED**" : "**UNSOLVED**";
        return Promise.resolve({ game: grid, status: puzzleStatus });
      } catch (error) {
        console.log(error);
      }

      break;
    // case "reset":
    //   try {
    //     console.log("Reseting...");
    //     const data = await fs.readFile("./src/server/initialGrid.txt", "utf8");
    //     console.log("data");
    //     return Promise.resolve({
    //       game: JSON.parse(data),
    //       status: "Restarted",
    //       init: JSON.parse(data),
    //     });
    //   } catch (error) {
    //     console.log(error);
    //   }

    //   break;
    default:
      throw new Error("Invalid action");
  }
}
