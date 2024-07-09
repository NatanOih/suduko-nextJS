"use client";

import React, { useState } from "react";
import { guessedWord, randomWordInit } from "../../lib/atomStates";
import { useAtom } from "jotai";
import { hangGameReset } from "../../../utils/actions";

export default function HangInterface() {
  const [randomWord, setRandomWord] = useAtom(randomWordInit);
  const [guessedWordState, setGuessedWordState] = useAtom(guessedWord);

  return (
    <div>
      <h1>Random Word</h1>
      <p>{randomWord}</p>
      <p>{guessedWordState}</p>

      <form
        className="p-2  "
        action={async () => {
          setRandomWord(await hangGameReset());
          setGuessedWordState("");
        }}
      >
        <button type="submit">new game</button>
      </form>
    </div>
  );
}
