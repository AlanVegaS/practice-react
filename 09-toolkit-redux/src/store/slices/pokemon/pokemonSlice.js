import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState: {
        page: 0,
        pokemons: [],
        isLoading: false
    },
    reducers: {
        startLoadingPokemon: (state) => {
            state.isLoading = true
        },
        setPokemons: (state, action) => {
            state.isLoading = false
            state.pokemons = action.payload.pokemons
            state.page = action.payload.page
        }
    }
});

// Action creators are generated for each case reducer function
export const { startLoadingPokemon, setPokemons } = pokemonSlice.actions;