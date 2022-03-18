import React from 'react'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
import Tabs from '../components/Tabs'
import Grid from '../components/Grid'

const Watchlist = () => {
  const watchlist = useSelector((state) => state.watchlist.watchlist)
  const modalIsOpen = useSelector((state) => state.ui.modalIsOpen)
  const modalData = useSelector((state) => state.ui.data)
  return (
    <>
      {modalIsOpen && <Tabs data={modalData} />}
      <Navbar />
      <Grid>
        {watchlist &&
          watchlist.length > 0 &&
          watchlist.map((movie) => {
            return <Card key={movie.id} data={movie} watchlist={true} />
          })}
      </Grid>
    </>
  )
}

export default Watchlist
