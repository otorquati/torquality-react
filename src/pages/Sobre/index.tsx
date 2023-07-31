import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styles from './Sobre.module.css';

function Sobre() {
  return ( 
  <>
    <Header />
    <Container>
      <section className={styles.sobre}>
        <h1>Sobre a Torquality Consulting</h1>
      <div className={styles.bio}>
        <div className={styles.info}>
          <p>Somos uma cosultoria com 20 anos de experiência, especializada na implantação
             / manutenção de sistemas de gestão, seja da Qualidade, 
          Meio Ambiente ou Integrado. </p>
        </div>
        <div className={styles.foto}>
          <img src="/src/images/Torquati_3x4.jpg" alt="" />
        </div>
      </div>
      </section>
    </Container>
    <Footer />
  </>
   );
}

export default Sobre;