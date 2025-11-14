"use client";
import { useState, useEffect, useCallback } from 'react';

import styles from './filtros.module.css';

import { listGenerations } from '../queries/listGenerations';
import type { GetAllPokemon, Generation } from '../types';
import { listPokemon } from '../queries/listPokemon';

import debounce from '@/app/libs/debounce';

import ButtonGeneration from './buttonGeneration';
import PokemonCard from './pokemonCard';


export default function Filtros() {
    const [inputValue, setInputValue] = useState<string>("");
    const [generationsJson, setGenerationsJson] = useState<[]>([]);
    const [generationsFilter, setGenerationsFilter] = useState<number[]>([]);
    const [pokemonJson, setPokemonJson] = useState<GetAllPokemon[]>([]);
    const [pokemonFilter, setPokemonFilter] = useState<GetAllPokemon[]>([]);

    useEffect(() => {
        if (pokemonJson.length === 0) {
            const returnPokemon = async () => {
                const returnPokemon = await listPokemon();
                setPokemonJson(returnPokemon.data.pokemon);
            }

            returnPokemon();
        }
    }, [pokemonJson]);

    useEffect(() => {
        if (generationsJson.length === 0) {
            const returnGenerations = async () => {
                const returnGenerations = await listGenerations();
                setGenerationsJson(returnGenerations.data.generation);
                setGenerationsFilter([returnGenerations.data.generation[0].id]);
            }

            returnGenerations();
        }
    }, [generationsJson]);

    useEffect(() => {
        if (generationsFilter.length > 0 && pokemonJson.length > 0) {
            const pokemonFiltered = pokemonJson.filter((pokemon: GetAllPokemon) => {
                return generationsFilter.includes(pokemon.pokemonspecy.generation.id);
            });
            const pokemonFilteredNames = pokemonFiltered.filter((pokemon: GetAllPokemon) => {
                if (inputValue === "") {
                    return true;
                }
                return pokemon.name.toLowerCase().includes(inputValue.toLowerCase());
            });

            setPokemonFilter(pokemonFilteredNames);
        }
    }, [generationsFilter, pokemonJson, inputValue]);

    const debouncedSetInputValue = useCallback(
        debounce((value: string) => {
            setInputValue(value);
        }), []
    );

    return (
        <>
            <div className={styles.filtrosDiv}>
                <input
                    className={styles.nomeInput}
                    type="text"
                    onChange={(e) => {
                        debouncedSetInputValue(e.target.value);
                    }}
                />
                <div className={styles.generationsDiv}>
                    {generationsJson.map((generation: Generation) => {
                        return (
                            <ButtonGeneration
                                key={generation.id}
                                name={generation.region.name}
                                active={generationsFilter.includes(generation.id)}
                                onClick={() => {
                                    if (generationsFilter.includes(generation.id)) {
                                        setGenerationsFilter(generationsFilter.filter((id) => id !== generation.id));
                                    } else {
                                        setGenerationsFilter([...generationsFilter, generation.id]);
                                    }
                                }}
                            />
                        );
                    })}
                </div>
            </div>
            <main className={styles.main}>
                {pokemonFilter.map((pokemon: GetAllPokemon) => {
                    return (
                        <PokemonCard
                            key={pokemon.id}
                            nome={pokemon.name}
                            pokedexnumber={pokemon.pokemonspecy.pokemondexnumbers}
                            sprite={pokemon.pokemonsprites[0].sprites}
                            tipos={pokemon.pokemontypes}
                        />
                    );
                })}
            </main>
        </>
    );
}
