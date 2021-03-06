import React from 'react';

class SearchBar extends React.Component {
    state={term: ''}

    onFormSubmit = (event) =>{
        event.preventDefault()

        this.props.onSubmit(this.state.term)
    }

    render(){
        return (
            <div className="ui segment" style={{marginTop: '10px'}} >
                <form onSubmit={this.onFormSubmit} className="ui form" >
                    <div className="field">
                        <label>Image Search</label>
                        <input onChange={(e)=> this.setState({term: e.target.value})}
                         type="text" value={this.state.term}  />
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SearchBar