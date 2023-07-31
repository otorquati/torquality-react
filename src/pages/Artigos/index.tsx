import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styles from './style.module.css';

function Artigos() {
  return ( 
    <div className={styles.artigos}>
      <Header />
      <Container>
        <h1>Página de Artigos</h1>
      </Container>
      <Footer />
    </div>
   );
}

export default Artigos;