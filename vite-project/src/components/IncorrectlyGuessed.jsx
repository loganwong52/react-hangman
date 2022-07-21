// renders 6 incorrectly guessed letters
function IncorrectlyGuessed(props) {
    const { puzzle, guessedLetters } = props

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
                if (wrongCounter > 6) {
                    alert("YOU'VE ALREADY GUESSED 6 WRONG LETTERS! GAME OVER!")
                    console.log(wrongCounter)
                    location.reload()
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