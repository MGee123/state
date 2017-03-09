import React from 'react'


export default class Champ extends React.Component {
constructor() {
super()
this.state = { viewable: false };
  this.handleMouseEnter = e => this.setState({ viewable: true });
  this.handleMouseLeave = e => this.setState({ viewable: false });
}
render() {
return (
<div onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
<img src={this.props.champ.file} />
{ this.state.viewable && <ChampDetails champ={this.props.champ} /> }
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
 
