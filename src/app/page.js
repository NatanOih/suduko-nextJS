import Link from "next/link";

export default function Home() {
  return (
    <section className="">
      <h1 className="flex text-4xl text-white">
        play <Link href="/sudoku">sudoku</Link>
      </h1>
    </section>
  );
}
