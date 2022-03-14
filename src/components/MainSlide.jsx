import React from 'react'
import { useDispatch } from 'react-redux'
import { watchlistActions } from '../store/watchlist-slice'
import classes from '../styles/MainSlide.module.css'

const MainSlide = ({ data, type }) => {
  const dispatch = useDispatch()
  return (
    <div className={classes.slide}>
      <div className={classes.shadow}></div>
      {data.backdrop_path !== null ? (
        <img
          src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
          alt={data.title}
        />
      ) : (
        <h1>No Poster Available</h1>
      )}

      <div className={classes.info_container}>
        <div className={classes.title_container}>
          <h2>{data.name || data.title}</h2>
        </div>
        <div className={classes['buttons-container']}>
          <button>See More</button>
          <button
            onClick={() => {
              dispatch(watchlistActions.addMovie(data))
            }}
          >
            Add Watchlist
          </button>
        </div>
        <div className={classes.desc_container}>
          <p>{data.overview}</p>
        </div>
      </div>
    </div>
  )
}

export default MainSlide
