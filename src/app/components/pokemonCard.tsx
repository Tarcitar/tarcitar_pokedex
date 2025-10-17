import Image from 'next/image';

import styles from './pokemonCard.module.css';

export default function({
    nome,
    sprite,
    tipos
}: {
    nome: string,
    sprite: string,
    tipos: Array<{ type: { name: string } }>
}) {
    const tipoPrimario = tipos[0].type.name;
    const tipoSecundario = tipos.length === 2 ? tipos[1].type.name : tipos[0].type.name;

    return (
        <div
            className={styles.card}
            style={{
                background: `linear-gradient(var(--${tipoPrimario}-dark), var(--${tipoSecundario}-light`
            }}
        >
            <p
                className={styles.pokemonName}
            >
                {nome}
            </p>
            {sprite &&
                <Image
                    src={sprite}
                    alt=""
                    width={120}
                    height={120}
                />
            }
        </div>
    )
}
