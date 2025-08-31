import { useState } from "react";

import Square from "./Square"
import GameInfo from "./GameInfo";
import { calculateWinner } from "../utils/calculateWinner";
import GameContext from "../context/GameContext";
import ResetButton from './ResetButton';

import ticTacToeLogo from "./../assets/img/tic-tac-toe.png";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const [history, setHistory] = useState(Array().fill(null));

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return; // avoid toggle between x and o and stop the game if any player is win

    // Create a copy of the current array to work with
    const nextSquares = squares.slice();

    // Set the value of the clicked square to 'X' or 'O' in the new array
    xIsNext ? nextSquares[i] = 'X' : nextSquares[i] = 'O';

    // Update the state with the new array
    setSquares(nextSquares);
    setXIsNext(!xIsNext); // switch turn to next playern
    setHistory([...history, nextSquares]);
    console.log(history);
  }

  const winner = calculateWinner(squares);
  let status = winner
    ? `Player ${winner === 'X' ? "Blue" : "Red"} is Win   !`
    : !squares.includes(null)
      ? "It's a draw!"
      : squares.every(v => v === null)
        ? `First Move : Player ${xIsNext ? "Blue" : "Red"}`
        : `Next Move : Player ${xIsNext ? "Blue" : "Red"}`;


  return (
    <GameContext.Provider value={winner}>
      <div className="group flex flex-col items-center">
        <h1 className="title text-center text-5xl text-blue-700 font-semibold font-title">
          <img src={ticTacToeLogo} alt="tic-tac-toe logo image" className="logo inline size-10 mr-3 -mt-1.5" />
          Tic-<span className="text-red-600">tac</span>-toe App
        </h1>
        <div className="board relative mt-8  w-xs h-auto aspect-square rounded-[3rem] grid grid-cols-3 outline-4 outline-white shadow-xl shadow-black/6">
          {/* map squares instead write all elements manually */}
          {squares.map((e, i) => (
            <Square key={i} xIsNext={xIsNext} value={e} onSquareClick={() => handleClick(i)} /> //value props, would be filled similiar to : 'squares[1]'.
          ))}

          <ResetButton />
        </div>

        <GameInfo status={status} xIsNext={xIsNext} />
      </div>
    </GameContext.Provider>
  )
}

export default Board
