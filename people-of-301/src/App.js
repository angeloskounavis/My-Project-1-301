import React from 'react';
import Header from './Header.js'
import Person from './Person.js'
import './App.css'
import Main from './Main';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <footer>@ Code Fellows 2022</footer>
      </>
    );
  }
}

export default App;
