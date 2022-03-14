import React from 'react'
import classes from '../styles/MainSlide.module.css'

const MainSlide = ({ data }) => {
  return (
    <div className={classes.slide}>
      <div className={classes.shadow}></div>
      <img
        src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
        alt={data.title}
      />
      <div className={classes.info_container}>
        <div className={classes.title_container}>
          <h2>{data.title}</h2>
        </div>
        <div className={classes['buttons-container']}>
          <button>See More</button>
          <button>Add Watchlist</button>
        </div>
        <div className={classes.desc_container}>
          <p>{data.overview}</p>
        </div>
      </div>
    </div>
  )
}

export default MainSlide
