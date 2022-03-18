import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import classes from '../styles/Tabs.module.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { uiActions } from '../store/ui-slice'

const Tabs = () => {
  const container = {
    hidden: {
      scale: 1,
      opacity: 0,
      // y: 200,
    },
    visible: {
      scale: 1,
      opacity: 1,
      //y: 0,
    },
    exit: {
      scale: 0,
      opacity: 1,
      y: 200,
    },
  }

  const items = {
    hidden: {
      y: 200,
      opacity: 1,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  }
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
          variants={container}
          initial='hidden'
          animate='visible'
          exit='exit'
          onClick={(e) => e.stopPropagation()}
          className={classes.container}
        >
          <motion.div
            className={classes['img-container']}
            variants={items}
            initial='hidden'
            animate='visible'
          >
            <div className={classes.shadow}></div>
            {movieData.backdrop_path !== null &&
            movieData.backdrop_path !== undefined ? (
              <img
                src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`}
                alt='Poster'
              />
            ) : (
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'black',
                }}
              >
                <h1
                  style={{
                    color: 'red',
                    letterSpacing: '0.3rem',
                    fontSize: '55px',
                  }}
                >
                  LUKFLIX
                </h1>
              </div>
            )}
          </motion.div>
          <motion.div
            variants={items}
            initial='hidden'
            animate='visible'
            className={classes.header}
          >
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
          </motion.div>
          {number === 1 && (
            <motion.div
              variants={items}
              initial='hidden'
              animate='visible'
              className={classes.desc}
            >
              <div className={classes.title}>
                <h2>{movieData.title || movieData.name}</h2>
              </div>
              <div className={classes['movie-desc']}>
                <p>{movieData.overview}</p>
              </div>
            </motion.div>
          )}
          {number === 2 && (
            <motion.div
              className={classes.information}
              variants={items}
              initial='hidden'
              animate='visible'
            >
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
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Tabs
