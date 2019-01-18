import React from "react";
import Show from "./Show"

class ShowContainer extends React.Component{
  render(){

    let allShows = this.props.shows.map((show) => {
      return <Show key={show.name} show={show}/>
    })

    return <div>{allShows}</div>
  }
}

export default ShowContainer
