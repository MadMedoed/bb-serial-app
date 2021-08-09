import React from 'react'

class Search extends React.Component {

    state = {
        search: '',
    }

    handlekey = (event) => {
        if(event.key === 'Enter'){
            this.props.searchCharacter(this.state.search)
        }
    }

    handleChange = (event) => {
        this.setState({search: event.target.value})
    }

    handleSearch = () => {
        this.props.searchCharacter(this.state.search)
    }

    render(){
        return(
            <div className="row">
                <div className="input-field">
                    <input 
                        placeholder="Character Name" 
                        type="text" 
                        className="validate" 
                        onKeyDown={this.handlekey}
                        onChange={this.handleChange}
                    />
                </div>
                <button className="btn" onClick={this.handleSearch}>Search</button>
            </div>
        )
    }

}

export default Search;