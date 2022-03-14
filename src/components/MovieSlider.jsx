import React from 'react'
import Slider from 'react-slick'
import Card from './Card'
import classes from '../styles/MovieSlider.module.css'

const MovieSlider = ({ title, data }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div className={classes.movieSlider_container}>
      <h2 className={classes.slider_title}>{title}</h2>
      <Slider {...settings} className={classes.movieSlider}>
        {data &&
          data.length > 0 &&
          data.map((movie) => {
            return <Card data={movie} />
          })}
      </Slider>
    </div>
  )
}

export default MovieSlider
