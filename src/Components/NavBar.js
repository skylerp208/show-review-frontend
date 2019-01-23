import React from "react"

class NavBar extends React.Component  {

  state={
    toggleSearch: true,
  }

  toggleSearch = (e) => {
    e.preventDefault()
    this.setState({
      toggleSearch: !this.state.toggleSearch
    })
  }
render() {
return (
    <div className = 'navbar'>

      <a className= "home link" href = '/'> Home </a>

      <a className= 'shows link' href = '/shows' > Shows </a>

      <a className= 'search link'href= '' onClick={this.toggleSearch}> Search </a>
      {this.state.toggleSearch ?
        null
      : <div className = 'ui input'>
        <input className='search-bar' type='text' placeholder="Search shows..." onChange = {this.props.search}
        />
      </div>
      }
      <a className="profile link"href= ''> Profile </a>
    </div>
)
}
}

export default NavBar
