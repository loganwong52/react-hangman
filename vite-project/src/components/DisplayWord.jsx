function DisplayWord(props) {
    const { puzzle } = props

    // render empty spaces
    const renderWord = () => {
        let elements = []
        for (let i = 0; i < puzzle.length; i++) {
            elements.push(
                <span key={i} className="empty-space">{"_  "}</span>
            )
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