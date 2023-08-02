// importação dos Estilos
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styles from './Servicos.module.css';

function Servicos() {
  
  return ( 
  <>
    <Header />
    <div className={styles.header}>
          <div>
            <span>Serviços Oferecidos</span>
          </div>      
        </div>
    <Container>
      <section className={styles.container}>

      </section>
    </Container>
    <Footer />
  </>
   );
}

export default Servicos;