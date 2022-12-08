import React from 'react'

class Person extends React.Component {
  render() {
    return (
      <article>
        <h3>{this.props.name}</h3>
        <img 
        src={this.props.imageURL}
        alt={this.props.name}
        />
        <p>Bio:</p>
        <p>Favorite Food:</p>
      </article>
    )
  }
}

export default Person;
