import styles from "./page.module.css";

import Filtros from './components/filtros';


export default async function Home() {
    return (
        <div className={styles.page}>
            <Filtros />
        </div>
    );
}
