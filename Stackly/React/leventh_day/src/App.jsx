import React, { useState } from 'react';

export default function TicTacToe() {
  // Board state: array of 9 elements, each null, 'X', or 'O'
  const [board, setBoard] = useState(Array(9).fill(null));
  // Turn state: true for X's turn, false for O's turn
  const [xIsNext, setXIsNext] = useState(true);

  // Helper function to check for a winner
  const calculateWinner = (squares) => {
    const winningLines = [
      [0, 1, 2], // Rows
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6], // Columns
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8], // Diagonals
      [2, 4, 6],
    ];

    for (const [a, b, c] of winningLines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(board);
  const isDraw = !winner && board.every((cell) => cell !== null);

  const handleClick = (index) => {
    // Ignore clicks if the square is already occupied or if someone already won
    if (board[index] || winner) return;

    const nextBoard = [...board];
    nextBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(nextBoard);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  // Status message logic
  const statusMessage = winner
    ? `Winner: ${winner}`
    : isDraw
    ? 'Game ended in a draw!'
    : `Next Player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Tic-Tac-Toe</h1>
      <div style={styles.status}>{statusMessage}</div>

      <div style={styles.board}>
        {board.map((value, index) => (
          <button
            key={index}
            style={styles.square}
            onClick={() => handleClick(index)}
          >
            {value}
          </button>
        ))}
      </div>

      <button style={styles.resetButton} onClick={resetGame}>
        Restart Game
      </button>
    </div>
  );
}

// Clean, basic UI styles
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'sans-serif',
    marginTop: '40px',
  },
  title: {
    marginBottom: '8px',
    padding:'20px',
  },
  status: {
    fontSize: '18px',
    marginBottom: '16px',
    fontWeight: 'bold',
  },
  board: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 80px)',
    gridTemplateRows: 'repeat(3, 80px)',
    gap: '4px',
  },
  square: {
    width: '80px',
    height: '80px',
    fontSize: '28px',
    fontWeight: 'bold',
    cursor: 'pointer',
    color: '#4c4747',
    backgroundColor: '#f9f9f9',
    border: '2px solid #333',
    borderRadius: '4px',
  },
  resetButton: {
    marginTop: '20px',
    padding: '8px 16px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
  },
};