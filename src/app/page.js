import Link from "next/link";

export default function Home() {
  return (
    <section className="">
      <h1 className="flex flex-row gap-4  text-lg text-white">
        <Link
          className="border-white text-4xl active:scale-90 hover:border-black hover:bg-white hover:text-black border-2 text-center rounded w-fit h-fit p-2 hover:scale-110 transform duration-300"
          href="/sudoku"
        >
          Play sudoku
        </Link>
        <Link
          className="border-white text-4xl active:scale-90 hover:border-black hover:bg-white hover:text-black border-2 text-center rounded w-fit h-fit p-2 hover:scale-110 transform duration-300"
          href="/hangman"
        >
          play Hang-man
        </Link>
      </h1>
    </section>
  );
}
