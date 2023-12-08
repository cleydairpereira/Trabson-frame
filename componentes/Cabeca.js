import styles from '../src/styles/Home.module.css';

export default function Navbar() {
    return (
        <div className={styles.cabeca}>
            <h1 className={styles.titulo}> Pokedéx do BOCA</h1>
            <a href='\' className={styles.a1}> Home </a>
            <a href='\users' className={styles.a1}> Pokémons </a>
        </div>
    )
}