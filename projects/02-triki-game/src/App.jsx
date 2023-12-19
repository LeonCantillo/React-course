import { useState } from 'react'

import { Square } from './components/Square.jsx'
import { TURNS } from './constants.js'
import { checkWinner, checkEndGame } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import './App.css'

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.x)
  
  // null quiere decir que no hay ganador, false significa un empate
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.x)
    setWinner(null)
  }

  const updateBoard = (index) => {
    // No actualizamos esta posición
    // si ya tiene un valor
  if(board[index] || winner) return
    // Actualizar tablero
    const newBoard = [... board]
    newBoard[index] = turn
    setBoard(newBoard)
    // Cambiar turno
    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x
    setTurn(newTurn)
    // Revisar si hay ganador
    const newWinner = checkWinner(newBoard)
    if(newWinner) {
      setWinner(newWinner)
    } else if(checkEndGame(newBoard)){
      setWinner(false) //Empate
    }
  }

  return(
    <main className='board'>
      <h1>Triki Game</h1>
      <button onClick={resetGame}>Restart Game</button>
      <section className='game'>
        {
          board.map((square,index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.x}>{TURNS.x}</Square>
        <Square isSelected={turn === TURNS.o}>{TURNS.o}</Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App