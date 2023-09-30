"use client";
import React from "react";
import { AiFillDelete } from "react-icons/ai";
import NumberButton from "./NumberButton";
import { Grid, InitGrid, PickCell } from "../lib/atomStates";
import { useAtom } from "jotai";

function Numbers() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [grid, setGrid] = useAtom(Grid);
  const [selectedCell, SetselecetCell] = useAtom(PickCell);
  const [initialGrid, setInitialGrid] = useAtom(InitGrid);

  const setActiveNumber = (number) => {
    const [row, col] = selectedCell;
    if (initialGrid[row][col] === 0) {
      const newGrid = [...grid];
      newGrid[row][col] = number;
      setGrid(newGrid);
    }
  };

  const handleDelete = () => {
    setActiveNumber(0);
  };

  return (
    <section className=" flex flex-col items-center sm:gap-4 gap-2">
      <AiFillDelete
        onClick={handleDelete}
        className="text-xl active:scale-90 ease-in-out transition duration-200 w-[25%] h-8 hover:bg-white hover:text-black hover:border-black text-white rounded border-white border-2"
      />

      <div className="flex gap-2">
        {numbers.map((number) => {
          return (
            <NumberButton
              setActiveNumber={setActiveNumber}
              number={number}
              key={number}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Numbers;
