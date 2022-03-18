import React from 'react'
import classes from '../styles/Card.module.css'
import {
  AiOutlinePlusCircle,
  AiOutlinePlayCircle,
  AiOutlineDownCircle,
  AiOutlineMinusCircle,
} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { watchlistActions } from '../store/watchlist-slice'
import { uiActions } from '../store/ui-slice'
import { AnimatePresence, motion } from 'framer-motion'

const gridItem = {
  hidden: {
    opacity: 1,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    scale: 0,
    opacity: 1,
  },
}

const Card = ({ data, type, watchlist }) => {
  const dispatch = useDispatch()
  return (
    <AnimatePresence>
      <motion.div
        variants={gridItem}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <div className={classes.card}>
          {data.backdrop_path !== null && data.backdrop_path !== undefined ? (
            <img
              src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
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
          <div className={classes.card_shadow}>
            <div className={classes.title}>
              <p>{data.name || data.title}</p>
            </div>
            <div className={classes.buttons}>
              <AiOutlinePlayCircle className={classes.button} />
              {watchlist ? (
                <AiOutlineMinusCircle
                  className={classes.button}
                  onClick={() => {
                    dispatch(watchlistActions.removeMovie(data))
                  }}
                />
              ) : (
                <AiOutlinePlusCircle
                  className={classes.button}
                  onClick={() => {
                    dispatch(watchlistActions.addMovie(data))
                  }}
                />
              )}
              <AiOutlineDownCircle
                className={classes.button}
                onClick={() => {
                  dispatch(uiActions.openModal(data))
                }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Card
