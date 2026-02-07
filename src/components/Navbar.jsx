import { useState } from 'react'

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false)

  const toggleMenu = () => {
    setMenuActive(!menuActive)
  }

  const closeMenu = () => {
    setMenuActive(false)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">7 Billion Presidents</div>
        <div 
          className={`menu-toggle ${menuActive ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-menu ${menuActive ? 'active' : ''}`}>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#vision" onClick={closeMenu}>Vision</a></li>
          <li><a href="#mission" onClick={closeMenu}>Mission</a></li>
          <li><a href="#partners" onClick={closeMenu}>Partners</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          <li><a href="#join" className="cta-btn" onClick={closeMenu}>Join Us</a></li>
        </ul>
      </div>
    </nav>
  )
}
