function DisplayWord(props) {
    const { puzzle, guessedLetters, setDisabled } = props

    // render empty spaces or letters of the puzzle word
    const renderWord = () => {
        let counter = 0
        let elements = []
        for (let i = 0; i < puzzle.length; i++) {
            if (guessedLetters.includes(puzzle[i].toLowerCase())) {
                // correctly guessed letters
                elements.push(
                    <span key={i} className="non-empty-space">{puzzle[i]} </span>
                )
                counter += 1

            } else {
                // blank spaces
                elements.push(
                    <span key={i} className="empty-space">{"_  "}</span>
                )
            }
        }

        // if all letters have been guessed, disable the button since user has won
        if (counter > 0 && counter === puzzle.length) {
            // alert("You win!")
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