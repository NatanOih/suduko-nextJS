"use server";
import fs from "fs/promises";
import { Sudoku } from "@/server/sudoku";
import { REST } from "./functions";
import { Util } from "@/server/Util";

export async function myAction(action, grid) {
  switch (action.toLowerCase()) {
    case "create":
      try {
        console.log("creating...");
        let sudoku = new Sudoku();
        const game = sudoku.puzzle;
        await fs.writeFile(
          "./src/server/initialGrid.txt",
          JSON.stringify(game),
          "utf8"
        );
        return Promise.resolve({
          game: game,
          status: "NEW GAME-ENJOY",
          init: game,
        });
      } catch (error) {
        console.log(error);
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
    case "reset":
      try {
        console.log("Reseting...");
        const data = await fs.readFile("./src/server/initialGrid.txt", "utf8");
        console.log("data");
        return Promise.resolve({
          game: JSON.parse(data),
          status: "Restarted",
          init: JSON.parse(data),
        });
      } catch (error) {
        console.log(error);
      }

      break;
    default:
      throw new Error("Invalid action");
  }
}