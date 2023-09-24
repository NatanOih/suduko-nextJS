"use client";

import Board from "./components/Borad";
import Interface from "./components/Interface";
import Numbers from "./components/Numbers";
import initReactFastclick from "react-fastclick";
import functions from "@/utils/functions";
import { useEffect, useRef, useState } from "react";
initReactFastclick();

export default function Home() {
  const zero = functions.getGrid();
  const [grid, setGrid] = useState(zero);
  const [puzzleStatus, setPuzzleStatus] = useState("");
  const [selectedCell, SetselecetCell] = useState([100, 100]);
  const initialGrid = useRef(zero);

  const handleChange = (row, col, e) => {
    e.preventDefault();
    let n = Number(String(e.target.value).slice(-1));
    if (n < 10 && initialGrid.current[row][col] === 0) {
      const newerGrid = [...grid];
      newerGrid[row][col] = n;
      setGrid(newerGrid);
    }
  };

  const setNumber = (number) => {
    const [row, col] = selectedCell;
    if (initialGrid.current[row][col] === 0) {
      const newGrid = [...grid];
      newGrid[row][col] = number;
      setGrid(newGrid);
    }
  };

  return (
    <main
      className={`flex flex-col sm:gap-8 gap-2 items-center justify-center px-4 min-h-[100vh] bg-mainbg transition-transform duration-300 ease-in-out `}
    >
      <Board
        initialGrid={initialGrid.current}
        grid={grid}
        handleChange={handleChange}
        selectedCell={selectedCell}
        SetselecetCell={SetselecetCell}
      />
      <Numbers setActiveNumber={setNumber} />
      <Interface
        grid={grid}
        puzzleStatus={puzzleStatus}
        initialGrid={initialGrid.current}
        setPuzzleStatus={setPuzzleStatus}
        setGrid={setGrid}
      />
    </main>
  );
}
