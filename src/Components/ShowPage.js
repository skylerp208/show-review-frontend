import React from "react"
import Review from "./Review.js"



class ShowPage extends React.Component {

  state={
    reviewContent: ""
  }

  submitHandler = (e, show) => {
    let content = this.state.reviewContent
    this.props.addComment(e, show, content)
    this.setState({
      reviewContent: ""
    })
  }

  writeComment = (e) => {
    this.setState({
      reviewContent: e.target.value
    })
  }

  removeTags(str){
     let output = str.replace("<p>", "");
      output = output.replace("</p>", "")

      output = output.replace("<p>", "");
      output = output.replace("</p>", "")

      output = output.replace("<b>", "")
      output = output.replace("</b>", "")

     output = output.replace("<i>", "")
     output = output.replace("</i>", "")

     output = output.replace("\'s", "s")

     return output
   }

render () {
  let allReviews = this.props.show.reviews.map(review => {
      return <Review
      key = {review.id}
      review = {review}
      content={review.content}
      user={review.user}
      deleteComment={this.props.deleteComment}
      />
  })




  return (
    <div className ='showPage'>
      <h1 className="show-header">{ this.props.show.title }</h1>
      <img className="show-img" src= {this.props.show.image} alt='' />
      <div className='genres'>
      <h3> GENRES </h3>
      {this.props.show.genre}
      </div>
        <div className='show-desc'> {this.removeTags(this.props.show.description)}  </div>
      <div className = 'reviews'>
            <div className = "ui cards">
            {allReviews}
            </div>
      </div>
      <h2 className = "review-header">Reviews</h2>
      <div className = "review-form">
        <form className = "ui form"onSubmit={(e) => this.submitHandler(e, this.props.show)}>
          <div className='field'>
          <textarea rows ='2'onChange={(e) => this.writeComment(e)}placeholder = "write a review!"
          value={this.state.reviewContent}/>
          </div>
          <input className = 'ui button'type='submit' value = "Submit Review" />
        </form>
      </div>

    </div>

  )
}



}

export default ShowPage
