import React from 'react'
import Slider from 'react-slick'
import MainSlide from './MainSlide'

const MainSlider = ({ data }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoPlaySpeed: 500,
  }

  return (
    <div>
      <Slider {...settings}>
        {data &&
          data.length > 0 &&
          data.map((movie) => {
            return <MainSlide key={movie.id} data={movie} />
          })}
      </Slider>
    </div>
  )
}

export default MainSlider
