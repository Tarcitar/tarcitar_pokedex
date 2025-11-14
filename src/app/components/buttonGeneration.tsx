import styles from './buttonGeneration.module.css';


export default function ButtonGeneration({
    active,
    name,
    onClick
}: {
    active: boolean,
    name: string,
    onClick: () => void
}) {
    return (
        <button
            className={`${styles.button} ${active ? styles.active : ''}`}
            onClick={onClick}
        >
            {name}
        </button>
    );
}
