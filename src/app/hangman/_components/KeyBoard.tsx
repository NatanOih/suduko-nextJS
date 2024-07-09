"use client";

import { useAtom } from "jotai";
import { guessedWord } from "../../lib/atomStates";

type keyBoardProps = {
  activeLetters: string[];
  inactiveLetters: string[];

  disabled?: boolean;
};

type StateConsumerType = {
  letter: string;
  guessedWordState: string[];
};

const letters = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

export const KeyBoard = ({
  activeLetters,
  inactiveLetters,

  disabled = false,
}: keyBoardProps) => {
  const [guessedWordState, setGuessedWord] = useAtom(guessedWord);

  function addGuessedLetter(letter: string) {
    setGuessedWord(guessedWordState + letter);
  }

  return (
    <div className="relative p-2  ">
      {[...letters].map((array, index) => {
        return (
          <div
            key={index + "asc"}
            style={{ left: `${index * 1}rem` }}
            className={`relative  `}
          >
            {array.split("").map((letter, index) => {
              const isActive = guessedWordState.includes(letter);
              const inActive = inactiveLetters.includes(letter);
              return (
                <button
                  onClick={() => addGuessedLetter(letter)}
                  className={`key bg-slate-500 ${isActive ? " active" : ""} ${
                    inActive ? " inacive" : ""
                  }`}
                  key={letter}
                  disabled={inActive || isActive || disabled}
                >
                  {letter}
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
