import React from 'react';
import Person from './Person';
import data from './data.json';



class Main extends React.Component {
  render() {

    let peopleArr = [];
    data.forEach((pep) => {
      // console.log(pep)
      peopleArr.push(
        <Person
          name={pep.name}
          imageURL={pep.imageURL}
        />)
    })
    return (
      <main>
        {peopleArr}
        {/* <Person
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
          favFood="Mexican" /> */}
      </main>
    )
  }
}

export default Main;
