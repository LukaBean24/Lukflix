import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { uiActions } from '../store/ui-slice'
import classes from '../styles/SideDrawer.module.css'

const SideDrawer = () => {
  const dispatch = useDispatch()
  return (
    <AnimatePresence>
      <motion.div
        animate={{ x: [-2000, 100, -100, 0] }}
        exit={{ x: 2000 }}
        className={classes.container}
      >
        <Link
          to='/'
          className={classes.link}
          onClick={() => {
            dispatch(uiActions.toggle())
          }}
        >
          <p>Home</p>
        </Link>
        <Link
          onClick={() => {
            dispatch(uiActions.toggle())
          }}
          to='/series'
          className={classes.link}
        >
          <p>Series</p>
        </Link>
        <Link
          onClick={() => {
            dispatch(uiActions.toggle())
          }}
          to='/watchlist'
          className={classes.link}
        >
          <p>Watchlist</p>
        </Link>
      </motion.div>
    </AnimatePresence>
  )
}

export default SideDrawer
