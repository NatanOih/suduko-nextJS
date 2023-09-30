import Board from "./components/Borad";
import Interface from "./components/Interface";
import Numbers from "./components/Numbers";

export default function Home() {
  return (
    <main
      className={`flex flex-col sm:gap-8 gap-6 items-center justify-center p-8 min-h-[100vh] bg-mainbg transition-transform duration-300 ease-in-out `}
    >
      <Board />
      <Numbers />
      <Interface />
    </main>
  );
}
