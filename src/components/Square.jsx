import { useContext } from "react";
import GameContext from "../context/GameContext";

const Square = ({ xIsNext, value, onSquareClick }) => {
  const isWinner = useContext(GameContext);

  // player-specific classes
  const bluePClasses = `text-blue-600 ${!isWinner ? "hover:bg-blue-100/60 active:bg-blue-200/70" : ""}`;
  const redPClasses = `text-red-600 ${!isWinner ? "hover:bg-red-100/60 active:bg-red-200/70" : ""}`;

  // style when already filled
  const valueClasses = value === "X" ? "text-blue-600 bg-blue-200/50" : value === "O" ? "text-red-600 bg-red-200/50" : "";

  // style for active player (only applied if empty)
  const activeClasses = xIsNext ? bluePClasses : redPClasses;

  return (
    <button
      onClick={!value ? onSquareClick : undefined} // disable click if filled
      className={`square text-4xl font-title font-semibold border-2 nth-[1]:rounded-tl-[2.7rem] nth-[3]:rounded-tr-[2.7rem] nth-[7]:rounded-bl-[2.7rem] nth-[9]:rounded-br-[2.7rem] border-white aspect-square duration-150 ${value ? `${valueClasses} cursor-default` : isWinner ? 'cursor-default' : `${activeClasses} hover:animate-[pulse_0.7s_ease-in-out_infinite] active:text-3xl cursor-pointer`}`} >
      {value}
    </button>
  );
};

export default Square;