import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      maxChars: this.props.maxChars
    };
  }

  onChange = (event) => {
    this.setState({ 
       message: event.target.value}
    )
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.onChange}type="text" name="message" id="message" value={this.state.message} />
        <p>Max Charactes: {this.state.maxChars}</p>
        <p>Current Charactes: {this.state.message.length}</p>
        <p>Remaining characters: {this.state.maxChars - this.state.message.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
