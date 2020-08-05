import React from 'react';
// STATE LESS COMPONENT UPDATING ITS PARENT
export default class Child extends React.Component {
  constructor(props) {
    super(props);
    // Need a local function to gather value to pass back to the selected val of
    this.handleChangeChild = this.handleChangeChild.bind(this);
  }

  handleChangeChild(e) {
    // need a value to pass to the call back
    const name = e.target.value;
    this.props.onChange(name);
  }

  render() {
    return (
      <section>
        <select id="great-names" onChange={this.handleChangeChild}>
          <option value="Frarthur">
            Frarthur
          </option>

          <option value="Gromulus">
            Gromulus
          </option>

          <option value="Thinkpiece">
            Thinkpiece
          </option>
        </select>

        <h2>{this.props.totalClicks} </h2>

        <button onClick={this.props.onClick}>
          Click Me!
        </button>

      </section>
    )
  }
}