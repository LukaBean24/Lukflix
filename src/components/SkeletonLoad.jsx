import React from 'react'
import classes from '../styles/SkeletonLoad.module.css'

const SkeletonLoad = () => {
  return (
    <div className={classes.container}>
      <div className={classes['text-container']}>
        <div className={classes.title}>
          <span></span>
        </div>
        <div className={classes.buttons}>
          <span></span>
          <span></span>
        </div>
        <div className={classes.desc}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  )
}

export default SkeletonLoad
