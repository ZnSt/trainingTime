import { Component } from "react";
import "./Colorpicker.css";

export class Colorpicker extends Component {
  state = {
    activeColorIdx: 0,
  };

  makeColorsClasses = (index) => {
    const optionsClasses = ["ColorPicker__option"];
    if (this.state.activeColorIdx === index) {
      optionsClasses.push("ColorPicker__option--active");
    }

    return optionsClasses.join(" ");
  };

  setActiveIndex = (index) => {
    this.setState({ activeColorIdx: index });
  };
  render() {
    const { colors } = this.props;
    const { activeColorIdx } = this.state;
    const active = colors[activeColorIdx];

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Выбран цвет: {active.label}</p>

        <div>
          {colors.map(({ color, label }, index) => {
            const classNames = this.makeColorsClasses(index);
            return (
              <button
                key={label}
                style={{ background: color }}
                className={classNames}
                onClick={() => this.setActiveIndex(index)}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}
