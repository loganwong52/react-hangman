function WordInput(props) {
    return (
        <div>
            <input type="text" id='input-box' placeholder='Enter a letter'></input>
            <button id='submit-button' type='submit' onClick={props.handleLetter}>Submit</button>
        </div>
    )
}

export default WordInput