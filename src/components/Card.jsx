import React from 'react'
import classes from '../styles/Card.module.css'
import {
  AiOutlinePlusCircle,
  AiOutlinePlayCircle,
  AiOutlineDownCircle,
} from 'react-icons/ai'

const Card = ({ data }) => {
  return (
    <div className={classes.card}>
      <img
        src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
        alt='Poster'
      />
      <div className={classes.card_shadow}>
        <div className={classes.title}>
          <p>{data.title}</p>
        </div>
        <div className={classes.buttons}>
          <AiOutlinePlayCircle className={classes.button} />
          <AiOutlinePlusCircle className={classes.button} />
          <AiOutlineDownCircle className={classes.button} />
        </div>
      </div>
    </div>
  )
}

export default Card
