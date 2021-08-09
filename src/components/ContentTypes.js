function ContentTypes(props) {
    return(
        <div className="content-types">
            <label>
                <input className="with-gap" 
                    name="ctype" 
                    type="radio" 
                    data-type="characters"
                    onChange={props.handleFilter}
                    checked={props.contentType === 'characters'} 
                />
                <span>Characters</span>
            </label>
            <label>
                <input className="with-gap" 
                    name="ctype" 
                    type="radio" 
                    data-type="episodes"
                    onChange={props.handleFilter} 
                    checked={props.contentType === 'episodes'} 
                />
                <span>Episodes</span>
            </label>
            <label>
                <input className="with-gap" 
                    name="ctype" 
                    type="radio" 
                    data-type="quotes" 
                    onChange={props.handleFilter}
                    checked={props.contentType === 'quotes'}
                    disabled 
                />
                <span>Quotes</span>
            </label>
        </div>
    )
}

export default ContentTypes;