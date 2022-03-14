import React, { useEffect, useState } from 'react'
import MainSlider from '../components/MainSlider'
import Navbar from '../components/Navbar'
import SkeletonLoad from '../components/SkeletonLoad'
import SkeletonLoadGrid from '../components/SkeletonLoadGrid'
import MovieSlider from '../components/MovieSlider'

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(true)
  const [popularMovie, setPopularMovie] = useState([])
  const [rated, setRated] = useState([])
  const [upcoming, setUpcoming] = useState([])

  useEffect(() => {
    getPopular()
    getRated()
    getUpcoming()
  }, [])

  const getUpcoming = () => {
    setIsLoaded(false)
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=39390829f6b5213dc2cd7b01417e12d0&language=en-US&page=1`
    )
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setUpcoming(data.results)
        setIsLoaded(true)
      })
  }

  const getRated = () => {
    setIsLoaded(false)
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=39390829f6b5213dc2cd7b01417e12d0&language=en-US&page=1`
    )
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setRated(data.results)
        setIsLoaded(true)
      })
  }

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
      {isLoaded ? (
        <MovieSlider title='Most Popular' data={popularMovie} />
      ) : (
        <SkeletonLoadGrid />
      )}
      {isLoaded ? (
        <MovieSlider title='Top Rated' data={rated} />
      ) : (
        <SkeletonLoadGrid />
      )}
      {isLoaded ? (
        <MovieSlider title='Upcoming Movies' data={upcoming} />
      ) : (
        <SkeletonLoadGrid />
      )}
    </>
  )
}

export default Home
