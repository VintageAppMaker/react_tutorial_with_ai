import React, { Component } from 'react';

class ClassLifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      logs: ['Constructor called']
    };
    console.log('Constructor: 컴포넌트 초기화');
  }

  componentDidMount() {
    console.log('ComponentDidMount: 컴포넌트가 마운트됨');
    this.addLog('ComponentDidMount called');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('ComponentDidUpdate: 컴포넌트가 업데이트됨');
    if (prevState.count !== this.state.count) {
      this.addLog(`ComponentDidUpdate: count changed to ${this.state.count}`);
    }
  }

  componentWillUnmount() {
    console.log('ComponentWillUnmount: 컴포넌트가 언마운트됨');
  }

  addLog = (message) => {
    this.setState(prevState => ({
      logs: [...prevState.logs, message]
    }));
  };

  handleIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  render() {
    console.log('Render: 컴포넌트 렌더링');
    return (
      <div style={{ padding: '15px', border: '1px solid #ddd', margin: '10px' }}>
        <h3>Class Lifecycle Example</h3>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrement}>
          Increment Count
        </button>
        <div style={{ marginTop: '10px' }}>
          <h4>Lifecycle Logs:</h4>
          <ul style={{ maxHeight: '150px', overflowY: 'auto', backgroundColor: '#f5f5f5', padding: '10px' }}>
            {this.state.logs.map((log, index) => (
              <li key={index}>{log}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ClassLifecycle;
