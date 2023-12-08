import styles from '../../styles/Home.module.css';
import Cabeca from "../../../componentes/Cabeca";
import Rodape from "../../../componentes/Rodape";

function Profile({ user = {} }) {
    return (
        <div>
            <Cabeca />
            <div className={styles.centraodopt}>
                <h1>{user.nome}</h1>
                <p>usuario: {user.usuario}</p>
                <p>data de inclusão: {user.data_inclusao}</p>
                <p>palavras chave: {user.palavras_chave}</p>
                <p>revisor: {user.usuario_revisor}</p>
                <p>editor: {user.usuario_editor}</p>
                <p>descrição: {user.descricao}</p>
            </div>
            <Rodape />
        </div>
    )
}
export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=pokemon')
    const repo = await res.json()
    const user = await repo[context.params.id];
    return {
        props: { user }
    }
})
export async function getStaticPaths() {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=pokemon')
    const repo = await res.json()
    const users = await repo;
    const paths = users.map((user, index) => {
        return { params: { id: String(index) } };
    });
    return {
        paths,
        fallback: false,
    };
}

export default Profile;
