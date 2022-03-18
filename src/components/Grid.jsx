import React from 'react'
import classes from '../styles/Watchlist.module.css'

const Grid = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes['grid-container']}>{props.children}</div>
    </div>
  )
}

export default Grid
