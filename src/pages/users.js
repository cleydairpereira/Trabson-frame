import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Cabeca from "../../componentes/Cabeca";
import Rodape from "../../componentes/Rodape";
import Link from 'next/link';

function Users({ users }) {
    return (
        <div>
            <Cabeca />
            <Head>
                <title>Pokémons</title>
            </Head>
            <div className={styles.centraodopt}>
                <h1> Lista de Pokémons </h1>
                {users.map((user, index) => (
                    <Link href='/profile/[id]' as={`/profile/${index}`}>
                        <div key={user._id}> <p> {user.nome} </p> </div>
                    </Link>
                ))}
            </div>
            <Rodape />
        </div>
    )
}
export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=pokemon')
    const repo = await res.json()
    const users = await repo;
    return {
        props: { users }
    }
})
export default Users;
