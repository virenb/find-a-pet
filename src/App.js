import React, { Component } from 'react';
import validateZip from './valid';
import Header from './components/Header';
import PetForm from './components/PetForm';
import Results from './components/Results';
import fetchJsonp from 'fetch-jsonp';
import './App.css';

class App extends Component {
  state = {
    animal: 'dog',
    zip: '',
    results: []
  }

  handleZipChange = event => {
    this.setState({ zip: event.target.value })
  }

  handleAnimalChange = event => {
    this.setState({ animal: event.target.value })
  }

  handleSubmit = event => {
    const KEY = 'e653e7e44448bbaeb4128d62235e3253';
    event.preventDefault();  
    if (!validateZip(this.state.zip)) {
      alert('Please enter valid zipcode');
      return;
    }
    console.log(this.state);
    fetchJsonp(
    `http://api.petfinder.com/pet.find?format=json&key=${KEY}&animal=${this.state.animal}&location=${this.state.zip}&callback=callback`,
    {
      jsonpCallbackFunction: 'callback'
    }
  )
    .then(res => res.json())
    .then(data => this.setState({ results: data.petfinder.pets.pet }))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App" style={{ marginTop: '20px'}}>
        <Header />
        <PetForm 
          zip={this.state.zip} 
          handleZipChange={this.handleZipChange} 
          handleAnimalChange={this.handleAnimalChange}
          handleSubmit={this.handleSubmit} 
          animal={this.state.animal}
        />
        <Results results={this.state.results} />
      </div>
    );
  }
}

export default App;
