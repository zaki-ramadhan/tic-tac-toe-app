import { RotateCcw } from "lucide-react"
import { useState } from "react";

const ResetButton = () => {
    const [isReset, setIsReset] = useState(false);
    const handleClick = () => {
        setIsReset(true);
        setTimeout(() => {
            window.location.reload();
        }, 1300);
    }
    return (
        <button onClick={handleClick} className="group absolute top-1/2 -right-6.5 -translate-y-1/2 size-12 text-gray-300 p-0 box-content bg-blue-50 border-4 border-white rounded-full flex justify-center items-center shadow-xl shadow-black/5 cursor-pointer duration-150 hover:-rotate-35 hover:text-gray-600 hover:bg-blue-100/80">
            <RotateCcw className={`group-hover:-rotate-30 duration-500 ${isReset ? 'animate-spin' : null} [animation-direction:reverse]`} />
        </button>
    )
}

export default ResetButton
