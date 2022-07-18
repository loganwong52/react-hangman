import { useState } from 'react'
import './App.css'
import * as Words from './data/words.json'

function App() {
  const randNum = Math.floor(Math.random() * Words.default.length)

  const [word, setWord] = useState(Words.default[randNum])

  // render empty spaces
  const renderWord = () => {
    let elements = []
    for (let i = 0; i < word.length; i++) {
      elements.push(
        <span key={i} className="empty-space">{"_  "}</span>
      )
    }
    return elements
  }

  return (
    <div className="App">
      <h1>Hangman!</h1>
      <hr />
      {renderWord()}

      <br />
      {word}
    </div>
  )
}

export default App
