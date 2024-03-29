
import React from 'react';
import './SeasonDisplay.css';
const SeasonConfig={
    summer:{
        text:'Lets hit the beach!',
        iconName:'sun'
    },
    winter:{
        text:'Burr its chilly!',
        iconName:'snowflake'

    }
}
const getSeason=(lat,month)=>{
    if(month>2&&month<9)
    {
       return lat>0?'summer':'winter';
    }else{
        return lat<0?'winter':'summer';
    }
}
const SeasonDisplay=props=>{
    const season=getSeason(props.lat,new Date().getMonth());
    const {text,iconName}=SeasonConfig[season];
    console.log(props);
    return (
    <div className={`season-display ${season}`}>
    <i className={`icon-left ${iconName} icon massive`}/>
    <h1 className={`text-display`}>{text}</h1>
    <i className={`icon-right ${iconName} icon massive`}/>
    </div>
    );
    
};
export default SeasonDisplay;