"use client";

import React from "react";
import Tile from "./Tile";

function Board() {
  return (
    <section className="grid grid-cols-[repeat(9,auto)] p-2 lg:p-10">
      <Tile />
    </section>
  );
}

export default Board;
