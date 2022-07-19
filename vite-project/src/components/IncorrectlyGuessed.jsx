// renders 6 incorrectly guessed letters
function IncorrectlyGuessed(props) {
    const { puzzle, guessedLetters, setDisabled } = props

    const renderWrongLetters = () => {
        // RELEASE 1: this shouldn't go over 6
        let wrongCounter = 0

        let elements = []
        for (let i = 0; i < guessedLetters.length; ++i) {
            if (!puzzle.toLowerCase().includes(guessedLetters[i])) {
                elements.push(
                    <li key={i}>{guessedLetters[i]}</li>
                )
                wrongCounter += 1
                if (wrongCounter === 6) {
                    // disable the submit button
                    setDisabled(true)
                    alert("YOU'VE GUESSED 6 WRONG LETTERS! GAME OVER!")
                    return elements
                }
            }

        }
        return elements
    }

    return (
        <div>
            <h2>Incorrectly guessed letters:</h2>
            <ul>
                {renderWrongLetters()}
            </ul>
        </div>
    )
}

export default IncorrectlyGuessed