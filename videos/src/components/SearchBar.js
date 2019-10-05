import React from 'react';
class SearchBar extends React.Component{
    state={term:''};
    onInputChange=(event)=>{
        this.setState({term:event.target.value});
    };
    onFormSubmit=(event)=>{
        event.preventDefault();
        //TODO : Make sure we call callback from parent component
        this.props.onTermSubmit(this.state.term);
        
    };
    render(){
        return(
            <div className="ui input focus">
            <form onSubmit={this.onFormSubmit} className="ui form">
            
            <input type="text" value={this.state.term} onChange={this.onInputChange} placeholder="Search..."/>
         
          </form>
          </div>
        )
    }
}
export default SearchBar;