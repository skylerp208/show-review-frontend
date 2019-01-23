import React from "react"
import { Link, withRouter} from "react-router-dom"

const Show = props => {
  const {show} = props;
  return(

      <div className = "ui black link card">
        <div className= "ui medium image">
        <img className= 'mage'src={show.image} alt = '' />
        </div>
        <div className= 'content' >
          <Link to ={`/shows/${show.id}`} >
          <div className ="header"> {show.title}</div>
          </Link>
        </div>
      </div>

  )
}

export default withRouter(Show)
