import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'

function Header () {
  
  const [show, setShow] = useState(false)

  const toggleMblMenu = () => {
    setShow(!show)
  }

  const closeMblMenu = () => {
    setShow(false)
  }

  
  return (
    <header>
      <div className='container'>
        <div className='grid navbar-grid'>
          <div className='Logo'>
            <NavLink className='link' to='/'>
              <h1>WorldAtlas</h1>
            </NavLink>
          </div>
          <nav className={show? "menu-mobile" : "menu-web"}>
            <ul>
              <li>
                <NavLink className='link' to='/' onClick={closeMblMenu}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className='link' to='/about' onClick={closeMblMenu}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className='link' to='/country' onClick={closeMblMenu}>
                  Country
                </NavLink>
              </li>
              <li>
                <NavLink className='link' to='/contact' onClick={closeMblMenu}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="ham-menu">
            <button onClick = {toggleMblMenu}>
              <GiHamburgerMenu />
            </button>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header
