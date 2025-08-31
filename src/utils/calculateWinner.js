export const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    // check every possible winning line (rows, columns, diagonals)
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]; // extract the three positions of this line

        // if all three positions are filled with the same value, we have a winner
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]; // return "X" or "O"
        }
    }


    // if draw
    return false;
}