import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styles from './Artigos.module.css';

function Artigos() {
  return ( 
    <>
    <Header />
      <Container>
        <div className={styles.artigos}>
          <h1>Página de Artigos</h1>
        </div>
      </Container>
      <Footer />
    </>
   );
}

export default Artigos;