import functions from "../../utils/functions";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const PickCell = atom([100, 100]);
export const Grid = atomWithStorage("grid", functions.getGrid());
export const InitGrid = atomWithStorage("InitGrid", functions.getGrid());
export const guessedWord = atomWithStorage("guessedWord", "");
export const randomWordInit = atomWithStorage("randomWordState", "");
