import './App.css'
import { useState, useEffect } from 'react'
import axios from "axios"
import * as Words from './data/words.json'
import Hangman from './components/Hangman.jsx'


function App() {
  // const randNum = Math.floor(Math.random() * Words.default.length)
  // const puzzle_word = Words.default[randNum]

  // states
  const [puzzle, setPuzzle] = useState("")
  const [guessedLetters, setHistory] = useState([])

  const url = "https://random-word-api.herokuapp.com/word"
  useEffect(() => {
    const getRandomWord = async () => {
      try {
        let wordData = await axios.get(url)
        let word = wordData.data[0]
        setPuzzle(word)
        return word
      } catch (e) {
        throw e
      }
    }
    getRandomWord()
  },
    [],
  )

  return (
    <div className="App">
      <h1>Hangman!</h1>
      <h3>Only guess lower case letters!</h3>
      <h1>{puzzle}</h1>
      <hr />
      <Hangman puzzle={puzzle} guessedLetters={guessedLetters} setHistory={setHistory} />
    </div>
  )
}

export default App
