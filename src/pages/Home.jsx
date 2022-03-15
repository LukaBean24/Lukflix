import React, { useEffect, useState } from 'react'
import MainSlider from '../components/MainSlider'
import Navbar from '../components/Navbar'
import SkeletonLoad from '../components/SkeletonLoad'
import SkeletonLoadGrid from '../components/SkeletonLoadGrid'
import MovieSlider from '../components/MovieSlider'
import { useSelector } from 'react-redux'
import Tabs from '../components/Tabs'

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(true)
  const [popularMovie, setPopularMovie] = useState([])
  const [nowPlaying, setNowPlaying] = useState([])
  const [topRated, setTopRated] = useState([])
  const [upcoming, setUpcoming] = useState([])
  const modalIsOpen = useSelector((state) => state.ui.modalIsOpen)
  const modalData = useSelector((state) => state.ui.data)

  useEffect(() => {
    getPopular()
    getNowPlaying()
    getTopRated()
    getUpcoming()
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
  const getNowPlaying = () => {
    setIsLoaded(false)
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=39390829f6b5213dc2cd7b01417e12d0&language=en-US&page=1`
    )
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setNowPlaying(data.results)
        setIsLoaded(true)
      })
  }

  const getTopRated = () => {
    setIsLoaded(false)
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=39390829f6b5213dc2cd7b01417e12d0&language=en-US&page=1`
    )
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setTopRated(data.results)
        setIsLoaded(true)
      })
  }

  const getUpcoming = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=39390829f6b5213dc2cd7b01417e12d0&language=en-US&page=1`
    )
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setUpcoming(data.results)
      })
  }
  return (
    <>
      {modalIsOpen && <Tabs data={modalData} />}
      <Navbar />
      {isLoaded ? (
        <MainSlider data={popularMovie} type='movie' />
      ) : (
        <SkeletonLoad />
      )}
      {isLoaded ? (
        <MovieSlider
          title='Most Popular'
          data={popularMovie}
          watchlist={false}
        />
      ) : (
        <SkeletonLoadGrid />
      )}
      {/* {isLoaded ? (
        <MovieSlider title='Now Playing' data={nowPlaying} />
      ) : (
        <SkeletonLoadGrid />
      )}
      {isLoaded ? (
        <MovieSlider title='Top Rated' data={topRated} />
      ) : (
        <SkeletonLoadGrid />
      )}
      {isLoaded ? (
        <MovieSlider title='Upcoming Movies' data={upcoming} />
      ) : (
        <SkeletonLoadGrid />
      )} */}
    </>
  )
}

export default Home
