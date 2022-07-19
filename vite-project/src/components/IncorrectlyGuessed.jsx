function IncorrectlyGuessed(props) {
    const { puzzle, guessedLetters } = props

    const renderWrongLetters = () => {
        let elements = []
        for (let i = 0; i < guessedLetters.length; ++i) {
            if (!puzzle.includes(guessedLetters[i])) {
                elements.push(
                    <li>{guessedLetters[i]}</li>
                )
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