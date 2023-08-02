import { useEffect, useState } from 'react';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styles from './Projetos.module.css';
import Cards from '../../components/Cards';

function Projetos() {
  // Cria um State para armazenar dados
  const [ repositories, setRepositories ] = useState([])

  // Chama o rook do React para executar a ação para busca dos dados 
  useEffect(() => {
    const getRepositories = async () => {
      const response = await fetch ('https://api.github.com/users/otorquati/repos')
      const data = await response.json()
      setRepositories(data)
    }
    getRepositories()
  }, [])

  return ( 
    <>
    <Header />
      <section className={styles.projetos}>
         <span>Projetos Realizados</span>
      </section>
    <Container>
        { repositories.length > 0 ? (
          <section className={styles.lista}>
            {
              repositories.map((repo) => (
                <Cards
                  key={repo.id}
                  name={repo.name}
                  description={repo.description}
                  html_url={repo.html_url}
                />
              ))
            }
          </section>
            ):(
        <p>Carregando repositórios...</p>
            ) }
    </Container>
    <Footer />
    </>
   );
}

export default Projetos;