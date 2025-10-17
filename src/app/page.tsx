import styles from "./page.module.css";

import PokemonCard from './components/pokemonCard';
import { listPokemon } from './queries/listPokemon';


export default async function Home() {
    const jsonPokemon = await listPokemon();
    const pokemonList = jsonPokemon.data.pokemon;

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                {pokemonList.map((pokemon: any) => {
                    return (
                        <PokemonCard
                            key={pokemon.id}
                            nome={pokemon.name}
                            sprite={pokemon.pokemonsprites[0].sprites}
                            tipos={pokemon.pokemontypes}
                        />
                    );
                })}
            </main>
        </div>
    );
}
