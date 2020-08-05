import React from 'react';
import Child from "./Child";
import { Sibling } from './Sibling';
// STATEFULL COMPONENT UPDATING ITS CHILD AND RECEIVING UPDATES FROM CHILD
export default class Parent extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Frarthur',
      totalClicks: 0
    }
    this.handleClick = this.handleClick.bind(this);
    this.changeName = this.changeName.bind(this);
  }

  handleClick() {
    const total = this.state.totalClicks;
    // calling handleClick will
    // result in a state change:
    this.setState(
      { totalClicks: total + 1 }
    );
  }

  changeName(newName) {
    this.setState({
      name: newName
    });
  }
  render() {
    return (
      <section>
        <Child
          onChange={this.changeName}
          onClick={this.handleClick}
          totalClicks={this.state.totalClicks}/>
        <Sibling name={this.state.name}/>
      </section>
    )
  }
}