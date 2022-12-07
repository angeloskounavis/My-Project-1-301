import React from 'react'

class Person extends React.Component {
  render() {
    return (
      <article>
        <h3>{this.props.name}</h3>
        <p>Bio:</p>
        <p>Favorite Food:</p>
      </article>
    )
  }
}

export default Person;
