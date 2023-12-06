import { useState } from "react";
import Square from "./Square";
const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [WinningSquare, setWinningSquare] = useState([]);
  const [active, setActive] = useState(false)
  const handleClick = (index) => {
    // checking if the square is already filled
    if (state[index] != null) {
      return;
    }
    // making copy of the array
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "0";
    setState(copyState);
    //toggle chance of player
    setIsXTurn(!isXTurn);
  };
  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        // setWinningSquare([a, b, c]);
        setActive(!active)
        console.log(WinningSquare);
        return state[a];
      }
    }
    return false;
  };
  const checkDraw = () => {
    for (let i = 0; i < state.length; i++) {
      if (state[i] === null) {
        return false; // If any square is still empty, the game isn't a draw
      }
    }
    return true; // All squares are filled, no winner detected, it's a draw
  };
  const handleReset = () => {
    setState(Array(9).fill(null));
  };
  const isDraw = checkDraw();
  const isWinner = checkWinner();
  return (
    <>
      {
        <div className="board">
          <div className="title">
            <p>
              Welcome to <span>Tic Tac Toe</span> Game
            </p>
          </div>
          <div className="rows">
            <Square
            // className={active&& }
              onClick={() => handleClick(0)}
              value={state[0]}
              isWinningSquare={WinningSquare.includes(0)}
            />
            <Square
              onClick={() => handleClick(1)}
              value={state[1]}
              isWinningSquare={WinningSquare.includes(1)}
            />
            <Square
              onClick={() => handleClick(2)}
              value={state[2]}
              isWinningSquare={WinningSquare.includes(2)}
            />
          </div>
          <div className="rows">
            <Square
              onClick={() => handleClick(3)}
              value={state[3]}
              isWinningSquare={WinningSquare.includes(3)}
            />
            <Square
              onClick={() => handleClick(4)}
              value={state[4]}
              isWinningSquare={WinningSquare.includes(4)}
            />
            <Square
              onClick={() => handleClick(5)}
              value={state[5]}
              isWinningSquare={WinningSquare.includes(5)}
            />
          </div>
          <div className="rows">
            <Square
              onClick={() => handleClick(6)}
              value={state[6]}
              isWinningSquare={WinningSquare.includes(6)}
            />
            <Square
              onClick={() => handleClick(7)}
              value={state[7]}
              isWinningSquare={WinningSquare.includes(7)}
            />
            <Square
              onClick={() => handleClick(8)}
              value={state[8]}
              isWinningSquare={WinningSquare.includes(8)}
            />
          </div>
          <div className="result">
            {isWinner && (
              <>
                <h2>
                  <span>{isWinner} </span>won the game
                </h2>
                <div className="reset">
                  <button onClick={handleReset}>Play Again</button>
                </div>
              </>
            )}
            {isDraw && !isWinner && (
              <>
                <h2>
                  It's a <span> Draw!</span>
                </h2>
                <div className="reset">
                  <button onClick={handleReset}>Play Again</button>
                </div>
              </>
            )}
          </div>
        </div>
      }
    </>
  );
};
export default Board;
