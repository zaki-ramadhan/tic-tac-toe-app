import { useContext } from "react";
import GameContext from "../context/GameContext";

const GameInfo = ({ status, xIsNext }) => {
    const isWinner = useContext(GameContext);
    const isX = isWinner ? isWinner === 'X' : xIsNext;

    const iconColor = isX ? "text-blue-600" : "text-red-600";
    const bgColor = isX ? "bg-blue-100/70" : "bg-red-100/70";
    const textColor = isX ? "text-blue-500" : "text-red-500";

    return (
        <div className={`mt-8 flex items-center justify-center gap-4 text-xl font-medium font-title ${iconColor}`}>
            <span className={`size-12 flex items-center justify-center aspect-square rounded-full border-3 border-white shadow-xl shadow-black/5 font-semibold ${bgColor} ${textColor}`}>{isWinner ? "🏆" : xIsNext ? 'X' : 'O'}</span>
            <p className={isWinner ? 'animate-pulse' : ''}>{status}</p>
        </div>
    )
}

export default GameInfo