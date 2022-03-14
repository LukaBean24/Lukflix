import React, { useEffect, useState } from 'react'
import MainSlider from '../components/MainSlider'
import MovieSlider from '../components/MovieSlider'
import Navbar from '../components/Navbar'
import SkeletonLoad from '../components/SkeletonLoad'
import SkeletonLoadGrid from '../components/SkeletonLoadGrid'

const Series = () => {
  const [popular, setPopular] = useState([])
  const [isLoaded, setIsLoaded] = useState(true)

  useEffect(() => {
    getPopular()
  }, [])

  const getPopular = () => {
    setIsLoaded(false)
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=39390829f6b5213dc2cd7b01417e12d0&language=en-US&page=1`
    )
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setPopular(data.results)
        setIsLoaded(true)
      })
  }
  return (
    <>
      <Navbar />
      {isLoaded ? <MainSlider data={popular} /> : <SkeletonLoad />}
      {isLoaded ? <MovieSlider data={popular} /> : <SkeletonLoadGrid />}
    </>
  )
}

export default Series
