import React from "react";
class Additems extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      count: 0,
    };
  }

  Buttonpressed = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.Buttonpressed}>Increment Count</button>
      </div>
    );
  }
}

export default Additems;
