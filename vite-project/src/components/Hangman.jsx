import DisplayWord from './DisplayWord.jsx'
import WordInput from './WordInput.jsx'
import IncorrectlyGuessed from './IncorrectlyGuessed.jsx'
import { useState } from 'react'


function Hangman(props) {
    const { puzzle, guessedLetters, setHistory } = props

    const [disabled, setDisabled] = useState(false)

    // update state
    const updateHistory = (newLetter) => {
        let newHistory = [...guessedLetters, newLetter]
        setHistory(newHistory)
    }

    // event handler
    const handleLetter = () => {
        // get a single letter from the input text box
        let inputElement = document.getElementById('input-box')
        let letter = inputElement.value[0]
        if (letter === undefined || letter === " ") {
            document.getElementById('input-box').value = ""
            return
        }
        // console.log(letter)
        // console.log("history: ", guessedLetters)


        // check if letter has been guessed yet
        if (guessedLetters.includes(letter)) {
            alert("You've already guessed that letter!")
            document.getElementById('input-box').value = ""
            return
        }

        // otherwise, save the letter to history
        updateHistory(letter)

        // Clear the input box so the user can guess again
        document.getElementById('input-box').value = ""
    }

    return (
        <div>
            {disabled && <h2>YOU WIN!</h2>}
            <br />
            <DisplayWord puzzle={puzzle} guessedLetters={guessedLetters} setDisabled={setDisabled} />
            <br />
            <WordInput handleLetter={handleLetter} disabled={disabled} />
            <br />
            <IncorrectlyGuessed puzzle={puzzle} guessedLetters={guessedLetters} />
        </div>
    )
}

export default Hangman