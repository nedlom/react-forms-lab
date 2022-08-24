import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "hello"
    };
  }

  handleMessageChange = (event) => {
    this.setState({
      message: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          onChange={this.handleMessageChange} 
          name="message" 
          id="message" 
          value={this.state.message} 
        />

        <h2>Total Characters: {this.props.maxChars}</h2>
        <h2>Remaining: {this.props.maxChars - this.state.message.length}</h2>
      </div>
    );
  }
}

export default TwitterMessage;
