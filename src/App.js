import React, { useState } from 'react';
import User from './User';
import Student from './Student';
import InputBox from './InputBox';
import ShowHideElement from './ShowHideElement';
import './App.css';
import FormValidation from './FormValidation';

function App() {
  const [name, seName] = useState("world")
  const nameHandler = () => {
    seName("Raja")
  }
  return (
    <div className="App">
      <h1>Hello React</h1>
      <User />
      <Student
        name={name}
        email={'rajesh@gmail.com'}
        other={
          {
            mob: '7682014028',
            pin: '7522106'
          }
        } />
      <button onClick={nameHandler}>Update Name</button>

      <InputBox />

      <ShowHideElement />

      <FormValidation/>
    </div>
  );
}

export default App;
