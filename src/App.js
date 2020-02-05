import React, { Component } from 'react';
import './App.css';
import Form from './Form';

class App extends Component {
  state = {
    fields: {}
  };

  onSubmit = fields => {
    this.setState({ fields });
};


render() {
  return (
    <div className="App">
      <Form />
      <p>{JSON.stringify(fields, null, 2)}</p>
    </div>
  );
}
}

export default App;
