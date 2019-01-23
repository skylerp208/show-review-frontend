import React, { Component } from 'react';
import './App.css';
import ShowContainer from "./Containers/ShowContainer"
import NavBar from "./Components/NavBar"
import {Route, Switch, withRouter} from "react-router-dom"
import Home from "./Components/Home"
import Loading from "./Components/Loading"

class App extends Component {

  state={
    shows: [],
    someShows: [],
    search: ''
  }

  componentDidMount(){
    fetch("http://localhost:3000/api/v1/shows")
    .then(res => res.json())
    .then(shows => {
      this.setState({
        shows: shows,
        someShows: shows.slice(0,24)
      })
    })
  }

  scrollFunction = () =>{
   window.addEventListener("scroll",(e)=>{
     if (window.pageYOffset >= (document.body.scrollHeight-725) && (this.state.search === '')){
       //END OF PAGE SO FETCH AND SET STATE
      let newArr = this.state.someShows
      let num = newArr.length + 24
      let output = this.state.shows.slice(0, num)
           this.setState({someShows: output})
         }})
     }

  search = (e) => {
    if (e.target.value === "") {
      this.setState({
        someShows: this.state.shows.slice(0,24),
      })
    }
    else {
      let showArr = this.state.shows.filter(show =>   show.title.toUpperCase().includes(this.state.search))
      this.setState({
        search: e.target.value.toUpperCase(),
        someShows : showArr
      })
    }

  }

  addComment = (e, show, content) => {
    e.preventDefault()
    fetch(`http://localhost:3000/api/v1/reviews`, {
      method: "POST",
      headers: {
        'Content-Type' : "application/json",
        'Accepts' : "application/json"
      },
      body: JSON.stringify({
          'user_id' : (Math.random() * (6 - 1) + 1),
          'show_id' : show.id,
          'rating': 5,
          'content' : content
        })
    })
    .then(res => res.json())
    .then(data => this.setState({
      shows: data,
      someShows: data
    }))
  }

  deleteComment = (e, review) => {
    fetch(`http://localhost:3000/api/v1/reviews/${review.id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(data=> {
      this.setState ({
        shows: data,
        someShows: data
      })
    })
  }



  render() {
    return (
      <div className="App">
        {this.scrollFunction()}
        <NavBar
          toggleSearch = {this.toggleSearch}
          search = {this.search}
        />
        <Switch>
          <Route
            path ='/shows'
            render = {() => {
              if (this.state.shows.length > 0){
              return(
              <ShowContainer
                shows={this.state.someShows}
                onScroll={this.scrollFunction}
                addComment={this.addComment}
                deleteComment={this.deleteComment}
              />
            )} else {
              return <Loading />
            }
          }}

          />
          <Route path='/' component = {Home} />
        </Switch>
      </div>
    );
  }
}

export default withRouter (App);
