import React from 'react';
import './VideoItem.css';
class VideoItem extends React.Component{
    
    render(){
        return (
            <div className="video-item item" onClick={()=>this.props.onVideoSelect(this.props.video)}>
            <img alt={this.props.video.snippet.title} className="ui  image" src={this.props.video.snippet.thumbnails.high.url}/>
            <div className="content">
                <div className="header" style={{color:'white'}}>
                    {this.props.video.snippet.title}
                </div>
            </div>
            </div>
        );
    }
}
export default VideoItem;