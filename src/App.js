import React, { useState } from 'react';
import User from './User';
import Student from './Student';
import InputBox from './InputBox';
import ShowHideElement from './ShowHideElement';
import './App.css';
import FormValidation from './FormValidation';
import Profile from './Profile';
import Effect from './Effect';
import ArrayList from './ArrayList';
import NestedArray from './NestedArray';
import PureComponen from './PureComponen';
import Usememo from './Usememo';

function App() {
  const [name, setName] = useState("world")
  const nameHandler = () => {
    setName("Raja")
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
      <Profile />
      <Effect />
      <ArrayList/>
      <NestedArray /> 
      <PureComponen />
      <Usememo/>
    </div>
  );
}

export default App;
