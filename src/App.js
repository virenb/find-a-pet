import React, { Component } from 'react';
import Header from './components/Header';
import PetForm from './components/PetForm';
import fetchJsonp from 'fetch-jsonp';
import './App.css';

class App extends Component {
  state = {
    animal: 'dog',
    zip: ''
  }

  handleZipChange = event => {
    this.setState({ zip: event.target.value })
    console.log(this.state);
  }

   handleAnimalChange = event => {
    this.setState({ animal: event.target.value })
    console.log(this.state);
  }

  handleSubmit = event => {
    const KEY = 'e653e7e44448bbaeb4128d62235e3253';
    event.preventDefault();  
    console.log(this.state);
    fetchJsonp(
    `http://api.petfinder.com/pet.find?format=json&key=${KEY}&animal=${this.state.animal}&location=${this.state.zip}&callback=callback`,
    {
      jsonpCallbackFunction: 'callback'
    }
  )
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
    this.setState({ zip: '', animal: '' });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <PetForm 
          zip={this.state.zip} 
          handleZipChange={this.handleZipChange} 
          handleAnimalChange={this.handleAnimalChange}
          handleSubmit={this.handleSubmit} 
          animal={this.state.animal}
        />
      </div>
    );
  }
}

export default App;
