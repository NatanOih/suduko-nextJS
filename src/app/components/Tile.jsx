"use client";

import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import useIsMobile from "../hooks/useIsMobile";
import { useAtom, useAtomValue } from "jotai";
import { Grid, InitGrid, PickCell } from "../lib/atomStates";

const Tile = () => {
  const [selectedCell, SetselecetCell] = useAtom(PickCell);
  const [focus, setFocus] = useState(false);
  const [grid, setGrid] = useAtom(Grid);
  const initialGrid = useAtomValue(InitGrid);
  const isMobile = useIsMobile();
  const [doubleTap, setDoubleTap] = useState(false);

  const handleChange = (row, col, e) => {
    e.preventDefault;
    let n = Number(String(e.target.value).slice(-1));
    e.target.value = n;
    if (n < 10 && initialGrid[row][col] == 0) {
      const newerGrid = [...grid];
      newerGrid[row][col] = n;
      setGrid(newerGrid);
    }
  };

  const handleSelect = ([rowIndex, colIndex]) => {
    if (selectedCell.toString() == [rowIndex, colIndex].toString()) {
      setDoubleTap(!doubleTap);
      doubleTap && console.log("safasf");
    }
    SetselecetCell([rowIndex, colIndex]);
  };

  return grid.map((row, rowIndex) => {
    return row.map((col, colIndex) => {
      const value = col;

      return (
        <input
          className={twMerge(
            "w-[9.1vw] h-[9.1vw] sm:w-[3.5rem] sm:h-[3.5rem] overflow-hidden sm:rounded-[1.1rem] rounded-[0.8rem] font-bold xm:text-2xl text-xl   items-center text-center border-[1px] border-black cursor-pointer bg-slate-200/90 transition-all caret-transparent tile",
            `${colIndex % 3 === 2 && colIndex != 8 ? "mr-2" : ""}`,
            `${rowIndex % 3 === 2 && rowIndex != 8 ? "mb-2" : ""}`,
            `${value !== 0 ? "taken font-bold font-mono " : ""}`,
            `${initialGrid[rowIndex][colIndex] != 0 ? "init" : ""}`,
            `${rowIndex == selectedCell[0] && focus ? "highlight" : ""}`,
            `${colIndex == selectedCell[1] && focus ? "highlight " : ""}`
          )}
          type="text"
          onFocus={() => {
            setFocus(true);
          }}
          onBlur={() => {
            setFocus(false);
          }}
          onChange={(e) => handleChange(rowIndex, colIndex, e)}
          onClick={() => handleSelect([rowIndex, colIndex])}
          value={value === 0 ? "" : value}
          key={rowIndex + "" + colIndex}
          readOnly={isMobile ? true : false}
        />
      );
    });
  });
};

export default Tile;
