import React from 'react'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'
import classes from '../styles/Watchlist.module.css'
import Card from '../components/Card'

const Watchlist = () => {
  const watchlist = useSelector((state) => state.watchlist.watchlist)
  return (
    <>
      <Navbar />
      <div className={classes.container}>
        <div className={classes['grid-container']}>
          {watchlist &&
            watchlist.length > 0 &&
            watchlist.map((movie) => {
              return <Card data={movie} />
            })}
        </div>
      </div>
    </>
  )
}

export default Watchlist
