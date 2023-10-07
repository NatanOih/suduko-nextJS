"use client";
import { Util } from "@/server/Util";
import { myAction } from "@/utils/actions";
import React, { Fragment, useState } from "react";
import { Grid, InitGrid } from "../lib/atomStates";
import { useAtom } from "jotai";
import { Spinner } from "./Spinner";

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

      <div className=" flex flex-row gap-6 justify-center">
        {buttons.map((name, index) => (
          <Fragment key={index}>
            <form
              action={async () => {
                if (name == "Reset") {
                  let temp = [];
                  Util.copyGrid(initialGrid, temp);
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
                className="lg:w-[7rem] w-[7rem] p-1 active:scale-90 rounded bg-blue-200  border-solid border-2 shadow-md box-border text-black cursor-pointer  font-['neucha'] lg:text-3xl md:text-2xl text-xl leading-23 outline-none  no-underline transition-transform duration-235 select-none touch-manipulation relative z-10 hover:translate-y-2 items-center flex justify-center "
                // disabled={loading ? true : false}
                type="submit"
              >
                {loading ? <Spinner /> : name}
              </button>
            </form>
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default Interface;
