import React, { Component } from 'react';

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      message: 'Hello from Class Component!'
    };
  }

  handleIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  render() {
    const { count, message } = this.state;
    return (
      <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
        <h3>{message}</h3>
        <p>Count: {count}</p>
        <button onClick={this.handleIncrement}>
          Increment
        </button>
      </div>
    );
  }
}

export default ClassComponent;
