import React, { useEffect, useState } from 'react'
import classes from '../styles/SearchBar.module.css'
import { BiSearchAlt2 } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { uiActions } from '../store/ui-slice'
import Grid from './Grid'
import Card from './Card'

const SearchBar = () => {
  const dispatch = useDispatch()
  const searchData = useSelector((state) => state.ui.searchData)
  const [searchResult, setSearchResult] = useState([])
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=39390829f6b5213dc2cd7b01417e12d0&language=en-US&query=${searchData}&page=1&include_adult=false`
    )
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setSearchResult(data.results)
      })
  }, [searchData])

  return (
    <>
      <div className={classes.container}>
        <div className={classes.searchbar}>
          <span>
            <input
              type='text'
              onChange={(e) => {
                dispatch(uiActions.updateSearchData(e.target.value))
              }}
            />
          </span>
          <span>
            <BiSearchAlt2 className={classes.icon} />
          </span>
        </div>
      </div>
      {searchData !== null && (
        <Grid>
          {searchResult &&
            searchResult.length > 0 &&
            searchResult.map((movie) => {
              return <Card key={movie.id} data={movie} />
            })}
        </Grid>
      )}
    </>
  )
}

export default SearchBar
