import React from "react";
import Characters from "../components/Characters";
import ContentTypes from "../components/ContentTypes";
import Episodes from "../components/Episodes";
import Pagination from "../components/Pagination";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

class Main extends React.Component{
    state = {
        characters: [],
        offsetPages: 0,
        episodes: [],
        contentType: 'characters',
        loading: true,
        isEpisodes: false,
        isCharacters: true
    }

    
    handlePagination = (page) => {
        
        this.setState({loading: true, offsetPages: page})
        fetch(`https://breakingbadapi.com/api/characters?limit=12&offset=${page}`)
            .then(response => response.json())
            .then(data => this.setState({characters: data, loading: false}))
    }

    searchCharacter = (name) => {
        this.setState({loading: true})
        fetch(`https://breakingbadapi.com/api/characters?name=${name}`)
            .then(response => response.json())
            .then(data => this.setState({characters: data, loading: false}))
    }

    handleFilter = (event) => {
        this.setState(() => ({contentType: event.target.dataset.type}), ()=>{
            if(this.state.contentType === 'episodes'){
                this.setState({isCharacters: false, isEpisodes: true})
            }
            if(this.state.contentType === 'characters'){
                this.setState({isCharacters: true, isEpisodes: false})
            }
        }) 
    }

    componentDidMount(){
        const {offsetPages} = this.state;

        fetch(`https://breakingbadapi.com/api/characters?limit=12&offset=${offsetPages}`)
            .then(response => response.json())
            .then(data => this.setState({characters: data, loading: false}))

        fetch(`https://breakingbadapi.com/api/episodes/`)
            .then(response => response.json())
            .then(data => this.setState({episodes: data}))    
    }

    componentDidUpdate(){
        
    }

    render(){
        
        const {characters, loading, offsetPages, contentType, isCharacters, isEpisodes} = this.state;
        return(
            <main className='container content'>

                {isCharacters && <Search searchCharacter={this.searchCharacter} />}
                {isCharacters && <Pagination offsetPages={offsetPages} 
                            handlePrev={this.handlePrev} 
                            handleNext={this.handleNext}
                            handlePagination={this.handlePagination}
                />}
                <ContentTypes handleFilter={this.handleFilter}
                              contentType={contentType}
                />

                {
                    isEpisodes && <Episodes episodes={this.state.episodes}/>
                }
                

                
                {
                    isCharacters ?
                        loading ? (<Preloader />) : ( <Characters characters={characters}/> )
                    : ""
                }

            </main>
        )
    }
}

export default Main;