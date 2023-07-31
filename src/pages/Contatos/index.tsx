import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styles from './Contatos.module.css';

function Contatos() {
  return ( 
    <div className={styles.contatos}>
      <Header />
      <Container>
        <h1>Página de Contatos</h1>
      </Container>
      <Footer />
    </div>
   );
}

export default Contatos;