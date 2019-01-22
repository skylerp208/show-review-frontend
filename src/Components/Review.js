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
          <div className = "description">
            {this.props.content}
          </div>
        </div>
      </div>
    )
  }
}

export default Review
