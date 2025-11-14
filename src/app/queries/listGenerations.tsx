import { cache } from 'react';

const query = `query generations {
  generation {
    id
    region {
      name
    }
  }
}`

const fetchGenerations = async () => {
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

export const listGenerations = cache(fetchGenerations);
