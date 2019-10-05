
import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import unsplash from '../components/api/unsplash';
import './App.css'
class App extends React.Component{
    state={
        images:[]
    };
    onSearchSubmit=(term)=>{
      unsplash.get('https://api.unsplash.com/search/photos',{
           params:{
               query:term
            }
         
       }).then((response)=>{
          this.setState({images:response.data.results});
       })
       
    }
    render(){
        return (
            <div className="ui container" style={{marginTop:'10px'}}>
            <SearchBar onSearchSubmitForm={this.onSearchSubmit}></SearchBar>
            <ImageList images={this.state.images}/>
            </div>
        );
    }
}
export default App;