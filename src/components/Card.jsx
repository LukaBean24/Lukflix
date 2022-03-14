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

const Card = ({ data, type, watchlist }) => {
  const dispatch = useDispatch()
  return (
    <div className={classes.card}>
      {data.backdrop_path !== null ? (
        <img
          src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
          alt='Poster'
        />
      ) : (
        <h1>No Poster Available</h1>
      )}
      <div className={classes.card_shadow}>
        <div className={classes.title}>
          <p>{data.name || data.title}</p>
        </div>
        <div className={classes.buttons}>
          <AiOutlinePlayCircle className={classes.button} />
          {/* {watchlist && (
            <AiOutlineMinusCircle
              className={classes.button}
              onClick={() => {
                dispatch(watchlistActions.removeMovie())
              }}
            />
          )} */}

          <AiOutlinePlusCircle
            className={classes.button}
            onClick={() => {
              dispatch(watchlistActions.addMovie(data))
            }}
          />
          <AiOutlineDownCircle className={classes.button} />
        </div>
      </div>
    </div>
  )
}

export default Card
