import React from 'react';
import SearchBar from './SearchBar';
import youtube from './apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import './App.css';
class App extends React.Component{
    state={videos:[],selectedVideo:null};
    onTermSubmit=(term)=>{
        console.log('Parent',term);
        youtube.get('/search',{
            params:{
                q:term
            }
        }).then(results=>{
            console.log(this);
            this.setState({videos:results.data.items})
            this.setState({selectedVideo:this.state.videos[0]});
        })
        console.log(this.state);
        
    }
    onVideoSelect=(video)=>{
       this.setState({selectedVideo:video});
    }
    render(){
        return(
          
            <div className="ui container" >
   
            <SearchBar onTermSubmit={this.onTermSubmit}/>
          
            <div className="ui grid">
                <div className="ui row">
                <div className="eleven wide column">
                <VideoDetail video={this.state.selectedVideo}/>
                </div>
                <div className="five wide column">
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                </div>
                </div>
                </div>
            </div>
           
        );
    }
}
export default App;