import './App.css'
import { useState } from 'react'
import * as Words from './data/words.json'
import Hangman from './components/Hangman.jsx'

function App() {
  const randNum = Math.floor(Math.random() * Words.default.length)
  // states
  const [puzzle, setPuzzle] = useState(Words.default[randNum])
  const [guessedLetters, setHistory] = useState([])

  return (
    <div className="App">
      <h1>Hangman!</h1>
      <h3>Only guess lower case letters!</h3>
      <hr />
      <Hangman puzzle={puzzle} guessedLetters={guessedLetters} setHistory={setHistory} />
    </div>
  )
}

export default App
