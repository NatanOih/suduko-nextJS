"use client";
import { Util } from "@/server/Util";
import { myAction } from "@/utils/actions";
import React, { Fragment, useState } from "react";
import { Grid, InitGrid } from "../lib/atomStates";
import { useAtom } from "jotai";

const Interface = () => {
  const buttons = ["Create", "Validate", "Solve", "Reset"];
  const [puzzleStatus, setPuzzleStatus] = useState("");
  const [initialGrid, setInitialGrid] = useAtom(InitGrid);
  const [grid, setGrid] = useAtom(Grid);

  return (
    <section className=" flex gap-4 items-center justify-center flex-col ">
      <input
        className="w-[50%] h-[30px] text-center   outline-none  border-2 border-l-indigo-500"
        readOnly
        type="text"
        value={puzzleStatus ? puzzleStatus : "hello"}
      />

      <div className=" flex flex-row gap-6 justify-center">
        {buttons.map((name, index) => (
          <Fragment key={index}>
            <form
              action={async () => {
                if (name == "Reset") {
                  let temp = [];
                  Util.copyGrid(initialGrid, temp);
                  setGrid(temp);
                  return;
                }
                const Results = await myAction(name, grid);
                if (Results.error) {
                  console.log("Results.error", Results.error);
                  alert(Results.error);
                }
                setGrid(Results?.game);
                setPuzzleStatus(Results?.status);
                if (Results.init != null) {
                  let temp = [];
                  Util.copyGrid(Results.init, temp);
                  setInitialGrid(temp);
                }
              }}
            >
              <button className="lg:w-[7rem] w-full p-1 active:scale-90 rounded bg-blue-200  border-solid border-2 shadow-md box-border text-black cursor-pointer inline-block font-['neucha'] lg:text-3xl md:text-2xl text-xl leading-23 outline-none  no-underline transition-transform duration-235 select-none touch-manipulation relative z-10 hover:hover:translate-y-2">
                {name}
              </button>
            </form>
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default Interface;
