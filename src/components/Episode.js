function Episode(props) {
    const {episode_id, title, season, air_date, characters, episode, series} = props;

    const chars = characters.map((character, i, {length})=> {
        if(i + 1 === length){ 
            return <span>{character}</span>
        }else{
            return <span>{character}, </span>
        }
    });


    return (
        <div className="episode card blue-grey darken-4" id={episode_id}>
            <div className="card-content white-text">
                <span className="card-title">{title}</span>
                <p>season: {season}</p>
                <p>episode: {episode}</p>
                <p>air_date: {air_date}</p>
                <p>characters:</p>
                <p>{chars}</p>
                <p>series: {series}</p>
            </div>
        </div>
    )
}

export default Episode;