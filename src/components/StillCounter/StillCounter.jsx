import { Component } from "react";
import { Controls } from "./Controls";

export class StillCounter extends Component {
  static defaultProps = {
    initialValue: 0,
  };
  state = {
    value: this.props.initialValue,
  };
  handleIncrement = () => {
    this.setState((prevState) => {
      return {
        value: prevState.value + 1,
      };
    });
  };

  handleDecrement = () => {
    this.setState((prevState) => {
      return {
        value: prevState.value - 1,
      };
    });
  };
  render() {
    const { value } = this.state;
    return (
      <div>
        <span>Значение: {value}</span>
        <Controls increment={this.handleIncrement} decrement={this.handleDecrement} />
      </div>
    );
  }
}
