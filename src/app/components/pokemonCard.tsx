import Image from 'next/image';

import styles from './pokemonCard.module.css';

import { type Type } from '../types';

export default function({
    nome,
    pokedexnumber,
    sprite,
    tipos
}: {
    nome: string,
    pokedexnumber: Array<{ pokedex_number: number }>
    sprite: string,
    tipos: Array<{ type: Type }>
}) {
    const tipoPrimario = tipos[0]?.type.name;
    const tipoSecundario = tipos.length === 2 ? tipos[1].type.name : tipos[0]?.type.name;
    const iconTipoPrimario = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/${tipos[0]?.type.id}.png`;
    const iconTipoSecundario = tipos.length === 2 ?
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/${tipos[1].type.id}.png` :
        null;
    const pokedexNumber = `#${pokedexnumber[0]?.pokedex_number.toString().padStart(4, '0')}`

    return (
        <div
            className={styles.card}
            style={{
                background: `linear-gradient(var(--${tipoPrimario}-dark), var(--${tipoSecundario}-light)`
            }}
        >
            <div
                className={styles.titleDiv}
            >
                <p
                    className={styles.pokemonName}
                >
                    {nome}
                </p>

                <p
                    className={styles.pokemonName}
                >
                    {pokedexNumber}
                </p>
            </div>

            {sprite &&
                <Image
                    src={sprite}
                    alt=""
                    className={styles.pokemonSprite}
                    width={80}
                    height={80}
                />
            }

            <div
                className={styles.typesDiv}
            >
                <Image
                    src={iconTipoPrimario}
                    alt=""
                    width={50}
                    height={10}
                />

                {iconTipoSecundario &&
                    <Image
                        src={iconTipoSecundario}
                        alt=""
                        width={50}
                        height={10}
                    />
                }
            </div>
        </div>
    )
}
