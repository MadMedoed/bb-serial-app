import React, { useState, useEffect } from "react";
import Characters from "../components/Characters";
import ContentTypes from "../components/ContentTypes";
import Episodes from "../components/Episodes";
import Pagination from "../components/Pagination";
import Preloader from "../components/Preloader";
import Search from "../components/Search";


function Main() {
    
    const [characters, setCharacters] = useState([]);
    const [offsetPages, setOffsetPages] = useState(0);
    const [episodes, setEpisodes] = useState([]);
    const [contentType, setContentType] = useState('characters');
    const [loading, setLoading] = useState(true);
    const [isEpisodes, setIsEpisodes] = useState(false);
    const [isCharacters, setIsCharacters] = useState(true);

    const handlePagination = (page) => {
        setLoading(true);
        setOffsetPages(page);
        fetch(`https://breakingbadapi.com/api/characters?limit=12&offset=${page}`)
            .then(response => response.json())
            .then((data) => {
                setCharacters(data);
                setLoading(false); 
            })
    }

    const searchCharacter = (name) => {
        setLoading(true);
        fetch(`https://breakingbadapi.com/api/characters?name=${name}`)
            .then(response => response.json())
            .then((data) => {
                setCharacters(data);
                setLoading(false); 
            })
    }

    const handleFilter = (event) => {
        setContentType(
            event.target.dataset.type
        )
        if(event.target.dataset.type === 'episodes'){
            setIsCharacters(false);
            setIsEpisodes(true);
        }
        if(event.target.dataset.type === 'characters'){
            setIsCharacters(true);
            setIsEpisodes(false);
        }
    }

    useEffect(() => {
        fetch(`https://breakingbadapi.com/api/characters?limit=12&offset=${offsetPages}`)
            .then(response => response.json())
            .then((data) => {
                setCharacters(data);
                setLoading(false); 
            })

        fetch(`https://breakingbadapi.com/api/episodes/`)
            .then(response => response.json())
            .then((data) => {
                setEpisodes(data);
            })  

        return () => {}
    }, [offsetPages])
    
    return(
        <main className='container content'>
            {isCharacters && <Search searchCharacter={searchCharacter} />}
            {
                isCharacters && <Pagination offsetPages={offsetPages} 
                                            handlePagination={handlePagination}
                />
            }
            <ContentTypes handleFilter={handleFilter}
                          contentType={contentType}
            />
            {
                isEpisodes && <Episodes episodes={episodes}/>
            }
            {
                isCharacters ?
                    loading ? (<Preloader />) : ( <Characters characters={characters}/> )
                : ""
            }
        </main>
    )    

}



export default Main;