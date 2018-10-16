import React, { Component } from 'react';
import Header from './components/Header';
import PetForm from './components/PetForm';
import './App.css';

class App extends Component {
  state = {
    pets: [],
    zip: ''
  }

  handleChange = event => {
    this.setState({ zip: event.target.value })
    console.log(this.state.zip);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <PetForm zip={this.state.zip} handleChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
