import React from 'react'
import { Link } from 'react-router-dom'
import classes from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <div className={classes.main__container}>
      <div className={classes.container}>
        <div className={classes.logo_navlinks}>
          <div className={classes.logo}>
            <Link to='/' className={classes.link}>
              <h2>LUKFLIX</h2>
            </Link>
          </div>
          <div className={classes.navlinks}>
            <Link to='/' className={classes.link}>
              <p>Home</p>
            </Link>
            <Link to='/series' className={classes.link}>
              <p>Series</p>
            </Link>
            <Link to='/watchlist' className={classes.link}>
              <p>Watchlist</p>
            </Link>
          </div>
        </div>
        <div className={classes.searchbar}></div>
      </div>
    </div>
  )
}

export default Navbar
