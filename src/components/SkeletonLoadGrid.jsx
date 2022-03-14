import React from 'react'
import classes from '../styles/SkeletonLoadGrid.module.css'

const SkeletonLoadGrid = () => {
  return (
    <div className={classes.container}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default SkeletonLoadGrid
