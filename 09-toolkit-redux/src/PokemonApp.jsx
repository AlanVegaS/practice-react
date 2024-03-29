import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./store/slices/pokemon"

export const PokemonApp = () => {

  const dispatch = useDispatch()
  const { pokemons, isLoading, page } = useSelector(state => state.pokemons)

  useEffect(() => {
    dispatch(getPokemons())
  }, [])

  return (
    <>
      <h1>Pokemons</h1>
      <hr />
      <h3>Loading: {isLoading ? 'True' : 'False'}</h3>
      <ul>
        {
          pokemons.map(({ name }) => (
            <li key={name}><p>{name}</p></li>
          ))
        }
      </ul>
      <button
        onClick={() => dispatch(getPokemons(page))}
        disabled={isLoading}
      >Next page: {page}</button>
    </>
  )
} 