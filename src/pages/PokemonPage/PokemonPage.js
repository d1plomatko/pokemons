import {Container} from "@mui/material";
import {useSelector} from "react-redux";

import {PokemonDetails, PokemonList} from "../../components";
import css from './PokemonPage.module.css'

const PokemonPage = () => {

    const {chosenPokemon} = useSelector(state => state.pokemonReducer);

    return(
        <Container className={css.page_container}>
            <PokemonList/>
            {
                chosenPokemon && <PokemonDetails chosenPokemon={chosenPokemon}/>
            }
        </Container>
    )

}

export {PokemonPage}