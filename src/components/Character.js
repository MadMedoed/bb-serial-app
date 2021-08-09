function Character(props) {
    const {char_id, name, birthday, occupation, img: poster, status, nickname, appearance, portrayed, category} = props;

    const occupationList = occupation.map((occupationItem, i, {length})=> {
        if(i + 1 === length){ 
          return <span>{occupationItem}</span>
        }else{
            return <span>{occupationItem}, </span>
        }
    });
    
    const seasonsList = appearance.map((seasonsItem)=> {
        return <span>{seasonsItem} </span> 
    });

    return (
        <div className="card blue-grey darken-4" id={'character-' + char_id}>
                <div className="card-image">
                    <img src={poster} alt={name}/>
                    <span className="card-title">{name}</span>
                </div>
                <div className="card-content  white-text">
                    <p>nickname: {nickname}</p>
                    <p>birthday: {birthday}</p>
                    <p>occupation: {occupationList}</p>
                    <p>status: {status}</p>
                    <p>seasons: {seasonsList} </p>
                    <p>portrayed: {portrayed} </p>
                    <p>category: {category} </p>
                </div>
               
        </div>
    )
}

export default Character;