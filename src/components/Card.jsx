import React from 'react'
import classes from '../styles/Card.module.css'
import {
  AiOutlinePlusCircle,
  AiOutlinePlayCircle,
  AiOutlineDownCircle,
  AiOutlineMinusCircle,
} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { watchlistActions } from '../store/watchlist-slice'
import { uiActions } from '../store/ui-slice'
import Tabs from '../components/Tabs'

const Card = ({ data, type, watchlist }) => {
  const dispatch = useDispatch()
  return (
    <>
      <div className={classes.card}>
        {data.backdrop_path !== null ? (
          <img
            src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
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
    </>
  )
}

export default Card
