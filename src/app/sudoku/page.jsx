import Link from "next/link";
import Board from "../components/Borad";
import Interface from "../components/Interface";
import Numbers from "../components/Numbers";

export default function page() {
  return (
    <main className="flex flex-col justify-center gap-8">
      <Link className="text-white text-4xl text-center" href="/">
        BACK
      </Link>
      <Board />
      <Numbers />
      <Interface />
    </main>
  );
}
