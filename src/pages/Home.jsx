import React, { useEffect, useState } from 'react'
import MainSlider from '../components/MainSlider'
import Navbar from '../components/Navbar'
import SkeletonLoad from '../components/SkeletonLoad'

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(true)
  const [popularMovie, setPopularMovie] = useState([])

  useEffect(() => {
    getPopular()
  }, [])

  const getPopular = () => {
    setIsLoaded(false)
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=39390829f6b5213dc2cd7b01417e12d0&language=en-US&page=1`
    )
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setPopularMovie(data.results)
        setIsLoaded(true)
      })
  }
  return (
    <>
      <Navbar />
      {isLoaded ? <MainSlider data={popularMovie} /> : <SkeletonLoad />}
    </>
  )
}

export default Home
