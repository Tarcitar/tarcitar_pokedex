import styles from "./page.module.css";

import Pokedex from './components/pokedex';


export default async function Home() {
    return (
        <div className={styles.page}>
            <Pokedex />
        </div>
    );
}
