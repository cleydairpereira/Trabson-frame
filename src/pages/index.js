import Head from "next/head";
import Cabeca from "../../componentes/Cabeca";
import Rodape from "../../componentes/Rodape";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title> Pokédex do BOCA</title>
      </Head>
      <Cabeca />
      <div className={styles.centraodopt}>
        <h1>Pokédex do BOCA</h1>
        <p>Olá, está é a Pokedéx do BOCA uma enciclopédia dos pokémon onde treinadores que viajam pelo mundo podem catalogar todas as espécies de pokémons que encontrarem em suas aventuras!!!</p>
        <p>No link a seguir você pode ver os pokémons catalogados: <a href='\users' className={styles.a2}> Pokémons </a></p>
      </div>
      <Rodape />
    </div >
  )
}
