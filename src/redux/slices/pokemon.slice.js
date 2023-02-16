import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {pokemonService} from "../../services";

const initialState = {
    pokemons: [],
    chosenPokemon: null,
    offset: 0,
    prev: null,
    current: null
};

const getAll = createAsyncThunk(
    'pokemonSlice/getAll',
    async ({offset}, {rejectWithValue}) => {
        try {
            const {data} = await pokemonService.getALL(offset);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);



const pokemonSlice = createSlice({
    name: 'pokemonSlice',
    initialState,
    reducers: {
        setChosenPokemon: (state, action) => {
            state.chosenPokemon = action.payload;
        },
        setOffset: (state, action) => {
            state.offset = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.pokemons = action.payload.results;
                state.prev = action.payload.previous;
                state.next = action.payload.next;
            })
});


const {reducer: pokemonReducer, actions: {setChosenPokemon, setOffset}} = pokemonSlice;

const pokemonActions = {
    getAll,
    setChosenPokemon,
    setOffset
};

export {
    pokemonReducer,
    pokemonActions
};