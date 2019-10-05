import React from 'react';
class videoDetail extends React.Component{
   
    render(){
        
        if(!this.props.video){
            return <div>No Video Selected!</div>
        }
        else{
            const videoSrc=`https://www.youtube.com/embed/${this.props.video.id.videoId}`;
            console.log(videoSrc);
        return(
          <div className="ui segment" style={{background:'#6D8A96'}}>
            <div className="ui embed">
                <iframe title="video player" src={videoSrc}/>
            </div>
            <h4 styele={{color:'white'}}className="ui header">{this.props.video.snippet.title}</h4>
            <h5>{this.props.video.snippet.description}</h5>
             
          </div>
        );
        }
    }
}
export default videoDetail;