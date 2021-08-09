import Episode from "./Episode";

function Episodes(props) {
    const {episodes} = props;

    return(
        <div className="episodes"> 
            {episodes.map(episode => {
                return <Episode key={'episode-' + episode.episode_id} {...episode}/>
            })}
        </div>
    )
}

export default Episodes;