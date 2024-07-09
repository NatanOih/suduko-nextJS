"use client";

import { useAtom, useSetAtom } from "jotai";

import { guessedWord, randomWordInit } from "../../lib/atomStates";
import { useEffect } from "react";

type stateComsumerType = {
  randomWord: string;
};

export default function StateConsumer({ randomWord }: stateComsumerType) {
  const [currentWord, setCurrentWord] = useAtom(randomWordInit);

  useEffect(() => {
    // if (currentWord === "") {
    //   setCurrentWord(randomWord);
    // }

    return () => {};
  }, []);

  return null;
}
