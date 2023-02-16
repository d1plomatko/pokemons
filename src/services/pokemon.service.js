import {axiosService} from "./axios.service";
import {urls} from "../configs";

const pokemonService = {
    getALL: (offset = 0, limit = 12) => axiosService.get(urls.pokemon, {params: {offset, limit}}),
    getByName: (name) => axiosService.get(`${urls.pokemon}/${name}`)
};

export {
    pokemonService
};