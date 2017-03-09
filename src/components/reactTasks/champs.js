import React from 'react'


export default class Champ extends React.Component {
constructor() {
super()
this.state = { detailsVisible: false };
  this.handleMouseEnter = e => this.setState({ detailsVisible: true });
  this.handleMouseLeave = e => this.setState({ detailsVisible: false });
}
  render() {
    return (
      <div onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <img src={this.props.champ.file} />
        { this.state.detailsVisible && <ChampDetails champ={this.props.champ} /> }
      </div>
    )
  }
}

const ChampDetails = ({champ}) => (
  <div>
    <p>Name: { champ.name } </p>
    <p>Role: { champ.role } </p>
    <p>Difficulty: { champ.diff } </p>
    <p>Price: { champ.price } </p>
  </div>
    )
 
