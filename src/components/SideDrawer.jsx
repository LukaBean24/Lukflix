import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import classes from '../styles/SideDrawer.module.css'

const SideDrawer = () => {
  return (
    <AnimatePresence>
      <motion.div
        animate={{ x: [-2000, 100, -100, 0] }}
        exit={{ x: 2000 }}
        className={classes.container}
      >
        <Link to='/' className={classes.link}>
          <p>Home</p>
        </Link>
        <Link to='/series' className={classes.link}>
          <p>Series</p>
        </Link>
        <Link to='/watchlist' className={classes.link}>
          <p>Watchlist</p>
        </Link>
      </motion.div>
    </AnimatePresence>
  )
}

export default SideDrawer
