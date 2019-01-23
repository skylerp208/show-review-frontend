import React from 'react'
import ReactLoading from "react-loading"

const Loading = () => {
  return (
    <div>
    <span className="loading-font"> Loading </span>
    <ReactLoading id ='load' type='bubbles' color ='black' height ={`20%`} width = {`20%`} />)
    </div>)

}

export default Loading
