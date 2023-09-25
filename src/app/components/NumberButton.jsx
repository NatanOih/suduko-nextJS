import React from "react";

function NumberButton(props) {
  return (
    <button
      className="bg-slate-100 items-center font-bold text-center w-[2.2rem] h-[2.2rem] sm:w-[3rem] sm:h-[3rem] sm:text-3xl  text-2xl   border-[1px] border-black rounded-lg text-black transition duration-400 ease-in-out shadow-[#EB6440_3px_8px_4px_-4px] hover:cursor-pointer hover:scale-110 hover:shadow-[#0000004D_2px_8px_8px_5px] active:scale-95 focus:shadow-[#0000004D_2px_8px_4px_6px]"
      onClick={() => {
        props.setActiveNumber(props.number);
      }}
    >
      {props.number}
    </button>
  );
}

export default NumberButton;
