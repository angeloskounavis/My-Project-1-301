import React from 'react';
import Header from './Header.js'
import Person from './Person.js'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <Person 
          name="Angelos" 
          favFood="ice cream" />
          <Person 
          name="Nazlin" 
          favFood="cacio e pepe" />
          <Person 
          name="Martin" 
          favFood="steak" />
          <Person 
          name="Ricardo" 
          favFood="Mexican" />
        </main>
        <footer>@ Code Fellows 2022</footer>
      </>
    );
  }
}

export default App;
