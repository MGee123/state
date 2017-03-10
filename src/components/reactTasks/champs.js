import React from 'react'


export default class Champ extends React.Component {
constructor() {
super()
this.state = { viewable: false, height: 150 };
 
}

handleClick() {
  if  (this.state.height == 250) {
	this.setState({ height: 150});
} else {
this.setState({ height: this.state.height + 100 });
}
}
render() {
  return (
	<div style={{ height: this.state.height}} onMouseEnter={e => this.setState({ viewable: true })} onMouseLeave={e => this.setState({ viewable: false })}  >

<img src={this.props.champ.file} onClick={() => this.handleClick()} />
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
 
