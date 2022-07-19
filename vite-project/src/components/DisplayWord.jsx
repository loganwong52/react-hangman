function DisplayWord(props) {
    const { puzzle, guessedLetters, setDisabled } = props

    // render empty spaces
    const renderWord = () => {
        let counter = 0
        let elements = []
        for (let i = 0; i < puzzle.length; i++) {
            if (guessedLetters.includes(puzzle[i])) {
                elements.push(
                    <span key={i} className="non-empty-space">{puzzle[i]} </span>
                )
                counter += 1

            } else {
                elements.push(
                    <span key={i} className="empty-space">{"_  "}</span>
                )
            }
        }

        if (counter === puzzle.length) {
            setDisabled(true)
        }
        return elements
    }

    return (
        <div>
            {renderWord()}
        </div>
    )
}

export default DisplayWord