import React from 'react';
import Box from "./Box"


class Home extends React.Component {


render()
  {
     return (
      <div className='homePage'>
        <marquee className="home-header"> Welcome to the home page </marquee>
        <Box class = 'box1'  color = {{'background-color': 'LightGreen'}}/>
        <Box class  = 'box2' color = {{'background-color' : 'CornflowerBlue'}} />
        <Box class = 'box3' color = {{'background-color' : 'MediumPurple'}}/>
        <Box class = 'box4' color = {{'background-color': "IndianRed"}}/>
        <Box class = 'box5' color = {{'background-color' : 'SkyBlue'}} />
        <div className = "home-desc"> Check out these boxes </div>
      </div>
    )
  }

}

export default Home
