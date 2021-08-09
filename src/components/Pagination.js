import React from 'react'

class Pagination extends React.Component {

    

    handleNext = () => {
        this.props.handlePagination(this.props.offsetPages + 12)
    }

    handlePrev = () => {
        this.props.handlePagination(this.props.offsetPages - 12)
    }


    render(){
        return(
            <div className="pagination">

                    {
                        this.props.offsetPages === 0 ? 
                        <button className="btn" disabled>prev</button> 
                        : <button className="btn" onClick={this.handlePrev}>prev</button>
                    }

                    {
                        this.props.offsetPages === 60 ? 
                        <button className="btn" disabled>next</button> 
                        : <button className="btn" onClick={this.handleNext}>next</button>
                    }
                    
                    
            </div>
        )
    }

}

export default Pagination;