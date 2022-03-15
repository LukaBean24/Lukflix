import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import MainSlider from '../components/MainSlider'
import MovieSlider from '../components/MovieSlider'
import Navbar from '../components/Navbar'
import SkeletonLoad from '../components/SkeletonLoad'
import SkeletonLoadGrid from '../components/SkeletonLoadGrid'
import Tabs from '../components/Tabs'

const Series = () => {
  const [popular, setPopular] = useState([])
  const [isLoaded, setIsLoaded] = useState(true)
  const modalIsOpen = useSelector((state) => state.ui.modalIsOpen)
  const modalData = useSelector((state) => state.ui.data)

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
      {modalIsOpen && <Tabs data={modalData} />}
      <Navbar />
      {isLoaded ? <MainSlider data={popular} /> : <SkeletonLoad />}
      {isLoaded ? (
        <MovieSlider title='Popular Series' data={popular} />
      ) : (
        <SkeletonLoadGrid />
      )}
    </>
  )
}

export default Series
