import { Component } from "react";

export class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState((prevState) => {
      return {
        visible: !prevState.visible,
      };
    });
  };

  render() {
    const { visible } = this.state;
    return (
      <div>
        <button type="button" onClick={this.toggle}>
          {visible ? "Скрыть" : "Показать"}
        </button>

        {visible && <div>Привет, мой друг!</div>}
      </div>
    );
  }
}
