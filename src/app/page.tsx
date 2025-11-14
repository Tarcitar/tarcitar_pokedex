import styles from "./page.module.css";

import PokemonCard from './components/pokemonCard';
import { listPokemon } from './queries/listPokemon';

import { type GetAllPokemon } from './types';

import Filtros from './components/filtros';


export default async function Home() {
    return (
        <div className={styles.page}>
            <Filtros />
        </div>
    );
}
