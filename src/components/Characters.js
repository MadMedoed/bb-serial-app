import Character from "./Character";

function Characters(props) {
    const { characters = [] } = props;

    return(
        <div className="characters">
            {
                characters.length ? 
                characters.map(character => { 
                    return <Character key={'character-' + character.char_id} {...character}/> 
                }) : <h4>Not Found</h4> 
            }
        </div>
    )
}

export default Characters;