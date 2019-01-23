import React from 'react'



class Box extends React.Component {

  state = {
    color: this.props.color
  }

  colors = ['LightGreen', 'Violet',"IndianRed","CornflowerBlue", "Pink", "MediumSeaGreen", "Orange"]

  changeColor = () => {
    let rand= Math.floor(Math.random()* 7)
    this.setState({
      color : { 'background-color' : this.colors[rand]}
    })
  }

  render () {
    return (
      <div className={this.props.class} style= {this.state.color} onClick={this.changeColor}> </div>
    )
  }


}

export default Box
