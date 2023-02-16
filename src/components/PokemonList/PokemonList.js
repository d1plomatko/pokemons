import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Box, Button, Grid, Paper, Typography} from "@mui/material";

import {pokemonActions} from "../../redux";
import {PokemonCard} from "./PokemonCard/PokemonCard";
import css from './PokemonList.module.css'


const PokemonList = () => {

    const {pokemons, offset, prev, next} = useSelector(state => state.pokemonReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(pokemonActions.getAll({offset}));
    }, [offset, dispatch])

    return (
        <Box className={css.pokemon_list} component={Paper}>
            <Typography className={css.list_title} variant={'h3'}>
                Pokemons
            </Typography>
            <Grid container maxWidth={600} columnSpacing={2} rowSpacing={1}>
                {
                    pokemons.map(pokemon => <PokemonCard key={pokemon.name}
                                                         pokemon={pokemon}/>)
                }
            </Grid>
            <Box className={css.pokemon_pagination}>
                <Button variant={'contained'}
                        disabled={!prev}
                        onClick={() => dispatch(pokemonActions.setOffset(offset - 12))}>Prev</Button>
                <Button variant={'contained'}
                        disabled={!next}
                        onClick={() => dispatch(pokemonActions.setOffset(offset + 12))}>Next</Button>
            </Box>
        </Box>
    )

}

export {PokemonList}