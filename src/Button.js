import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.showMessage = this.showMessage.bind(this);
    this.state = {
      visible: false
    };
  }
  showMessage() {
    this.setState((prev) => ({ visible: prev.visible ? false : true }));
  }

  render() {
    return (
      <div>
        {this.state.visible && (
          <p>
            Hello, I've learnt to use the full-stack evaluation tool. This makes
            me so happy
          </p>
        )}
        <button onClick={this.showMessage}>Show Para</button>
      </div>
    );
  }
}

export default Button;
