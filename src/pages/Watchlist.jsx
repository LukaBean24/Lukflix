import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'
import classes from '../styles/Watchlist.module.css'
import Card from '../components/Card'
import Tabs from '../components/Tabs'

const Watchlist = () => {
  const watchlist = useSelector((state) => state.watchlist.watchlist)
  const modalIsOpen = useSelector((state) => state.ui.modalIsOpen)
  const modalData = useSelector((state) => state.ui.data)
  return (
    <>
      {modalIsOpen && <Tabs data={modalData} />}
      <Navbar />
      <div className={classes.container}>
        <div className={classes['grid-container']}>
          {watchlist &&
            watchlist.length > 0 &&
            watchlist.map((movie) => {
              return <Card key={movie.id} data={movie} watchlist={true} />
            })}
        </div>
      </div>
    </>
  )
}

export default Watchlist
