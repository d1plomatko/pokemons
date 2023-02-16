import {
    Avatar, Box,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    Typography
} from "@mui/material";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

import {pokemonService} from "../../services";
import css from './PokemonDetails.module.css';
import {pokemonActions} from "../../redux";

const PokemonDetails = ({chosenPokemon}) => {

    const {name} = chosenPokemon;

    const [pokemon, setPokemon] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        pokemonService.getByName(name).then(({data}) => setPokemon(data));
    }, [name])

    return (
        <Card className={css.pokemon_details}>
            <CardActionArea>
                <CardContent>

                    <Box className={css.details_title}>
                        <Avatar alt={name} src={pokemon?.sprites.back_default}
                                className={css.title_avatar}/>
                        <Typography variant="h5" component="div">
                            {name}
                        </Typography>
                    </Box>

                    <Box>
                        <Typography fontWeight={"bold"} variant="body2">Abilities</Typography>
                        <ul>
                            {
                                pokemon?.abilities.map(item => <li
                                    key={item.ability.name}>{item.ability.name}</li>)
                            }
                        </ul>
                    </Box>

                    <Box>
                        <Typography fontWeight={"bold"} variant="body2">Types</Typography>
                        <ul>
                            {
                                pokemon?.types.map(item => <li
                                    key={item.type.name}>{item.type.name}</li>)
                            }
                        </ul>
                    </Box>

                </CardContent>
            </CardActionArea>

            <CardActions>
                <Button onClick={() => dispatch(pokemonActions.setChosenPokemon(null))} size="small"
                        color="primary">
                    Close
                </Button>
            </CardActions>
        </Card>
    )

}

export {PokemonDetails}