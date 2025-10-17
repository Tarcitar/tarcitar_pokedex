import { cache } from 'react';

const query = `query getAllPokemon {
  pokemon(order_by: {id: asc}) {
    name
    id
    pokemonsprites {
      sprites(path: "other.home.front_default")
    }
    pokemontypes {
      type {
        name
        id
      }
    }
    pokemonspecy {
      generation {
        name
        id
      }
    }
  }
}`

async function fetchPokemon() {
    const res = await fetch('https://graphql.pokeapi.co/v1beta2', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'accept': '*/*'
        },
        body: JSON.stringify({
            query
        })
    });
    return await res.json();
}

export const listPokemon = cache(fetchPokemon);
