import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import classes from '../styles/Tabs.module.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { uiActions } from '../store/ui-slice'

const Tabs = () => {
  const [number, setNumber] = useState(1)
  const dispatch = useDispatch()
  const movieData = useSelector((state) => state.ui.data)
  return (
    <div
      className={classes['modal-container']}
      onClick={() => {
        dispatch(uiActions.closeModal())
      }}
    >
      <AnimatePresence>
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ y: -800 }}
          animate={{ y: 0 }}
          exit={{ y: -800 }}
          className={classes.container}
        >
          <div className={classes['img-container']}>
            <div className={classes.shadow}></div>
            <img
              src={`https://image.tmdb.org/t/p/original${movieData.backdrop_path}`}
              alt='Poster'
            />
          </div>
          <div className={classes.header}>
            <AiOutlineCloseCircle
              className={classes.close}
              onClick={() => {
                dispatch(uiActions.closeModal())
              }}
            />
            <span
              className={number === 1 ? classes.active : classes.main}
              onClick={() => {
                setNumber(1)
              }}
            >
              Description
            </span>
            <span
              className={number === 2 ? classes.active : classes.main}
              onClick={() => {
                setNumber(2)
              }}
            >
              Information
            </span>
          </div>
          {number === 1 && (
            <div className={classes.desc}>
              <div className={classes.title}>
                <h2>{movieData.title || movieData.name}</h2>
              </div>
              <div className={classes['movie-desc']}>
                <p>{movieData.overview}</p>
              </div>
            </div>
          )}
          {number === 2 && (
            <div className={classes.information}>
              <span>
                Release Date:{' '}
                {movieData.release_date || movieData.first_air_date}{' '}
              </span>
              <span>Rating: {movieData.vote_average.toFixed(2)} </span>
              <span>
                Original Language: {movieData.original_language.toUpperCase()}{' '}
              </span>
              <span>
                Age Classification:{' '}
                {movieData.adult === false
                  ? 'Suaitable For All Ages'
                  : 'For Adults'}
              </span>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Tabs
