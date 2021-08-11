import React from 'react'

function Pagination(props){

    const handleNext = () => {
        props.handlePagination(props.offsetPages + 12)
    }

    const handlePrev = () => {
        props.handlePagination(props.offsetPages - 12)
    }

    return(
        <div className="pagination">

                {
                    props.offsetPages === 0 ? 
                    <button className="btn" disabled>prev</button> 
                    : <button className="btn" onClick={handlePrev}>prev</button>
                }

                {
                    props.offsetPages === 60 ? 
                    <button className="btn" disabled>next</button> 
                    : <button className="btn" onClick={handleNext}>next</button>
                }
                
                
        </div>
    )
}


export default Pagination;