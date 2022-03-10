import React from 'react'
import Slider from 'react-slick'
import classes from '../styles/MainSlide.module.css'

const MainSlide = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div>
      <Slider {...settings}>
        <div className={classes.slide}>
          <div className={classes.shadow}></div>
          <img
            src='https://www.looper.com/img/gallery/this-is-why-you-cant-find-sons-of-anarchy-on-netflix/l-intro-1602869516.jpg'
            alt='Poster'
          />
          <div className={classes.info_container}>
            <div className={classes.title_container}>
              <h2>Sons Of Anarchy</h2>
            </div>
            <div className={classes.desc_container}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
                ducimus alias earum tempora obcaecati quos rerum delectus sit
                ipsa repellendus enim praesentium dicta et officia, dolores a
                deserunt! Eos aspernatur necessitatibus incidunt veniam, magnam
                vitae nesciunt consequuntur, iusto, nisi aliquid amet numquam
                voluptatem asperiores natus.
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default MainSlide
