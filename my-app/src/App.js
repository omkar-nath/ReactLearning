import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

const App=()=>{
  const buttonText={text:'Click me!'}
  let buttonStyle={
    backgroundColor:'green',
    color:'white'
  }
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter name:

      </label>
      <input type="text" id="name"/>
      <button style={buttonStyle}> {buttonText.text}</button>
    </div>
  )
}

export default App;
