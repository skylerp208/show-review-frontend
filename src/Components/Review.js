import React from "react"

class Review extends React.Component {



  render() {
    // debugger
    return (
      <div className = 'review card'>
        <div className= 'content'>
          <div className = 'header'>
            {this.props.user.username}
          </div>
          <span className = "description">
            {this.props.content}
          </span> 
          <button className = 'ui icon button' onClick={(e) => this.props.deleteComment(e, this.props.review)}><i class = 'trash icon'> </i>
          </button>
        </div>
      </div>
    )
  }
}

export default Review
