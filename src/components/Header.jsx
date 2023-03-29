import React from 'react'
import { NavLink } from 'react-router-dom'
function Header() {
  return (
    <div>
        <section className="menu">
        <div className="title">
          <h2>Our menu</h2>
          <div className="underline"></div>

        </div>
        <div className="btn-container">
        <NavLink className="filter-btn" to = "/">ALL</NavLink>
        <NavLink className="filter-btn" to = "/breakfast">BREAKFAST</NavLink>
        <NavLink className="filter-btn" to = "/lunch">LUNCH</NavLink>
        <NavLink className="filter-btn" to = "/shakes">SHAKES</NavLink>
        </div>
      </section>
    </div>
  )
}

export default Header