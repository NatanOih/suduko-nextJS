"use client";

import React, { Fragment, useState } from "react";
import { Grid, InitGrid } from "../lib/atomStates";
import { useAtom } from "jotai";
import { Spinner } from "./Spinner";
import { Util } from "../../server/util";

import { myAction } from "../../utils/actions";

const Interface = () => {
  const buttons = ["Create", "Validate", "Solve", "Reset"];
  const [puzzleStatus, setPuzzleStatus] = useState("");
  const [initialGrid, setInitialGrid] = useAtom(InitGrid);
  const [grid, setGrid] = useAtom(Grid);
  const [loading, setLoading] = useState(false);

  return (
    <section className=" flex gap-4 items-center justify-center flex-col ">
      <input
        className="w-[50%] h-[30px] text-center   outline-none  border-2 border-l-indigo-500"
        readOnly
        type="text"
        value={puzzleStatus ? puzzleStatus : "hello"}
      />

      <div className=" flex flex-row gap-6 justify-center items-center">
        {buttons.map((name, index) => (
          <Fragment key={index}>
            <form
              action={async () => {
                if (name == "Reset") {
                  let temp = [];
                  await Util.copyGrid(initialGrid, temp);
                  setGrid(temp);
                  setLoading(false);
                  return;
                }
                const Results = await myAction(name, grid);
                if (Results.error) {
                  console.log("Results.error", Results.error);
                  alert(Results.error);
                }
                setGrid(Results?.game);
                setPuzzleStatus(Results?.status);
                if (Results?.init) {
                  let temp2 = [];
                  Util.copyGrid(Results?.game, temp2);
                  setInitialGrid((prev) => temp2);
                }
                setLoading(false);
              }}
            >
              <button
                onClick={() => setLoading(true)}
                className=" w-[7rem] h-[3rem] p-1 active:scale-95 rounded bg-blue-200  border-solid border-2 shadow-md box-border text-black cursor-pointer  font-['neucha'] lg:text-3xl md:text-2xl text-xl leading-23 outline-none  no-underline transition-transform duration-235 select-none touch-manipulation  z-10 hover:translate-y-1  flex justify-center items-center "
                // disabled={loading ? true : false}
                type="submit"
              >
                <div className="w-[4rem] h-[2rem] flex justify-center">
                  {loading ? <Spinner /> : name}
                </div>
              </button>
            </form>
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default Interface;
