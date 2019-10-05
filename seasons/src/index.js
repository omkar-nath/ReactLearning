import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './seasonDisplay';
import Loader from './loader';
class App extends React.Component{
    state={latitude:null,errorMessage:''};
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
        position=>this.setState({latitude:position.coords.latitude}),
        err=>this.setState({errorMessage:err.message})
        );
        console.log('All the first time things will be done here There is not techincal reasom as to why we cant do that stuff in constructor')
    }
    componentDidUpdate(){
        console.log('update')
    }
    renderContent(){
        if(!this.state.errorMessage&& this.state.latitude)
        return <SeasonDisplay lat={this.state.latitude}></SeasonDisplay>
        else if(this.state.errorMessage&&!this.state.latitude)
        return <div>Error: {this.state.errorMessage}</div>;
        return <Loader message="Please allow to get your geolocation"></Loader>;
    }
    render(){
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )
       
    }
    
}
ReactDOM.render(
    <App/>,
    document.querySelector("#root")
);
