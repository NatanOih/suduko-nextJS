import functions from "@/utils/functions";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const zero = functions.getGrid();

export const PickCell = atom([100, 100]);
export const Grid = atomWithStorage("grid", zero);
export const InitGrid = atomWithStorage("InitGrid", zero);
