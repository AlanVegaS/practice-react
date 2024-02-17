import React from 'react'
import { useForm } from '../../hooks/useForm'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { HeroCard } from '../components/HeroCard'
import { getHerosByName } from '../helpers/getHerosByName'

export const Search = () => {

  const navigate = useNavigate()
  const location = useLocation()
  const { q = '' } = queryString.parse(location.search)
  const heros = getHerosByName(q)

  const showSearch = (q.length === 0)
  const showError = (q.length > 0) && heros.length ===0

  const { searchText, onInputChange } = useForm({
    searchText: q
  })

  const onSearchSubmit = (e) => {
    event.preventDefault()
    if (searchText.trim().length < 0) return

    navigate(`?q=${searchText.toLowerCase()}`)
  }

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder='Search a hero'
              className='form-control'
              name='searchText'
              autoComplete='off'
              value={searchText}
              onChange={onInputChange}
            />
            <button className='btn btn-outline-primary mt-2'>Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Result</h4>
          <hr />
          {
            (showSearch)
              ? <div className='alert alert-primary'>
                Search a hero
              </div>
              : <></>
          }
          {
            (showError)
              ? <div className="alert alert-danger">
                No hero whith <b>{q}</b>
              </div>
              : heros.map(hero => (
                <HeroCard {...hero} />
              ))
          }
        </div>
      </div>
    </>
  )
}