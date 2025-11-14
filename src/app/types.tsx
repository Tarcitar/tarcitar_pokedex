export interface GetAllPokemon {
    name: string
    id: number
    pokemonsprites: Array<{ sprites: string }>
    pokemontypes: Array<{ type: Type }>
    pokemonspecy: {
        generation: {
            name: string
            id: number
        }
        pokemondexnumbers: Array<{ pokedex_number: number }>
    }
}

export interface Type {
    name: string
    id: number
}

export interface Generation {
    id: number
    region: {
        name: string
    }
}
