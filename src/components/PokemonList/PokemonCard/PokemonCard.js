import {Box, Grid, Typography} from "@mui/material";
import {useDispatch} from "react-redux";

import css from './PokemonCard.module.css'
import {pokemonActions} from "../../../redux";

const PokemonCard = ({pokemon}) => {

    const dispatch = useDispatch();

    return (
        <Grid item xs={12} sm={6} md={4}
              onClick={() => dispatch(pokemonActions.setChosenPokemon(pokemon))}>
            <Box className={css.pokemon_card}>
                <Typography>
                    {pokemon.name}
                </Typography>
            </Box>
        </Grid>
    )

}

export {PokemonCard}