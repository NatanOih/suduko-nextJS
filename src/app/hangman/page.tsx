import Link from "next/link";
import React from "react";
import { KeyBoard } from "./_components/KeyBoard";
import StateConsumer from "./_components/StateConsumer";
import HangInterface from "./_components/HangInterface";
import { hangGameReset } from "../../utils/actions";

export default async function page() {
  const randomWord = await hangGameReset();

  return (
    <section className="">
      <Link className="text-white text-4xl text-center" href="/">
        BACK
      </Link>

      <StateConsumer randomWord={randomWord} />

      <HangInterface />

      <KeyBoard
        disabled={false}
        activeLetters={[""].filter((letter) => randomWord.includes(letter))}
        inactiveLetters={[""]}
      />
    </section>
  );
}
