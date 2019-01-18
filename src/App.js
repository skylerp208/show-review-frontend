import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ShowContainer from "./ShowContainer"

class App extends Component {

  state={
    shows: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/api/v1/shows")
    .then(res => res.json())
    .then(shows => {
      this.setState({
        shows: shows
      })
    })
  }

  render() {
    console.log(this.state.shows);
    return (
      <div className="App">
        <ShowContainer shows={this.state.shows}/>
      </div>
    );
  }
}

export default App;
