import DisplayWord from './DisplayWord.jsx'
import WordInput from './WordInput.jsx'
import IncorrectlyGuessed from './IncorrectlyGuessed.jsx'
import { useState } from 'react'

function Hangman(props) {

    const { puzzle, guessedLetters, setHistory } = props


    const updateHistory = (newLetter) => {
        let newHistory = [...guessedLetters, newLetter]
        setHistory(newHistory)
    }

    const handleLetter = () => {
        let inputElement = document.getElementById('input-box')
        let letter = inputElement.value[0]
        console.log(letter)
        console.log("history: ", guessedLetters)

        // check if letter has been guessed yet
        if (guessedLetters.includes(letter)) {
            alert("You've already guessed that letter!")
            return
        }

        // otherwise, save the letter to history
        updateHistory(letter)

        // check if letter is in word
        if (puzzle.toLowerCase().includes(letter)) {
            console.log("TRUE!")
        }
        else {
            console.log("FALSE!")
        }

        document.getElementById('input-box').value = ""
    }

    return (
        <div>
            <DisplayWord puzzle={puzzle} />
            <br />
            <WordInput handleLetter={handleLetter} />
            <br />
            {"finished word: " + puzzle}
            <IncorrectlyGuessed puzzle={puzzle} guessedLetters={guessedLetters} />

        </div>
    )
}

export default Hangman