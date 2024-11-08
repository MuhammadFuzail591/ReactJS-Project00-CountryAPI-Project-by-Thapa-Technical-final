import { NavLink } from "react-router-dom"

function Header() {
  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="Logo">
            <NavLink className="link" to="/">
              <h1>WorldAtlas</h1>
            </NavLink>
          </div>
          <nav className="nav-div">
            <ul>
              <li><NavLink className="link" to="/">Home</NavLink></li>
              <li><NavLink className="link" to="/about">About</NavLink></li>
              <li><NavLink className="link" to="/country">Country</NavLink></li>
              <li><NavLink className="link" to="/contact">Contact</NavLink></li>
            </ul>
          </nav>
        </div>
      </div>
      

    </header>
    
  )
}

export default Header