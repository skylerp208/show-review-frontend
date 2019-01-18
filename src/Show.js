import React from "react";

const Show = props => {
  const {show} = props;
  console.log(show)
  return(

    <div>
    Title: {show.title}
    <img src={show.image} />
    </div>

  )
}

export default Show
