import { pokemonApi } from "../../../api/pokemonApi"
import { setPokemons, startLoadingPokemon } from "./"

export const getPokemons = (page = 0) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingPokemon())

        const resp = await pokemonApi.get(`pokemon?limit=10&offset=${page * 10}`)
        console.log(resp.data);

        dispatch(setPokemons({ pokemons: resp.data.results, page: page + 1 }))
    }
}