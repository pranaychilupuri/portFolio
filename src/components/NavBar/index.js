import {Component} from 'react'

import './index.css'

const navBarItems = [
  {
    id: 0,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/home-img.png',
    name: 'HOME',
  },
  {
    id: 1,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/about-img.png',
    name: 'ABOUT',
  },
  {
    id: 2,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/projects-img.png',
    name: 'PROJECTS',
  },
  {
    id: 3,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/person-img.png',
    name: 'CONTACT',
  },
]

// Write your code here

class NavBar extends Component {
  renderNavItemsList = () => {
    const {selectedSection, changeSelectedSection} = this.props

    return navBarItems.map(navItem => {
      const onClickNavBarItem = () => changeSelectedSection(navItem.name)
      const buttonClassName =
        selectedSection === navItem.name ? 'selected-item' : ''
      return (
        <li
          className={`nav-item ${buttonClassName}`}
          onClick={onClickNavBarItem}
          key={navItem.id}
        >
          <img
            className="item-image"
            src={navItem.iconUrl}
            alt={navItem.name}
          />
          <p className="item-name">{navItem.name}</p>
        </li>
      )
    })
  }

  render() {
    return (
      <nav className="navbar">
        <img
          src="https://assets.ccbp.in/frontend/react-js/portfolio-profile-img.png"
          className="profile-pic"
          alt="profile"
        />
        <ul className="nav-items-list">{this.renderNavItemsList()}</ul>
      </nav>
    )
  }
}

export default NavBar
