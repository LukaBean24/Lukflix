import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { uiActions } from '../store/ui-slice'
import classes from '../styles/Navbar.module.css'
import SideDrawer from './SideDrawer'

const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false)
  const isOpen = useSelector((state) => state.ui.menuIsOpen)
  const dispatch = useDispatch()
  const menuToggler = () => {
    dispatch(uiActions.toggle())
  }
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
        <div className={classes.searchbar}>
          <div
            className={`${classes.burger} ${isOpen ? classes.active : ''}`}
            onClick={menuToggler}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      {isOpen && <SideDrawer />}
    </div>
  )
}

export default Navbar
