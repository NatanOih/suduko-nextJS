"use client";
import React from "react";
import NumberButton from "./NumberButton";

function Numbers({ setActiveNumber }) {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <section className=" flex sm:gap-4 gap-1">
      {numbers.map((number) => {
        return (
          <NumberButton
            setActiveNumber={setActiveNumber}
            number={number}
            key={number}
          />
        );
      })}
    </section>
  );
}

export default Numbers;
